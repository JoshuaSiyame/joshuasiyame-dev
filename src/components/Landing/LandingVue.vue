<template lang="html">
    <div id="landing">
        <div id="landing-text-container">
            <p id="landing-text-greeting">Hi, there 👋 I'm</p>
            <div id="text-greeting-group-1">
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
            <!-- <div id="landing-image-bg"></div> -->
            <img :src="MyImage" alt="" id="landing-image">
            <div id="landing-social-links-container">
                <span id="landing-social-link-top-line"></span>
                <ol id="landing-social-links">
                    <li class="landing-social-link" v-for="(link, index) in socialLinks">
                        <SvgIcon type='mdi' :path="link['icon']" @click="appNavigation(link['link'])"
                            class="landing-social-link-icon" />
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
import MyImage from "@/assets/me/me-4.png"

// social links
const socialLinks = [
    {
        icon: mdiInstagram,
        link: 'https://www.instagram.com/joshuasiyame.dev/'
    },
    {
        icon: mdiAlphaXBoxOutline,
        link: 'https://x.com/j_siyame'
    },
    {
        icon: mdiLinkedin,
        link: 'https://www.linkedin.com/in/joshua-siyame-dev-a069ab282/'
    },
    {
        icon: mdiYoutube,
        link: 'https://youtube.com/joshuasiyame_dev'
    },
    // {
    //     icon: ,
    //     link: ''
    // }
];

const appNavigation = (link: string) => {
    try {
        // navigate
        let socialLink = document.createElement("a");
        socialLink.setAttribute('href', link);
        socialLink.setAttribute('target', '_blank');

        // open on blank page

        // add click event and open on blank page
        socialLink.click()
    } catch (error) {
        console.error("Failed to navigate: ", error)
    }
}
</script>

<style lang="css" scoped>
/* media queries */
@media screen and (max-width: 320px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        justify-content: center;
        /* border: 1px solid indigo; */
        /* height: 90vh; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 16px;
        text-align: center;
    }

    /* text greeting group 1 */
    #text-greeting-group-1 {
        display: flex;
        justify-content: center;
        column-gap: 1em;
    }

    /* landing text greeting 1 */
    #landing-text-greeting-1 {
        font-size: 30px;
        text-align: center;
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
        text-align: center;
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
        text-align: center;
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
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        align-items: center;
        /* justify-content: center; */
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        margin-left: auto;
        border-radius: 50%;
        /* position: absolute; */
        /* bottom: 8em; */
    }

    /* landing image */
    #landing-image {
        display: block;
        margin: 0 auto;
        width: 225px;
        /* height: 400px; */
        object-fit: cover;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
        /* border: 1px solid tomato; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* position: absolute; */
        /* bottom: 3.5em; */
        /* right: 10em; */
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        row-gap: 1em;
        column-gap: 1em;
    }

    /* landing social link top link line */
    #landing-social-link-top-line {
        display: block;
        background-color: #e19d32;
        width: 70px;
        height: 3px;
    }

    /* landing social links */
    #landing-social-links {
        display: flex;
        column-gap: 1em;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
        font-size: 32px;
    }
}

@media (min-width: 321px) and (max-width: 480px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        justify-content: center;
        /* border: 1px solid indigo; */
        /* height: 90vh; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 16px;
        text-align: center;
    }

    /* text greeting group 1 */
    #text-greeting-group-1 {
        display: flex;
        justify-content: center;
        column-gap: 1em;
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
        text-align: center;
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
        text-align: center;
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
        margin: 0 auto;
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        /* align-items: last baseline; */
        justify-content: space-between;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        margin-left: auto;
        border-radius: 50%;
        /* position: absolute; */
        /* bottom: 8em; */
    }

    /* landing image */
    #landing-image {
        display: block;
        margin: 0 auto;
        width: 225px;
        /* height: 400px; */
        object-fit: cover;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
        /* border: 1px solid tomato; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* position: absolute; */
        /* bottom: 3.5em; */
        /* right: 10em; */
        display: flex;
        justify-content: center;
        /* flex-direction: column; */
        align-items: center;
        row-gap: 1em;
        column-gap: 1em;
    }

    /* landing social link top link line */
    #landing-social-link-top-line {
        display: block;
        background-color: #e19d32;
        width: 70px;
        height: 3px;
    }

    /* landing social links */
    #landing-social-links {
        display: flex;
        column-gap: 1em;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
        font-size: 32px;
    }
}

