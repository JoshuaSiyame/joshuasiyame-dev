<template lang="html">
    <div id="experience">
        <h3 id="experience-header">Experience</h3>
        <div id="experience-content">
            <div class="experience-item" v-for="(experience, index) in experiences">
                <h3 class="experience-item-header">{{ experience['time'] }}</h3>
                <div class="experience-item-figures">
                    <span class="experience-item-dot"></span>
                    <span class="experience-item-line"></span>
                </div>
                <div class="experience-item-content">
                    <h3 class="experience-item-content-header">{{ experience['role'] }}</h3>
                    <h4 class="experience-item-content-subheader">{{ experience['company'] }}</h4>
                    <p class="experience-item-content-text">
                        {{ experience['text'] }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// experience
const experiences = [
    {
        time: '01/2024 - Present',
        role: "Fullstack Web Developer",
        company: 'LindaPesa Tanzania Limited.',
        text: `\Developed and maintained both front-end and back-end applications, with a focus on clean,
                        efficient, and well-documented code. Actively participated in code reviews, debugging, and\n
                        staying updated with emerging trends and technologies in web development.\n
                        `
    },
    {
        time: '06/2021 - Present',
        role: "Freelancer, Web Developer",
        company: "Remote site",
        text: `\
                Expertly designed and created a variety of websites employing cutting-edge technologies such as React, 
                Express, MongoDB, Node (JavaScript Runtime engine), CSS, GIT/GITHUB, Adobe XD, Netlify a few to mention, 
                ensuring that the sites are visually beautiful, user-friendly, interactive and easy to navigate.
                `
    }

]
</script>

<style lang="css" scoped>
/* media queries */
@media screen and (max-width: 320px) {

/* experience */
#experience {
    margin: 5em 0;
}

/* experience header */
#experience-header {
    font-size: 24px;
    /* text-align: center; */
}

/* experience content */
#experience-content {
    margin-top: 1em;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
}

/* experience item */
.experience-item {
    /* display: flex; */
    column-gap: 1em;
    align-items: baseline;
    margin: 1em 0;
}

/* experience item header */
.experience-item-header {
    font-size: 15px;
    font-weight: 500;
}

/* experience item figures */
.experience-item-figures {
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    align-content: center;
    column-gap: .5em;
    row-gap: .5em;
    margin: 1em 0;
}

/* experience item dot */
.experience-item-dot {
    display: block;
    background-color: #fdb848;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

/* experience item line */
.experience-item-line {
    display: block;
    height: 2px;
    min-width: 125px;
    background-color: #11b5d2;
}

/* experience item content */
.experience-item-content {}

/* experience item content header */
.experience-item-content-header {
    font-size: 20px;
}

/* experience item content subheader */
.experience-item-content-subheader {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff90;
}

/* experience item content text */
.experience-item-content-text {
    font-size: 14px;
    width: 300px;
}
}

@media (min-width: 321px) and (max-width: 480px) {

/* experience */
#experience {
    margin: 5em 0;
}

/* experience header */
#experience-header {
    font-size: 24px;
    text-align: center;
}

/* experience content */
#experience-content {
    margin-top: 1em;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
}

/* experience item */
.experience-item {
    /* display: flex; */
    column-gap: 1em;
    align-items: baseline;
    margin: 1em 0;
}

/* experience item header */
.experience-item-header {
    font-size: 15px;
    font-weight: 500;
}

/* experience item figures */
.experience-item-figures {
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    align-content: center;
    column-gap: .5em;
    row-gap: .5em;
    margin: 1em 0;
}

/* experience item dot */
.experience-item-dot {
    display: block;
    background-color: #fdb848;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

/* experience item line */
.experience-item-line {
    display: block;
    height: 2px;
    min-width: 125px;
    background-color: #11b5d2;
}

/* experience item content */
.experience-item-content {}

/* experience item content header */
.experience-item-content-header {
    font-size: 20px;
}

/* experience item content subheader */
.experience-item-content-subheader {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff90;
}

/* experience item content text */
.experience-item-content-text {
    font-size: 14px;
    width: 300px;
}
}

@media (min-width: 481px) and (max-width: 600px) {

/* experience */
#experience {
    margin: 5em 0;
}

/* experience header */
#experience-header {
    font-size: 30px;
    text-align: center;
}

/* experience content */
#experience-content {
    margin-top: 3em;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
}

/* experience item */
.experience-item {
    display: flex;
    column-gap: 1em;
    align-items: baseline;
    margin: 2em 0;
}

/* experience item header */
.experience-item-header {
    font-size: 15px;
    font-weight: 500;
}

/* experience item figures */
.experience-item-figures {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    row-gap: .5em;
}

/* experience item dot */
.experience-item-dot {
    display: block;
    background-color: #fdb848;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

/* experience item line */
.experience-item-line {
    display: block;
    min-height: 125px;
    width: 2px;
    background-color: #11b5d2;
}

/* experience item content */
.experience-item-content {}

/* experience item content header */
.experience-item-content-header {
    font-size: 20px;
}

/* experience item content subheader */
.experience-item-content-subheader {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff90;
}

/* experience item content text */
.experience-item-content-text {
    font-size: 14px;
    width: 300px;
}
}

