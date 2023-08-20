<script setup lang="ts">
const now = new Date();
const day: number = now.getDate()
const month: number = now.getMonth() + 1
const year: number = now.getFullYear()
const days = (month == 2)
    ? ((year % 4 == 0) ? 0 : 1) - ((year % 100 == 0 && year % 400 !== 0) ? 0 : 1)  + 28
    : (month % 2 == ((month < 8) ? 0 : 1)) ? 0 : 1 + 30
const voids = day%7 + now.getDay() + 1
const weekDays = ["日","月","火","水","木","金","土"]
</script>


<template>
    <div :class="$style.calendarMatrix">
        <p v-for="weekDay in weekDays">{{ weekDay }}</p>
        <p v-for="j in voids" :key="j">{{ "" }}</p>
        <p v-for="i in days" :class="{[$style.today]: day == i }" :key="i">{{ i }}</p>
    </div>
</template>

<style module lang="scss">
.calendarMatrix {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    width: 96%;
    padding: 2%;

    border: solid 1px;
    border-radius: 7px;

    p {
        width: calc(96%/7);
        text-align: right;
    }
    .today {
        color: red;
    }
}
</style>