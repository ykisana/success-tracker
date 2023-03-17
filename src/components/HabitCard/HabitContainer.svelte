<script lang="ts">
	export let backgroundColor: string = 'grey';
</script>

<div class="card" style={`background-color: ${backgroundColor}`}>
	<slot />
</div>

<style lang="scss">
	.card {
		width: 75%;
		height: 5rem;
		border-radius: 1rem;
		border: 1px solid #ccc;
	}
</style>
