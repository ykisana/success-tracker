<script lang="ts">
	import { getHabits } from '@store/HabitStore';
	import AddHabitCard from './HabitCard/AddHabitCard.svelte';
	import HabitCard from './HabitCard/HabitCard.svelte';
	import NewHabitContainer from './NewHabit/NewHabitContainer.svelte';
	import Overlay from './Overlay.svelte';

	const habits = getHabits();
	let showNewHabitOverlay = false;

	const handleAddHabitClick = () => {
		showNewHabitOverlay = !showNewHabitOverlay;
	};
</script>

{#if showNewHabitOverlay}
	<Overlay onClose={handleAddHabitClick}>
		<NewHabitContainer />
	</Overlay>
{/if}
<div class="habit-list">
	{#each $habits as habit}
		<HabitCard id={habit.id}>{habit.id} {habit.logs.length}</HabitCard>
	{/each}
	<AddHabitCard handleClick={handleAddHabitClick} />
</div>

<style>
	.habit-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
