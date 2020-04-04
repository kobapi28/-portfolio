<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="handshake" class="icon"/> Contact</h1>
        <div>
            <h2>Location</h2>
            <p>Japan,Mie<br>Suzuka city</p>

            <h2>Around the web</h2>
            <div class="about link">
                <a href="http://twitter.com/shoma_h30" class="me link"><font-awesome-icon :icon="['fab','twitter']" class="web-icon"/></a>
                <a href="mailto:sho1228.k@gmail.com" class="me link"><font-awesome-icon icon="envelope" class="web-icon"/></a>
                <a href="http://github.com/shoma3571" class="me link"><font-awesome-icon :icon="['fab','github']" class="web-icon"/></a>
            </div>
        </div>
    </div>
</template>

<style>
.link{
    width: 50%;
}

.web-icon{
    font-size: 5em;
    padding:1em;
}
</style>

