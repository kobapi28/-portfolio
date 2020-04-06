<template>
  <div class="header">
    <div class="header-inner">
      <h1 class="title">Shoma's Profile</h1>
      <Nav class="nav"></Nav>
    </div>

    <div class="header-res">
      <h1 class="title-res">Shoma's Profile</h1>
      <div class="nav-res">
        <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
          <font-awesome-icon icon="user-circle" class="nav-icon"/>
          <p class="comment">About</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
          <font-awesome-icon icon="code" class="nav-icon"/>
          <p class="comment">Skill</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#work')">
          <font-awesome-icon icon="hammer" class="nav-icon"/>
          <p class="comment">Works</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">
          <font-awesome-icon icon="handshake" class="nav-icon"/>
          <p class="comment">Contact</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'

export default{
    components:{
        Nav,
    },
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
.header{
  background-color:pink;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.header-inner{
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
}
.title{
  padding:20px 0px;
  margin:unset;
}
.nav{
  margin: auto ;
  margin-right: 0;
  padding: auto;
}

.header-res{
  display: none;
}

.title-res{
  margin: auto;
  padding: 10px;
}

.nav-res{
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.nav-icon{
  font-size: 1.5em;
}

.comment{
  margin:5px 0;
  font-weight: 500;
}

.link-content{
  color: black;
  text-decoration: none;
  min-width: 8%;
  font-size: 10px;
  text-align: center;
}

@media screen and (max-width: 768px){
	.header-inner{
    display: none;
  }

  .header-res{
    display:block;
  }
}
</style>