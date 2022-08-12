<template>
	<div class="bg-cover bg-center" :style="{ backgroundImage: `url(${image})` }">
		<div class="h-full text-center backdrop-blur-2xl" :style="{ backgroundColor: backgroundColour ?? `transparent` }">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		image: string;
		backgroundColour?: string;
	}>();
</script>
