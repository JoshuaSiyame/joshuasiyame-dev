<template lang="html">
    <div id="portfolio">
        <h3 id="portfolio-header">Portfolio</h3>
        <div id="portfolio-content">
            <img v-for="(portfolio, index) in portfolios" :src="portfolio['image']" alt="" class="portfolio-item" @click="appNavigation(portfolio['uri'])"
            :style="{boxShadow: portfolio.shadow_color}" />
        </div>
    </div>
</template>

<script setup lang="ts">
import LocalhostShows from "@/assets/portfolio/localhostshows.png";
import EcoHalo from "@/assets/portfolio/ecohalo.jpg";
import unwrapJs from "@/assets/portfolio/unwrapjs.jpg";
import OldPortfolio from "@/assets/portfolio/old-portfolio.jpg";

// portfolios
const portfolios = [
    {
        image: LocalhostShows,
        uri: 'https://localhostshows.netlify.app',
        shadow_color: '6px 6px 0px 0px #ffa883'
    },
    {
        image: EcoHalo,
        uri: 'https://expo.dev/accounts/joshua.decoded/projects/clean-up/builds/355b1859-6e1f-49f5-891a-936625f6c86d',
        shadow_color: '6px 6px 0px 0px #11b5d2',
    },
    {
        image: unwrapJs,
        uri: 'https://unwrapjs.netlify.app',
        shadow_color: '6px 6px 0px 0px #e19d32',
    },
    {
        image: OldPortfolio,
        uri: 'https://joshuapsiyame.netlify.app',
        shadow_color: '6px 6px 0px 0px cyan',
    },
    // {
    //     image: ,
    //     uri: 
    // },
    // {
    //     image: ,
    //     uri: 
    // },
]

// navigation
const appNavigation = (url: string): void =>{
    try {
        // open new tab
        window.open(url, "_blank")
    } catch (error) {
        console.error("Failed to open new tab: ", error);
    }
}
</script>

<style lang="css" scoped>
/* media queries */
@media screen and (max-width: 320px) {
    /* portfolio */
    #portfolio{
        margin: 5em 0;
    }

    /* portfolio header */
    #portfolio-header{
        text-align: center;
        font-size: 32px;
        /* color: c; */
    }

    /* portfolio content */
    #portfolio-content{
        margin: 2em 0;
        display: grid;
        /* grid-template-columns: repeat(1, auto); */
        justify-content: center;
        align-content: center;
        align-items: center;
        row-gap: 3em;
    }

    /* portfolio item */
    .portfolio-item{
        object-fit: cover;
        width: 250px;
        height: 325px;
        border-radius: 10px;
        /* opacity: .8; */
    }
}

@media (min-width: 321px) and (max-width: 480px) {
    /* portfolio */
    #portfolio{
        margin: 5em 0;
    }

    /* portfolio header */
    #portfolio-header{
        text-align: center;
        font-size: 26px;
        /* color: c; */
    }

    /* portfolio content */
    #portfolio-content{
        margin: 2em 0;
        display: grid;
        /* grid-template-columns: repeat(1, auto); */
        justify-content: center;
        align-content: center;
        align-items: center;
        row-gap: 2em;
    }

    /* portfolio item */
    .portfolio-item{
        object-fit: cover;
        width: 250px;
        height: 325px;
        border-radius: 10px;
        /* opacity: .8; */
    }
}

@media (min-width: 481px) and (max-width: 600px) {
    /* portfolio */
    #portfolio{
        margin: 5em 0;
    }

    /* portfolio header */
    #portfolio-header{
        text-align: center;
        font-size: 26px;
        /* color: c; */
    }

    /* portfolio content */
    #portfolio-content{
        margin: 2em 0;
        display: grid;
        /* grid-template-columns: repeat(2, auto); */
        justify-content: center;
        align-content: center;
        align-items: center;
        /* column-gap: 2em; */
        row-gap: 2em;
    }

    /* portfolio item */
    .portfolio-item{
        object-fit: cover;
        width: 250px;
        height: 325px;
        border-radius: 10px;
        /* opacity: .8; */
    }
}

@media (min-width: 601px) and (max-width: 768px) {
    /* portfolio */
    #portfolio{
        margin: 5em 0;
    }

    /* portfolio header */
    #portfolio-header{
        text-align: center;
        font-size: 28px;
        /* color: c; */
    }

    /* portfolio content */
    #portfolio-content{
        margin: 2em 0;
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: center;
        align-content: center;
        align-items: center;
        column-gap: 2em;
        row-gap: 2em;
    }

    /* portfolio item */
    .portfolio-item{
        object-fit: cover;
        width: 250px;
        height: 325px;
        border-radius: 10px;
        /* opacity: .8; */
    }
}

@media (min-width: 769px) and (max-width: 900px) {
    /* portfolio */
    #portfolio{
        margin: 5em 0;
    }

    /* portfolio header */
    #portfolio-header{
        text-align: center;
        font-size: 28px;
        /* color: c; */
    }

    /* portfolio content */
    #portfolio-content{
        margin: 2em 0;
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: center;
        align-content: center;
        align-items: center;
        column-gap: 2em;
        row-gap: 2em;
    }

    /* portfolio item */
    .portfolio-item{
        object-fit: cover;
        width: 250px;
        height: 325px;
        border-radius: 10px;
        /* opacity: .8; */
    }
}

@media (min-width: 901px) and (max-width: 1024px) {
    /* portfolio */
    #portfolio{
        margin: 5em 0;
    }

    /* portfolio header */
    #portfolio-header{
        text-align: center;
        font-size: 28px;
        /* color: c; */
    }

    /* portfolio content */
    #portfolio-content{
        margin: 2em 0;
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: center;
        align-content: center;
        align-items: center;
        column-gap: 2em;
        row-gap: 2em;
    }

    /* portfolio item */
    .portfolio-item{
        object-fit: cover;
        width: 250px;
        height: 325px;
        border-radius: 10px;
        /* opacity: .8; */
    }
}

@media (min-width: 1025px) and (max-width: 1200px) {
    /* portfolio */
    #portfolio{
        margin: 5em 0;
    }

    /* portfolio header */
    #portfolio-header{
        text-align: center;
        font-size: 28px;
        /* color: c; */
    }

    /* portfolio content */
    #portfolio-content{
        margin: 2em 0;
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: center;
        align-content: center;
        align-items: center;
        column-gap: 2em;
        row-gap: 2em;
    }

    /* portfolio item */
    .portfolio-item{
        object-fit: cover;
        width: 250px;
        height: 325px;
        border-radius: 10px;
        /* opacity: .8; */
    }
}

@media screen and (min-width: 1201px) {
    /* portfolio */
    #portfolio{
        margin: 5em 0;
    }

    /* portfolio header */
    #portfolio-header{
        text-align: center;
        font-size: 32px;
        /* color: c; */
    }

    /* portfolio content */
    #portfolio-content{
        margin: 2em 0;
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: center;
        row-gap: 3em;
        column-gap: 3em;
    }

    /* portfolio item */
    .portfolio-item{
        object-fit: cover;
        width: 275px;
        height: 350px;
        border-radius: 10px;
        /* opacity: .8; */
    }
}
</style>