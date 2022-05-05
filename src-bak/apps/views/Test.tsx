import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import "./test.less"

export const Test = defineComponent({
  name: 'App',
  setup() {
    const store = useStore()

    return () => (
      <>
        <h1>Home.tsx</h1>
        <h1>{store.state.title}</h1>
        {/* <div>
          <div class="section">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> */}
        <div class="anmi"></div>
        <div class="kek clearfix">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
      </>
    );
  }
});
