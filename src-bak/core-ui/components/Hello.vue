<template>
  <h1>{{ msg }}</h1>
  <h5>{{ show }}</h5>
  <button @click="clickCountAsc">count ++: {{ count }}</button>
  <h4 @click="clickCountDesc">count --: {{ count }}</h4>
  <img alt="btn" :src="btn" mode="scaleToFill" />
  <p>Edit <code>components/Hello.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import btn from '@/assets/images/btn.png'
export default defineComponent({
  name: 'Hello',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    clickCountAsc () {
      this.$store.dispatch('increment')
    },
    clickCountDesc () {
      this.$store.dispatch('decrement')
    }
  },
  setup (props) {
    const showRef = ref<boolean>(!!props.msg)
    watch(
      () => props.msg,
      (show: string) => {
        if (show) {
          window.setTimeout(() => {
            showRef.value = !!show
          }, 200)
        } else {
          showRef.value = !!show
        }
      }
    )
    return {
      btn,
      show: showRef
    }
  }
})
</script>
