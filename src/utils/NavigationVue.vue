<template lang="html">
    <div id="navigation">
        <!-- dev name and burger icon -->
        <!-- <a href="" id="dev-name">Josh.dev</a> -->
        <img :src="Logo" alt="" id="dev-logo">

        <!-- dev section links -->
        <ol id="dev-section-links" v-if="showDevSectionLinks">
            <li class="dev-section-link" v-for="(link, index) in links" @click="appNavigation(link)">{{ link }}</li>
            <!-- <li class="dev-section-link">Company</li> -->
        </ol>

        <!-- hamburger menu icon -->
        <SvgIcon type="mdi" :path="mdiMenu" v-if="!showDevSectionLinks"
            @click="showResponsiveNav = !showResponsiveNav" />

        <!-- dev message btn -->
        <!-- <button id="dev-message-btn">Message me</button> -->
        <!-- <SvgIcon type="mdi" :path="mdiEmailFast" size='26' /> -->
        <img :src="SendEmail" alt="" id="dev-send-mail" />
    </div>
    <div id="responsive-nav" v-if="showResponsiveNav">
        <div id="responsive-nav-bg"></div>
        <div id="responsive-nav-links-container">
            <!-- close btn -->
             <SvgIcon type="mdi" :path="mdiCloseOutline" size="24" @click="showResponsiveNav = false" />
             
             <!-- responsive dev section links -->
             <ol id="responsive-nav-links">
                <li class="responsive-nav-link" v-for="(link, index) in links" @click="()=>{ appNavigation(link); showResponsiveNav = false}" >{{ link }}</li>
                <!-- <li class="responsive-nav-link">Company</li> -->
            </ol>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu, mdiCloseOutline } from "@mdi/js";

// images
import Logo from "../assets/logo-11.png";
import SendEmail from "../assets/mail-2.png"

// links list
const links = [
    'about', 'skills', 'portfolio', 'experience', 'testimonial'
]

// show dev section links binder
const showDevSectionLinks = ref(true);
const showResponsiveNav = ref(false);

// screen width watcher
const getScreenWidth = () => {
    try {
        // screen width instance
        const screen_width = window.innerWidth
        console.log("Screen width: ", screen_width);

        // conditional changes
        if (screen_width < 1025) {
            showDevSectionLinks.value = false
        }

        if (screen_width > 1024) {
            showDevSectionLinks.value = true
        }
    } catch (error) {
        console.error("Failed to get screen width: ", error);
    }
}

// screen resize event listener
window.addEventListener('resize', () => {
    getScreenWidth();
});

// load data before showing nav
onBeforeMount(()=>{
    getScreenWidth();
});

// app navigation
const appNavigation = (path: string): void =>{
    try {
        // link
        let docPoint = document.createElement("a")

        // set attributes
        docPoint.setAttribute('href', `#${path}`);

        // add click event
        docPoint.click();
    } catch (error) {
        console.log("failed to navigate: ", error);
    }
}
</script>

<style lang="css" scoped>
/* General media queries */
/* dev logo */
#dev-logo {
    object-fit: cover;
}

/* dev links */
.dev-section-link{
    text-transform: capitalize;
}

/* responsive nav */
#responsive-nav {
    background-color: #287094;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2em 0;
    z-index: 999;
}

/* responsive nav bg */
#responsive-nav-bg {}

/* responsive nav links container */
#responsive-nav-links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    position: relative;
}

/* responsive nav links */
#responsive-nav-links {
    text-align: center;
    cursor: pointer;
    margin-top: 2em;
}

/* responsive nav link */
.responsive-nav-link {
    color: #f6f6f6;
    font-size: 14px;
    padding: .5em 0;
    text-transform: capitalize;
}

.responsive-nav-link:hover{
    border-bottom: 2px solid #d4d4ce;
}

/* media queries */
@media screen and (max-width: 320px) {

    /* dev navigation */
    #navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5em 0
    }

    /* dev name */
    #dev-name {
        color: #f6f6f6;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;
    }

    /* dev logo */
    #dev-logo {
        width: 30px;
        height: 30px;
    }

    /* dev section links */
    #dev-section-links {
        display: flex;
    }

    /* dev section link */
    .dev-section-link {
        padding: .5em 1em;
        cursor: pointer;
    }

    .dev-section-link:hover {
        color: #d4d4ce;
        border-bottom: 1.5px solid #d4d4ce;
    }

    /* dev message btn */
    #dev-message-btn {
        background-color: #287094;
        color: #f6f6f6;
        padding: .6em 1em;
        border: 1px solid #287094;
        border-radius: 10px;
        box-shadow: 0px 0px 3px 4px #28709480;
    }

    /* dev send mail */
    #dev-send-mail{
        width: 25px;
        height: 25px;
        object-fit: 'cover';
    }
}

