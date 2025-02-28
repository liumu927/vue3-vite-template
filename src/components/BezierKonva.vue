<template>
  <div class="bezier-container">
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
  </div>
</template>

<script lang="ts" setup>
import Konva from 'konva';

const configKonva = {
  width: 800,
  height: 600,
}

const configCircle: Konva.CircleConfig = {
  x: 100,
  y: 100,
  radius: 70,
  fill: "red",
  stroke: "black",
  strokeWidth: 4
}
</script>

<style lang="scss" scoped>
.bezier-container {

  .card-class {
    background: #fff;
    border-radius: 12px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    overflow: hidden;

    &:hover {
      box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transform: translateY(-2px);
    }
  }

  :deep(.konvajs-content) {
    @extend .card-class; // 继承卡片样式
    border: 1px solid #e5e7eb;
  }
}
</style>