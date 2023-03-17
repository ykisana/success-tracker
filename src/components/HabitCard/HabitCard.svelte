<script lang="ts">
	import { deleteHabit, logHabit, type Habit } from '@store/HabitStore';
	import calculatePercentage from '@utils/CalculatePercentage';
	import displayPercentage from '@utils/DisplayPercentage';
	import mixColors from '@utils/MixColors';
	import HabitContainer from './HabitContainer.svelte';

	export let habit: Habit;

	$: percentage = calculatePercentage(habit);
	$: calculatedColor = mixColors(percentage);
</script>

<HabitContainer backgroundColor={calculatedColor}>
	<div class="habitCard">
		<h2>{displayPercentage(percentage)}</h2>
		<p>Logs: {habit.logs.length}</p>
		<button on:click={() => deleteHabit(habit.id)}>Delete Habit</button>
		<button on:click={() => logHabit(habit.id)}>New Log</button>
	</div>
</HabitContainer>

<style>
	.habitCard {
		display: flex;
	}
</style>
