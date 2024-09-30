<template lang="html">
    <div id="footer-content">
        <div id="footer">
            <div id="footer-me">
                <div id="footer-me-intro">
                    <img :src="FooterImage" alt="" id="footer-me-image" />
                    <div>
                        <h3 id="footer-me-name">Joshua P, Siyame</h3>
                        <small id="footer-me-small">Software Engineer</small>
                    </div>
                </div>
                <div>
                    <p id="footer-me-text">
                        Attempt the end, and never stand to doubt; nothing's so hard but search will find it out
                        <i>~Robert Herrick</i>
                    </p>
                </div>
            </div>
            <div id="footer-explore" class="footer-item" v-for="(footer, index) in footer">
                <h3 class="footer-item-header">{{ footer['header'] }}</h3>
                <ol class="footer-item-list">
                    <li class="footer-item-list-item" v-for="(item, index) in footer['items']">{{ item }}</li>
                </ol>
            </div>
        </div>
        <div id="footer-extra">
            <div id="footer-extra-newsletter">
                <small>Subscribe to newsletter</small>
                <div id='footer-extra-newsletter-content'>
                    <input type="text" name="" id="footer-extra-newsletter-input-control" />
                    <button id="footer-extra-newsletter-btn">Subscribe</button>
                </div>
            </div>
            <div id="footer-extra-socials">
                <small>Follow us</small>
                <ol id="footer-extra-social-links">
                    <li class="footer-extra-social-link">
                        <SvgIcon type="mdi" :path="mdiInstagram" size="24"/>
                    </li>
                    <li class="footer-extra-social-link">
                        <SvgIcon type="mdi" :path="mdiAlphaXBoxOutline" size="24"/>
                    </li>
                    <li class="footer-extra-social-link">
                        <SvgIcon type="mdi" :path="mdiLinkedin" size="24"/>
                    </li>
                    <li class="footer-extra-social-link">
                        <SvgIcon type="mdi" :path="mdiYoutubeTv" size="24"/>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FooterImage from "@/assets/me/me-6.jpg"
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiInstagram, mdiAlphaXBoxOutline, mdiLinkedin, mdiYoutube, mdiYoutubeTv } from '@mdi/js';

// footer list items
const footer = [
    {
        header: "Explore",
        items: ['Startups', 'Work-life', 'Online Store']
    },
    {
        header: "Know more",
        items: ['My story', 'Dev-Academy', 'Entrepreneurship', 'Agri-Tech', 'Communities']
    },
    {
        header: 'About',
        items: ['Legal notice', 'Privacy & Policy', 'Services', 'Careers', 'Newsletters']
    }
]
</script>

<style scoped lang="css">
/* Media queries */
@media screen and (min-width: 1201px) {

    /* footer content */
    #footer-content{
        margin: 5em 0;
    }

    /* footer */
    #footer {
        padding-bottom: 3em;
        display: grid;
        grid-template-columns: 300px auto auto auto;
        justify-content: space-between;
        border-bottom: 1px solid #f5f5f520;
    }

    /* footer me */
    #footer-me {}

    /* footer me intro */
    #footer-me-intro {
        display: flex;
        column-gap: 1em;
        align-items: center;
    }

    /* footer me image */
    #footer-me-image {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 25%;
        border: 2px solid #fdb848;
    }

    /* footer me name */
    #footer-me-name {
        font-size: 20px;
        font-weight: 500;
    }

    /* footer me small */
    #footer-me-small {
        color: #f6f6f690;
        font-size: 14px;
    }

    /* footer me text */
    #footer-me-text {
        font-size: 14px;
        margin-top: .5em;
    }

    /* footer explore */
    #footer-explore {}

    /* footer item */
    .footer-item {}

    /* footer item header */
    .footer-item-header {
        font-size: 20px;
        font-weight: 500;
    }

    /* footer item list */
    .footer-item-list {
        margin-top: .5em;
    }

    /* footer item list item */
    .footer-item-list-item {
        font-size: 14px;
        color: #f6f6f690;
        padding: .35em 0;
        cursor: pointer;
    }

    .footer-item-list-item:hover {
        color: #f6f6f6;
    }

    /* footer extra */
    #footer-extra {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2em 0 0 0;
    }

    /* footer extra newsletter */
    #footer-extra-newsletter {
        display: grid;
        row-gap: .5em;
    }

    /* footer extra newsletter content */
    #footer-extra-newsletter-content {
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: .5em;
    }

    /* footer extra newsletter input control */
    #footer-extra-newsletter-input-control {
        padding: .5em;
        border: 1px solid #11b5d2;
        border-radius: 5px;
        background-color: transparent;
    }

    /* footer extra newsletter btn */
    #footer-extra-newsletter-btn {
        padding: .5em;
        border-radius: 5px;
        border: 1px solid #11b5d2;
        background-color: #11b5d2;
        color: white;
    }

    /* footer extra socials */
    #footer-extra-socials{}

    /* footer extra social links */
    #footer-extra-social-links{
        display: flex;
        align-items: center;
    }

    /* footer extra social link */
    .footer-extra-social-link{
        padding: .5em 0;
        margin: 0 .5em;
    }

    .footer-extra-social-link:first-child{
        margin-left: 0;
    }
}
</style>