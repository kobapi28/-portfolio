<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="hammer" class="icon"/> Works</h1>
        <ul class="works">
            <li class="work-content">
                <img src="../assets/tavi.jpg" alt="logo" class="works-image">
                <h3>Tavinow</h3>
                <p>PCK2019モバイル部門のアプリケーション</p>
            </li>
            <li class="work-content">
                <img src="../assets/miecovid.jpg" alt="logo" class="works-image">
                <h3>三重県コロナウイルス対策サイト</h3>
                <p>東京都のリポジトリより作成したサイト</p>
            </li>
            <li class="work-content">
                <img src="../assets/ideatree.jpg" alt="logo" class="works-image">
                <h3>IdeaTree</h3>
                <p>アイデア出しを助けるアプリケーション</p>
            </li>
            <li class="work-content">
                <img src="../assets/tavi.jpg" alt="logo" class="works-image">
                <h3>This site</h3>
                <p>このプロフィールサイト</p>
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

.work-content{
	width: 350px;
	padding: 10px;
	margin: 30px 60px;
  display: inline-block;
  border: 1px black solid;
  border-radius: 10px;
}

.work-content:hover{
  background-color: rgba(50, 50, 100, 0.3);
}

.works-image{
    max-width: 310px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
}

@media screen and (max-width: 768px){
  .works{
      padding-left: 1%;
      padding-right: 1%;
  }
}

@media screen and (max-width: 550px){
  .work-content{
    width: 250px;
    margin: 20px 10px;
  }
  .works-image{
    width: 210px;
    padding: 10px;
  }
}
</style>