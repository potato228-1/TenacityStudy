<template>
	<input
		@input="(event) => this.$emit('update:modelValue', event.target.value)"
		class="bg-black text-[#009393] p-2 w-full m-3 "
	/>
</template>

<script>
	export default {
        name: 'some-input',

		props: {
			modelValue: {},
		},
	};
</script>