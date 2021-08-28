<template>
  <div>
    <video id="videoPlayer" ref="videoPlayer" className="video-js" @ended="onPlayerEnded($event)"></video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady(event) {
      console.log(event)
    })
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  },
  methods: {
    onPlayerEnded(){
      this.$router.push("/urworld")
    }
  }
}
</script>
