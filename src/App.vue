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

.icon{
  font-size: 0.8em;
}

.text{
    font-weight: 500;
}



.content-title {
  margin-top: 100px;
  position: relative;
  font-size: 2em;
  color: #333;
}

.content-title::before,
.content-title::after {
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 15%;
  content: '';
  border-top: 3px solid #333;
}

.content-title::before {
  left: 15%;
}

.content-title::after {
  right: 15%;
}


@media screen and (max-width: 600px){
  .content-title::before,
  .content-title::after {
    width: 10%;
  }

  .content-title::before {
    left: 10%;
  }

  .content-title::after {
    right: 10%;
  }
}
</style>
