<template>
    <div class="eventcard" v-for="event in events" :key="id">
        <div class="eventcard__image">
            <img src="/assets/pic.jpg" alt="">
        </div>
        <div class="eventcard__desc">
            <p class="eventcard__date">

            </p>
            <p class="eventcard__title">

            </p>
            <p class="eventcard__fee">

            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'eventCard'
    }
</script>

<style scoped>
.eventcard{
    width: 30%;
    height:400px;
}
.eventcard__image{
    width: 100%;
    height: 300px;
}
</style>