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
		display: none;
		background-color: hsl(201, 37%, 24%);
		border-radius: 43px;

		&.big {
			left: calc(var(--x) - (var(--w-big) / 2));
			top: calc(var(--y) - (var(--h-big) / 2));
			width: var(--w-big);
			height: var(--h-big);
		}
		&.small {
			left: calc(var(--x) - (var(--w-small) / 2));
			top: calc(var(--y) - (var(--h-small) / 2));
			width: var(--w-small);
			height: var(--h-small);
		}

		&:nth-child(1) {
			display: block;
			--x: 50%;
			--y: 50%;
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
</style>
