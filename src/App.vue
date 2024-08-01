<template>
	<NavBar />
	<router-view />
	<SomeFooter />
</template>

<script>
	import NavBar from "@/components/NavBar.vue";
	import SomeFooter from "@/components/SomeFooter.vue";

	export default {
		components: {
			NavBar,
			SomeFooter,
		},

		mounted() {},
	};
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		color: #009393;
	}

	html,
	body,
	#app {
		width: 100%;
		height: 100%;
	}

	body {
		background: #1a1f26;
	}

	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
</style>
