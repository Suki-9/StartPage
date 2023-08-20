<script setup lang="ts">
//TS Module
import { ref } from 'vue';


const queryText = ref<string>("")

const submit = () => {
    if (queryText.value !== "") {
        window.location.href = `https://www.google.co.jp/search?q=${queryText.value}`
    }
}
</script>


<template>
    <form>
        <input v-model="queryText"/>
        <a @click="submit"><i class="icon-search"></i></a>
    </form>
</template>


<style module lang="scss">
form {
    display: flex;
    align-items: center;
    input {
        border: none;
    }
    input:focus {
        outline: none;
    }
}
</style>