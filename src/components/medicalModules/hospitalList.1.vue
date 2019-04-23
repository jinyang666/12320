<template>
  <!-- 医院列表 -->
  <div class="hospital_box">
    <div class="header" ref="herders">
      <!-- 搜索部分 -->
      <div class="search">
        <i class="iconfont">&#xe641;</i>
        <input
          type="search"
          @keydown="search_getdata"
          v-model="search_value"
          placeholder="请输入需要搜索的关键字"
        >
      </div>
      <div class="clone">
        <span>搜索</span>
      </div>
    </div>
    <!-- 搜索内容 -->
    <div class="hospital_content" v-show="search_data !== null">
      <div class="search_data">
        <ul>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
          <li>123123</li>
        </ul>
      </div>
    </div>
    <!-- 所有内容 -->
    <div class="hospital_content" v-show="search_data === null">
      <div class="content_l" ref="scrol">
        <!-- 搜索历史 -->
        <div class="searchHistory" v-show="searchHistoryList.length >= 1">
          <div class="title">
            <h2>搜索历史</h2>
          </div>
          <div class="content">
            <!-- 渲染搜索历史 -->
            <span
              v-for="(val,index) of searchHistoryList"
              :key="index"
              v-text="val"
              @click="historyBtn"
            ></span>
          </div>
        </div>
        <!-- 所有的医院 -->
        <hospitalItem ref="letter_A" title="A"></hospitalItem>
        <hospitalItem ref="letter_B" title="B"></hospitalItem>
        <hospitalItem ref="letter_C" title="C"></hospitalItem>
        <hospitalItem ref="letter_D" title="D"></hospitalItem>
        <hospitalItem ref="letter_E" title="E"></hospitalItem>
        <hospitalItem ref="letter_F" title="F"></hospitalItem>
        <hospitalItem ref="letter_G" title="G"></hospitalItem>
        <hospitalItem ref="letter_H" title="H"></hospitalItem>
        <hospitalItem ref="letter_I" title="I"></hospitalItem>
        <hospitalItem ref="letter_J" title="J"></hospitalItem>
        <hospitalItem ref="letter_K" title="K"></hospitalItem>
        <hospitalItem ref="letter_L" title="L"></hospitalItem>
        <hospitalItem ref="letter_M" title="M"></hospitalItem>
        <hospitalItem ref="letter_N" title="N"></hospitalItem>
        <hospitalItem ref="letter_O" title="O"></hospitalItem>
        <hospitalItem ref="letter_P" title="P"></hospitalItem>
        <hospitalItem ref="letter_Q" title="Q"></hospitalItem>
        <hospitalItem ref="letter_R" title="R"></hospitalItem>
        <hospitalItem ref="letter_S" title="S"></hospitalItem>
        <hospitalItem ref="letter_T" title="T"></hospitalItem>
        <hospitalItem ref="letter_U" title="U"></hospitalItem>
        <hospitalItem ref="letter_V" title="V"></hospitalItem>
        <hospitalItem ref="letter_W" title="W"></hospitalItem>
        <hospitalItem ref="letter_X" title="X"></hospitalItem>
        <hospitalItem ref="letter_Y" title="Y"></hospitalItem>
        <hospitalItem ref="letter_Z" title="Z"></hospitalItem>
        <hospitalItem ref="letter_#" title="#"></hospitalItem>
      </div>
      <!-- 字母列表 -->
      <div class="content_r">
        <ul
          ref="touch_Ul"
          @click.stop.prevent="toActiveIndex"
          @touchstart.stop.prevent="touchStart"
          @touchmove.stop.prevent="touchMove"
          @touchend.stop.prevent="touchEnd"
        >
          <li :class="activeIndex === 0 ? 'active':''">A</li>
          <li :class="activeIndex === 1 ? 'active':''">B</li>
          <li :class="activeIndex === 2 ? 'active':''">C</li>
          <li :class="activeIndex === 3 ? 'active':''">D</li>
          <li :class="activeIndex === 4 ? 'active':''">E</li>
          <li :class="activeIndex === 5 ? 'active':''">F</li>
          <li :class="activeIndex === 6 ? 'active':''">G</li>
          <li :class="activeIndex === 7 ? 'active':''">H</li>
          <li :class="activeIndex === 8 ? 'active':''">I</li>
          <li :class="activeIndex === 9 ? 'active':''">J</li>
          <li :class="activeIndex === 10 ? 'active':''">K</li>
          <li :class="activeIndex === 11 ? 'active':''">L</li>
          <li :class="activeIndex === 12 ? 'active':''">M</li>
          <li :class="activeIndex === 13 ? 'active':''">N</li>
          <li :class="activeIndex === 14 ? 'active':''">O</li>
          <li :class="activeIndex === 15 ? 'active':''">P</li>
          <li :class="activeIndex === 16 ? 'active':''">Q</li>
          <li :class="activeIndex === 17 ? 'active':''">R</li>
          <li :class="activeIndex === 18 ? 'active':''">S</li>
          <li :class="activeIndex === 19 ? 'active':''">T</li>
          <li :class="activeIndex === 20 ? 'active':''">U</li>
          <li :class="activeIndex === 21 ? 'active':''">V</li>
          <li :class="activeIndex === 22 ? 'active':''">W</li>
          <li :class="activeIndex === 23 ? 'active':''">X</li>
          <li :class="activeIndex === 24 ? 'active':''">Y</li>
          <li :class="activeIndex === 25 ? 'active':''">Z</li>
          <li :class="activeIndex === 26 ? 'active':''">#</li>
        </ul>
      </div>
    </div>
    <!-- 判断提示文字是否显示 -->
    <div class="touch_title" v-show="activeTitle!==null">
      <span v-text="activeTitle"></span>
    </div>
  </div>
