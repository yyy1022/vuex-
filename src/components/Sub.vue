<template>
    <div>
<!--        <h3>当前最新count值为：{{count}}</h3>-->
        <h3>{{showNumber}}</h3>
        <button @click="subHand">-1</button>
        <button @click="subNHand">-N</button>
        <button @click="subAsync">异步-1</button>
        <button @click="subNAsync(2)">异步-N</button>
    </div>

</template>

<script>
  import { mapState, mapMutations, mapActions,mapGetters } from 'vuex'

  export default {
    name: 'Sub',
    data() {
      return {}
    },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['showNumber'])
    },
    methods: {
      // button按钮上的点击事件可以直接为这里边的事件...mapActions(['subAsync', 'subNAsync']),无需在事件methods中写该事件
      ...mapMutations(['sub', 'subN']),
      ...mapActions(['subAsync', 'subNAsync']),
      subHand() {
        this.sub()
      },
      subNHand() {
        this.subN(2)
      },

      // getBtnNAsync() {
      //   this.subNAsync(6)
      // }
    }
  }
</script>

<style scoped>

</style>
