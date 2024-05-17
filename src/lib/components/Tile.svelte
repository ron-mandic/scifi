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
	data-src={src}
	data-tile={`${i}-${j}`}
	on:click
>
	<img class="w-full h-full object-cover" {src} {alt} />
</button>

<style lang="scss">
	.tile {
		--w-big: 772px;
		--h-big: 480px;
		--w-small: 482px;
		--h-small: 300px;

		&:not(.matched)::before {
			content: url('/images/overlay.svg');
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			filter: invert(1);
			opacity: 0.25;
		}

		background-color: var(--clr-bg-light);
		transition:
			transform 800ms ease,
			opacity 800ms ease,
			background-color 800ms ease;
		display: none;
		border-radius: 24px;

		&:not(.clicked) {
			img {
				opacity: 0;
			}
		}

		&.clicked::before {
			opacity: 0 !important;
		}

		&.clicked {
			background-color: none;
			img {
				opacity: 1;
			}
		}

		& > img {
			border-radius: inherit;
			transition:
				opacity 800ms ease,
				transform 800ms ease;
		}

		&:not(.matched):hover {
			transform: scale(1.1);
			cursor: pointer;

			& > img {
				opacity: 1;
				transform: scale(1.01);
			}
		}

		&.big {
			left: calc(var(--x));
			top: calc(var(--y));
			width: var(--w-big);
			height: var(--h-big);
		}
		&.small {
			left: calc(var(--x));
			top: calc(var(--y));
			width: var(--w-small);
			height: var(--h-small);
		}

		&:nth-child(1) {
			display: block;
			--x: 3935px;
			--y: 2190px;
		}
		&:nth-child(2) {
			display: block;
			--x: 640px;
			--y: 542px;
		}
		&:nth-child(3) {
			display: block;
			--x: 4707px;
			--y: 1108px;
		}
		&:nth-child(4) {
			display: block;
			--x: 346px;
			--y: 3400px;
		}
		&:nth-child(5) {
			display: block;
			--x: 6810px;
			--y: 2190px;
		}
		&:nth-child(6) {
			display: block;
			--x: 5620px;
			--y: 302px;
		}
		&:nth-child(7) {
			display: block;
			--x: 1843px;
			--y: 2873px;
		}
		&:nth-child(8) {
			display: block;
			--x: 7745px;
			--y: 1438px;
		}
		&:nth-child(9) {
			display: block;
			--x: 5716px;
			--y: 3400px;
		}
		&:nth-child(10) {
			display: block;
			--x: 3610px;
			--y: 395px;
		}
		&:nth-child(11) {
			display: block;
			--x: 1250px;
			--y: 4000px;
		}
		&:nth-child(12) {
			display: block;
			--x: 2458px;
			--y: 1996px;
		}
		&:nth-child(13) {
			display: block;
			--x: 7087px;
			--y: 4090px;
		}
		&:nth-child(14) {
			display: block;
			--x: 4707px;
			--y: 4240px;
		}
		&:nth-child(15) {
			display: block;
			--x: 3549px;
			--y: 3263px;
		}
		&:nth-child(16) {
			display: block;
			--x: 6447px;
			--y: 1198px;
		}
		&:nth-child(17) {
			display: block;
			--x: 2072px;
			--y: 302px;
		}
		&:nth-child(18) {
			display: block;
			--x: 2847px;
			--y: 4090px;
		}
		&:nth-child(19) {
			display: block;
			--x: 7352px;
			--y: 395px;
		}
		&:nth-child(20) {
			display: block;
			--x: 3453px;
			--y: 1288px;
		}
		&:nth-child(21) {
			display: block;
			--x: 415px;
			--y: 2242px;
		}
		&:nth-child(22) {
			display: block;
			--x: 7883px;
			--y: 3340px;
		}
		&:nth-child(23) {
			display: block;
			--x: 5372px;
			--y: 2296px;
		}
		&:nth-child(24) {
			display: block;
			--x: 1250px;
			--y: 1288px;
		}
	}
</style>
