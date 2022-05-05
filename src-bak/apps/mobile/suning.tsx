import { defineComponent, onBeforeUnmount, onMounted, reactive } from "vue";

export const Suning = defineComponent({
  name: 'App',
  setup(props, context) {
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
        <h1>suning</h1>
        <h1>{res.name}</h1>
        <router-view />
      </>
    );
  }
});

// import { Vue } from "vue-class-component";

// import { get } from "@levi-m/core";

// export class Suning extends Vue {
//   beforeCreate() {
//     console.log("beforeCreate")
//   }
//   beforeMount() {
//     console.log("beforeMount")
//     get('/index-infos').then((res) => {
//       console.log(res)
//     })
//   }
//   beforeUpdate() {
//     console.log("beforeUpdate")
//   }
//   renderBody(): JSX.Element {
//     return (
//       <div class="standard">
//         <router-view />
//       </div>
//     )
//   }
//   render(): JSX.Element {
//     return (
//       <div class="home">
//         {this.renderBody()}
//         {/* <img alt="Vue logo" src="/src/assets/images/logo.png" /> */}
//       </div>
//     )
//   }
// }

