<template>
  <div class="app-wrapper">
    <!-- left -->
    <sidebar id="guide-sidebar" class="sidebar-container" :style="{ backgroundColor: variables.menuBg }" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- top header -->
        <navbar />
      </div>
      <!-- content -->
      <app-main>
        <template v-slot:default="slotProps">
          <i class="icon">icon </i>
          <span>{{ slotProps.item }}</span>
        </template>
      </app-main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppMain from './components/AppMain.vue';
import variables from '@/styles/variables.scss';
import {} from 'vue';
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  width: calc(100% - #{$sideBarWidth});
}

.hideSidebar .fixed-header {
}
</style>
