<script lang="ts">
	import { addHabit } from '@store/HabitStore';
</script>

<div class="addHabitContainer">
	<button on:click={() => addHabit('Todo')}>Add Habit</button>
</div>

<style>
	.addHabitContainer {
		display: flex;
		justify-content: center;
		justify-items: center;
	}
</style>
