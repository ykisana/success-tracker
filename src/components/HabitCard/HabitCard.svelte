<script lang="ts">
	import { deleteHabit, logHabit } from '@store/HabitStore';
	import HabitContainer from './HabitContainer.svelte';

	export let id: string;
</script>

<HabitContainer>
	<slot />
	<button on:click={() => deleteHabit(id)}>Delete Habit</button>
	<button on:click={() => logHabit(id)}>New Log</button>
</HabitContainer>
