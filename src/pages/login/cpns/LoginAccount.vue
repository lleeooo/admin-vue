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
            <el-input
                v-model="form.password"
                show-password
                placeholder="请输入密码"
            />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormRules, FormInstance } from 'element-plus';
import { useUserStore } from '@/store/user/user';
import localCache from '@/utils/cache';

const userStore = useUserStore();
type TypeForm = {
    name: string;
    password: string;
};
const form = reactive<TypeForm>({
    name: localCache.getCache('name') ?? '',
    password: localCache.getCache('password') ?? '',
});

const formRef = ref<FormInstance>();
const loginAction = (isKeepPassword: boolean) => {
    formRef.value?.validate((valid) => {
        if (valid) {
            //重新登录时 初始化pinia state
            userStore.$reset();

            //是否记住密码
            if (isKeepPassword) {
                localCache.setCache('name', form.name);
                localCache.setCache('password', form.password);
            } else {
                localCache.deleteCache('name');
                localCache.deleteCache('password');
            }

            //进行登录
            userStore.accountLoginAction(form.name, form.password);
        }
    });
};

const rules = reactive<FormRules>({
    name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

//不会暴露任何在 <script setup> 中声明的绑定 通过defineExpose暴露
defineExpose({
    loginAction,
});
</script>

<style scoped></style>
