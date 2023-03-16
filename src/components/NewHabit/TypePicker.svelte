<script lang="ts">
	import { addHabit, HabitType } from '@store/HabitStore';
</script>

<h2>Select an Option</h2>
<div class="typesContainer">
	<button on:click={() => addHabit('Todo', HabitType.Develop)}>Develop A New Habit</button>
	<button on:click={() => addHabit('Todo', HabitType.Break)}>Break an Old Habit</button>
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
