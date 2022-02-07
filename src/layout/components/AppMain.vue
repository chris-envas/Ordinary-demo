<template>
  <div class="app-main">
    main
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(['li', 'kk']);
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
