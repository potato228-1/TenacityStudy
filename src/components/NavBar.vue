<template>
	<div class="w-full bg-black p-6 flex justify-around items-center">
		<div class="flex items-center gap-3">
			<img src="../assets/logo.png" alt="Logo" class="h-10" />
			<h1 class="text-white font-black text-2xl">Tenacity Study</h1>
		</div>
		<nav class="flex justify-between items-center w-2/3">
			<router-link to="/" class="font-black">Main</router-link>
			<some-btn>BUTTON</some-btn>
			<some-btn>BUTTON</some-btn>
			<some-btn>BUTTON</some-btn>
		</nav>
		<div class="dropdownMenu_container" v-if="isLogged">
			<a href="#" class="px-9 font-black">User</a>
			<ul class="dropdownMenu">
				<li>
					<router-link to="/profile" class="text-[#009393] font-black"
						>Profile</router-link
					>
				</li>
				<hr />
				<li>
					<button
						class="text-red-600 font-black"
						@click.prevent="logOut"
					>
						Log out
					</button>
				</li>
			</ul>
		</div>
		<router-link
			to="/login"
			v-if="!isLogged"
			class="text-[#009393] font-black"
			>Log in</router-link
		>
	</div>
</template>

<script>
	export default {
		computed: {
			isLogged() {
				return this.$store.getters.userLogged;
			},
		},

		methods: {
			logOut() {
				this.$store.commit("LogOut");
				this.$router.push("/");
			},
		},
	};
</script>

<style lang="scss" scoped>
	.dropdownMenu_container {
		position: relative;
	}

	.dropdownMenu {
		display: none;
		flex-direction: column;
		align-items: flex-start;
		list-style: none;
		text-align: center;
		position: absolute;
		width: 100%;
		z-index: 100;
		background: black;
		padding: 20px;
	}

	.dropdownMenu_container:hover {
		ul.dropdownMenu {
			display: block;
		}
	}

	hr {
		color: white;
		margin: 5px 0;
	}
</style>
