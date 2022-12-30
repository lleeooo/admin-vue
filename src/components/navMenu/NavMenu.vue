<template>
    <div class="nav-menu">
        <div class="logo">
            <img src="~@/assets/img/vue.svg" alt="" />
            <span :style="{ width: !isCollapse ? '100px' : '0' }"
                >后台管理系统</span
            >
        </div>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#001529"
            class="nav-menu-content"
            text-color="#fff"
            :collapse="isCollapse ? true : false"
            :collapse-transition="false"
        >
            <template v-for="(item, index) in userMenus" :key="item.id">
                <el-menu-item
                    v-if="!item.children.length && item.type === 1"
                    :index="`${item.id}`"
                >
                    <el-icon><component :is="iconList[index]" /></el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
                <el-sub-menu v-else :index="`${item.id}`">
                    <template #title>
                        <el-icon>
                            <component :is="iconList[index]" />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                    <template v-for="jtem in item.children" :key="jtem.id">
                        <el-menu-item :index="`${jtem.id}`">{{
                            jtem.name
                        }}</el-menu-item>
                    </template>
                </el-sub-menu>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import {
    SwitchFilled,
    Histogram,
    Menu,
    Comment,
    Tools,
} from '@element-plus/icons-vue';
import { useUserStore } from '@/store/user/user';
import { storeToRefs } from 'pinia';
const iconList = [SwitchFilled, Histogram, Tools, Menu, Comment];

//props
withDefaults(
    defineProps<{
        isCollapse: number;
    }>(),
    {
        isCollapse: 0,
    },
);

const userStore = useUserStore();
const { userMenus } = storeToRefs(userStore);
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
            white-space: nowrap;
            transition: width 0.15s linear;
            overflow: hidden;
        }
    }

    .nav-menu-content {
        border-right: none;
        &:not(.el-menu--collapse) {
            width: 210px;
        }
    }
}
</style>
