<template>
  <div>
    <a href="javascript:;" class="weui-btn weui-btn_primary">页面主操作 Normal</a>
    <a href="javascript:;" class="weui-btn weui-btn_primary weui-btn_loading"><i class="weui-loading"></i>页面主操作 Loading</a>
    <a href="javascript:;" class="weui-btn weui-btn_warn">警告类操作 Normal</a>
    <div class="button-sp-area">
      <a href="javascript:;" class="weui-btn weui-btn_plain-default">按钮</a>
      <a href="javascript:;" class="weui-btn weui-btn_plain-default weui-btn_plain-disabled">按钮</a>
      <a href="javascript:;" class="weui-btn weui-btn_plain-primary">按钮</a>
      <a href="javascript:;" class="weui-btn weui-btn_plain-primary weui-btn_plain-disabled">按钮</a>
      <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">按钮</a>
      <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">按钮</a>
      <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn">按钮</a>
      <i class="weui-loading" style="margin-top:-8px;"></i>
      <i class="weui-icon-download"></i>
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
