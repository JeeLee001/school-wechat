<template>
  <div class="home-view">
    <div class="title">
      <span>生长发育情况登记表</span>
      <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">编辑</a>
    </div>
    <div class="table-margin">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>日期</th>
          <th>班次登记</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>星期一</td>
          <td>早班</td>
        </tr>
        <tr>
          <td>星期二</td>
          <td>晚班</td>
        </tr>
        <tr>
          <td>星期三</td>
          <td>早班</td>
        </tr>
        <tr>
          <td>星期四</td>
          <td>晚班</td>
        </tr>
        <tr>
          <td>星期五</td>
          <td>正常班</td>
        </tr>
        <tr>
          <td>星期六</td>
          <td>早班</td>
        </tr>
        <tr>
          <td>星期日</td>
          <td>晚班</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="title">
      <span>请假登记</span>
      <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">请假申请</a>
    </div>
    <div class="leave">
      <p>申请时间：2017-06-06<span>审核中...</span></p>
      <p>请假周期:2017-05-04 至 2017-05-08</p>
      <p>请假事由:家里姐姐结婚,需回去参加婚礼</p>
    </div>
    <div class="leave-agree">
      <p>申请时间：2017-06-06<span>审核同意</span></p>
      <p>请假周期:2017-05-04 至 2017-05-08</p>
      <p>请假事由:家里姐姐结婚,需回去参加婚礼</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'teacher-view',
    components: { },
    data () {
      return {

      }
    },
    computed: {

    },
    methods: {


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


  .title{
    position: relative;
    width: 100%;
    height: 2.8rem;

    span{
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 2.8rem;
      margin-left: 0.8rem
    }

    a{
      position: absolute;
      right: 0.8rem;
    }
  }

  .table {
    th{
      text-align: center;
    }
    td{
      border-left: none;
      text-align: center;
    }
  }

  .leave{
    margin: 0.8rem 0.8rem;
    border: 0.1rem solid #F9CB9C;
    background: #F9CB9C;

    p{
      margin: 1.2rem 0.8rem;
      font-size: 1.6rem;

      span{
        margin-left: 5.6rem;
        color: #F76260
      }
    }
  }

  .leave-agree{
    margin: 2.4rem 0.8rem;
    border: 0.1rem solid #9FC5F8;
    background: #9FC5F8;

    p{
      margin: 1.2rem 0.8rem;
      font-size: 1.6rem;
    }

    span{
      margin-left: 5.6rem;
      color: #FFBE00
    }
  }




</style>
