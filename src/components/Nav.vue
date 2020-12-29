<template>
  <div>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#about')">About</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#skill')">Skill</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#work')">Works</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#contact')">Contact</a>
  </div>
</template>


<script>
export default {
  methods: {
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style>

/*.nav-button{
  padding:10px;
  text-decoration: none;
  border-radius: 5px;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: whitesmoke;
}*/

.nav-button{
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.25em 10px;
  text-decoration: none;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: whitesmoke; 
}

.nav-button:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  top:100%;
  left: 0;
  border-radius: 0.5px;
  background:whitesmoke;
  transition: .3s;
}

.nav-button:hover:before {
  top: -webkit-calc(100% - 3px);
  top: calc(100% - 3px);
}
</style>