@media (min-width: 321px) and (max-width: 480px) {

    /* dev navigation */
    #navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5em 0
    }

    /* dev name */
    #dev-name {
        color: #f6f6f6;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;
    }

    /* dev logo */
    #dev-logo {
        width: 35px;
        height: 35px;
    }

    /* dev section links */
    #dev-section-links {
        display: flex;
    }

    /* dev section link */
    .dev-section-link {
        padding: .5em 1em;
        cursor: pointer;
    }

    .dev-section-link:hover {
        color: #d4d4ce;
        border-bottom: 1.5px solid #d4d4ce;
    }

    /* dev message btn */
    #dev-message-btn {
        background-color: #287094;
        color: #f6f6f6;
        padding: .6em 1.5em;
        border: 1px solid #287094;
        border-radius: 10px;
        box-shadow: 0px 0px 3px 4px #28709480;
    }

    /* dev send mail */
    #dev-send-mail{
        width: 30px;
        height: 30px;
        object-fit: 'cover';
    }
}

@media (min-width: 481px) and (max-width: 768px) {

    /* dev navigation */
    #navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2em 0
    }

    /* dev name */
    #dev-name {
        color: #f6f6f6;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;
    }

    /* dev logo */
    #dev-logo {
        width: 45px;
        height: 45px;
    }

    /* dev section links */
    #dev-section-links {
        display: flex;
    }

    /* dev section link */
    .dev-section-link {
        padding: .5em 1em;
        cursor: pointer;
    }

    .dev-section-link:hover {
        color: #d4d4ce;
        border-bottom: 1.5px solid #d4d4ce;
    }

    /* dev message btn */
    #dev-message-btn {
        background-color: #287094;
        color: #f6f6f6;
        padding: .6em 1.5em;
        border: 1px solid #287094;
        border-radius: 10px;
        box-shadow: 0px 0px 3px 4px #28709480;
    }

    /* dev send mail */
    #dev-send-mail{
        width: 35px;
        height: 35px;
        object-fit: 'cover';
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

    /* dev navigation */
    #navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2em 0
    }

    /* dev name */
    #dev-name {
        color: #f6f6f6;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;
    }

    /* dev logo */
    #dev-logo {
        width: 45px;
        height: 45px;
    }

    /* dev section links */
    #dev-section-links {
        display: flex;
    }

    /* dev section link */
    .dev-section-link {
        padding: .5em 1em;
        cursor: pointer;
    }

    .dev-section-link:hover {
        color: #d4d4ce;
        border-bottom: 1.5px solid #d4d4ce;
    }

    /* dev message btn */
    #dev-message-btn {
        background-color: #287094;
        color: #f6f6f6;
        padding: .6em 2em;
        border: 1px solid #287094;
        border-radius: 10px;
        box-shadow: 0px 0px 3px 4px #28709480;
    }

    /* dev send mail */
    #dev-send-mail{
        width: 35px;
        height: 35px;
        object-fit: 'cover';
    }
}

@media (min-width: 1025px) and (max-width: 1200px) {

    /* dev navigation */
    #navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2em 0
    }

    /* dev name */
    #dev-name {
        color: #f6f6f6;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;
    }

    /* dev logo */
    #dev-logo {
        width: 50px;
        height: 50px;
    }

    /* dev section links */
    #dev-section-links {
        display: flex;
    }

    /* dev section link */
    .dev-section-link {
        padding: .5em 1em;
        cursor: pointer;
    }

    .dev-section-link:hover {
        color: #d4d4ce;
        border-bottom: 1.5px solid #d4d4ce;
    }

    /* dev message btn */
    #dev-message-btn {
        background-color: #287094;
        color: #f6f6f6;
        padding: .6em 2em;
        border: 1px solid #287094;
        border-radius: 10px;
        box-shadow: 0px 0px 3px 4px #28709480;
    }

    /* dev send mail */
    #dev-send-mail{
        width: 35px;
        height: 35px;
        object-fit: 'cover';
    }
}

@media screen and (min-width: 1201px) {

    /* dev navigation */
    #navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2em 0
    }

    /* dev name */
    #dev-name {
        color: #f6f6f6;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;
    }

    /* dev logo */
    #dev-logo {
        /* border: 1px solid red; */
        width: 50px;
        height: 50px;
    }

    /* dev section links */
    #dev-section-links {
        display: flex;
    }

    /* dev section link */
    .dev-section-link {
        padding: .5em 1em;
        cursor: pointer;
    }

    .dev-section-link:hover {
        color: #d4d4ce;
        border-bottom: 1.5px solid #d4d4ce;
    }

    /* dev message btn */
    #dev-message-btn {
        background-color: #287094;
        color: #f6f6f6;
        padding: .6em 2em;
        border: 1px solid #287094;
        border-radius: 10px;
        box-shadow: 0px 0px 3px 4px #28709480;
    }

    /* dev send mail */
    #dev-send-mail{
        width: 35px;
        height: 35px;
        object-fit: 'cover';
    }
}
</style>