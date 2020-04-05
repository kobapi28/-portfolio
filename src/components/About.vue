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
            

            <h2><font-awesome-icon icon="search" class="icon"/> Recent interests</h2>
            <p class="text">Vue.js<br>UI,UX design</p>
        </div>
    </div>
</template>


<style>
.about{
    display:inline-flex;
    width: 80%;
}

.me{
    width: 40%;
    margin:0 10px;
}

@media screen and (max-width: 700px){
	.about {
		flex-direction: column;
	}

	.me {
		width: 100%;
	}
}
</style>