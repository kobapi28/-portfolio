<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="hammer" class="icon"/> Works</h1>
        
        <ul class="works">
          <li class="card">
            <img class="card-img" src="../assets/work/graph.png" alt="">
            <div class="card-content">
              <h1 class="card-title jp">三重県コロナウイルス対策サイト</h1>
              <p class="card-text">東京都のものから派生したサイト</p>
              <p class="card-lang">Language : JavaScript(Vue.js,Nuxt.js)</p>
              <br>
              <a href="https://mie.stopcovid19.jp" class="card-link">Website</a>
              <a href="https://github.com/FlexiblePrintedCircuits/covid19-mie" class="card-link github-link">Github</a>
            </div>
          </li>
          <li class="card">
            <img class="card-img" src="../assets/work/logo.png" alt="">
            <div class="card-content">
              <h1 class="card-title jp">Fulfill</h1>
              <p class="card-text">JPHACKS2020提出作品</p>
              <p class="card-lang">Language : JavaScript(Vue.js,Ionic)</p>
              <br>
              <a href="https://c-2006.firebaseapp.com/" class="card-link">Website</a>
              <a href="https://github.com/jphacks/C_2006" class="card-link github-link">Github</a>
            </div>
          </li>
          <li class="card">
            <img class="card-img" src="../assets/work/this.png" alt="">
            <div class="card-content">
              <h1 class="card-title">This site</h1>
              <p class="card-text">私のプロフィールサイト</p>
              <p class="card-lang">Language : JavaScript(Vue.js)</p>
              <br>
              <a href="https://github.com/shoma3571/-portfolio" class="card-link github-link">Github</a>
            </div>
          </li>
        </ul>
    </div>
</template>




<style>
.works{
  list-style-type: none;
  padding-left: 0;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}

.jp{
  font-weight: 100;
}

.card-lang{
  font-weight: 500;
}

.card {
  display: inline-block;
  margin: 30px 60px;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-height: 200px;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}

.card-link{
  border: 1px solid #00aaff;
  text-decoration: none;
  color: #00aaff;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
}
.card-link:hover {
  font-weight: 700;
}

.github-link{
  border-color: #171515;
  color: #171515;
}



/*.work-content{
	width: 350px;
	padding: 10px;
	margin: 30px 60px;
  display: inline-block;
}

.work-content:hover{
  background-color: rgba(50, 50, 100, 0.3);
}

.works-image{
    width: 100%;
}*/

@media screen and (max-width: 768px){
  .works{
      padding-left: 1%;
      padding-right: 1%;
  }
}

@media screen and (max-width: 550px){
  .card{
    width: 280px;
    margin: 30px 0;
  }
}
</style>