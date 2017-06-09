<template>
  <div class="home-view">
    <h3 class="title">2017-05-22    周一</h3>
    <div class="leave one">
      <p>早餐：牛奶，鸡蛋，面包</p>
      <p>午餐：粉蒸肉,清炒红萝卜,紫菜蛋汤</p>
      <p>晚餐：奶香馒头</p>
    </div>
    <h3 class="title">2017-05-23    周二</h3>
    <div class="leave two">
      <p>早餐：牛奶，鸡蛋，面包</p>
      <p>午餐：粉蒸肉,清炒红萝卜,紫菜蛋汤</p>
      <p>晚餐：奶香馒头</p>
    </div>
    <h3 class="title">2017-05-24    周三</h3>
    <div class="leave three">
      <p>早餐：牛奶，鸡蛋，面包</p>
      <p>午餐：粉蒸肉,清炒红萝卜,紫菜蛋汤</p>
      <p>晚餐：奶香馒头</p>
    </div>
    <h3 class="title">2017-05-24    周四</h3>
    <div class="leave four" >
      <p>早餐：牛奶，鸡蛋，面包</p>
      <p>午餐：粉蒸肉,清炒红萝卜,紫菜蛋汤</p>
      <p>晚餐：奶香馒头</p>
    </div>
    <h3 class="title">2017-05-25    周五</h3>
    <div class="leave five">
      <p>早餐：牛奶，鸡蛋，面包</p>
      <p>午餐：粉蒸肉,清炒红萝卜,紫菜蛋汤</p>
      <p>晚餐：奶香馒头</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'diet-view',
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
  }

  .header{
    font-size: 1.5rem;
    height: 3.8rem;
    text-align: center;
    line-height: 3.8rem;
    background: #373B3E;
    color: #fff;
  }

  .title{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 3.2rem 0.8rem 0.6rem 0.8rem;
  }
  .leave{
    margin: 0.8rem 0.8rem;

    p{
      margin: 1.2rem 0.8rem;
      font-size: 1.6rem;

      span{
        margin-left: 5.6rem;
        color: #F76260
      }
    }
  }

  .one{
    border: 0.1rem solid #F9CB9C;
    background: #F9CB9C;
  }

  .two{
    border: 0.1rem solid #9BAE86;
    background: #9BAE86;
  }

  .three{
    border: 0.1rem solid #CCC;
    background: #CCC;
  }

  .four{
    border: 0.1rem solid #9FC5F8;
    background: #9FC5F8;
  }

  .five{
    border: 0.1rem solid #D5A6DB;
    background: #D5A6DB;
  }




</style>
