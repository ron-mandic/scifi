<script lang="ts">
	import { TOPICS_BY_EXPR } from '$lib/ts/constants';
	import { scoreStore } from '$lib/ts/score-store';
	export let expr;

	let { name, text, images } = TOPICS_BY_EXPR[expr];
	let [image0, image1, image3, image4] = images;

	let moved = true;
	console.log($scoreStore);
</script>

<div>
	<div class="screens" class:moved>
		<div class="left">
			<div class="layout">
				<div class="col">
					<h2 class="mb-4 font-bold text-3xl">{name}</h2>
					<p class="text-base text-balance">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet consectetur
						similique? Repellendus consequuntur consequatur esse sit tenetur culpa ratione eum porro
						sunt dolorem! Odio quidem neque eaque sunt voluptatem, molestias inventore repellendus
						error nihil iste adipisci officia expedita nisi tempore repudiandae aliquid reiciendis
						excepturi maiores, aspernatur, ipsam minus illo nesciunt? Numquam incidunt cupiditate
						doloremque eius maiores facilis illum nemo?
					</p>

					<button
						class="cursor-pointer bg-blue-400 p-4 w-full rounded-xl text-center text-xl mt-56"
						on:click={(e) => {
							moved = true;
						}}>Vote</button
					>
				</div>
				<div class="col">
					<div class="image-0 h-1/2 w-full relative" style="translate: 0 -9rem;">
						<img src={image0} alt="" />
					</div>
					<div class="image-1 h-1/2 w-full relative" style="translate: 0 -8rem;">
						<img src={image1} alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<div class="layout">
				<div class="col">
					<h2 class="mb-4 font-bold normal-case text-3xl">Which future version is more likely?</h2>
				</div>
				<div class="col">
					<div
						class="cursor-pointer image-0 w-full relative"
						style="translate: 0 -9rem;"
						on:click={(e) => {
							let hasVoted = false;
							let { u: prevU } = $scoreStore;
							if (!hasVoted)
								scoreStore.update((value) => {
									return { ...value, u: prevU + 1 };
								});
							hasVoted = true;
							console.log($scoreStore);
						}}
					>
						<img src={image3} alt="" />
					</div>
					<div
						class="cursor-pointer image-1 w-full relative"
						style="translate: 0 -8rem;"
						on:click={(e) => {
							let hasVoted = false;
							let { d: prevD } = $scoreStore;
							if (!hasVoted)
								scoreStore.update((value) => {
									return { ...value, d: prevD + 1 };
								});
							hasVoted = true;
							console.log($scoreStore);
						}}
					>
						<img src={image4} alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	div {
		width: min(1280px, 100%);
		height: min(720px, 100%);
		background-color: var(--clr-bg-dark);
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
		border: none;
		border-radius: 24px;

		.screens {
			display: flex;
			flex-direction: row;
			height: 100%;
			width: 200%;
			border: none;
			transition: transform 0.5s ease-in-out;

			&.moved {
				transform: translate(-100%, -50%);
				transition: transform 0.5s ease-in-out;
			}
		}

		.left,
		.right {
			width: 100%;
			height: 100%;
			position: relative;
			flex: 1 0 50%;
			border: none;
		}

		.left .layout {
			display: grid;
			grid-template-columns: 35% auto;
			grid-template-rows: 1fr;
			width: 100%;
			height: 100%;
			border: none;

			.col > * {
				position: relative;
			}

			.col {
				position: relative;
				width: 100%;
				height: 100%;
				border-radius: 0;
				color: white;
				padding: 2rem 2rem;
				border: none;
			}

			.col:nth-child(2) {
				border-right: none;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;

				div[class*='image'] {
					height: 250px;
					border: none;
				}
			}
		}

		.right .layout {
			display: grid;
			width: 100%;
			height: 100%;
			border: none;

			.col > * {
				position: relative;
			}

			.col {
				position: relative;
				width: 100%;
				height: 100%;
				border-radius: 0;
				color: white;
				padding: 2rem 2rem;
				border: none;
			}

			.col:nth-child(2) {
				border-right: none;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;

				div[class*='image'] {
					height: 600px;
					object-fit: cover;
					border: none;
				}
			}
		}
	}
</style>
