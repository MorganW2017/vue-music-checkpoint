<template>
    <div class="mytunes">
             
    </div>
  </template>
  
  <script>
    export default {
      name: 'mytunes',
      data() {
        return {
        }
      },
      methods: {
        function() {
          this.$store.dispatch()
        },
        getFunction() {
          return {
           
          }
        }
      },
      computed: {
        mytunes() {
          return this.$store.state.mytunes //<-- add something here
      }
    }
  }
  </script>
  
 
  <style scoped>
   
  </style>