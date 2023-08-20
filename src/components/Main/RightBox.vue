<script setup lang="ts">
//Vue Component
import DigitalClock from "../global/DigitalClock.vue";
import Calendar from "../global/Calendar.vue";

</script>


<template>
    <div :class="$style.root">
        <DigitalClock />
        <Calendar />
    </div>
</template>

<style module lang="scss">
.root {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    right: 0;

    padding: 10px;

    width: 15%;
    height: 100vh;
}
</style>