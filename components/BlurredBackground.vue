<template>
	<div class="bg-cover bg-center" :style="{ backgroundImage: `url(${image})` }">
		<div class="h-full text-center backdrop-blur-2xl" :style="{ backgroundColor: backgroundColour ?? `#ffffff22` }">
			<flex-centre v-bind="$attrs">
				<slot />
			</flex-centre>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		image: string;
		backgroundColour?: string;
	}>();
</script>

<script lang="ts">
	export default defineComponent({
		inheritAttrs: false
	});
</script>
