<template lang="html">
    <div id="content-wrapper">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
/* media queries */
@media screen and (max-width: 320px) {
    #content-wrapper {
        padding: 0 .8em;
    }
}

@media (min-width: 321px) and (max-width: 480px) {
    #content-wrapper {
        padding: 0 1em;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    #content-wrapper {
        padding: 0 1.5em;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    #content-wrapper {
        padding: 0 2em;
    }
}

@media (min-width: 1025px) and (max-width: 1200px) {
    #content-wrapper {
        padding: 0 5em;
    }
}

@media screen and (min-width: 1201px) {
    #content-wrapper {
        padding: 0 10em;
    }
}
</style>