<template>
    <div class="login">
        <login-panel />
    </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/LoginPanel.vue';
</script>

<style lang="less" scoped>
.login {
    background-image: url('@/assets/img/bg.jpeg');
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
