import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface Habit {
	id: string;
	createdAt: Date;
	lastReset: Date;
	name: string;
	logs: Log[];
}

export interface Log {
	id: string;
	createdAt: Date;
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

export function addHabit(name: string) {
	habits.update((currentHabits) => {
		return [
			...currentHabits,
			{ id: uuidv4(), createdAt: new Date(), lastReset: new Date(), name: name, logs: [] }
		];
	});
}

export function logHabit(id: string) {
	habits.update((currentHabits) => {
		return currentHabits.map((habit: Habit) => {
			if (habit.id === id) {
				const newLog: Log = { id: uuidv4(), createdAt: new Date() };
				habit.logs.push(newLog);
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
