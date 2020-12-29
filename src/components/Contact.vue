<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="handshake" class="icon"/> Contact</h1>
        <div class="sam">
            <h2><font-awesome-icon icon="map-marker-alt" class="icon"/> Location</h2>
            <p class="text">Japan,Mie<br>Suzuka city</p>

            <h2><font-awesome-icon icon="globe" class="icon"/> Around the web</h2>
            <div class="link">
                <a href="http://twitter.com/shoma_prog" class="link-icon"><font-awesome-icon :icon="['fab','twitter']" class="web-icon twitter"/></a>
                <a href="mailto:sho1228.k@gmail.com" class="link-icon"><font-awesome-icon icon="envelope" class="web-icon mail"/></a>
                <a href="http://github.com/shoma3571" class="link-icon"><font-awesome-icon :icon="['fab','github']" class="web-icon github"/></a>
                <a href="https://shoma3571.hatenablog.com/" class="link-icon"><font-awesome-icon icon="blog" class="web-icon hateblo"/></a>
            </div>
        </div>
    </div>
</template>

<style>

.sam{
    text-align: center;
}
.link{
    display:inline-flex;
    width: 30%;
    justify-content: center;
}

.link-icon{
    margin: 0 10px;
    margin-bottom: 20px;
}

.web-icon{
    font-size: 2em;
    background-color: white;
    padding:0.3em;
    border-radius: 50%;
}

.web-icon:hover{
    color: white;
}

.twitter{
    color: #1DA1F2;
}
.twitter:hover{
    background-color: #1DA1F2;
}


.mail{
    color: #DD5144;
}
.mail:hover{
    background-color: #DD5144;
}

.github{
    color: #171515;
}
.github:hover{
    background-color: #171515;
}

.hateblo{
    color: #193278;
}
.hateblo:hover{
    background-color: #193278;
}

@media screen and (max-width: 768px){
    .web-icon{
        color:white;
    }

    .twitter{
        background-color: #1DA1F2;
    }

    .mail{
        background-color: #DD5144;
    }

    .github{
        background-color: #171515;
    }

    .hateblo{
        background-color: #193278;
    }
}
</style>

