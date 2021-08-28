<template>
  <div class="episode" v-bind:style="position"
       @mouseover="onMouseOver($event)" @mouseleave="onMouseOut($event)"
       @click="playEpisode()">

    <img v-if="(iconish==='node')&&(episode.status==='not-visited')&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/notVisited.png"/>
    <img v-if="(iconish==='node')&&(episode.status==='not-visited')&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/notVisitedOver.png"/>

    <img v-if="(iconish==='node')&&(episode.status==='visited')&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/visited.png"/>
    <img v-if="(iconish==='node')&&(episode.status==='visited')&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/visitedOver.png"/>


    <img v-if="iconish==='left'&&(episode.status==='not-visited')&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/leftNotVisited.png"/>
    <img v-if="iconish==='left'&&(episode.status==='not-visited')&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/leftNotVisitedOver.png"/>

    <img v-if="iconish==='left'&&(episode.status==='visited')&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/leftVisited.png"/>
    <img v-if="iconish==='left'&&(episode.status==='visited')&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/leftVisitedOver.png"/>

    <img v-if="iconish==='left'&&(episode.status==='unchosen')&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/leftUnchosen.png"/>
    <img v-if="iconish==='left'&&(episode.status==='unchosen')&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/leftUnchosenOver.png"/>


    <img v-if="iconish==='right'&&(episode.status==='not-visited')&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/rightNotVisited.png"/>
    <img v-if="iconish==='right'&&(episode.status==='not-visited')&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/rightNotVisitedOver.png"/>

    <img v-if="iconish==='right'&&(episode.status==='visited')&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/rightVisited.png"/>
    <img v-if="iconish==='right'&&(episode.status==='visited')&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/rightVisitedOver.png"/>

    <img v-if="iconish==='right'&&(episode.status==='unchosen')&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/rightUnchosen.png"/>
    <img v-if="iconish==='right'&&(episode.status==='unchosen')&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/rightUnchosenOver.png"/>


    <img v-if="iconish==='scarab'&&(highlighting===false)" src=" https://cortrah.github.io/eroica-2022/img/scarabgreenbelly.png"/>
    <img v-if="iconish==='scarab'&&(highlighting===true)" src=" https://cortrah.github.io/eroica-2022/img/scarabgreenbellyOver.png"/>
  </div>
</template>

<script>
export default {
  name: 'EpisodeBtn',
  props: {
    episode: {
      type: Object,
    }
  },
  data: function() {
    return {
      highlighting: false
    }
  },
  computed: {
    position: function() {
      return {
        left: this.episode.x + 'px',
        top: this.episode.y + 'px'
      }
    },
    iconish: function() {
      return this.episode.imago
    },
  },
  methods: {
    onMouseOver(event) {
      this.highlighting = true
      this.$emit('glimmer', event, this.episode)
    },
    onMouseOut(event) {
      this.highlighting = false
      this.$emit('un-glimmer', event, this.episode)
    },
    playEpisode() {
      this.$store.dispatch({type:"playEpisode", code: this.episode.code})
    },
  }
}
</script>


<style scoped>
.episode {
  position: absolute;
}
</style>
