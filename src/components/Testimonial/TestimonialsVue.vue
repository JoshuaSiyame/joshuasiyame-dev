<template lang="html">
    <div id="testimonials">
        <h3 id="testimonials-header">Testimonials</h3>
        <div id="testimonials-content">
            <div id="testimonials-list">
                <div class="testimonial-item" v-for="(testimonial, index) in testimonials.slice(0, 5)"
                    @click="() => { selectedTestimony = index }">
                    <img :src="testimonial['image']" alt="" class="testimonial-item-img">
                    <div class="testimonial-item-details">
                        <h3 class="testimonial-item-name">{{ testimonial.full_name }}<span
                                class="testimonial-item-company"> - {{ testimonial.company }}</span></h3>
                        <p class="testimonial-item-role">@{{ testimonial.position }}</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-text-content">
                <!-- <span class="testimonial-text-line"></span> -->
                <p class="testimonial-text">
                    <SvgIcon type="mdi" :path="mdiFormatQuoteOpenOutline" size="40" color="#fdb848" />
                    <br />
                    {{ testimonials[selectedTestimony]['text'] }}
                </p>
                <div class="testimonial-text-item-details">
                    <h3 class="testimonial-item-name">{{ testimonials[selectedTestimony].full_name }} <span
                            class="testimonial-item-company"> - {{ testimonials[selectedTestimony].company }}</span>
                    </h3>
                    <p class="testimonial-item-role">@{{ testimonials[selectedTestimony].position }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFormatQuoteOpenOutline } from '@mdi/js';

// data binder
const selectedTestimony = ref(0)
// testimonials
const testimonials = [
    {
        image: 'https://mir-s3-cdn-cf.behance.net/user/50/5dca5d813139061.66849765c9bd6.png',
        full_name: "Joshua Siyame",
        position: "Sr. Software Engineer",
        company: "TechSavvy Solutions",
        text: 'The service provided was exceptional. The team demonstrated outstanding professionalism and expertise, helping us achieve our goals seamlessly.'
    },
    {
        image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600',
        full_name: "Alice Mwihaki",
        position: "Project Manager",
        company: "InnovateX",
        text: 'Working with them has been a fantastic experience. They consistently deliver high-quality results and are always ready to go the extra mile.'
    },
    {
        image: 'https://images.pexels.com/photos/64385/pexels-photo-64385.jpeg?auto=compress&cs=tinysrgb&w=600',
        full_name: "David Kimanzi",
        position: "Business Analyst",
        company: "MarketPro",
        text: 'I am thoroughly impressed with their level of dedication and professionalism. They really understood our needs and delivered beyond our expectations.'
    },
    {
        image: 'https://images.pexels.com/users/avatars/311039220/gin-151.jpeg?auto=compress&fit=crop&h=40&w=40&dpr=1',
        full_name: "Faith Achieng",
        position: "Marketing Specialist",
        company: "CreativeEdge",
        text: 'They were quick to respond, highly knowledgeable, and very creative. The project was completed on time and the quality of work was impeccable.'
    },
    {
        image: 'https://images.pexels.com/photos/21610106/pexels-photo-21610106/free-photo-of-portrait-of-woman-in-brown-background.jpeg?auto=compress&cs=tinysrgb&w=600',
        full_name: "Brian Njoroge",
        position: "UX Designer",
        company: "DesignWorks Studio",
        text: 'This team really stands out for their creative thinking and technical expertise. It was a pleasure collaborating with them on this project!'
    }
];


</script>

<style lang="css" scoped>
/* media queries */
@media screen and (max-width: 320px) {

    /* testimonials */
    #testimonials {
        margin: 5em 0;
    }

    /* testimonials header */
    #testimonials-header {
        text-align: center;
        font-size: 24px;
    }

    /* testimonials content */
    #testimonials-content {
        margin-top: 2em;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        /* align-items: center; */
    }

    /* testimonials list */
    #testimonials-list {
        display: flex;
        flex-wrap: wrap;
        column-gap: 1em;
        row-gap: 1em;
        align-items: center;
        justify-content: center;
    }

    /* testimonial item */
    .testimonial-item {
        display: flex;
        align-items: center;
        column-gap: 1em;
        margin: 0em 0;
        background-color: #f5f5f515;
        padding: .8em;
        border-radius: 10px;
        /* width: 350px; */
        width: fit-content;
    }

    /* testimonial item img */
    .testimonial-item-img {
        width: 35px;
        height: 35px;
        object-fit: cover;
        border-radius: 50%;
    }

    /* testimonial item details */
    .testimonial-item-details {
        display: none;
    }

    /* testimonial item name */
    .testimonial-item-name {
        font-size: 16px;
        font-weight: 500;
    }

    /* testimonial item small */
    .testimonial-item-role {
        color: #f5f5f590;
        font-size: 16px;
    }

    /* testimonial item role */
    .testimonial-item-company {
        color: #f5f5f590;
        font-size: 14px;
    }

    /* testimonial text content */
    .testimonial-text-content {
        display: grid;
        /* grid-template-columns: auto 1fr; */
        align-items: baseline;
        column-gap: 1em;
        row-gap: 1em;
        margin-top: 2em;
    }

    /* testimonial text line */
    .testimonial-text-line {
        width: 100px;
        height: 2px;
        background-color: #fdb848;
    }

    /* testimonial text */
    .testimonial-text {
        font-family: 'kanit';
        font-size: 16px;
        text-align: center;
    }

    /* testimonial text item details */
    .testimonial-text-item-details {
        text-align: center;
    }
}

