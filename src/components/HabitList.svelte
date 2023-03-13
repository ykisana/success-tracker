<script lang="ts">
	import { getHabits } from '@store/HabitStore';
	import AddHabit from './Habit/AddHabit.svelte';
	import HabitCard from './Habit/HabitCard.svelte';

	let habits = getHabits();
</script>

<div class="habit-list">
	{#each $habits as habit}
		<HabitCard id={habit.id}>{habit.id}</HabitCard>
	{/each}

	<AddHabit />
</div>

<style>
	.habit-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
