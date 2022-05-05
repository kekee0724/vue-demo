import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';
import './assets/css/main.scss'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/demo">Demo</RouterLink>
        </div>
        <RouterView/>
      </>
    );
  }
});
