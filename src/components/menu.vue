<template>
	<div class="container" :style="{backgroundColor:bgcolor}">
		<div class="classify">
			<p  @click="handelclick(0)">{{menuList[0]['name']}}</p>
			<i class="icon" :style="{background:bgimage}"></i>
		</div>
		<div class="content">
			<div v-for="(i,j) in menuList" v-if="!!j" @click="handelclick(j)">{{i.name}}</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['url','menuList','bgcolor','bgimage'],
		methods: {
			handelclick (index) {
				this.$parent.$router.push(this.menuList[index].event);
			}
		}
	}
</script>
<style scoped>
	.container{
		display: flex;
		margin: 4px;
		color: #fff;
		font-size: 16px;
	    font-weight: 400;
	    font-family: arial,sans-serif;
	    position: relative;
	}
	.classify{
		height: auto;
		width: 33.33%;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		box-shadow: inset 0 0 1px #fff;
	}
	p{
		margin-top: 15px;
		margin-bottom: 0;
		position: absolute;
		top: 0;
	}
	.icon{
		background-repeat: no-repeat !important;
		position: relative;
		bottom: -25px;
		background-size: 100% 100% !important;
		width: 42px;
		height: 46px;
		background-position: center center !important;
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		height: 100%;
	}
	.content > div{
		display: flex;
		width: calc(100%/2);
		height: 48px;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.content > div:before{
		content: "";
		position: absolute;
		font-size: 0;
		line-height: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: none;
		-webkit-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		transform-origin: 0 0;
		box-sizing: border-box;
		pointer-events: none;
		width: 200%;
		height: 200%;
		-webkit-transform: scale(.5);
		-ms-transform: scale(.5);
		transform: scale(.5);
		border-bottom: 1px solid #d4d4d4;
		border-right: 1px solid #d4d4d4;
	}
</style>