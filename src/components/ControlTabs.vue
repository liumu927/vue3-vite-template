<template>
    <div class="tabs-container">
        <a-button v-for="(tab, index) in tabs" :key="index" @click="currentTab = index"
            :class="{ active: currentTab === index }">
            {{ tab.name }}
        </a-button>
    </div>
</template>

<script lang="ts" setup>
const currentTab = ref(0)
const tabs = [
    { name: '轨迹设置' },
    { name: '数据监控' },
]
</script>

<style lang="scss" scoped>
.tabs-container {
    display: flex;
    column-gap: 10px;
}
</style>