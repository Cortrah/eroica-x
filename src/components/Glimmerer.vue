<template>
  <div class="glimmerer">
    <img :src="require(`@/assets/thumbs/${this.episode.code}.png`)" class="thumb"/>
    <span class="glimmer-text">{{this.episode.glimmer}}</span>
  </div>
</template>

<script>
export default {
  name: "Glimmerer",
  props: {
    episode: {
      type: Object,
    }
  },
}
</script>
<style>
.glimmerer {
  position: absolute;
  align-items: center;
  pointer-events: none;
  background-color: #222;
  padding: 10px;
}
.thumb {
}
.glimmer-text {
  font-family: 'Josefin Sans', sans-serif;
  color: #93742A;
  font-weight: bold;
  padding: 10px;
}
</style>
