<template>
    <div class="default-layout">
        <header>
            <h2>vue3+vite 基础项目框架</h2>
        </header>
        <main>
            <!-- 二级路由入口 -->
            <router-view />
        </main>
        <footer>
            <!-- Add your footer content here -->
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.default-layout {
   height: 100vh; 

   header {
      height: 50px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      background-color: #001529;

      h2 {
         color: #fff;
         margin-right: 50px;
      }
   }

   main {
      height: calc(100% - 90px);
   }
}
</style>