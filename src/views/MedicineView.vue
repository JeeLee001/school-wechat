<template>
  <div class="home-view">
    <div class="title">
      <span>家长委托带药情况登记表</span>
      <!--<router-link :to="{name: 'RegisterView'}" class="weui-btn weui-btn_mini weui-btn_primary">编辑</router-link>-->
      <a class="weui-btn weui-btn_mini weui-btn_primary edit" @click="edit()" v-if="medicineType === 'default'">编辑</a>
      <a class="weui-btn weui-btn_mini weui-btn_primary writedone"  v-if="medicineType === 'edit'">我写完了</a>
      <a class="weui-btn weui-btn_mini weui-btn_primary cancel" @click="write()" v-if="medicineType === 'edit'">取消</a>
    </div>
    <div class="table-margin" v-if="medicineType === 'default'">
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
          <td>药物名称</td>
          <td></td>
        </tr>
        <tr>
          <td>用药剂量</td>
          <td></td>
        </tr>
        <tr>
          <td>注意事项</td>
          <td></td>
        </tr>
        <tr>
          <td>用药时间</td>
          <td></td>
        </tr>
        <tr>
          <td>确诊情况</td>
          <td></td>
        </tr>
        <tr>
          <td>就诊医院</td>
          <td></td>
        </tr>
        <tr>
          <td>家长签字</td>
          <td></td>
        </tr>
        <tr>
          <td>接药人签字</td>
          <td></td>
        </tr>
        <tr>
          <td>喂药人签字</td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="table-margin" v-if="medicineType === 'edit'">
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
          <td>药物名称</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>用药剂量</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>注意事项</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>用药时间</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>确诊情况</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>就诊医院</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>家长签字</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>接药人签字</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>喂药人签字</td>
          <td><input type="text"/></td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'medicine-view',
    components: { },
    data () {
      return {
        medicineType: 'default'
      }
    },
    computed: {

    },
    methods: {
      edit(){
        this.medicineType = 'edit'
      },
      write(){
        this.medicineType = 'default'
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
      margin-left: 0.8rem;
      padding-top: 0.4rem;
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
