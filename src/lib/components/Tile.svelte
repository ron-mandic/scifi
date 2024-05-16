<script lang="ts">
	export let src: string;
	export let i: number;
	export let j: number;

	let alt = `tile-${i}-${j}`;
</script>

<button
	class="tile absolute overflow-hidden"
	class:big={j % 2 === 0}
	class:small={j % 2 !== 0}
	on:click
>
	<img class="w-full h-full object-cover opacity-0" {src} {alt} />
</button>

<style lang="scss">
	.tile {
		--w-big: 772px;
		--h-big: 480px;
		--w-small: 482px;
		--h-small: 300px;

		transition: transform 800ms ease;

		&.big {
			width: var(--w-big);
			height: var(--h-big);
		}
		&.small {
			width: var(--w-small);
			height: var(--h-small);
		}
	}

	.tile:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	.tile:hover > img {
		opacity: 1;
		transform: scale(1.01);
	}

	.tile > img {
		border-radius: inherit;
		transition:
			opacity 800ms ease,
			transform 800ms ease;
	}

	.tile {
		display: none;
		background-color: hsl(201, 37%, 24%);
		border-radius: 1vmax;

		&.big {
			left: calc(var(--x) - (var(--w-big) / 2));
			top: calc(var(--y) - (var(--h-big) / 2));
		}

		&.small {
			left: calc(var(--x) - (var(--w-small) / 2));
			top: calc(var(--y) - (var(--h-small) / 2));
		}

		&:nth-child(1) {
			display: block;
			--x: 3935px;
			--y: 2190px;
		}
	}
</style>
