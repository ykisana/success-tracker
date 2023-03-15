<script lang="ts">
	export let isNew: boolean = false;
	export let isHabit: boolean = false;
</script>

<div class="card" class:new={isNew} class:habit={isHabit}>
	<slot />
</div>

<style>
	.card {
		width: 75%;
		height: 5rem;
		border-radius: 1rem;
		border: 1px solid #ccc;
	}

	.new {
		background-color: lightgray;
	}

	.habit {
		background-color: green;
	}
</style>
