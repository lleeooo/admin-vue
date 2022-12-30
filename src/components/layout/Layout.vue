<template>
    <div class="main">
        <el-container class="main-content">
            <el-aside :width="collapse ? '70px' : '210px'" class="aside">
                <NavMenu :is-collapse="collapse" />
            </el-aside>
            <el-container class="page">
                <el-header class="page-header"
                    ><NavHeader @collapse-change="collapseChange"
                /></el-header>
                <el-main class="page-content">
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/navMenu/NavMenu.vue';
import NavHeader from '@/components/navHeader/NavHeader.vue';
import { ref } from 'vue';

let collapse = ref(0);
const collapseChange = (isFold: number) => {
    collapse.value = isFold;
};
</script>

<style lang="less" scoped>
.main {
    height: 100%;
    .main-content {
        height: 100%;
        color: #333;
        .aside {
            background-color: #001529;
            overflow-x: hidden;
            overflow-y: scroll;
            text-align: left;
            transition: width 0.15s linear;
            scrollbar-width: none;
            -ms-overflow-style: none;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        .page {
            .page-header {
                height: 48px;
            }
            .page-content {
                background-color: #f0f2f5;
                height: calc(100% - 48px);
            }
        }
    }
}
</style>
