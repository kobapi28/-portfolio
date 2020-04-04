<template>
  <div id="app">
    <Header></Header>
    <About></About>
    <Skill></Skill>
    <Work></Work>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>


<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import 'normalize.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    About,
    Skill,
    Work,
    Contact
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
