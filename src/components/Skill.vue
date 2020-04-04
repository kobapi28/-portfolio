<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="code" class="icon"/> Skill</h1>
        <div>
            <div class="languages">
                <div class="lang">
                    <font-awesome-icon :icon="['fab','html5']" class="lang-icon" />
                    <h3>HTML</h3>
                </div>
                <div class="lang">
                    <font-awesome-icon :icon="['fab','css3-alt']" class="lang-icon" />
                    <h3>CSS</h3>
                </div>
                <div class="lang">
                    <font-awesome-icon :icon="['fab','js-square']" class="lang-icon" />
                    <h3>JavaScript</h3>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.languages{
    display: inline-flex;
    width: 60%;
}

.lang{
    width: 30%;
    margin :0 10px;
}

.lang-icon{
    font-size: 3em;
}

@media screen and (max-width: 500px){
	.languages {
		flex-direction: column;
	}

	.lang {
		width: 100%;
	}
}
</style>


