<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="user-circle" class="icon"/> About</h1>
        <div>
            <div class="about">
              <div class="me">
                <h2><font-awesome-icon icon="pen" class="icon"/> Name</h2>
                <p class="text">Shoma Kobayashi</p>
              </div>

              <div class="me">
                <h2><font-awesome-icon icon="school" class="icon"/> School</h2>
                <p class="text">NIT Suzuka College</p>
              </div>

              <div class="me">
                <h2><font-awesome-icon icon="birthday-cake" class="icon"/> Birthday</h2>
                <p class="text">2002-12-28</p>
              </div>
            </div>
            

            <h2><font-awesome-icon icon="search" class="icon resent"/> Recent interests</h2>
            <p class="text">Vue.js<br>UI,UX design</p>
        </div>
    </div>
</template>


<style>
.about{
    display:inline-flex;
    padding-left: 5%;
    padding-right: 5%;
}

.resent{
  margin-top: 50px;
}

.me{
    margin:0 50px;
}


@media screen and (max-width: 768px){
	.about {
		flex-direction: column;
	}

	.me {
    margin: 0 auto;
	}
}
</style>