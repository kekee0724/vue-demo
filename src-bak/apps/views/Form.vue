<template>
  <a-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <a-form-item label="Form Layout">
      <a-radio-group v-model:value="formState.layout">
        <a-radio-button value="horizontal">Horizontal</a-radio-button>
        <a-radio-button value="vertical">Vertical</a-radio-button>
        <a-radio-button value="inline">Inline</a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="用户名">
      <a-input v-model:value="formState.username" placeholder="请输入用户名" />
    </a-form-item>
    <a-form-item label="密码">
      <a-input v-model:value="formState.password" placeholder="请输入密码" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<style>
/* .ant-form {
  width: 75%;
  margin: 0 auto;
}
.ant-form-item {
  justify-content: center;
}
.ant-col {
  background-color: antiquewhite;
} */
</style>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import type { UnwrapRef } from 'vue'

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline'
  username: string
  password: string
}
export default defineComponent({
  setup () {
    const MODE = import.meta.env.MODE
    console.log(MODE, import.meta)
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      username: '',
      password: ''
    })
    const formItemLayout = computed(() => {
      const { layout } = formState
      return layout === 'horizontal'
        ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
        : {}
    })
    const buttonItemLayout = computed(() => {
      const { layout } = formState
      return layout === 'horizontal'
        ? {
          wrapperCol: { span: 14, offset: 4 }
        }
        : {}
    })
    return {
      formState,
      formItemLayout,
      buttonItemLayout
    }
  }
})
</script>
