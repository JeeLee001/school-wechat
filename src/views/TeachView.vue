<template>
  <div class="home-view">
    <div class="choose-date">
      <span>请选择所属日期：</span>
      <input type="date" />
    </div>

    <h2>2017年05月22日教学计划</h2>
    <div class="table-margin">
      <table class="table table-striped">
        <thead>

        </thead>
        <tbody>
        <tr>
          <td>上午</td>
          <td>
            <p>活动名称主题：  怎么照顾豆宝宝</p>
            <p>主要目标：初步了解照顾豆宝宝的方法</p>
          </td>
        </tr>
        <tr>
          <td>下午</td>
          <td>
            <p>活动名称主题：小蝌蚪</p>
            <p>主要目标：能用绘画，手指点画，泥工的方法做蝌蚪</p>
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'teach-view',
    components: { },
    data () {
      return {

      }
    },
    computed: {

    },
    methods: {
      aa(){
        alert(1)
      }

    }
  }
</script>

<style lang="scss" scoped>
  .home-view{
    width: 100%;
    height: 100%;
    margin-top: 0.4rem;

    .table-margin{
      margin: 0 0.8rem
    }
  }

  .choose-date{
    margin-left: 0.8rem;
    height: 2.4rem;

    span{
      line-height: 2.4rem;
      font-size: 1.5rem;
      font-weight: bold
    }
  }

  h2{
    padding-top: 1.2rem;
    text-align: center
  }

  .table {
    th{
      text-align: center;
    }
    td{
      border-left: none;
      background: #F9F9F9;
      //text-align: center;

      input{
        border: none;
        width: 100%;
        height: 100%
      }
    }
  }



</style>