@media (min-width: 481px) and (max-width: 700px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        justify-content: center;
        /* border: 1px solid indigo; */
        /* height: 90vh; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 18px;
        text-align: center;
    }

    /* text greeting group 1 */
    #text-greeting-group-1 {
        display: flex;
        justify-content: center;
        column-gap: 1em;
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
        text-align: center;
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
        text-align: center;
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 18px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 15px;
        max-width: 360px;
        margin: 0 auto;
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        /* align-items: last baseline; */
        justify-content: space-between;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        margin-left: auto;
        border-radius: 50%;
        /* position: absolute; */
        /* bottom: 8em; */
    }

    /* landing image */
    #landing-image {
        display: block;
        margin: 0 auto;
        width: 325px;
        /* height: 400px; */
        object-fit: cover;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
        /* border: 1px solid tomato; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* position: absolute; */
        /* bottom: 3.5em; */
        /* right: 10em; */
        display: flex;
        justify-content: center;
        /* flex-direction: column; */
        align-items: center;
        row-gap: 1em;
        column-gap: 1em;
    }

    /* landing social link top link line */
    #landing-social-link-top-line {
        display: block;
        background-color: #e19d32;
        width: 70px;
        height: 3px;
    }

    /* landing social links */
    #landing-social-links {
        display: flex;
        column-gap: 1em;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
        font-size: 32px;
    }
}

@media (min-width: 701px) and (max-width: 768px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        /* border: 1px solid indigo; */
        /* height: 90vh; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 18px;
        /* text-align: center; */
    }

    /* text greeting group 1 */
    #text-greeting-group-1 {
        display: flex;
        /* justify-content: center; */
        column-gap: 1em;
    }

    /* landing text greeting 1 */
    #landing-text-greeting-1 {
        font-size: 45px;
    }

    #landing-text-greeting-1::first-letter {
        text-shadow: -6px -3px 0px #f66657;
        /* color: #a4d9d6; */
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2 {
        font-size: 45px;
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2::first-letter {
        text-shadow: -6px -3px 0px #e19d32;
        /* color: #fdb35d; */
    }

    /* landing text greeting 3 */
    #landing-text-greeting-3 {
        font-size: 45px;
        /* text-align: center; */
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
        /* text-align: center; */
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 18px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 15px;
        max-width: 360px;
        /* margin: 0 auto; */
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid red; */
        display: flex;
        /* flex-direction: column; */
        row-gap: 1em;
        align-items: last baseline;
        justify-content: space-between;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        margin-left: auto;
        border-radius: 50%;
        /* position: absolute; */
        /* bottom: 8em; */
    }

    /* landing image */
    #landing-image {
        display: block;
        margin: 0 auto;
        width: 275px;
        /* height: 400px; */
        object-fit: cover;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
        /* border: 1px solid tomato; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* position: absolute; */
        /* bottom: 3.5em; */
        /* right: 10em; */
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        row-gap: 1em;
        column-gap: 1em;
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
        display: flex;
        flex-direction: column;
        column-gap: 1em;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
        font-size: 32px;
    }
}

@media (min-width: 701px) and (max-width: 768px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        /* border: 1px solid indigo; */
        /* height: 90vh; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 18px;
        /* text-align: center; */
    }

    /* text greeting group 1 */
    #text-greeting-group-1 {
        display: flex;
        /* justify-content: center; */
        column-gap: 1em;
    }

    /* landing text greeting 1 */
    #landing-text-greeting-1 {
        font-size: 45px;
    }

    #landing-text-greeting-1::first-letter {
        text-shadow: -6px -3px 0px #f66657;
        /* color: #a4d9d6; */
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2 {
        font-size: 45px;
    }

    /* landing text greeting 2 */
    #landing-text-greeting-2::first-letter {
        text-shadow: -6px -3px 0px #e19d32;
        /* color: #fdb35d; */
    }

    /* landing text greeting 3 */
    #landing-text-greeting-3 {
        font-size: 45px;
        /* text-align: center; */
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
        /* text-align: center; */
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 18px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 15px;
        max-width: 360px;
        /* margin: 0 auto; */
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid red; */
        display: flex;
        /* flex-direction: column; */
        row-gap: 1em;
        align-items: last baseline;
        justify-content: space-between;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        margin-left: auto;
        border-radius: 50%;
        /* position: absolute; */
        /* bottom: 8em; */
    }

    /* landing image */
    #landing-image {
        display: block;
        margin: 0 auto;
        width: 275px;
        /* height: 400px; */
        object-fit: cover;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
        /* border: 1px solid tomato; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* position: absolute; */
        /* bottom: 3.5em; */
        /* right: 10em; */
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        row-gap: 1em;
        column-gap: 1em;
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
        display: flex;
        flex-direction: column;
        column-gap: 1em;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
        font-size: 32px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        /* border: 1px solid indigo; */
        /* height: 90vh; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 19px;
        /* text-align: center; */
    }

    /* text greeting group 1 */
    #text-greeting-group-1 {
        display: flex;
        /* justify-content: center; */
        column-gap: 1em;
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
        /* text-align: center; */
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
        /* text-align: center; */
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 19px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 16px;
        max-width: 360px;
        /* margin: 0 auto; */
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid red; */
        display: flex;
        /* flex-direction: column; */
        row-gap: 1em;
        align-items: last baseline;
        justify-content: space-between;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        margin-left: auto;
        border-radius: 50%;
        /* position: absolute; */
        /* bottom: 8em; */
    }

    /* landing image */
    #landing-image {
        display: block;
        margin: 0 auto;
        width: 300px;
        /* height: 400px; */
        object-fit: cover;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
        /* border: 1px solid tomato; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* position: absolute; */
        /* bottom: 3.5em; */
        /* right: 10em; */
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        row-gap: 1em;
        column-gap: 1em;
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
        display: flex;
        flex-direction: column;
        column-gap: 1em;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
        font-size: 32px;
    }
}

