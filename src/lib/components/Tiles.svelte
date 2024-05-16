<script lang="ts">
	import { TOPICS } from '$lib/ts/constants';
	import Tile from './Tile.svelte';

	let refTiles: HTMLDivElement;
	let isPanning = true;

	function handleMouseClick() {
		isPanning = !isPanning;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isPanning) return;

		const mouseX = e.clientX,
			mouseY = e.clientY;

		const xDecimal = mouseX / window.innerWidth,
			yDecimal = mouseY / window.innerHeight;

		const maxX = refTiles?.offsetWidth - window.innerWidth,
			maxY = refTiles?.offsetHeight - window.innerHeight;

		const panX = maxX * xDecimal * -1,
			panY = maxY * yDecimal * -1;

		refTiles.animate(
			{
				transform: `translate(${panX}px, ${panY}px)`
			},
			{
				duration: 4000,
				fill: 'forwards',
				easing: 'cubic-bezier(.17,.67,.78,.78)'
			}
		);
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div id="tiles" class="absolute" bind:this={refTiles}>
	{#each TOPICS as topic, i}
		{#each topic.images.slice(0, 2) as image, j}
			<Tile src={image} {i} {j} on:click={handleMouseClick} />
		{/each}
	{/each}
</div>

<style lang="scss">
	#tiles {
		width: 450.10416667vmax; // (8642 / 1920) * 100
		height: 450vmax; // (4860 * 1080) * 1000
		background-color: var(--clr-bg);

		&::before {
			position: fixed;
			width: 100px;
			height: 100%;
			background-color: white;
			top: 0;
			left: 50%;
			translate: -50% 0;
			z-index: 100;
		}
	}
</style>
