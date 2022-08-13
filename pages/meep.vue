<template>
	<div>
		<blurred-background :image="image">
			<flex-centre class="h-screen w-screen">
				<span class="text-2xl font-bold">meep</span>
				<br>
				<wiwi-link class="text-lg cursor-pointer" @click="go_bacc">go bacc</wiwi-link>
			</flex-centre>
		</blurred-background>
	</div>
</template>

<script setup lang="ts">
	const image = await use_random_bg_image();

	function go_bacc() {
		window.history.back();
	}
</script>
