<template>
    <div class="nav-header">
        <el-icon class="header-collapse" @click="handelCollapse">
            <component :is="iconList[isCollapse]" />
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Expand, Fold } from '@element-plus/icons-vue';
const emit = defineEmits(['collapseChange']);
const iconList = [Fold, Expand];
let isCollapse = ref(0);

const handelCollapse = () => {
    isCollapse.value = isCollapse.value ? 0 : 1;
    emit('collapseChange', isCollapse.value);
};
</script>

<style scoped lang="less">
.nav-header {
    display: flex;
    align-items: center;
    height: 100%;
    .header-collapse {
        font-size: 26px;
        cursor: pointer;
    }
}
</style>
