<template>
	<div>
		<img :src="url" class="test">
	</div>
</template>
<script>
	export default {
		props: ['url'],
	}
</script>
<style scoped>
	div{
	}
	img{
		width: 100%;
		height: auto;
		display: block;
		margin-bottom: 5px;
	}
</style>