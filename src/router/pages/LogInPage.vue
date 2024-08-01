<template>
	<div class="flex justify-center flex-col items-center w-full">
		<form
			action="#"
			class="flex flex-col items-center p-20 border-solid border-2 border-[#009393] rounded-lg w-auto"
		>
			<p class="font-black text-2xl m-5">Log in</p>
			<p class="text-red-600 self-start" v-if="error_email">
				Incorrect Email
			</p>
			<some-input
				v-model="formData.email"
				@input="this.error_email = false"
				placeholder="Email"
				class="rounded-lg m-3"
			/>
            <p class="text-red-600 self-start" v-if="error_password">
				Incorrect Email
			</p>
			<some-input
				v-model="formData.password"
				@input="this.error_password = false"
				placeholder="Password"
				type="password"
				class="rounded-lg m-3"
			/>
			<some-btn class="w-3/5 m-5" @click.prevent="LogIn">Log in</some-btn>
			<router-link to="/registration">Register</router-link>
		</form>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		data() {
			return {
				formData: {
					email: "",
					password: "",
				},

				usersArray: [],

				error_email: false,
				error_password: false,
			};
		},

		methods: {
            async get_usersArray() {
                let response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                this.usersArray = response.data;
            },

			LogIn() {
				let queryResult = this.usersArray.find(
					(item) => item.email === this.formData.email
				);
				if (queryResult) {
                    this.$store.commit('set_userData', queryResult)
					this.$store.commit("LogIn");
					this.$router.push("/profile");
				} else {
					this.error_email = true;
				}
			},
		},

		computed: {},

		mounted() {
			this.get_usersArray();
		},
	};
</script>
