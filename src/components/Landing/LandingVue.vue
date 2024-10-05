<template lang="html">
    <div id="landing">
        <div id="landing-text-container">
            <p id="landing-text-greeting">Hi, there 👋 I'm</p>
            <div style="display: flex; column-gap: 1em;">
                <h3 id="landing-text-greeting-1">Joshua</h3>
                <h3 id="landing-text-greeting-2">Philidon</h3>
            </div>
            <h3 id="landing-text-greeting-3">Siyame.</h3>
            <div id="landing-extra-content">
                <p id="landing-extra-text">Web &amp; Mobile Software Engineer</p>
                <p id="landing-extra-about">
                    I'm a professional software engineer with extensive development skills and knowledge, based in Dar
                    es Salaam, Tanzania.
                </p>
            </div>
        </div>
        <div id="landing-image-container">
            <div id="landing-image-bg"></div>
            <img :src="MyImage" alt="" id="landing-image">
            <div id="landing-social-links-container">
                <span id="landing-social-link-top-line"></span>
                <ol id="landing-social-links">
                    <li class="landing-social-link">
                        <SvgIcon type='mdi' :path="mdiInstagram" size='24' class="landing-social-link-icon" />
                    </li>
                    <li class="landing-social-link">
                        <SvgIcon type='mdi' :path="mdiAlphaXBoxOutline" size='24' class="landing-social-link-icon" />
                    </li>
                    <li class="landing-social-link">
                        <SvgIcon type='mdi' :path="mdiLinkedin" size='24' class="landing-social-link-icon" />
                    </li>
                    <li class="landing-social-link">
                        <SvgIcon type='mdi' :path="mdiYoutube" class="landing-social-link-icon" />
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiInstagram, mdiAlphaXBoxOutline, mdiLinkedin, mdiYoutube } from '@mdi/js';

// landing image binder
// import LandingImage from "../../assets/learn-2.png"
// import MyImage from "../../assets/me.png"
import MyImage from "@/assets/me/me-5.png"
</script>

<style lang="css" scoped>
/* media queries */
@media screen and (max-width: 320px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        /* align-items: center; */
        /* justify-content: center; */
        column-gap: 1em;
        row-gap: 1em;
        margin-top: 4em;
        /* border: 1px solid aqua; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 16px;
    }

    /* landing text greeting 1 */
    #landing-text-greeting-1 {
        font-size: 30px;
    }

    #landing-text-greeting-1::first-letter {
        text-shadow: -6px -3px 0px #f66657;
        /* color: #a4d9d6; */
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2 {
        font-size: 30px;
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2::first-letter {
        text-shadow: -6px -3px 0px #e19d32;
        /* color: #fdb35d; */
    }

    /* landing text greeting 3 */
    #landing-text-greeting-3 {
        font-size: 30px;
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 16px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 14px;
        max-width: 360px;
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid turquoise; */
        position: relative;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        bottom: 8em;
        z-index: 1;
    }

    /* landing image */
    #landing-image {
        /* display: none; */
        /* border: 1px solid green; */
        width: 100%;
        height: 350px;
        object-fit: cover;
        position: relative;
        z-index: 9999;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* border: 1px solid salmon; */
        position: absolute;
        bottom: .5em;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        row-gap: 1em;
        width: fit-content;
        right: 0;
    }

    /* landing social link top link line */
    #landing-social-link-top-line {
        display: block;
        background-color: #e19d32;
        width: 3px;
        height: 70px;
    }

    /* landing social links */
    #landing-social-links {
        display: grid;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
    }
}

@media (min-width: 321px) and (max-width: 480px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        /* align-items: center; */
        /* justify-content: center; */
        column-gap: 1em;
        row-gap: 1em;
        margin-top: 4em;
        /* border: 1px solid aqua; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 18px;
    }

    /* landing text greeting 1 */
    #landing-text-greeting-1 {
        font-size: 35px;
    }

    #landing-text-greeting-1::first-letter {
        text-shadow: -6px -3px 0px #f66657;
        /* color: #a4d9d6; */
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2 {
        font-size: 35px;
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2::first-letter {
        text-shadow: -6px -3px 0px #e19d32;
        /* color: #fdb35d; */
    }

    /* landing text greeting 3 */
    #landing-text-greeting-3 {
        font-size: 35px;
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 16px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 14px;
        max-width: 360px;
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid turquoise; */
        position: relative;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        position: absolute;
        bottom: 8em;
        z-index: 1;
    }

    /* landing image */
    #landing-image {
        /* display: none; */
        /* border: 1px solid green; */
        width: 100%;
        height: 425px;
        object-fit: cover;
        position: relative;
        z-index: 9999;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* border: 1px solid salmon; */
        position: absolute;
        bottom: .5em;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        row-gap: 1em;
        width: fit-content;
        right: 0;
    }

    /* landing social link top link line */
    #landing-social-link-top-line {
        display: block;
        background-color: #e19d32;
        width: 3px;
        height: 70px;
    }

    /* landing social links */
    #landing-social-links {
        display: grid;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
    }
}

