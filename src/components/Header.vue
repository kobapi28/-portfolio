<template>
  <div class="header">
    <div class="header-inner">
      <h1 class="title">Profile</h1>
      <Nav class="nav"></Nav>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'

export default{
    components:{
        Nav,
    }
}
</script>

<style>
.header{
  background-color:pink;
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
</style>