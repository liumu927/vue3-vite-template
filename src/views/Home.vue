<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="increment">Count is: {{ count }}</button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCounterStore } from '../store/counter'

defineProps<{ msg?: string }>()

const counterStore = useCounterStore()
const count = computed(() => counterStore.count)

function increment() {
    counterStore.increment()
}
</script>

<style lang="scss" scoped></style>