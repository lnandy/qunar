<template>
	<div class="container">
		<div v-for="(i,j) in list">
			<i :style="{backgroundPosition : position[j]}"></i>
			<span>{{i}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				'list' : ['签证 · WiFi','出境游','一日游','美食林','汽车票','国内游','超级巴士','攻略',],
				'position' : ['-35px -12px','-124px -12px','-212px -12px','-300px -79px',
							'-35px -79px','-124px -79px','-212px -79px','-300px -12px']
			}
		}
	}
</script>
<style scoped>
	.container{
		display: flex;
		flex-wrap: wrap;
		font-size: 12px;
		padding: 5px 20px;
	}
	.container > div {
		width: calc(100% / 4);
		height: 69px;
		display: flex;
		justify-content: center; 
		position: relative;
	}
	.container > div >span{
		position: absolute;
		bottom: 5px;
	}.container > div >i{
		width: 33px;
	    height: 33px;
	    display: inline-block;
	    background-image: url(http://s.qunarzz.com/touch_home/images/entrances.png);
	    background-size: 374px 130px;
	    background-position: -35px -12px;
	    background-repeat: no-repeat;
	    position: relative;
	    top: 5px;
	}
</style>