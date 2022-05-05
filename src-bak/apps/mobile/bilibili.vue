<template>
  <div class="suspension-box">
    <div class="navbar">
      <a href="#" class="logo">
        <i class="iconfont Navbar_logo"></i>
      </a>
      <div class="right">
        <a href="#">
          <i class="iconfont ic_search_tab"></i>
        </a>
        <a href="#" class="face">
          <img src="@/assets/images/user.jpg" class="bfs-img" />
        </a>
        <a href="#">
          <img
            src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/navOpenApp.png"
            class="nav-open-app-img"
          />
        </a>
      </div>
    </div>
    <div class="channel-menu">menu</div>
  </div>
  <router-view />
</template>

<style lang="less">
@import "./bilibili.less";
#nav {
  display: none;
}
.suspension-box {
  .navbar {
    display: flex;
    width: 100%;
    height: 10.6667vw;
    // background-color: pink;
    justify-content: space-between;
    align-items: center;
    padding: 0 3.2vw 0 4.8vw;
    .logo i {
      color: #fb7299;
      font-size: 6.9333vw;
    }
    .right {
      display: flex;
      align-items: center;
    }
    .right a:nth-child(1) i {
      font-size: 5.8667vw;
      color: #ccc;
      margin-right: 5.8667vw;
      margin-top: 0.5333vw;
    }
    .right a:nth-child(2) img {
      width: 6.4vw;
      height: 6.4vw;
      margin-right: 6.4vw;
      border-radius: 3.2vw;
    }
    .right a:nth-child(3) img {
      width: 19.2vw;
      height: 6.4vw;
    }
  }
}
</style>
<script lang="ts">
</script>
