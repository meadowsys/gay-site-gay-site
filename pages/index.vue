<template>
	<div>
		<blurred-background-centred :image="image" class="min-h-screen w-screen">
			<div class="font-bold text-4xl text-center">
				Hi
			</div>
			<br>
			<div class="text-lg text-center">
				this site kinda a WIP at this point in time
				<br>
				but when its done it will be filled with colourful gay horses
			</div>
		</blurred-background-centred>
		<div class="py-96 text-center">
			stuff placeholder stuff placeholder
		</div>
		<wiwi-footer :image="image" />
	</div>
</template>

<script setup lang="ts">
	const image = use_random_bg_image();
</script>
