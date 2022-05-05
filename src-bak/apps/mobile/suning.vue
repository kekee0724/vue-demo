<template>
  <div class="headDom w">
    <img
      src="https://image.suning.cn/uimg/cms/img/162252944527163985.jpg"
      alt="苏宁app"
      class="headDownBg"
    />
    <a href="#" class="close"></a>
    <a href="#" class="open"></a>
  </div>
  <div class="nav w">
    <div class="wrap-one">
      <a href=""
        ><img
          src="https://image2.suning.cn/uimg/cms/img/157199320847433454.png"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://image1.suning.cn/uimg/cms/img/164214012693769776.gif"
          alt=""
      /></a>
      <a href=""
        ><img
          src="https://image1.suning.cn/uimg/cms/img/157199321817918653.png"
          alt=""
      /></a>
    </div>
    <div class="warp-two">
      <a href="#" class="search-bar">
        <input type="search" class="search" placeholder="商品/店铺" />
        <i class="search-icon"></i>
      </a>
    </div>
  </div>
  <div class="banner w">
    <ul class="swipe">
      <li>
        <a href="#">
          <img
            class="b-image"
            src="https://oss.suning.com/adpp/creative_kit/material/picture/20210220-fc339b6d49b740dc9b819a1dee396eecff02485056d04343.jpg?format=_is_1242w_610h"
            alt=""
          />
        </a>
      </li>
    </ul>
    <div class="trigger-wrapper">
      <ul class="trigger">
        <li><i></i></li>
        <li class="cur"><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
        <li><i></i></li>
      </ul>
    </div>
  </div>
  <div class="hor-view w">
    <a href="#">
      <img
        src="https://image2.suning.cn/uimg/cms/img/164214021552676561.gif"
        alt=""
      />
    </a>
  </div>
  <div class="enter-list w">
    <div class="enter-wrapper">
      <ul>
        <li>
          <a href="#">
            <img
              src="https://image1.suning.cn/uimg/cms/img/161294178174781132.png?from=mobile"
              alt=""
            />
            <div class="title">苏宁秒杀</div>
          </a>
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image2.suning.cn/uimg/cms/img/161293951076282456.png?from=mobile"
              alt=""
            />
            <div class="title">苏宁超市</div></a
          >
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image3.suning.cn/uimg/cms/img/161294179334814175.png?from=mobile"
              alt=""
            />
            <div class="title">苏宁拼购</div></a
          >
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image1.suning.cn/uimg/cms/img/161293957567317395.png?from=mobile"
              alt=""
            />
            <div class="title">手机数码</div></a
          >
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image3.suning.cn/uimg/cms/img/161293958842515136.png?from=mobile"
              alt=""
            />
            <div class="title">苏宁家电</div></a
          >
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image1.suning.cn/uimg/cms/img/161293959950045622.png?from=mobile"
              alt=""
            />
            <div class="title">免费水果</div></a
          >
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image2.suning.cn/uimg/cms/img/161293961484173843.png?from=mobile"
              alt=""
            />
            <div class="title">super会员</div></a
          >
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image1.suning.cn/uimg/cms/img/161293963977525820.png?from=mobile"
              alt=""
            />
            <div class="title">签到有礼</div></a
          >
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image2.suning.cn/uimg/cms/img/161293965567020138.png?from=mobile"
              alt=""
            />
            <div class="title">领券中心</div></a
          >
        </li>
        <li>
          <a href="#"
            ><img
              src="https://image3.suning.cn/uimg/cms/img/161293968063152286.png?from=mobile"
              alt=""
            />
            <div class="title">更多频道</div></a
          >
        </li>
      </ul>
    </div>
    <div class="big-blank"></div>
  </div>
  <router-view />
</template>

