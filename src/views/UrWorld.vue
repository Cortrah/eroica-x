<template>
  <div id="urmapWrapper">
    <img v-show="!displayingEpisode" id="urMapBg" src="../assets/ur15.png"/>
    <img v-show="!displayingEpisode" id="urVortex" src="../assets/ur12-cloud.png"/>
    <img v-show="!displayingEpisode" id="urVortexHighlight" src="../assets/vortex8.png"/>

    <video v-show="displayingEpisode"
           id="videoPlayer" ref="videoPlayer"
           width="800" height="600"
           :src="videoSource"
           @ended="endEpisode()"
           autoplay controls>
      <source :src="source" type="video/mp4">
      Your browser does not support video.
    </video>

    <div v-show="!displayingEpisode"
         id="urmap" ref="urmap">
      <div v-for="episode in episodes" v-bind:key="episode.code">
        <EpisodeBtn :episode="episode"
                    v-on:glimmer="startGlimmer"
                    v-on:un-glimmer="stopGlimmer"/>
      </div>
    </div>

    <img v-show="!displayingEpisode && (this.$store.state.currentAct==='act1'||this.$store.state.currentAct==='act2')" id="act3cloud" src="../assets/act3cloud.png"/>
    <div v-show="!displayingEpisode && this.$store.state.currentAct==='act1'" id="act2cloud" ref="act2cloud" >
      <img class="urcloud2" ref="urCloud2images1" src='../assets/act2cloudcolor1.png'>
      <img class="urcloud2" ref="urCloud2images2" src='../assets/act2cloudcolor2.png'>
      <img class="urcloud2" ref="urCloud2images3" src='../assets/act2cloudcolor3.png'>
      <img class="urcloud2" ref="urCloud2images4" src='../assets/act2cloudcolor4.png'>
    </div>
    <img v-show="!displayingEpisode && this.$store.state.finaleAvailable===false" id="finalecloud" src="../assets/finalecloud.png"/>

    <div v-show="isGlimmering" id="glimmerer" ref="glimmerer">
      <glimmerer :episode="this.glimmeringEpisode"/>
    </div>
  </div>
</template>
<script>
import EpisodeBtn from "@/components/EpisodeBtn";
import Glimmerer from "@/components/Glimmerer";
import {TimelineMax} from "gsap";

export default {
  name: 'UrWorld',
  data: function() {
    return {
      episodes: this.$store.state.episodes,
      source: "",
      isGlimmering: false,
      glimmeringEpisode: this.$store.state.notGlimmeringEpisode,
      timeLine: new TimelineMax(),
      urtime: new TimelineMax(),
    };
  },
  computed: {
    videoSource: function () {
      return this.$store.state.currentEpisode
    },
    displayingEpisode: function () {
      return this.$store.state.displayingEpisode === true
    },
    glimmerIndex: function() {
      return this.$store.state.glimmerIndex
    }
  },
  methods: {
    changePosition(x, y) {
      this.timeLine.to(
          this.$refs.glimmerer,{
            ease: "sine",
            x: Number(x) - ((window.innerWidth - 800)/2) + 20,
            y: Number(y - 20),
            duration: .3,
            overwrite: "true"
          }
      );
    },
    startGlimmer(event, episode) {
      this.isGlimmering = true
      this.changePosition(event.clientX, event.clientY)
      this.glimmeringEpisode = episode
      this.$store.dispatch({type:"setGlimmerIndex", episode: episode})
    },
    stopGlimmer() {
      this.isGlimmering = false
      this.glimmeringEpisode = this.$store.state.notGlimmeringEpisode
    },
    endEpisode() {
      this.$store.dispatch({type:"endEpisode"})
    },
  },
  mounted() {
    this.urtime
        .fromTo(this.$refs.urCloud2images4, {opacity: 1},{ opacity: 0, duration:4},0)
        .fromTo(this.$refs.urCloud2images3, {opacity: 1},{ opacity: 0, duration:4},">")
        .fromTo(this.$refs.urCloud2images2, {opacity: 1},{ opacity: 0, duration:4},">")
        .fromTo(this.$refs.urCloud2images2, {opacity: 0},{ opacity: 1, duration:4},">")
        .fromTo(this.$refs.urCloud2images3, {opacity: 0},{ opacity: 1, duration:4},">")
        .fromTo(this.$refs.urCloud2images4, {opacity: 0},{ opacity: 1, duration:4},">")
        .repeat(-1)
  },
  components: {Glimmerer, EpisodeBtn}
}
</script>
<style>
#urmapWrapper {
  position: absolute;
  top:80px;
  display: flex;
  width: 800px;
  height: 740px;
}
#urMapBg {
  position: absolute;
}
#urmap {
  position: absolute;
  top: 200px;
}
#act2cloud {
  position: absolute;
  top: 580px;
  left: 60px;
  max-width: 700px;
}
.urcloud2 {
  position: absolute;
  width: 700px;
  max-width: 700px;
}
#act3cloud {
  position: absolute;
  top: 760px;
  left: 100px;
  max-width: 600px;
}
#finalecloud {
  position: absolute;
  top: 995px;
  left: 335px;
  max-width: 120px;
}
#urVortex {
  position: absolute;
  top: 360px;
  max-width: 800px;
  pointer-events: none;
}
#urVortexHighlight {
  position: absolute;
  top: 575px;
  left: 25px;
  max-width: 800px;
  pointer-events: none;
}
#glimmerer {
  position: fixed;
}
#box {
  height: 60px;
  width: 60px;
  background: #60653e;
}
</style>
