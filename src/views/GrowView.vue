<template>
  <div class="home-view">
    <div class="title">
      <span>本周班次登记</span>
      <!--<router-link :to="{name: 'RegisterView'}" class="weui-btn weui-btn_mini weui-btn_primary">编辑</router-link>-->
      <a class="weui-btn weui-btn_mini weui-btn_primary edit" @click="edit()" v-if="growType === 'default'">编辑</a>
      <a class="weui-btn weui-btn_mini weui-btn_primary writedone"  v-if="growType === 'edit'">我写完了</a>
      <a class="weui-btn weui-btn_mini weui-btn_primary cancel" @click="write()" v-if="growType === 'edit'">取消</a>
    </div>
    <div class="table-margin" v-if="growType === 'default'">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>日期</th>
          <th>2017-06-08</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>儿童班级</td>
          <td></td>
        </tr>
        <tr>
          <td>儿童姓名</td>
          <td></td>
        </tr>
        <tr>
          <td>身高(cm)</td>
          <td></td>
        </tr>
        <tr>
          <td>体重(kg)</td>
          <td></td>
        </tr>
        <tr>
          <td>视力情况</td>
          <td></td>
        </tr>
        <tr>
          <td>沙眼情况</td>
          <td></td>
        </tr>
        <tr>
          <td>龋齿的发育情况</td>
          <td></td>
        </tr>
        <tr>
          <td>听力情况</td>
          <td></td>
        </tr>
        <tr>
          <td>血红蛋白情况</td>
          <td></td>
        </tr>
        <tr>
          <td>体格情况</td>
          <td></td>
        </tr>
        <tr>
          <td>血压情况</td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="table-margin" v-if="growType === 'edit'">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>日期</th>
          <th>2017-06-08</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>儿童班级</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>儿童姓名</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>身高(cm)</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>体重(kg)</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>视力情况</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>沙眼情况</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>龋齿的发育情况</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>听力情况</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>血红蛋白情况</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>体格情况</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>血压情况</td>
          <td><input type="text"/></td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'grow-view',
    components: { },
    data () {
      return {
        growType: 'default'
      }
    },
    computed: {

    },
    methods: {
        edit(){
            this.growType = 'edit'
        },
        write(){
            this.growType = 'default'
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

  .title{
    position: relative;
    width: 100%;
    height: 2.8rem;
    margin-top: 1.2rem;
    margin-bottom: 0.6rem;

    span{
      font-size: 1.6rem;
      font-weight: bold;
      line-height: 2.8rem;
      margin-left: 0.8rem
    }

    .edit{
      position: absolute;
      right: 0.8rem;

    }

    .cancel{
      position: absolute;
      right:10rem;
      margin-top: 0;
      color: #fff;
      text-decoration: none
    }

    .writedone{
      position: absolute;
      right: 0.8rem;
      color: #fff;
      text-decoration: none
    }
  }

  .table {
    th{
      text-align: center;
    }
    td{
      border-left: none;
      text-align: center;

      input{
        border: none;
        width: 100%;
        height: 100%
      }
    }
  }
</style>
