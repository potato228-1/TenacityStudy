<template>
	<div class="flex justify-center flex-col items-center w-full">
		<form
			action="#"
			class="flex flex-col items-center p-20 border-solid border-2 border-[#009393] rounded-lg w-auto"
		>
			<p class="font-black text-2xl m-5">Registration</p>
			<some-input
				v-model="formData.email"
				placeholder="Email"
				class="rounded-lg m-3"
			/>
			<some-input
				v-model="formData.password"
				placeholder="Password"
				type="password"
				class="rounded-lg m-3"
			/>
			<some-btn class="w-3/5 m-5" @click.prevent="register"
				>Register</some-btn
			>
			<router-link to="/login">Log in</router-link>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					email: "",
					password: "",
				},
			};
		},

		methods: {
			register() {
				this.$router.push("/login");
			},
		},
	};
</script>