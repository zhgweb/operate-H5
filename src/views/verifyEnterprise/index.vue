<script setup lang="ts">
import { ref } from 'vue'

const searchVal = ref('')

const search = () => {
  // TODO
}
</script>

<template>
  <div class="verify-enterprise-page">
    <div class="header">
      <img class="header-bg" src="@/assets/verify_enterprise_header.png" />
      <div class="title">新公司工商核名系统</div>
      <div class="sub-title">INDUSTRIAL AND COMMERCIAL NUCLEAR SYSTEM</div>
      <div class="tips">免费核准公司名称，提升工商注册成功率</div>
      <div class="search-con">
        <!-- <input class="search-con-input" type="text" />
        <button>搜索</button> -->
        <van-field class="search-con-input" v-model="searchVal" placeholder="填写新注册公司全称" />
        <van-button class="search-con-btn">极速核名</van-button>
      </div>
    </div>
    <div class="w"></div>
  </div>
</template>

<style lang="scss" scoped>
.verify-enterprise-page {
  width: 1920px;
  height: fit-content;

  .header {
    width: 1920px;
    height: 520px;
    padding-top: 118px;
    position: relative;

    .header-bg {
      width: 1920px;
      height: 520px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }

    .title {
      height: 108px;
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 500;
      font-size: 72px;
      color: #ffffff;
      line-height: 108px;
      text-align: center;
    }

    .sub-title {
      height: 40px;
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 400;
      font-size: 26px;
      color: #ffffff;
      line-height: 40px;
      text-align: center;
      margin-bottom: 42px;
    }

    .tips {
      height: 51px;
      font-family:
        PingFangSC,
        PingFang SC;
      font-weight: 500;
      font-size: 32px;
      color: #ffffff;
      line-height: 51px;
      text-align: center;
      margin-bottom: 12px;
    }

    .search-con {
      margin: 0 auto;
      width: 864px;
      height: 60px;
      background: #ffffff;
      border-radius: 100px;
      border: 1px solid #ffffff;
      opacity: 0.85;
      padding-left: 24px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-input {
        width: 660px;
        height: 58px;
        line-height: 58px;
        font-size: 22px;
        padding: 0 !important;
      }

      &-btn {
        width: 178px;
        height: 58px;
        background: linear-gradient(270deg, #6017ea 0%, #2c74e6 100%);
        box-shadow: 4px 8px 24px 0px rgba(86, 140, 220, 0.35);
        border-radius: 100px;
        font-family:
          PingFangSC,
          PingFang SC;
        font-weight: 500;
        font-size: 22px;
        color: #fff;
      }
    }
  }

  .w {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
