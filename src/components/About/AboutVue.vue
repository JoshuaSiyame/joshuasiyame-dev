<template lang="html">
    <div id="about">
        <h3 id="about-header">About</h3>
        <div id="about-content">
            <span id="about-liner"></span>
            <p id="about-text-content">
                I'm Joshua P. Siyame(Age {{ new Date().getFullYear() - 1999 }} yrs), a full-stack software developer
                with a passion for both <span style="color: #f66657;">Websites & Web-Apps</span> and <span
                    style="color: #e19d32;">Mobile</span>
                development I have a deep understanding of the latest technologies and frameworks in
                the industry. Throughout my career, I have had the privilege of working with a diverse
                range of teams and have demonstrated a proven ability to adapt to different
                environments and collaborate effectively with individuals from different backgrounds.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
/* media queries */
@media screen and (max-width: 320px) {

    /* about */
    #about {
        margin: 5em 0;
    }

    /* about header */
    #about-header {
        font-size: 24px;
    }

    /* about content */
    #about-content {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: baseline;
        column-gap: 1em;
        margin: 2em 0;
    }

    /* about liner */
    #about-liner {
        display: block;
        background-color: #e19d32;
        width: 50px;
        height: 3px;
    }

    /* about text content */
    #about-text-content {
        font-size: 14px;
    }
}

@media (min-width: 321px) and (max-width: 480px) {

    /* about */
    #about {
        margin: 5em 0;
    }

    /* about header */
    #about-header {
        font-size: 24px;
    }

    /* about content */
    #about-content {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: baseline;
        column-gap: 1em;
        margin: 2em 0;
    }

    /* about liner */
    #about-liner {
        display: block;
        background-color: #e19d32;
        width: 50px;
        height: 3px;
    }

    /* about text content */
    #about-text-content {
        font-size: 14px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {

    /* about */
    #about {
        margin: 5em 0;
    }

    /* about header */
    #about-header {
        font-size: 26px;
    }

    /* about content */
    #about-content {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: baseline;
        column-gap: 1.5em;
        margin: 2em 0;
    }

    /* about liner */
    #about-liner {
        display: block;
        background-color: #e19d32;
        width: 80px;
        height: 3px;
    }

    /* about text content */
    #about-text-content {
        font-size: 15px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

    /* about */
    #about {
        margin: 5em 0;
    }

    /* about header */
    #about-header {
        font-size: 28px;
    }

    /* about content */
    #about-content {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: baseline;
        column-gap: 2em;
        margin: 2em 0;
    }

    /* about liner */
    #about-liner {
        display: block;
        background-color: #e19d32;
        width: 100px;
        height: 3px;
    }

    /* about text content */
    #about-text-content {
        font-size: 15px;
    }
}

@media (min-width: 1025px) and (max-width: 1200px) {

/* about */
#about {
    margin: 5em 0;
}

/* about header */
#about-header {
    font-size: 30px;
}

/* about content */
#about-content {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
    column-gap: 2em;
    margin: 2em 0;
}

/* about liner */
#about-liner {
    display: block;
    background-color: #e19d32;
    width: 125px;
    height: 3px;
}

/* about text content */
#about-text-content {
    font-size: 15px;
}
}

@media screen and (min-width: 1201px) {

    /* about */
    #about {
        margin: 5em 0;
    }

    /* about header */
    #about-header {
        font-size: 32px;
    }

    /* about content */
    #about-content {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: baseline;
        column-gap: 2em;
        margin: 2em 0;
    }

    /* about liner */
    #about-liner {
        display: block;
        background-color: #e19d32;
        width: 150px;
        height: 3px;
    }

    /* about text content */
    #about-text-content {
        font-size: 16px;
    }
}
</style>