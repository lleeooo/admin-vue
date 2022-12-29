<template>
    <div class="main">
        <el-container class="main-content">
            <el-aside width="210px" class="aside">
                <NavMenu />
            </el-aside>
            <el-container class="page">
                <el-header class="page-header">Header</el-header>
                <el-main class="page-content">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/navMenu/NavMenu.vue';
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
            transition: width 0.3s linear;
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
