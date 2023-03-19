<script lang="ts">
	export let onClose: Function;
</script>

<div class="overlay">
	<div class="card">
		<button class="closeButton" on:click={() => onClose()}>Toggle Modal</button>
		<slot />
	</div>
</div>

<style lang="scss">
	.overlay {
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0rem;
		left: 0rem;
		background-color: rgba($color: gray, $alpha: 0.5);

		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card {
		position: relative;
		background-color: white;
		width: 75%;
		padding: 0.2rem;
		border-radius: 1rem;
	}

	.closeButton {
		position: absolute;
		top: 0;
		right: 0;
		margin: 0.2rem;
	}
</style>
