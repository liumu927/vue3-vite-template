<template>
    <div class="main-container">
        <BezierKonva class="left-panel" />
        <MatrixShow class="right-panel" :image1="image1" :image2="image2" :stats-data="statsData" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const image1 = ref('')
const image2 = ref('')
const statsData = ref()

const handleDataUpdate = (data: any) => {
    image1.value = data.image1
    image2.value = data.image2
    statsData.value = data.stats
}
</script>

<style lang="scss" scoped>
.main-container {
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;

    .left-panel {
        display: flex;
        align-items: center;
    }

    .right-panel {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
    }
}
</style>