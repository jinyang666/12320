<template>
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
          <li
            style="color: #ee2223;"
            v-show="search_data !== null ? search_data.length <= 0 : null"
          >没有找到您要搜索的内容</li>
          <li v-for="item of search_data" :key="item.hospitalId" v-text="item.hospitalName"></li>
        </ul>
      </div>
    </div>
    <!-- 所有医院列表内容 -->
    <div class="hospital_content" v-show="search_data === null">
      <div class="content_l" ref="scrol">
        <div class="searchHistory" v-show="searchHistoryList.length >= 1">
          <!-- 搜索历史 -->
          <div class="title">
            <h2>搜索历史</h2>
          </div>
          <div class="content">
            <!-- 历史渲染 -->
            <span
              v-for="(val,index) of searchHistoryList"
              :key="index"
              v-text="val"
              @click="historyBtn(val)"
            ></span>
          </div>
        </div>
        <!-- 所有的医院列表 -->
        <div class="allhospital">
          <div class="title">
            <h2>医院列表</h2>
          </div>
          <ul>
            <!-- 渲染医院列表 -->
            <li v-for="item of hospitalList" :key="item.hospitalId" v-text="item.hospitalName"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 导入一组列表组件
export default {
  name: "hospitalList",
  data() {
    return {
      // 搜索框内容
      search_value: "",
      // 搜索返回的数据
      search_data: null,
      // 搜索历史记录
      searchHistoryList: {},
      // 医院列表
      hospitalList: {}
    };
  },
  methods: {
    // 点击历史记录跳转页面
    historyBtn(hospitalname) {
      this.$router.push({
        name: "medicalpay",
        params: {
          hospitalname
        }
      });
    },
    // 搜索返回的数据
    search_getdata(ev) {
      let { keyCode } = ev;
      if (keyCode === 13) {
        // 执行搜索
      } else {
        return false;
      }
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
            this.hospitalList = res.data.data;
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
          this.search_data = this.hospitalList.filter(item => {
            let generReg = new RegExp(
              `(.*)(${newData.split("").join(")(.*)(")})(.*)`,
              "i"
            );
            return generReg.test(item.hospitalName);
          });
          console.log("搜索的数据", this.search_data);
        }
      }
    }
  }
};
</script>
<style scoped>
.red {
  color: red !important;
}
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
.title {
  width: 100vw;
  padding: 8px 15px;
  background-color: #e8e8e8;
}
.title h2 {
  font-size: 15px;
}
.content_l {
  height: 93.2vh;
  overflow-y: scroll;
}
/* 所有医院 */
.allhospital {
}
.allhospital ul {
  padding: 10px;
}
.allhospital ul li {
  padding: 10px;
}
</style>