@media (min-width: 1025px) and (max-width: 1200px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        /* border: 1px solid indigo; */
        /* height: 90vh; */
    }

    /* landing text container */
    #landing-text-container {
        /* border: 1px solid red; */
        align-self: center;
    }

    /* landing text greeting */
    #landing-text-greeting {
        font-size: 20px;
        /* text-align: center; */
    }

    /* text greeting group 1 */
    #text-greeting-group-1 {
        display: flex;
        /* justify-content: center; */
        column-gap: 1em;
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
        font-size: 60px;
        /* text-align: center; */
    }

    #landing-text-greeting-3::first-letter {
        text-shadow: -6px -3px 0px skyblue;
    }

    /* landing extra content */
    #landing-extra-content {
        margin-top: 2em;
        /* text-align: center; */
    }

    /* landing extra text */
    #landing-extra-text {
        font-size: 20px;
        color: #11b5d2;
        margin-bottom: .5em;
    }

    /* landing extra about */
    #landing-extra-about {
        font-size: 16px;
        max-width: 360px;
        /* margin: 0 auto; */
    }

    /* landing image container */
    #landing-image-container {
        /* border: 1px solid red; */
        display: flex;
        /* flex-direction: column; */
        row-gap: 1em;
        align-items: last baseline;
        justify-content: space-between;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        margin-left: auto;
        border-radius: 50%;
        /* position: absolute; */
        /* bottom: 8em; */
    }

    /* landing image */
    #landing-image {
        display: block;
        margin: 0 auto;
        width: 375px;
        /* height: 400px; */
        object-fit: cover;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
        /* border: 1px solid tomato; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* position: absolute; */
        /* bottom: 3.5em; */
        /* right: 10em; */
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        row-gap: 1em;
        column-gap: 1em;
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
        display: flex;
        flex-direction: column;
        column-gap: 1em;
        row-gap: .5em;
    }

    /* landing social link */
    .landing-social-link {}

    /* landing social link icon */
    .landing-social-link-icon {
        color: #f6f6f6;
        font-size: 32px;
    }
}

@media screen and (min-width: 1201px) {

    /* landing */
    #landing {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        /* border: 1px solid indigo; */
        /* height: 90vh; */
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

    /* text greeting group 1 */
    #text-greeting-group-1{
        display: flex;
        column-gap: 1em;
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
        display: flex;
        align-items: last baseline;
        justify-content: space-between;
    }

    /* landing image bg */
    #landing-image-bg {
        box-shadow: 0px 0px 12px 5px #11b5d2;
        background-color: #e19d32;
        width: 250px;
        height: 250px;
        margin-left: auto;
        border-radius: 50%;
        /* position: absolute; */
        /* bottom: 8em; */
    }

    /* landing image */
    #landing-image {
        display: block;
        margin-left: auto;
        width: 400px;
        /* height: 400px; */
        object-fit: cover;
        /* transform: scale(1.25); */
        /* object-position: 0em 0em; */
        /* border: 1px solid tomato; */
    }

    /* landing social links container */
    #landing-social-links-container {
        /* position: absolute; */
        /* bottom: 3.5em; */
        /* right: 10em; */
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
        font-size: 32px;
    }
}
</style>