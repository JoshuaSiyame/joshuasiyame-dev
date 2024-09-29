<template lang="html">
    <div id="skills">
        <h3 id="skills-header">My Skills</h3>
        <div id="skills-content-1">
            <div class="skill-item" v-for="(skill, index) in skills.slice(0,4)">
                <img :src="skill['image']" alt="" class="skill-icon" />
                <p class="skill-title">{{ skill['title'] }}</p>
            </div>
        </div>
        <div id="skills-content-2">
            <div class="skill-item" v-for="(skill, index) in skills.slice(4, 8)">
                <img :src="skill['image']" alt="" class="skill-icon" />
                <p class="skill-title">{{ skill['title'] }}</p>
            </div>
        </div>
        <div id="skills-content-3">
            <div class="skill-item" v-for="(skill, index) in skills.slice(-6)">
                <img :src="skill['image']" alt="" class="skill-icon" />
                <p class="skill-title">{{ skill['title'] }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VueIcon from "@/assets/skills/vue-js-96.png";
import ReactIcon from "@/assets/skills/react-96.png";
import ReactNativeIcon from "@/assets/skills/react-96.png";
import HtmlIcon from "@/assets/skills/html-5-96.png";
import CSSIcon from "@/assets/skills/css3-96.png";
import JavaScriptIcon from "@/assets/skills/javascript-96.png";
import TypeScriptIcon from "@/assets/skills/typescript-96.png";
import NodeJsIcon from "@/assets/skills/nodejs-96.png";
import MongoDBIcon from "@/assets/skills/mongodb-96.png";
import MySqlIcon from "@/assets/skills/mysql-96.png";
import CiCdIcon from "@/assets/skills/continuity-96.png";
import RWDIcon from "@/assets/skills/responsive-web-96.png";
import APIIcon from "@/assets/skills/api-96.png"
import PythonIcon from "@/assets/skills/python-96.png"

// skills object
const skills = [
    {
        image: ReactIcon,
        title: "ReactJs"
    },
    {
        image: ReactNativeIcon,
        title: "React-Native"
    },
    {
        image: VueIcon,
        title: "VueJs"
    },
    {
        image: HtmlIcon,
        title: "Html"
    },
    {
        image: CSSIcon,
        title: "CSS"
    },
    {
        image: JavaScriptIcon,
        title: "JavaScript"
    },
    {
        image: TypeScriptIcon,
        title: 'TypeScript'
    },
    {
        image: NodeJsIcon,
        title: 'NodeJs'
    },
    {
        image: MongoDBIcon,
        title: 'MongoDB'
    },
    {
        image: MySqlIcon,
        title: 'MySQL'
    },
    {
        image: CiCdIcon,
        title: 'CI/CD'
    },
    {
        image: RWDIcon,
        title: 'RWD'
    },
    {
        image: APIIcon,
        title: "Rest-APIs"
    },
    {
        image: PythonIcon,
        title: "Python"
    }
]

</script>

<style lang="css" scoped>
/* media queries */
@media screen and (min-width: 1201px){
    /* skills */
    #skills{
        margin: 5em 0;
    }

    /* skills header */
    #skills-header{
        font-size: 32px;
        text-align: center;
    }

    /* skills content */
#skills-content-1 {
    margin: 2em auto; /* Center the grid container itself */
    /* border: 1px solid red; */
    max-width: fit-content; /* Let the grid container shrink to the content width */
    
    display: grid;
    grid-template-columns: repeat(4, auto); /* 6 columns with auto width */
    
    justify-content: center; /* Center the grid items horizontally */
    align-content: center; /* Center the grid items vertically */
    
    column-gap: 2em; /* Space between columns */
    row-gap: 2em; /* Space between rows */
}

    /* skills content */
    #skills-content-2{
        margin: 2em auto;
        /* border: 1px solid rgb(151, 201, 132); */
        max-width: fit-content;
        display: grid;
        grid-template-columns: repeat(4, auto);
        /* justify-content: space-between; */
        column-gap: 2em;
    }

    /* skills content */
    #skills-content-3{
        margin: 2em auto;
        /* border: 1px solid rgb(151, 201, 132); */
        max-width: fit-content;
        display: grid;
        grid-template-columns: repeat(3, auto);
        /* justify-content: center; */
        /* justify-self: center; */
        /* align-items: center; */
        /* align-self: center; */
        /* align-content: center; */
        column-gap: 2em;
        row-gap: 2em;
    }

    /* skill item */
    .skill-item{
        background-color: #D4D4Ce20;
        width: 160px;
        padding: 1em;
        border-radius: 6px;
        height: 150px;
    }

    /* skill image */
    .skill-icon{
        display: block;
        margin: 0 auto;
        width: 80px;
    }

    /* skill title */
    .skill-title{
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin-top: .5em;
    }
}
</style>