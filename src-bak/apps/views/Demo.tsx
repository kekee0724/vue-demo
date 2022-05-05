import { Vue } from "vue-class-component";

import { get } from "@levi-m/core";
import Hello from "@levi-m/core-ui/components/Hello.vue";

const VueImpl = [
  'data', 'beforeCreate', 'created', 'beforeMount',
  'mounted', 'beforeUnmount', 'unmounted',
  'beforeUpdate', 'updated', 'activated', 'deactivated',
  'render', 'errorCaptured', 'serverPrefetch'
];
export class Demo extends Vue {
  beforeCreate() {
    console.log("beforeCreate")
  }
  beforeMount() {
    console.log(this)
    console.log("beforeMount")
    get('/index-infos').then(() => {

    })
  }
  beforeUpdate() {
    console.log("beforeUpdate")
  }
  renderBody(): JSX.Element {
    return (
      <div class="standard">
        {/* <headerBack title="嵌套路由"></headerBack> */}
        <router-view />
      </div>
    )
  }
  render(): JSX.Element {
    return (
      <div class="home">
        {this.renderBody()}
        <img alt="Vue logo" src="src/assets/images/logo.png" />
        {/* <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> */}
        <Hello msg="Hello Vue 3.0 + Vite" />
      </div>
    )
  }
}

