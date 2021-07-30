<template>
    <div id="app">
        {{msg }}
        <my-add></my-add>
        +++++++++++++++++++++++++++
        <my-sub></my-sub>
        <List></List>
    </div>
</template>

<script>
  import Add from './components/Add'
  import Sub from './components/Sub'
  import List from './components/List'
  // import

  export default {
    name: 'App',
    components: {
      'my-add': Add,
      'my-sub': Sub,
      List
    },
    data() {
      return {
        msg: 'Hello World'
      }
    },
    created() {
      localStorage.setItem('count', 0)

    }
  }
</script>

<style>

</style>
