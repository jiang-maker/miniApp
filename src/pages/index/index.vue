<template>
  <div class="container">
    <mp-button type="primary" size="small">默认按钮</mp-button>
  </div>
</template>

<script>
import card from '@/components/card'
// import {getCloud} from '@/getData/test'
import mpButton from 'mpvue-weui/src/button'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card,
    mpButton
  },

  methods: {
  },

  async created () {
    // let obj = {
    //   cityname: '深圳',
    //   key: '01e7d10012613181d03c538d00f6dcb0'
    // }
    // let res = await getCloud(obj)
    // console.log(res + 'last')
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
