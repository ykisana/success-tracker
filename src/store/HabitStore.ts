import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface Habit {
	id: string;
	name: string;
	count: number;
}

const data = browser ? JSON.parse(window.localStorage.getItem('successTracker_habits')) ?? [] : [];

const habits = writable(data);

habits.subscribe((value) => {
	if (browser) {
		localStorage.setItem('successTracker_habits', JSON.stringify(value));
	}
});

export function addHabit() {
	habits.update((currentHabits) => {
		return [...currentHabits, { id: uuidv4(), name: '' }];
	});
}

export function logHabit(id: string) {
	habits.update((currentHabits) => {
		return currentHabits.map((habit: Habit) => {
			if (habit.id === id) {
				return { ...habit, count: habit.count++ };
			}
			return habit;
		});
	});
}

export function deleteHabit(id: string) {
	habits.update((currentHabits) => {
		return currentHabits.filter((habit: Habit) => habit.id !== id);
	});
}