@media (min-width: 321px) and (max-width: 480px) {

    /* testimonials */
    #testimonials {
        margin: 5em 0;
    }

    /* testimonials header */
    #testimonials-header {
        text-align: center;
        font-size: 24px;
    }

    /* testimonials content */
    #testimonials-content {
        margin-top: 2em;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        /* align-items: center; */
    }

    /* testimonials list */
    #testimonials-list {
        display: flex;
        flex-wrap: wrap;
        column-gap: 1em;
        row-gap: 1em;
        align-items: center;
        justify-content: center;
    }

    /* testimonial item */
    .testimonial-item {
        display: flex;
        align-items: center;
        column-gap: 1em;
        margin: 0em 0;
        background-color: #f5f5f515;
        padding: .8em;
        border-radius: 10px;
        /* width: 350px; */
        width: fit-content;
    }

    /* testimonial item img */
    .testimonial-item-img {
        width: 35px;
        height: 35px;
        object-fit: cover;
        border-radius: 50%;
    }

    /* testimonial item details */
    .testimonial-item-details {
        display: none;
    }

    /* testimonial item name */
    .testimonial-item-name {
        font-size: 16px;
        font-weight: 500;
    }

    /* testimonial item small */
    .testimonial-item-role {
        color: #f5f5f590;
        font-size: 16px;
    }

    /* testimonial item role */
    .testimonial-item-company {
        color: #f5f5f590;
        font-size: 14px;
    }

    /* testimonial text content */
    .testimonial-text-content {
        display: grid;
        /* grid-template-columns: auto 1fr; */
        align-items: baseline;
        column-gap: 1em;
        row-gap: 1em;
        margin-top: 2em;
    }

    /* testimonial text line */
    .testimonial-text-line {
        width: 100px;
        height: 2px;
        background-color: #fdb848;
    }

    /* testimonial text */
    .testimonial-text {
        font-family: 'kanit';
        font-size: 16px;
        text-align: center;
    }

    /* testimonial text item details */
    .testimonial-text-item-details {
        text-align: center;
    }
}

@media (min-width: 481px) and (max-width: 768px) {

/* testimonials */
#testimonials {
    margin: 5em 0;
}

/* testimonials header */
#testimonials-header {
    text-align: center;
    font-size: 24px;
}

/* testimonials content */
#testimonials-content {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* align-items: center; */
}

/* testimonials list */
#testimonials-list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1em;
    row-gap: 1em;
    align-items: center;
    justify-content: center;
}

/* testimonial item */
.testimonial-item {
    display: flex;
    align-items: center;
    column-gap: 1em;
    margin: 0em 0;
    background-color: #f5f5f515;
    padding: .8em;
    border-radius: 10px;
    /* width: 350px; */
    width: fit-content;
}

/* testimonial item img */
.testimonial-item-img {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
}

/* testimonial item details */
.testimonial-item-details {
    display: none;
}

/* testimonial item name */
.testimonial-item-name {
    font-size: 16px;
    font-weight: 500;
}

/* testimonial item small */
.testimonial-item-role {
    color: #f5f5f590;
    font-size: 16px;
}

/* testimonial item role */
.testimonial-item-company {
    color: #f5f5f590;
    font-size: 14px;
}

/* testimonial text content */
.testimonial-text-content {
    display: grid;
    /* grid-template-columns: auto 1fr; */
    align-items: baseline;
    column-gap: 1em;
    row-gap: 1em;
    margin-top: 2em;
}

/* testimonial text line */
.testimonial-text-line {
    width: 100px;
    height: 2px;
    background-color: #fdb848;
}

/* testimonial text */
.testimonial-text {
    font-family: 'kanit';
    font-size: 16px;
    text-align: center;
}

/* testimonial text item details */
.testimonial-text-item-details {
    text-align: center;
}
}

@media (min-width: 769px) and (max-width: 1024px) {

/* testimonials */
#testimonials {
    margin: 5em 0;
}

/* testimonials header */
#testimonials-header {
    text-align: center;
    font-size: 24px;
}

