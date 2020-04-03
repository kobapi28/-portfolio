<template>
  <div id="app">
    <Header></Header>
    <Content title="About"></Content>
    <Content title="Work"></Content>
    <Content title="Skill"></Content>
    <Content title="Contact"></Content>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import 'normalize.css'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,300&display=swap");
#app{
  font-family:'Comic Neue',cursive ;
  text-align: center;
}
</style>
