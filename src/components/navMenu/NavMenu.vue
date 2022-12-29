<template>
    <div class="nav-menu">
        <div class="logo">
            <img src="~@/assets/img/vue.svg" alt="" />
            <span>后台管理系统</span>
        </div>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#001529"
            class="el-menu-vertical-demo"
            text-color="#fff"
        >
            <el-sub-menu
                v-for="(item, index) in userMenus"
                :key="item.id"
                :index="`${item.id}`"
            >
                <template #title>
                    <el-icon>
                        <component :is="iconList[index]"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </template>
                <template v-for="jtem in item.children" :key="jtem.id">
                    <el-menu-item :index="`${jtem.id}`">{{
                        jtem.name
                    }}</el-menu-item>
                </template>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { Location, Menu, Document, Setting } from '@element-plus/icons-vue';
import { useUserStore } from '@/store/user/user';
import { storeToRefs } from 'pinia';
const iconList = [Location, Menu, Document, Setting];

const userStore = useUserStore();
const { userMenus } = storeToRefs(userStore);
console.log(userMenus);
</script>

<style scoped lang="less">
.nav-menu {
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        height: 80px;
        img {
            width: 30px;
            height: 100%;
        }
        span {
            margin-left: 10px;
            font-weight: bold;
        }
    }
}
</style>
