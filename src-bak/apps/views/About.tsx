import { computed, defineComponent, getCurrentInstance, reactive, ref, isRef, toRefs, onBeforeUnmount, onMounted } from "vue";

import Logo from "@/assets/images/logo.png";
import { HelloWord } from "@levi-m/core-ui";

export const About = defineComponent({
  name: 'App',
  setup() {
    //生命周期
    onMounted(() => {
      console.log("onMounted");
    })
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    })
    const res = reactive({ name: '可可' }); //定义响应式数据，针对对象
    return () => (
      <>
        <h1>About.tsx</h1>
        <h1>{res.name}</h1>
        {/* <img src={Logo} /> */}
        <div>
          <div class="tab">
            <router-link to="/demo/study">
              <div class="children">学成在线</div>
            </router-link>
            <router-link to="/demo/shop">
              <div class="children">品优购</div>
            </router-link>
            <router-link to="/demo/form">
              <div class="children">From</div>
            </router-link>
            <router-link to="/demo/test">
              <div class="children">Test</div>
            </router-link>
          </div>
          <router-view />
        </div>
        <HelloWord />
      </>
    );
  }
});

export const AboutV = defineComponent({
  setup(props, context) {
    //生命周期
    onMounted(() => {
      console.log("onMounted");
    })
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    })
    const res = reactive({ 'name': 'zhuy' }); //定义响应式数据，针对对象
    const count = ref(0); //定义基本类型数据
    const obj = toRefs(res); //响应式数据还原成对象，主要解决响应式数据结构或其它操作出现的问题。
    // const name = computed(() => context.$store.state.res.name);
    return {
      res,
      count,
      obj,
      name
    }
  }
});
