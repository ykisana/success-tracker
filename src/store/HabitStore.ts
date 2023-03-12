import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface Habit {
	id: string;
	name: string;
	count: number;
}

const storedData = browser ? window.localStorage.getItem('successTracker_habits') : null;
const data = storedData ? JSON.parse(storedData) : [];

const habits = writable<Habit[]>(data);

habits.subscribe((value) => {
	if (browser) {
		localStorage.setItem('successTracker_habits', JSON.stringify(value));
	}
});

export function getHabits() {
	return habits;
}

export function addHabit() {
	habits.update((currentHabits) => {
		return [...currentHabits, { id: uuidv4(), name: '', count: 0 }];
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
