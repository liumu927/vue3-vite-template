<template>
    <div class="matrix-container">
        <div class="image-container">
            <a-card hoverable class="image-box">
                <img :src="image1" alt="轨迹图片1" v-if="image1">
            </a-card>
        </div>
        <div class="image-container">
            <a-card hoverable class="image-box">
                <img :src="image2" alt="轨迹图片2" v-if="image2">
            </a-card>
        </div>
        <a-card hoverable class="data-box">
            <div class="data-group">
                <div class="data-item">
                    <span class="label">预期航程：</span>
                    <span class="value">{{ statsData?.distance || '--' }} km</span>
                </div>
                <div class="data-item">
                    <span class="label">机动半径：</span>
                    <span class="value">{{ statsData?.radius || '--' }} m</span>
                </div>
            </div>
            <div class="data-group">
                <div class="data-item">
                    <span class="label">预期航程：</span>
                    <span class="value">{{ statsData?.distance || '--' }} km</span>
                </div>
                <div class="data-item">
                    <span class="label">机动半径：</span>
                    <span class="value">{{ statsData?.radius || '--' }} m</span>
                </div>
            </div>
        </a-card>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    image1?: string
    image2?: string
    statsData?: {
        distance: number
        radius: number
    }
}>()
</script>

<style lang="scss" scoped>
.matrix-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;

    .image-box,
    .data-box {
        width: 400px;
        height: 250px;
        border: 1px solid #ccc;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .data-box {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .data-group {
            display: flex;
            justify-content: space-around;
            margin-bottom: 10px;

            .data-item {
                margin: 8px 0;
                font-size: 16px;

                .label {
                    color: #666;
                    margin-right: 10px;
                }

                .value {
                    color: #333;
                    font-weight: bold;
                }
            }
        }

    }
}
</style>