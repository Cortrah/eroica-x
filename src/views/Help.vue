<template>
  <div id="help">
    <h1>Help</h1>
    <div class="urcloud urcloud1" >
      <img ref="urCloud2images1" src='../assets/test/test.png'>
    </div>
    <div class="urcloud urcloud2" >
      <img ref="urCloud2images2" src='../assets/test/test4.png'>
    </div>
  </div>
</template>

<script>
import {TimelineMax} from "gsap";

export default {
  name: 'Help',
  components: {
  },
  data: function() {
    return {
      urtime: new TimelineMax(),
    };
  },
  mounted() {
    this.urtime.set( ['.urcloud1'], { opacity: 1});

    this.urtime
        .fromTo( '.urcloud1', {opacity: 1},{ opacity: 0, duration:4},0)
        .fromTo( '.urcloud2', {opacity: 0},{ opacity: 1, duration:4},0)
        .fromTo( '.urcloud2', {opacity: 1},{ opacity: 0, duration:4},4)
        .fromTo( '.urcloud1', {opacity: 0},{ opacity: 1, duration:4},4)
        .repeat()

    //.fromTo( '.urcloud3', {opacity: 1},{ opacity: 0, duration:4},8)

    // this.urtime.fromTo( '.urcloud3', {opacity: 1},{ opacity: 0, duration:4},8)
    // this.urtime.fromTo( '.urcloud4', {opacity: 0},{ opacity: 1, duration:4},8)
    // this.urtime.fromTo( '.urcloud4', {opacity: 1},{ opacity: 0, duration:4},12)
    //     .reverse(-1)
  },
}
</script>

<style>
.urcloud {
  opacity: 0;
}
</style>
