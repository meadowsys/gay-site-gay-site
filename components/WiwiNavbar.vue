<!-- todo make sticky? -->

<template>
	<div class="h-16 flex flex-col">
		<!-- ref="divelem" :class="classes" -->
		<div class="flex-grow" />
		<div class="flex flex-row">
			<div class="flex-grow" />

			<template v-for="item in nav_items">
				<nuxt-link
					:to="item.path"
					class="
						block py-2 px-5 transition-all duration-200
						border-purple-500 hover:border-2 rounded-xl
					"
				>
					{{ item.name }}
				</nuxt-link>
			</template>

			<div class="flex-grow" />
		</div>
		<div class="flex-grow" />
	</div>
</template>

<script setup lang="ts">
	const nav_items = [
		{ name: "meep", path: "/meep" }
	];

	// for snapping to the top of the screen
	// const divelem = ref<HTMLDivElement>();

	// const original_pos = ref(0);
	// const cancel = watch(divelem, () => {
	// 	if (!divelem.value) return;
	// 	cancel();

	// 	original_pos.value = divelem.value.offsetTop;
	// });

	// const sticky = ref(false);
	// const opaque_bg = ref(false);

	// const classes = computed(() => {
	// 	console.log("classes changed");
	// 	const classes: Array<string> = [];
	// 	if (sticky.value) classes.push("fixed", "top-0", "left-0", "w-screen");
	// 	if (opaque_bg.value) classes.push("bg-white");
	// 	return classes;
	// });

	// addEventListener("scroll", event => {
	// 	// console.log("a");
	// 	if (!divelem.value) return;
	// 	sticky.value = scrollY >= original_pos.value;
	// 	// 64 is the value of 16 "tailwind units"
	// 	opaque_bg.value = scrollY >= original_pos.value + 64;
	// });
</script>
