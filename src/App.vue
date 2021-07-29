<template>
    <div id="app">
        {{msg }}
        <my-add></my-add>
   +++++++++++++++++++++++++++
        <my-sub></my-sub>
    </div>
</template>

<script>
  import Add from './components/Add'
  import Sub from './components/Sub'

  export default {
    name: 'App',
    components: {
      'my-add': Add,
      'my-sub': Sub
    },
    data() {
      return {
        msg: 'Hello World'
      }
    }
  }
</script>

<style>

</style>
