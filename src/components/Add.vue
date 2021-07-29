<template>
    <div>
        <h3>当前最新count值为：{{$store.state.count}}</h3>
        <button @click="getBtn">+1</button>
        <button @click="getBtnN">+N</button>
        <button @click="getBtnAsync">异步加+1</button>
        <button @click="getBtnNAsync">异步加+N</button>

    </div>
</template>

<script>
  export default {
    name: 'Add',
    data() {
      return {}

    },
    methods: {
      getBtn() {
        // 操作vuex中mutations函数
        this.$store.commit(
          'add'
        )
      },
      getBtnN() {
        this.$store.commit(
          'addN', 5
        )
      },
      //异步增加count
      getBtnAsync() {
        this.$store.dispatch('addAsync')
      },
      getBtnNAsync() {
        this.$store.dispatch('addNAsync',6)
      }
    }
  }
</script>

<style scoped>

</style>
