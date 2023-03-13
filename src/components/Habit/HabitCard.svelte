<script lang="ts">
	import Card from './Card.svelte';
	import { deleteHabit } from '@store/HabitStore';
	export let id: string;
</script>

<Card>
	<slot />
	<button on:click={() => deleteHabit(id)}>Delete Habit</button>
</Card>
