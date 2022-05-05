<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Hello msg="Hello Vue 3.0 + Vite" />
    <div>三生三世十里桃花</div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@levi-m/core-ui/components/HelloWorld.vue' // @ is an alias to /src
import Hello from '@levi-m/core-ui/components/Hello.vue'

@Options({
  components: {
    HelloWorld,
    Hello
  }
})
export default class Home extends Vue { }
</script>

<style scoped>
div {
  font: 20px "黑体";
}
</style>
