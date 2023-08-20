<script setup lang="ts">
//TS Module
import { ref } from 'vue';

const nowHour = ref<string>("00")
const nowMin = ref<string>("00")
const nowSec = ref<string>("00")
const PoA = ref<"AM" | "PM">("AM")

const nowYear = ref<string>("0000")
const nowMonths = ref<string>("00")
const nowDay = ref<string>("00")
const nowDow = ref<string>("")

const weekDay = ['日', '月', '火', '水', '木', '金', '土'];

setInterval(() => { 
    const now = new Date();
    nowMin.value = ('00' + now.getMinutes()).slice(-2);
    nowSec.value = ('00' + now.getSeconds()).slice(-2);
    if (now.getHours() <= 12) {
        PoA.value = 'AM';
        nowHour.value = ('00' + now.getHours()).slice(-2);
    } else {
        PoA.value = 'PM';
        nowHour.value = ('00' + (now.getHours() - 12)).slice(-2);
    }

    nowYear.value = String(now.getFullYear())
    nowMonths.value = String(now.getMonth() + 1)
    nowDay.value = ('00' + now.getDate()).slice(-2);
    nowDow.value = weekDay[now.getDay()]
}, 1000);
</script>


<template>
    <div :class="$style.root">
        <div :class="$style.clock">
            <p>{{ nowHour }}:</p>
            <p>{{ nowMin }}</p>
            <div :class="$style.clock_child">
                <p>{{ PoA }}</p>
                <p>{{ nowSec }}</p>
            </div>
        </div>
        <div :class="$style.today">
            <div :class="$style.today_child">
                <p>{{ nowYear }}/</p>
                <p>{{ nowMonths }}/</p>
                <p>{{ nowDay }}</p>
            </div>
            <p>{{ nowDow }}</p>
        </div>
    </div>
</template>


<style module lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap');

.root {
    font-family: 'Roboto Mono', monospace;

    width: 96%;

    padding: 2%;
    margin: 1% 0 1% 0;

    border: solid 1px;
    border-radius: 7px;
    .clock {
        display: flex;

        border-bottom: solid 1px;
    }
    .today {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .today_child {
            display: flex;
        }
    }
}
</style>