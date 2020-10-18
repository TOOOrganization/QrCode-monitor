<template>
  <UpLoadPic size="200px"
             skin="gradient"
             shape="round"
             base-color="rgba(0, 0, 0, 1)"
             status="default"
             :error="this.error"
             :gradient="this.gradient"
             :data="this.QRCodeData">
  </UpLoadPic>
</template>

<script>
export default {
  name:'HelloWorld',
  data(){
    return{
      QRCodeData:'',
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
  created : function () {
    console.log(123)
    this.refresh();
    console.log(456)
  },
  methods: {
    refresh() {
      this.$axios
        .get('/QRcode/photo_id').then(resp => {
        if (resp && resp.data.status === 200) {
          this.$message({
            showClose: true,
            message: resp.data.msg,
            type: 'success'
          })
          this.QRCodeData = resp.data.data
        } else {
          console.log(resp.data.result)
          this.$message({
            showClose: true,
            message: '刷新失败',
            type: 'error'
          })
          this.QRCodeData = ''
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
