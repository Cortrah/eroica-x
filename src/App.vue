<template>
  <div id="appDiv" :style="inlineBgImage()">
    <div class="nav-wrapper" @mouseover="navMouseOver" @mouseleave="navMouseLeave" >
      <transition name="fade">
        <div v-if="showNav" id="nav">
          <a @click="gotoPage('/')">Eroica</a>
          <a @click="gotoPage('/introduction')">Introduction</a>
          <a @click="gotoPage('/urworld')">Ur World</a>
          <a @click="gotoPage('/progress')">Progress</a>
          <a @click="gotoPage('/help')">Help</a>
          <a @click="gotoPage('/about')">About</a>
        </div>
      </transition>
    </div>
    <div id="mainWrapper" :style="inlineBgImage()">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      navMouseOverState: Boolean
    };
  },
  methods: {
    gotoPage(location) {
      this.$store.dispatch({type:"gotoPage", page: location})
      this.$router.push(location)
    },
    navMouseOver(e) {
      if (e.clientY < 120) {
        this.navMouseOverState = true
      }
    },
    navMouseLeave() {
      this.navMouseOverState = false
    },
    inlineBgImage() {
      let urBgImage = require('@/assets/2.jpg')
      let otherBgImage = require('@/assets/2.jpg')
      let bgImage = otherBgImage
      if (this.$store.state.isUr){
        bgImage = urBgImage
      }
      return {
        backgroundImage: `url("${bgImage}")`,
      }
    }
  },
  computed: {
    showNav: function () {
      return this.$store.state.isUr === false || this.navMouseOverState === true
    },
  },
}

</script>
<style>
body {
  margin: 0;
  padding: 0;
  background-image: url('~@/assets/2.jpg');
  background-repeat: repeat repeat;
}
a:link {
  color: #daa520;
}
a {
  color: whitesmoke;
  margin-left: 20px;
}
a:hover {
  cursor: pointer;
}
#mainWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2B333F;
  height: 100%;
  width: 100%;
}
.nav-wrapper {
  min-height: 50px;
}
#nav {
  font-family: 'Odibee Sans', "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 20px;
  background-color: #222222;
  border-bottom: #93742A;
  border-width: 5px;
  text-align: center;
  vertical-align: text-bottom;
  line-height: 2;
  min-height: 40px;
}
.fade-enter-active{
  transition: opacity .5s ease;
}
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
