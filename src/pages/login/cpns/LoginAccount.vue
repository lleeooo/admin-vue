<template>
    <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        class="account-form"
        status-icon
    >
        <el-form-item label="账号" prop="name" size="large">
            <el-input v-model="form.name" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item label="密码" prop="password" size="large">
            <el-input v-model="form.password" placeholder="请输入密码" />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { FormRules } from 'element-plus';

const form = reactive({
    name: '',
    password: '',
});

const rules = reactive<FormRules>({
    name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});
</script>

<style scoped></style>
