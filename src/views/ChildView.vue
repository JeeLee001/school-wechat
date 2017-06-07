<template>
  <div class="home-view">
    <div class="table-margin">
      <table class="table table-striped ">
        <thead>
        <tr>
          <th>幼儿出勤情况</th>
          <th>人数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>今日迟到</td>
          <td>2</td>
        </tr>
        <tr>
          <td>今日未打卡</td>
          <td>0</td>
        </tr>
        <tr>
          <td>今日早退</td>
          <td>0</td>
        </tr>
        <tr>
          <td>今日应到人数</td>
          <td>221</td>
        </tr>
        <tr>
          <td>今日实到人数</td>
          <td>221</td>
        </tr>
        </tbody>
      </table>
    </div>


    <h2>今日名单</h2>
    <div class="today-list">
      <p>今日迟到：李蕾（幼儿1班） 李华（幼儿2班）</p>
      <p>今日未打卡：0人</p>
      <p>今日早退：0人</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'child-view',
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

  .table {
    th{
      text-align: center;
    }
    td{
      border-left: none;
      text-align: center;
    }
  }

  h2{
    margin-left: 0.8rem;
    margin-top: 3.2rem;
    font-size: 1.6rem;
    font-weight: bold
  }

  .today-list{
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



</style>