@media (min-width: 481px) and (max-width: 700px) {

/* landing */
#landing {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* align-items: center; */
    /* justify-content: center; */
    column-gap: 1em;
    row-gap: 1em;
    margin-top: 4em;
    /* border: 1px solid aqua; */
}

/* landing text container */
#landing-text-container {
    /* border: 1px solid red; */
    align-self: center;
}

/* landing text greeting */
#landing-text-greeting {
    font-size: 18px;
}

/* landing text greeting 1 */
#landing-text-greeting-1 {
    font-size: 40px;
}

#landing-text-greeting-1::first-letter {
    text-shadow: -6px -3px 0px #f66657;
    /* color: #a4d9d6; */
}

/* landing text greeting 2 */
#landing-text-greeting-2 {
    font-size: 40px;
}

/* landing text greeting 2 */
#landing-text-greeting-2::first-letter {
    text-shadow: -6px -3px 0px #e19d32;
    /* color: #fdb35d; */
}

/* landing text greeting 3 */
#landing-text-greeting-3 {
    font-size: 40px;
}

#landing-text-greeting-3::first-letter {
    text-shadow: -6px -3px 0px skyblue;
}

/* landing extra content */
#landing-extra-content {
    margin-top: 2em;
}

/* landing extra text */
#landing-extra-text {
    font-size: 16px;
    color: #11b5d2;
    margin-bottom: .5em;
}

/* landing extra about */
#landing-extra-about {
    font-size: 15px;
    max-width: 360px;
}

/* landing image container */
#landing-image-container {
    /* border: 1px solid turquoise; */
    position: relative;
}

/* landing image bg */
#landing-image-bg {
    box-shadow: 0px 0px 12px 5px #11b5d2;
    background-color: #e19d32;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    bottom: 8em;
    z-index: 1;
}

/* landing image */
#landing-image {
    /* display: none; */
    /* border: 1px solid green; */
    width: 325px;
    height: 450px;
    object-fit: cover;
    position: relative;
    z-index: 9999;
    /* transform: scale(1.25); */
    /* object-position: 0em 0em; */
}

/* landing social links container */
#landing-social-links-container {
    /* border: 1px solid salmon; */
    position: absolute;
    bottom: .5em;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    row-gap: 1em;
    width: fit-content;
    right: 0;
}

/* landing social link top link line */
#landing-social-link-top-line {
    display: block;
    background-color: #e19d32;
    width: 3px;
    height: 70px;
}

/* landing social links */
#landing-social-links {
    display: grid;
    row-gap: .5em;
}

/* landing social link */
.landing-social-link {}

/* landing social link icon */
.landing-social-link-icon {
    color: #f6f6f6;
}
}

@media (min-width: 701px) and (max-width: 1024px) {

/* landing */
#landing {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* align-items: center; */
    /* justify-content: center; */
    column-gap: 1em;
    row-gap: 1em;
    margin-top: 4em;
    /* border: 1px solid aqua; */
}

/* landing text container */
#landing-text-container {
    /* border: 1px solid red; */
    align-self: center;
}

/* landing text greeting */
#landing-text-greeting {
    font-size: 18px;
}

/* landing text greeting 1 */
#landing-text-greeting-1 {
    font-size: 40px;
}

#landing-text-greeting-1::first-letter {
    text-shadow: -6px -3px 0px #f66657;
    /* color: #a4d9d6; */
}

/* landing text greeting 2 */
#landing-text-greeting-2 {
    font-size: 40px;
}

/* landing text greeting 2 */
#landing-text-greeting-2::first-letter {
    text-shadow: -6px -3px 0px #e19d32;
    /* color: #fdb35d; */
}

