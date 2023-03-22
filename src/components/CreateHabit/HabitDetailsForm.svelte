<script lang="ts">
	import Input from '@components/Shared/Input.svelte';
	import { createEventDispatcher } from 'svelte';
	let inputValue: string = '';

	const dispatch = createEventDispatcher();
</script>

<Input
	label={'Habit Name'}
	inputId={'habit-name'}
	placeHolder={"Enter what you're trying to track."}
	bind:value={inputValue}
	required={true}
/>

<button
	on:click={() => {
		dispatch('detailsEntered', inputValue);
	}}>Done</button
>
