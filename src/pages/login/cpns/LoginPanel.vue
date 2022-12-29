<template>
    <div class="login-panel">
        <h1 class="login-title">后台管理系统</h1>
        <el-tabs type="border-card" class="login-tabs" stretch>
            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon><UserFilled /></el-icon>
                        <span>账号登陆</span>
                    </span>
                </template>
                <login-account ref="accountRef"></login-account>
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon><Iphone /></el-icon>
                        <span>手机登陆</span>
                    </span>
                </template>
                <login-phone></login-phone>
            </el-tab-pane>

            <div class="account-control">
                <el-checkbox
                    v-model="keepPassword"
                    label="记住密码"
                    size="large"
                ></el-checkbox>
                <el-link type="primary">忘记密码</el-link>
            </div>

            <el-button
                type="primary"
                class="login-btn"
                size="large"
                @click="handelLoginClick"
            >
                立即登录
            </el-button>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { UserFilled, Iphone } from '@element-plus/icons-vue';
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';

import { ref } from 'vue';

const keepPassword = ref(true);
const accountRef = ref<InstanceType<typeof LoginAccount>>();

const handelLoginClick = () => {
    accountRef.value?.loginAction(keepPassword.value);
};
</script>

<style scoped lang="less">
.login-panel {
    margin-top: -120px;
    width: 420px;
    .login-title {
        color: #fff;
        margin-bottom: 20px;
        text-align: center;
    }

    .login-tabs {
        .custom-tabs-label {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .account-control {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .login-btn {
            width: 100%;
            margin-top: 20px;
        }
    }
}
</style>
