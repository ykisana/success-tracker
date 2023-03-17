import { HabitType, type Habit } from '@store/HabitStore';

export default function calculatePercentage(habit: Habit): number {
	const daysSinceReset = new Date().getDate() - new Date(habit.lastReset).getDate();
	const logsCount = habit.logs.length;

	if (habit.type == HabitType.Develop) {
		if (logsCount >= daysSinceReset) return 100;
		return (logsCount / daysSinceReset) * 100;
	}
	// now assuming HabitType.Break
	if (logsCount == 0) return 100;
	if (logsCount >= daysSinceReset) return 0;
	return 100 - (logsCount / daysSinceReset) * 100;
}
