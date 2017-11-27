<template>
  <div class="home">
          <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <mytunes class="mytunes">

    </mytunes>
    <itunes class="itunes">

    </itunes>
  </div>
</template>

<script>
  import itunes from './itunes'
  import mytunes from './mytunes'
 
  export default {
    name: 'home',
    data() {
      return {

      }
    },
    components:{ 
      itunes,
      mytunes
    }
  }
</script>


<style>
  .mytunes {
    display: inline-block;
    min-height: 500px;
    min-width: 45%;
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 45%;
  }
</style>