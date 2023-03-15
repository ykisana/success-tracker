<script lang="ts">
	import HabitContainer from './HabitContainer.svelte';

	export let handleClick: Function;
</script>

<HabitContainer isNew={true}>
	<button on:click={() => handleClick()}>Click To Add Habit</button>
</HabitContainer>
