<template>
  <div class="home-view">
    <!--<div class="header">智慧幼儿园-完善信息</div>-->

    <img class='image' src="../assets/banner.png"/>
    <h2>欢迎来到智慧幼儿园，请先完善信息</h2>

    <h3>第一步：请选择所属幼儿园</h3>
    <select v-model="selected" class="schoolOne">
      <option v-for="province in provinces" v-bind:value="province.value">
        {{ province.text }}
      </option>
    </select>

    <select v-model="selectedTwo" class="schoolTwo">
      <option v-for="city in cities" v-bind:value="city.value">
        {{ city.text }}
      </option>
    </select>

    <select v-model="selectedThree" class="schoolThree">
      <option v-for="area in areas" v-bind:value="area.value">
        {{ area.text }}
      </option>
    </select>
    <br>

    <!--<select v-model="selectedFour" class="schoolFour">
      <option v-for="school in schools" v-bind:value="school.value">
        {{ school.text }}
      </option>
    </select>-->
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <input class="weui-input" type="text" placeholder="请输入幼儿园名称">
        </div>
      </div>
    </div>

    <h3>第二步：请输入您的手机号</h3>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell weui-cell_select weui-cell_select-before">
        <div class="weui-cell__hd">
          <select class="weui-select" name="select2">
            <option value="1">+86</option>
            <option value="2">+80</option>
            <option value="3">+84</option>
            <option value="4">+87</option>
          </select>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码">
        </div>
      </div>
    </div>




    <h3>第三步：手机号码验证</h3>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
          <label class="weui-label">验证码</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="tel" placeholder="请输入验证码">
        </div>
        <div class="weui-cell__ft">
          <button class="weui-vcode-btn">获取验证码</button>
        </div>
      </div>
    </div>


    <label for="weuiAgree" class="weui-agree">
      <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
      <span class="weui-agree__text">
          阅读并同意<a href="javascript:void(0);">《相关条款》</a>
      </span>
    </label>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">完成信息绑定</a>
    </div>


  </div>
</template>

<script>

  export default {
    name: 'register-view',
    components: { },
    data () {
      return {
        selected: '1',
        selectedTwo: '1',
        selectedThree: '1',
        selectedFour: '1',
        provinces: [
          { text: '北京', value: '1' },
          { text: '上海', value: '2' },
          { text: '广东', value: '3' }
        ],
        cities: [
          { text: '北京', value: '1' },
          { text: '上海', value: '2' },
          { text: '广州', value: '3' }
        ],
        areas: [
          { text: '海淀', value: '1' },
          { text: '朝阳', value: '2' },
          { text: '西城', value: '3' }
        ],
        schools: [
          { text: '智慧幼儿园', value: '1' },
          { text: '聪明幼儿园', value: '2' },
          { text: '双语幼儿园', value: '3' }
        ],
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
  }

  .header{
    font-size: 1.5rem;
    height: 3.8rem;
    text-align: center;
    line-height: 3.8rem;
    background: #373B3E;
    color: #fff;
  }

  .image{
    width: 100%;
  }

  h2{
    margin-top: 0.8rem;
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    color: #009E0F
  }

  h3{
    margin: 1.8rem 0.4rem 0.6rem 0.8rem;
    font-size: 1.5rem;
    font-weight: bold
  }

  .schoolOne{
    margin-left: 0.8rem
  }

  .schoolOne,.schoolTwo,.schoolThree {
    width: 30%;
    height: 2.2rem;
    //margin-left: 0.8rem;
  }

  .schoolFour{
    width: 35%;
    height: 2.2rem;
  }
  .phone{
    height: 45px
  }

</style>
