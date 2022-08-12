<template>
	<div>
		<blurred-background :image="random_image" background-colour="#ffffff33">
			<flex-centre class="h-screen w-screen">
				<div class="font-bold text-4xl text-center">
					Hi
				</div>
				<br>
				<div class="text-lg text-center">
					this site kinda a WIP at this point in time
					<br>
					but when its done it will be filled with colourful gay horses
				</div>
			</flex-centre>
		</blurred-background>
	</div>
</template>

<script setup lang="ts">
	const image_urls = [
		"https://derpicdn.net/img/2022/7/24/2913704/large.png"
	];

	const random_image = image_urls[Math.floor(Math.random() * image_urls.length)];
</script>
