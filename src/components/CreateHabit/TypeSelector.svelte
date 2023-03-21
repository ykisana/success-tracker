<script lang="ts">
	import { HabitType, type NewHabit } from '@store/HabitStore';
	import { createEventDispatcher } from 'svelte';
	let newHabit: NewHabit;

	let dispatch = createEventDispatcher();

	function handleSelectType(type: HabitType) {
		newHabit = { type: type };
		dispatch('typeSelected', newHabit);
	}
</script>

<h2>Select an Option</h2>
<div class="typesContainer">
	<button on:click={() => handleSelectType(HabitType.Develop)}>Develop A New Habit</button>
	<button on:click={() => handleSelectType(HabitType.Break)}>Break an Old Habit</button>
</div>

<style>
	h2 {
		text-align: center;
	}
	.typesContainer {
		display: flex;
		justify-content: center;
		justify-items: center;
	}
</style>
