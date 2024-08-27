<script setup lang="ts">
import { testReq } from '@/services/verifyEnterprise'

const login = async () => {
  // 接口地址(去除基准路径之后的地址), 请求方式 , 请求参数
  const res = await testReq('12345678900', '123')
  console.log('🚀 ~ login ~ res:', res)
}
</script>
<template>
  <van-button type="primary" @click="login">登录</van-button>
  测试
</template>
