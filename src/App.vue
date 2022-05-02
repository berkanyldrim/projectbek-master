<template>
  <MainPage></MainPage>
  <PageTwo></PageTwo>
  <PageThree></PageThree>
    
</template>

<script>
import MainPage from "./components/page1.vue"
import PageTwo from "./components/page2.vue"
import PageThree from "./components/page3.vue"


export default {
  name: 'App',
  components: {
    MainPage,
    PageTwo,
    PageThree
}
}

</script>


<style>

</style>