</template>
<script>
// 导入一组列表组件
import hospitalItem from "./hospitalItem.vue";
export default {
  name: "hospitalList",
  data() {
    return {
      // 搜索框内容
      search_value: "",
      // 搜索返回的数据
      search_data: null,
      // 记录手指位置
      touchStart_pageY: 0,
      // 记录单个文字的高度
      list_item_h: 0,
      // 判断结束事件是否执行
      istouchEnd: false,
      // 当前的状态
      currentIndex: 0,
      // 控制当前手指下的状态
      activeIndex: null,
      // 搜索历史记录
      searchHistoryList: {},
      // 当前划入的字母
      activeTitle: null
    };
  },
  methods: {
    // 点击历史搜索记录
    historyBtn(...arg) {},
    // 搜索返回的数据
    search_getdata(ev) {
      let { keyCode } = ev;
      if (keyCode === 13) {
        // 执行搜索
      } else {
        return false;
      }
    },
    // 点击屏幕
    toActiveIndex(ev) {
      this.activeIndex = Array.from(this.$refs.touch_Ul.children).indexOf(
        ev.target
      );
      setTimeout(() => {
        this.activeIndex = null;
        this.activeTitle = null;
      }, 50);
    },
    // 手指按下屏幕
    touchStart(ev) {
      let touch_Ul_H = this.$refs.touch_Ul.offsetHeight,
        list_length = this.$refs.touch_Ul.children.length;
      this.list_item_h = Math.floor(touch_Ul_H / list_length);
      this.touchStart_pageY = ev.changedTouches[0].pageY;
      this.currentIndex = Array.from(this.$refs.touch_Ul.children).indexOf(
        ev.target
      );
      this.istouchEnd = true;
    },
    // 手指运动
    touchMove(ev) {
      let { changedTouches } = ev,
        now_pageY = changedTouches[0].pageY;
      let bias_index = parseInt(
        Math.floor(now_pageY - this.touchStart_pageY) / this.list_item_h
      );
      if (
        bias_index + this.currentIndex < 0 ||
        bias_index + this.currentIndex > this.$refs.touch_Ul.children.length - 1
      ) {
        return false;
      }
      this.activeIndex = bias_index + this.currentIndex;
    },
    // 手指离开
    touchEnd(ev) {
      if (this.istouchEnd === false) return null;
      this.activeTitle = null; // 提示
      this.activeIndex = null; // 索引
      this.touchStart_pageY = 0; // 起始位置
      this.istouchEnd = false; // 取消离开事件
    },
    // 请求医院列表
    getHospitalList() {
      this.$indicator.open({
        spinnerType: "triple-bounce"
      });
      this.$axios
        .post(this.$URLS.hospitalList)
        .then(res => {
          this.$indicator.close();
          if (res.data.rel || res.data.status === 200) {
            console.log("医院列表数据", res);
          } else {
            this.$toast({
              message: "数据加载失败",
              position: "middle"
            });
          }
        })
        .catch(err => {
          this.$indicator.close();
          this.$toast({
            message: "数据加载失败",
            position: "middle"
          });
        });
    }
  },
  // 挂载之后
  created() {
    // 创建前将拿到vuex里面的历史记录
    this.searchHistoryList = this.$store.state.searchHistoryList;
    // 获取医院列表
    this.getHospitalList();
  },
  watch: {
    // 监听搜索框内容,
    search_value(newData, oldata) {
      // 输入框值不能为空,以及和输入前是否一样
      if (
        newData.replace(/(^\s*)|(\s*$)/g, "") !==
        oldata.replace(/(^\s*)|(\s*$)/g, "")
      ) {
        if (newData.replace(/(^\s*)|(\s*$)/g, "").length <= 0) {
          this.search_data = null;
        } else {
          // ...........处理搜索接的请求
          this.search_data = {};
        }
      }
    },
    // 监听变化,动态滚动
    activeIndex(newdata, olddata) {
      if (newdata === olddata) {
        return olddata;
      }
      if (typeof this.activeIndex === "number") {
        let dome = this.$refs.touch_Ul.children[this.activeIndex].innerHTML,
          windowH = window.document.body.offsetHeight;
        this.activeTitle = dome;
        if (this.$refs["letter_" + dome]) {
          this.$refs.scrol.scrollTop =
            this.$refs["letter_" + dome].$el.offsetTop -
            this.$refs.herders.offsetHeight;
        } else {
          return false;
        }
      }
    }
  },
  components: {
    hospitalItem
  }
};
</script>
<style scoped>
.hospital_box {
  height: 100vh;
  overflow: hidden;
}
/* 搜索 */
.hospital_box .header {
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  width: 80vw;
  display: flex;
  align-items: center;
  border: 1px solid #e8e8e8;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
}
.search .iconfont {
  font-size: 3.5vw;
  height: 100%;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(5%);
}
.search input {
  width: 90%;
  padding: 10px 5px;
}
.header .clone {
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hospital_content {
  height: 93.2vh;
  overflow: hidden;
}
/* 搜索出的内容 */
.search_data {
  width: 94vw;
  margin: 0 3vw;
  height: 93.2vh;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.search_data ul li {
  font-weight: normal;
  width: 100%;
  padding: 10px 5px;
  border-bottom: 1px solid #e8e8e8;
  font-size: 15px;
}
.search_data ul li:last-child {
  border: none;
}
/* 搜索历史 */
.searchHistory {
  overflow: hidden;
}

.searchHistory .content {
  padding: 2vw 4vw;
}
.searchHistory span {
  display: inline-block;
  border: 1px solid #e3e3e3;
  padding: 4px 10px;
  border-radius: 2vw;
  margin: 6px 8px;
  font-size: 14px;
}
.searchHistory .title {
  padding: 8px 15px;
  background-color: #e8e8e8;
}
.searchHistory .title h2 {
  font-size: 15px;
}

/* 列表 */
.content_l {
  width: 100vw;
  height: 100%;
  float: left;
  overflow-y: scroll;
}
.content_r {
  position: fixed;
  right: 0;
  top: 7vh;
  width: 8vw;
  height: 93.2vh;
  background-color: transparent;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_r ul {
  width: 100%;
  overflow: hidden;
}
.content_r ul li {
  width: 100%;
  height: 2.8vh;
  text-align: center;
}
.content_r ul li.active {
  color: red;
}
/* 手指移动 */
.touch_title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  width: 20vw;
  height: 20vw;
  border-radius: 4vw;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.touch_title span {
  font-size: 20px;
}
</style>
