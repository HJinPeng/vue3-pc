<script setup lang="ts">
import { messageApi } from '@/components/message'
import { notificationApi } from '@/components/notification'
const onClick = () => {
  messageApi.error('失败')
  notificationApi.error({
    message: '失败了'
  })
}
</script>

<template>
  <div @click="onClick">hello</div>
</template>
