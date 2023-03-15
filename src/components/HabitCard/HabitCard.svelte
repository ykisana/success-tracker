<script lang="ts">
	import { deleteHabit } from '@store/HabitStore';
	import HabitContainer from './HabitContainer.svelte';

	export let id: string;
</script>

<HabitContainer>
	<slot />
	<button on:click={() => deleteHabit(id)}>Delete Habit</button>
</HabitContainer>
