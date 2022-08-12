<template>
	<div>
		<blurred-background :image="use_random_bg_image()" background-colour="#ffffff33">
			<flex-centre class="h-screen w-screen">
				<span class="text-2xl font-bold pb-3">404 not found&trade;</span>
				<wiwi-link to="/" class="text-xl">return home?</wiwi-link>
			</flex-centre>
		</blurred-background>
	</div>
</template>
