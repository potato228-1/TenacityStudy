<template>
    <div class="h-4/5 w-[100%]">
        <div class="flex items-start w-4/5 mx-auto justify-around">
            <div class="w-[200px] rounded-full bg-white aspect-square"></div>
            <div>
                <p class="font-bold text-2xl">{{ this.$store.getters.userData.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>