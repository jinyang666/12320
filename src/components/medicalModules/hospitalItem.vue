<template>
  <div class="hospital_item">
    <div class="title">
      <h1 v-text="title"></h1>
    </div>
    <div class="content">
      <ul>
        <li>
          <span>测试</span>
        </li>
        <li>
          <span>12132123</span>
        </li>
        <li>
          <span>12132123</span>
        </li>
        <li>
          <span>12132123</span>
        </li>
        <li>
          <span>12132123</span>
        </li>
        <li>
          <span>12132123</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "hospitalItem",
  props: {
    title: {
      default: "TITLE"
    },
    list: {
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.hospital_item {
  width: 100%;
  background-color: white;
}
.hospital_item .title {
  padding: 8px 15px;
  background-color: #e8e8e8;
}
.hospital_item .title h1 {
  font-size: 16px;
}
.hospital_item .content {
  padding: 10px;
}
.hospital_item .content ul li {
  padding: 15px 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  font-size: 16px !important;
}
.hospital_item .content ul li:last-child {
  border: none;
}
</style>