/* landing text greeting 3 */
#landing-text-greeting-3 {
    font-size: 40px;
}

#landing-text-greeting-3::first-letter {
    text-shadow: -6px -3px 0px skyblue;
}

/* landing extra content */
#landing-extra-content {
    margin-top: 2em;
}

/* landing extra text */
#landing-extra-text {
    font-size: 16px;
    color: #11b5d2;
    margin-bottom: .5em;
}

/* landing extra about */
#landing-extra-about {
    font-size: 15px;
    max-width: 360px;
}

/* landing image container */
#landing-image-container {
    /* border: 1px solid turquoise; */
    position: relative;
}

/* landing image bg */
#landing-image-bg {
    box-shadow: 0px 0px 12px 5px #11b5d2;
    background-color: #e19d32;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    bottom: 8em;
    z-index: 1;
}

/* landing image */
#landing-image {
    /* display: none; */
    /* border: 1px solid green; */
    width: 400px;
    height: 450px;
    object-fit: cover;
    position: relative;
    z-index: 9999;
    /* transform: scale(1.25); */
    /* object-position: 0em 0em; */
}

/* landing social links container */
#landing-social-links-container {
    /* border: 1px solid salmon; */
    position: absolute;
    bottom: .5em;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    row-gap: 1em;
    width: fit-content;
    right: 0;
}

/* landing social link top link line */
#landing-social-link-top-line {
    display: block;
    background-color: #e19d32;
    width: 3px;
    height: 70px;
}

/* landing social links */
#landing-social-links {
    display: grid;
    row-gap: .5em;
}

/* landing social link */
.landing-social-link {}

/* landing social link icon */
.landing-social-link-icon {
    color: #f6f6f6;
}
}

@media (min-width: 1025px) and (max-width: 1200px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: 1fr .8fr;
        align-items: center;
        justify-content: center;
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 19px;
    }

    /* landing text greeting 1 */
    #landing-text-greeting-1 {
        font-size: 50px;
    }

    #landing-text-greeting-1::first-letter {
        text-shadow: -6px -3px 0px #f66657;
        /* color: #a4d9d6; */
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2 {
        font-size: 50px;
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2::first-letter {
        text-shadow: -6px -3px 0px #e19d32;
        /* color: #fdb35d; */
    }

    /* landing text greeting 3 */
    #landing-text-greeting-3 {
        font-size: 50px;
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 20px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 18px;
        max-width: 360px;
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid red; */
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 280px;
        height: 280px;
        border-radius: 50%;
        position: absolute;
        bottom: 8em;
    }

    /* landing image */
    #landing-image {
        width: 100%;
        height: 380px;
        object-fit: cover;
        transform: scale(1.25);
        object-position: 0em 0em;
    }

    /* landing social links container */
    #landing-social-links-container {
        position: absolute;
        bottom: 3.5em;
        right: 5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1em;
    }

    /* landing social link top link line */
    #landing-social-link-top-line {
        display: block;
        background-color: #e19d32;
        width: 3px;
        height: 70px;
    }

    /* landing social links */
    #landing-social-links {
        display: grid;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
    }
}

@media screen and (min-width: 1201px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: 1fr .8fr;
        align-items: center;
        justify-content: center;
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 20px;
    }

    /* landing text greeting 1 */
    #landing-text-greeting-1 {
        font-size: 60px;
    }

    #landing-text-greeting-1::first-letter {
        text-shadow: -6px -3px 0px #f66657;
        /* color: #a4d9d6; */
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2 {
        font-size: 60px;
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2::first-letter {
        text-shadow: -6px -3px 0px #e19d32;
        /* color: #fdb35d; */
    }

    /* landing text greeting 3 */
    #landing-text-greeting-3 {
        font-size: 50px;
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 20px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 18px;
        max-width: 360px;
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid red; */
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        position: absolute;
        bottom: 8em;
    }

    /* landing image */
    #landing-image {
        width: 100%;
        height: 500px;
        object-fit: cover;
        transform: scale(1.25);
        object-position: 0em 0em;
    }

    /* landing social links container */
    #landing-social-links-container {
        position: absolute;
        bottom: 3.5em;
        right: 10em;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1em;
    }

    /* landing social link top link line */
    #landing-social-link-top-line {
        display: block;
        background-color: #e19d32;
        width: 3px;
        height: 70px;
    }

    /* landing social links */
    #landing-social-links {
        display: grid;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
    }
}
</style>