@media (min-width: 601px) and (max-width: 768px) {

/* experience */
#experience {
    margin: 5em 0;
}

/* experience header */
#experience-header {
    font-size: 30px;
    text-align: center;
}

/* experience content */
#experience-content {
    margin-top: 3em;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
}

/* experience item */
.experience-item {
    display: flex;
    column-gap: 2em;
    align-items: baseline;
    margin: 2em 0;
}

/* experience item header */
.experience-item-header {
    font-size: 15px;
    font-weight: 500;
}

/* experience item figures */
.experience-item-figures {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    row-gap: .5em;
}

/* experience item dot */
.experience-item-dot {
    display: block;
    background-color: #fdb848;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

/* experience item line */
.experience-item-line {
    display: block;
    min-height: 125px;
    width: 2px;
    background-color: #11b5d2;
}

/* experience item content */
.experience-item-content {}

/* experience item content header */
.experience-item-content-header {
    font-size: 20px;
}

/* experience item content subheader */
.experience-item-content-subheader {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff90;
}

/* experience item content text */
.experience-item-content-text {
    font-size: 14px;
    width: 350px;
}
}

@media (min-width: 769px) and (max-width: 1024px) {

/* experience */
#experience {
    margin: 5em 0;
}

/* experience header */
#experience-header {
    font-size: 30px;
    text-align: center;
}

/* experience content */
#experience-content {
    margin-top: 3em;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
}

/* experience item */
.experience-item {
    display: flex;
    column-gap: 2em;
    align-items: baseline;
    margin: 2em 0;
}

/* experience item header */
.experience-item-header {
    font-size: 15px;
    font-weight: 500;
}

/* experience item figures */
.experience-item-figures {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    row-gap: .5em;
}

/* experience item dot */
.experience-item-dot {
    display: block;
    background-color: #fdb848;
    width: 15px;
    height: 15px;
    border-radius: 50%;
}

/* experience item line */
.experience-item-line {
    display: block;
    min-height: 125px;
    width: 2px;
    background-color: #11b5d2;
}

/* experience item content */
.experience-item-content {}

/* experience item content header */
.experience-item-content-header {
    font-size: 20px;
}

/* experience item content subheader */
.experience-item-content-subheader {
    font-size: 14px;
    font-weight: 500;
    color: #ffffff90;
}

/* experience item content text */
.experience-item-content-text {
    font-size: 14px;
    width: 450px;
}
}

@media (min-width: 1025px) and (max-width: 1200px) {

/* experience */
#experience {
    margin: 5em 0;
}

/* experience header */
#experience-header {
    font-size: 32px;
    text-align: center;
}

/* experience content */
#experience-content {
    margin-top: 3em;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
}

/* experience item */
.experience-item {
    display: flex;
    column-gap: 2em;
    align-items: baseline;
    margin: 2em 0;
}

/* experience item header */
.experience-item-header {
    font-size: 16px;
    font-weight: 500;
}

/* experience item figures */
.experience-item-figures {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    row-gap: .5em;
}

/* experience item dot */
.experience-item-dot {
    display: block;
    background-color: #fdb848;
    width: 18px;
    height: 18px;
    border-radius: 50%;
}

/* experience item line */
.experience-item-line {
    display: block;
    min-height: 125px;
    width: 2px;
    background-color: #11b5d2;
}

/* experience item content */
.experience-item-content {}

/* experience item content header */
.experience-item-content-header {
    font-size: 26px;
}

/* experience item content subheader */
.experience-item-content-subheader {
    font-size: 15px;
    font-weight: 500;
    color: #ffffff90;
}

/* experience item content text */
.experience-item-content-text {
    font-size: 15px;
    width: 575px;
}
}

@media screen and (min-width: 1201px) {

    /* experience */
    #experience {
        margin: 5em 0;
    }

    /* experience header */
    #experience-header {
        font-size: 32px;
        text-align: center;
    }

    /* experience content */
    #experience-content {
        margin-top: 3em;
        display: grid;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    /* experience item */
    .experience-item {
        display: flex;
        column-gap: 2em;
        align-items: baseline;
        margin: 2em 0;
    }

    /* experience item header */
    .experience-item-header {
        font-size: 16px;
        font-weight: 500;
    }

    /* experience item figures */
    .experience-item-figures {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        row-gap: .5em;
    }

    /* experience item dot */
    .experience-item-dot {
        display: block;
        background-color: #fdb848;
        width: 18px;
        height: 18px;
        border-radius: 50%;
    }

    /* experience item line */
    .experience-item-line {
        display: block;
        min-height: 150px;
        width: 2px;
        background-color: #11b5d2;
    }

    /* experience item content */
    .experience-item-content {}

    /* experience item content header */
    .experience-item-content-header {
        font-size: 28px;
    }

    /* experience item content subheader */
    .experience-item-content-subheader {
        font-size: 16px;
        font-weight: 500;
        color: #ffffff90;
    }

    /* experience item content text */
    .experience-item-content-text {
        font-size: 16px;
        width: 600px;
    }
}
</style>