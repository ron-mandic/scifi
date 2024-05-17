<script lang="ts">
	import { scoreStore } from '$lib/ts/score-store';
	import { onMount } from 'svelte';

	let u: number;
	let d: number;

	onMount(() => {
		u = $scoreStore.u;
		d = $scoreStore.d;
	});

	$: if ($scoreStore) {
		u = $scoreStore.u;
		d = $scoreStore.d;
	}
</script>

<div>
	<p style="display: inline-block; padding-right: .75rem;">
		Utopia <br /> <span class="font-bold text-5xl w-full text-center min-w-max">{u}</span>
	</p>
	<p style="display: inline-block; padding-left; .75rem;">
		Dystopia <br /> <span class="font-bold text-5xl w-full text-center min-w-max">{d}</span>
	</p>
</div>

<style lang="scss">
	div {
		padding: 1rem;
		background-color: var(--clr-bg-dark);
		position: fixed;
		bottom: 10px;
		left: 50%;
		transform: translate(-50%, 0);
		overflow: hidden;
		border: none;
		border-radius: 24px;
		color: white;
		font-family: basic-sans, sans-serif !important;
	}
</style>
