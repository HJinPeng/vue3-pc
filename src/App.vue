<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { messageContextHolder } from '@/components/message'
import { notificationContextHolder } from '@/components/notification'
import { modalContextHolder } from '@/components/modal'
dayjs.locale(zhCN.locale)
</script>

<template>
  <ConfigProvider :locale="zhCN" :theme="{ token: { colorPrimary: '#29b49d', borderRadius: 4 } }">
    <messageContextHolder />
    <notificationContextHolder />
    <modalContextHolder />
    <a-button type="primary">ant按钮</a-button>
    <a-input></a-input>
    <a-select cls="select">
      <a-select-option value="1">1</a-select-option>
      <a-select-option value="2">2</a-select-option>
    </a-select>
    <a-date-picker picker="month" />
    <RouterView />
  </ConfigProvider>
</template>

<style module lang="less">
.select {
  width: 200px;
}
</style>
