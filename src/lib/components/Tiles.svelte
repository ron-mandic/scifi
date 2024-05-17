<script lang="ts">
	import { TOPICS } from '$lib/ts/constants';
	import { onMount } from 'svelte';
	import Tile from './Tile.svelte';
	import { evaluateUserClicks } from '$lib/ts/functions';
	import { exprStore } from '$lib/ts/expr-store';
	import TileModal from './TileModal.svelte';
	import TileScore from './TileScore.svelte';

	let refTiles: HTMLDivElement;
	let isPanning = true;
	let arrUserClicks: string[] = [];

	function handleMouseClick(e: MouseEvent) {
		let ref = e.currentTarget as HTMLButtonElement;
		const { tile } = ref.dataset;

		if (ref.classList.contains('matched')) return;

		arrUserClicks = [...arrUserClicks, tile as string];
		ref.classList.add('clicked');
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

	$: if (arrUserClicks.length !== 0) {
		console.log(arrUserClicks);

		if (arrUserClicks.length === 2) {
			let bool = evaluateUserClicks(arrUserClicks);
			const tiles = document.querySelectorAll(`.tile.clicked`) as NodeListOf<HTMLButtonElement>;

			if (bool) {
				let expr = arrUserClicks.join('&');
				$exprStore = expr;

				tiles.forEach((tile, key, parent) => {
					tile.classList.add('matched');
					tile.style.backgroundColor = 'none';
					tile.style.opacity = '.125';
					tile.style.pointerEvents = 'none';
					tile.querySelector('img')!.style.opacity = '1';
				});
				isPanning = false;
			}

			tiles.forEach((tile) => {
				tile.classList.remove('clicked');
			});
			arrUserClicks = [];
		}
	}

	$: if ($exprStore === '') {
		isPanning = true;
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
{#if $exprStore}
	<TileModal expr={exprStore} />
{/if}
<TileScore />

<style lang="scss">
	#tiles {
		width: clamp(var(--width-macbook), 450.10416667vmax, var(--width-canvas));
		height: clamp(var(--height-macbook), 450vmax, var(--height-canvas));
		background-color: var(--clr-bg-normal);
	}
</style>
