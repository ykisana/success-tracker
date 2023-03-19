<script lang="ts">
	import { getHabits, type Habit } from '@store/HabitStore';
	import { onMount } from 'svelte';
	import AddHabitCard from './HabitCard/AddHabitCard.svelte';
	import HabitCard from './HabitCard/HabitCard.svelte';
	import NewHabitContainer from './NewHabit/NewHabitContainer.svelte';
	import Overlay from './Shared/Overlay.svelte';

	let habits: Habit[] = [];
	let loading = true;

	onMount(async () => {
		habits = await getHabits();
		loading = false;
	});
	let showNewHabitOverlay = false;

	const handleAddHabitClick = () => {
		showNewHabitOverlay = !showNewHabitOverlay;
	};
</script>

{#if loading}
	<p>Loading...</p>
{:else}
	{#if showNewHabitOverlay}
		<Overlay onClose={handleAddHabitClick}>
			<NewHabitContainer />
		</Overlay>
	{/if}
	<div class="habit-list">
		{#each habits as habit}
			<HabitCard {habit} />
		{/each}
		<AddHabitCard handleClick={handleAddHabitClick} />
	</div>
{/if}

<style>
	.habit-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
</style>
