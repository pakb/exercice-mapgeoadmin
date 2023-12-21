<script setup>
import OpenLayersMap from './OpenLayersMap.vue'
</script>

<template>
    <OpenLayersMap />
</template>

<style>
#app {
    /* Font definition (styling) */
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    /* Positioning of the app component as full-page */
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
}
</style>
