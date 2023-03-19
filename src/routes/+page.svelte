<script>
	import Container from '@components/Shared/Container.svelte';
	import HabitList from '@components/HabitList.svelte';
</script>

<main>
	<Container>
		<HabitList />
	</Container>
</main>

<style>
	:global(:root) {
		--green: #0ead69;
		--yellow: #ffd23f;
		--red: #ee4266;
	}
</style>
