<script lang="ts">
	import { createHabit, type NewHabit } from '@store/HabitStore';
	import { handleTabChange, Tab } from './CreateHabitNavigation';
	import HabitDetailsForm from './HabitDetailsForm.svelte';
	import TypeSelector from './TypeSelector.svelte';
	let newHabit: NewHabit;
	let tab = Tab.TYPESELECTOR;

	function changeTabs() {
		tab = handleTabChange(tab);
	}
</script>

<div class="createHabitContainer">
	{#if tab === Tab.TYPESELECTOR}
		<TypeSelector
			on:typeSelected={(e) => {
				changeTabs();
				newHabit = e.detail;
			}}
		/>
	{/if}
	{#if tab === Tab.DETAILS}
		<HabitDetailsForm
			on:detailsEntered={(e) => {
				changeTabs();
				newHabit.name = e.detail;
				createHabit(newHabit);
			}}
		/>
	{/if}
</div>

<style>
	.createHabitContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		padding: 2rem;
	}
</style>
