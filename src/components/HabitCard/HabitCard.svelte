<script lang="ts">
	import { tweened } from 'svelte/motion';
	//import { interpolate } from 'd3-interpolate';
	import { deleteHabit, logHabit, type Habit } from '@store/HabitStore';
	import calculatePercentage from '@utils/CalculatePercentage';
	import displayPercentage from '@utils/DisplayPercentage';
	import mixColors from '@utils/MixColors';
	import HabitContainer from './HabitContainer.svelte';

	export let habit: Habit;

	const percentage = tweened(calculatePercentage(habit), {
		duration: 500
	});
	$: color = mixColors($percentage, 1);
</script>

<HabitContainer backgroundColor={color}>
	<div class="habitCard">
		<h2>{habit.name}</h2>
		<h2>{displayPercentage($percentage)}</h2>
		<button on:click={() => deleteHabit(habit.id)}>Delete Habit</button>
		<button
			on:click={() => {
				logHabit(habit.id);
				percentage.set(calculatePercentage(habit));
			}}>New Log</button
		>
	</div>
</HabitContainer>

<style>
	.habitCard {
		display: flex;
	}
</style>
