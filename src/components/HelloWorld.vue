<template>
  <div>
    <el-button type="primary" @click="refresh" :disabled="buttonShow" style="margin-top: 100px">刷新</el-button>
    <UpLoadPic size="200px"
               skin="gradient"
               shape="round"
               base-color="rgba(0, 0, 0, 1)"
               status="default"
               ref="UpLoadPic"
               v-if="show"
               :error="error"
               :gradient="gradient"
               :data="QRCodeData">
    </UpLoadPic>
  </div>

</template>

<script>
export default {
  name:'HelloWorld',
  data(){
    return{
      QRCodeData:'',
      buttonShow:false,
      show:true,
      button:'生成二维码',
      gradient: {
        direction: 5,
        colorMap: [
          [0, "rgba(255, 0, 0, 1)"],
          [1, "rgba(0, 0, 255, 1)"]
        ]
      },
      error: {
        text: "测试",
        color: "rgba(50, 255, 50, 1)"
      },
      }
    },
  mounted : function () {
    this.refresh()
  },
  methods: {
    refresh() {
      this.show = false
      this.$nextTick(()=>{
        this.$axios
          .get('/QRCode/photo').then(resp => {
          if (resp && resp.data.status === 200) {
            this.$notify({
              title: '成功',
              message: resp.data.msg,
              type: 'success'
            });
            this.QRCodeData = resp.data.data
            this.show = true
            console.log(resp.data.data)
          } else {
            console.log(resp.data.result)
            this.$notify.error({
              title: '错误',
              message: '刷新失败'
            });
          }
        })
        let _this = this
        setTimeout( function () {
          _this.buttonShow=false;
        },2000)
        this.buttonShow = true
      })
    }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