/* testimonials content */
#testimonials-content {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /* align-items: center; */
}

/* testimonials list */
#testimonials-list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1em;
    row-gap: 1em;
    align-items: center;
    justify-content: center;
}

/* testimonial item */
.testimonial-item {
    display: flex;
    align-items: center;
    column-gap: 1em;
    margin: 0em 0;
    background-color: #f5f5f515;
    padding: .8em;
    border-radius: 10px;
    /* width: 350px; */
    width: fit-content;
}

/* testimonial item img */
.testimonial-item-img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
}

/* testimonial item details */
.testimonial-item-details {
    /* display: none; */
}

/* testimonial item name */
.testimonial-item-name {
    font-size: 16px;
    font-weight: 500;
}

/* testimonial item small */
.testimonial-item-role {
    color: #f5f5f590;
    font-size: 16px;
}

/* testimonial item role */
.testimonial-item-company {
    color: #f5f5f590;
    font-size: 14px;
}

/* testimonial text content */
.testimonial-text-content {
    display: grid;
    /* grid-template-columns: auto 1fr; */
    align-items: baseline;
    column-gap: 1em;
    row-gap: 1em;
    margin-top: 2em;
}

/* testimonial text line */
.testimonial-text-line {
    width: 100px;
    height: 2px;
    background-color: #fdb848;
}

/* testimonial text */
.testimonial-text {
    font-family: 'kanit';
    font-size: 16px;
    text-align: center;
}

/* testimonial text item details */
.testimonial-text-item-details {
    text-align: center;
}
}

@media (min-width: 1025px) and (max-width: 1200px) {

/* testimonials */
#testimonials {
    margin: 5em;
}

/* testimonials header */
#testimonials-header {
    text-align: center;
    font-size: 32px;
}

/* testimonials content */
#testimonials-content {
    margin-top: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}

/* testimonial list */
#testimonial-list {
    display: grid;
}

/* testimonial item */
.testimonial-item {
    display: flex;
    align-items: center;
    column-gap: 1em;
    margin: 1em 0;
    background-color: #f5f5f515;
    padding: .8em;
    border-radius: 10px;
    width: 350px;
}

/* testimonial item img */
.testimonial-item-img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
}

/* testimonial item details */
.testimonial-item-details {}

/* testimonial item name */
.testimonial-item-name {
    font-size: 16px;
    font-weight: 500;
}

/* testimonial item small */
.testimonial-item-role {
    color: #f5f5f590;
    font-size: 16px;
}

/* testimonial item role */
.testimonial-item-company {
    color: #f5f5f590;
    font-size: 14px;
}

/* testimonial text content */
.testimonial-text-content {
    display: grid;
    /* grid-template-columns: auto 1fr; */
    align-items: baseline;
    column-gap: 1em;
    row-gap: 1em;
}

/* testimonial text line */
.testimonial-text-line {
    width: 100px;
    height: 2px;
    background-color: #fdb848;
}

/* testimonial text */
.testimonial-text {
    font-family: 'kanit';
    font-size: 20px;
}

/* testimonial text item details */
.testimonial-text-item-details {}
}

@media screen and (min-width: 1201px) {

    /* testimonials */
    #testimonials {
        margin: 5em;
    }

    /* testimonials header */
    #testimonials-header {
        text-align: center;
        font-size: 32px;
    }

    /* testimonials content */
    #testimonials-content {
        margin-top: 2em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    /* testimonial list */
    #testimonial-list {
        display: grid;
    }

    /* testimonial item */
    .testimonial-item {
        display: flex;
        align-items: center;
        column-gap: 1em;
        margin: 1em 0;
        background-color: #f5f5f515;
        padding: .8em;
        border-radius: 10px;
        width: 350px;
    }

    /* testimonial item img */
    .testimonial-item-img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    }

    /* testimonial item details */
    .testimonial-item-details {}

    /* testimonial item name */
    .testimonial-item-name {
        font-size: 16px;
        font-weight: 500;
    }

    /* testimonial item small */
    .testimonial-item-role {
        color: #f5f5f590;
        font-size: 16px;
    }

    /* testimonial item role */
    .testimonial-item-company {
        color: #f5f5f590;
        font-size: 14px;
    }

    /* testimonial text content */
    .testimonial-text-content {
        display: grid;
        /* grid-template-columns: auto 1fr; */
        align-items: baseline;
        column-gap: 1em;
        row-gap: 1em;
    }

    /* testimonial text line */
    .testimonial-text-line {
        width: 100px;
        height: 2px;
        background-color: #fdb848;
    }

    /* testimonial text */
    .testimonial-text {
        font-family: 'kanit';
        font-size: 20px;
    }

    /* testimonial text item details */
    .testimonial-text-item-details {}
}
</style>