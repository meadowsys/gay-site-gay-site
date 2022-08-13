<template>
	<div>
		<blurred-background :image="image">
			<div class="flex flex-col min-h-screen">
				<div class="flex-grow" />

				<div class="flex flex-row">
					<div class="flex-grow" />
					<div class="py-32">
						<div class="font-bold text-4xl text-center">
							Hi
						</div>
						<br>
						<div class="text-lg text-center">
							this site kinda a WIP at this point in time
							<br>
							but when its done it will be filled with colourful gay horses
						</div>
					</div>
					<div class="flex-grow" />
				</div>

				<div class="flex-grow basis-0 flex flex-col">
					<div class="flex-grow" />
					<wiwi-navbar />
				</div>
			</div>
		</blurred-background>

		<div class="py-96 text-center">stuff placeholder</div>
		<div class="py-96 text-center">stuff placeholder</div>
		<div class="py-96 text-center">stuff placeholder</div>

		<wiwi-footer :image="image" />
	</div>
</template>

<script setup lang="ts">
	const image = await use_random_bg_image();
</script>