<style lang="less">
html {
  box-sizing: border-box;
}
body {
  background-color: #eee;
}
.w {
  margin: 0 auto;
  width: 10rem;
}
.headDom {
  height: 1.2rem;
  position: relative;
  img {
    width: 10rem;
    height: 1.2rem;
  }
  .close,
  .open {
    position: absolute;
  }
  .close {
    width: 0.4rem;
    height: 0.4rem;
    top: 0.4rem;
    left: 0.32rem;
    background: url(https://oss.suning.com/vss/activity/wximg/magic/thkinhat/images/head-close.png)
      no-repeat;
    background-size: 0.4rem;
  }
  .open {
    width: 2.4533rem;
    height: 1.2rem;
    top: 0;
    right: 0;
  }
}
.nav {
  width: 10rem;
  height: 2.4rem;
  background-color: #eb3d3a;
  .wrap-one {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.1733rem;
    a:nth-child(odd) {
      img {
        width: 0.48rem;
        height: 0.8rem;
      }
    }
    a:nth-child(1) {
      margin-left: 0.4533rem;
    }
    a:nth-child(2) {
      img {
        width: 5.2rem;
        height: 1.0133rem;
      }
    }
    a:nth-child(3) {
      margin-right: 0.4533rem;
    }
  }
  .warp-two {
    height: 1.2267rem;
    .search-bar {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 9.36rem;
      height: 100%;
      .search {
        margin: 0.1867rem 0;
        // text-indent: 0.88rem;
        padding-left: 0.88rem;
        font-size: 0.4rem;
        width: 100%;
        height: 0.8533rem;
        border-radius: 0.8533rem;
      }
      .search-icon {
        position: absolute;
        top: 0.3733rem;
        left: 0.2667rem;
        // margin: 0.1867rem 0.2667rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABGtJREFUWAntl8tr1EkQxzMT4qhBo/FBFLMylyWQwJIHiqCnqAdFXfci6klZkFW8uUpUPKjgHyAiomgCHnYRMRg8uHtSlyWuk5dBJ3pJloCPKIkoiUJmJn5q7PrRv4e/yTxO4g96qrq6Ht/uru6uKSv7/oWvQCR8OHx0dHR03sTExIpUKrWgoqLiVUNDw5tIJJIJtwofzQvQ0NDQgsnJyS24/HlmZmYjdKnHfYp+ElC3aZ1NTU0Jz3jO7qwADQ8Pzx0fHz+MtzaALM7p1SgA6gHs0ebm5u5Z2+RS7O/vX8OW3EDvhwDdj8heEvgDQGugy6BRrx7ya9XV1Qfj8fgn75i3H7pCPT09ewlwBaO5luEz+A6CdDLzpCUvk5waGxtrRfYLbQ+2MWv8IfzOlpaWl5bMx34VkAFz3bJ4C4jj5MVVaNqSB7K9vb2rM5nMOQZ3WwrPy8vL1zY2Nr6zZC42EJDZpntoZlcGAI9p2wHzv8t6Fh0mdoCVOo9qhVH/i5Xd8rVJ+fZbEtjkjAOmsrJyfSFgBADBLxF8F23GANrc19d3xPA+4gNkTpMmsGzT9rq6ug8+yzwEgLqFn1Nqwla2JZPJJdq3qQuQ3DMMtqkCTiRn8t4mtbcpeSP59MTIqqampo7Z48q7AKG0lf3We+aZJLAqFkuZXJrmTBZ/coJ9OewChMIOK3CHOLH6RbNM8A5OXosjYq3k8LR4nXoByXOQ/QDTqXypKD4z+OpSf+TSJuWVOoDkUkOob9NH76WnBsXSaDTaoz5YpVrllTqA5NVWITT0NrX0CmFfqBErtlJ5pQ4gKSFUiGJRx1z9BFF8v1c5K7RQeaUOIKlnVIhijfKlpuRNtfoE3LjySh1AUlwhlHqmDMVlJqdUr2SUyf5oOfOlhgMIEHICsq83RlHzalu2JWM3qCdi/qe8UgeQCFC4rQNQKSFK+g0MDCzHoXPUiXffG8ALyL579kgJ4TUopp9Opw9hn331AfOA52TE688FiJs0IYqixLbFTD3jtSmoPzg4WIu/39WYOBeVt6kLkBk4ainslnrG6hfMTk9P/4axXL6SGo9YnT+CnPkAcUN3Y9CuyqzUeUDt1H6hFD9b1Rb+JDG0PlJxlvoAiZSCXGbzMKvxZc9vkk8ncRSob/RCCbZzVIEydkx5Lw0MYP4dyKo8FwOcRdj/M6zUY9q2XMA4TXH0ziYSiX9EX3ywIt1C5cPXafH5pef+DRSqCqXmIk7Gn/Q3q8zQ19Au81DK2zRFgFpanMDr6LdaAd/zT6MKcGsZ+xd5dhHgr3KIfoW6ti4UkATHQbnUwMxKiqsqkeXzEbCdvNwnNrJq+Duh9kGgcgJSY6mBTdkplZ7vlVY9Q1ME66Jd5jTdhcorkN16cvEK9vst/Yus4EHtzxqQGuAsIpUeK7YJvpZgAm4+bZT+CNs4HIvF/q6vr3cea7UVKvY2KAGLbJX+gcwbkO28UF5AsX0XACP/2Z6ypT/pKhbqsyR2JPoKAAWe9JIE+CadfAZDI9Qzc39rMQAAAABJRU5ErkJggg==);
        width: 0.48rem;
        height: 0.48rem;
        background-size: 100%;
      }
    }
  }
}
.banner {
  width: 10rem;
  height: 3.0533rem;
  position: relative;
  background: url(https://image1.suning.cn/uimg/cms/img/164214018622011376.jpg);
  background-size: 100%;
  overflow: hidden;
  .swipe {
    margin: 0 auto;
    width: 9.36rem;
    border-radius: 0.2rem;
    overflow: hidden;
    .b-image {
      width: 9.36rem;
      height: 4.9067rem;
      margin-top: -1.8667rem;
      // background-size: 100%;
    }
  }
  .trigger-wrapper {
    position: absolute;
    height: 0.1067rem;
    bottom: 0.18rem;
    width: 100%;
    // 字体设置为0
    font-size: 0;
    .trigger {
      display: inline-block;
      li {
        display: inline-block;
        width: 0.24rem;
        height: 0.1067rem;
        position: relative;
        // margin-bottom: 0.06rem;
        overflow: hidden;
        i {
          display: inline-block;
          width: 0.12rem;
          height: 0.1067rem;
          line-height: 0.1067rem;
          border-radius: 0.1067rem;
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
      .cur i {
        width: 0.24rem;
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
.hor-view {
  width: 10rem;
  height: 2.3749rem;
  img {
    width: 100%;
    // height: 2.3749rem;
  }
}
.enter-list {
  width: 10rem;
  height: 4.2667rem;
  background: url(https://image1.suning.cn/uimg/cms/img/160518148756923951.png);
  background-size: 100%;
  overflow: hidden;
  .enter-wrapper {
    height: 4.1067rem;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 1.8933rem;
        // background-color: pink;
        img {
          width: 1.12rem;
          height: 1.12rem;
        }
      }
    }
  }
  .big-blank {
    width: 10rem;
    height: 0.32rem;
  }
}
</style>
<script lang="ts">
</script>
