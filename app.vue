<template>
	<div>
		<nuxt-page />
	</div>
</template>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@layer base {
		* {
			@apply selection:bg-[#dcc4fe]
		}
	}
</style>
