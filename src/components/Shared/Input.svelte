<script lang="ts">
	export let label: string;
	export let placeHolder: string;
	export let inputId: string;
	export let required: boolean;
	export let value: string | number;
</script>

<label for={inputId} class="label">{label}</label>
<input id={inputId} class="input" placeholder={placeHolder} {required} bind:value />

<style lang="scss">
	.label {
		display: block;
		margin: 1rem 0;
	}

	.input {
		display: block;
		width: 100%;
		margin: 10px 0;
		padding: 10px;
		border: 1px solid #111;
		transition: 0.3s background-color;
		&:hover {
			background-color: #fafafa;
		}
	}
</style>
