<script lang="ts">
	import { addHabit } from '@store/HabitStore';
	import Card from './Card.svelte';
</script>

<Card isNew={true}>
	<button on:click={() => addHabit('New Habit')}>Click To Add Habit</button>
</Card>

<style>
</style>
