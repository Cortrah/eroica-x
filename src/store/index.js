import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUr: false,
    currentAct: "act1",
    finaleAvailable: false,
    notGlimmeringEpisode: {
      x:"0",  y:"0",
      code:"none", glimmer:"",
      imago:"node",
      status:"not-visited"
    },
    currentEpisode: {
      x:"0",  y:"0",
      code:"none", glimmer:"",
      imago:"node",
      status:"not-visited"
    },
    displayingEpisode: false,
    episodes: [
      { x:"120", y:"40",  code:"act1_v1_n1", glimmer:"Promptings and seizures", imago:"node", status:"not-visited"},
      { x:"144", y:"20",  code:"act1_v1_n2", glimmer:"Sounding brass", imago:"node",  status:"not-visited"},
      { x:"175", y:"10",  code:"act1_v1_n3", glimmer:"A whited sepulcher", imago:"node",  status:"not-visited"},
      { x:"210", y:"5",  code:"act1_v1_n4", glimmer:"Demon dance of the new", imago:"node",  status:"not-visited"},
      { x:"155", y:"55",  code:"act1_v1_p1", glimmer:"Window mirror eye", imago:"node",  status:"not-visited"},
      { x:"190", y:"45",  code:"act1_v1_p2", glimmer:"Wings and talons", imago:"node",  status:"not-visited"},
      { x:"185", y:"82", code:"act1_v1_m1", glimmer:"A puddle of tallow", imago:"node",  status:"not-visited"},
      { x:"325", y:"-35",  code:"act1_t1_n1", glimmer:"The consummate design", imago:"node",  status:"not-visited"},
      { x:"358", y:"-40",  code:"act1_t1_n2", glimmer:"Ahh skin ...", imago:"node",  status:"not-visited"},
      { x:"390", y:"-40",  code:"act1_t1_n3", glimmer:"Paint the frieze", imago:"node",  status:"not-visited"},
      { x:"425", y:"-35",  code:"act1_t1_n4", glimmer:"Build the temple", imago:"node",  status:"not-visited"},
      { x:"356", y:"-5",  code:"act1_t1_p1", glimmer:"Dream brothers", imago:"node",  status:"not-visited"},
      { x:"392", y:"-5",  code:"act1_t1_p2", glimmer:"Rubblous ghouls", imago:"node",  status:"not-visited"},
      { x:"375", y:"25", code:"act1_t1_m1", glimmer:"An eye, sire", imago:"node",  status:"not-visited"},
      { x:"560", y:"-10",  code:"act1_a1_n1", glimmer:"Eyes deep as hell.", imago:"node",  status:"not-visited"},
      { x:"592", y:"-2",  code:"act1_a1_n2", glimmer:"Faithful to measure", imago:"node",  status:"not-visited"},
      { x:"622", y:"14",  code:"act1_a1_n3", glimmer:"We know not", imago:"node",  status:"not-visited"},
      { x:"642", y:"43",  code:"act1_a1_n4", glimmer:"act1_a1_n4", imago:"node",  status:"not-visited"},
      { x:"570", y:"30",  code:"act1_a1_p1", glimmer:"act1_a1_p1", imago:"node",  status:"not-visited"},
      { x:"600", y:"50",  code:"act1_a1_p2", glimmer:"act1_a1_p2", imago:"node",  status:"not-visited"},
      { x:"570", y:"70", code:"act1_a1_m1", glimmer:"act1_a1_m1", imago:"node",  status:"not-visited"},
      { x:"170", y:"140", code:"act1_v2_n1", glimmer:"act1_v2_n1", imago:"node",  status:"not-visited"},
      { x:"200",  y:"125", code:"act1_v2_n2", glimmer:"act1_v2_n2", imago:"node",  status:"not-visited"},
      { x:"235",  y:"120", code:"act1_v2_n3", glimmer:"act1_v2_n3", imago:"node",  status:"not-visited"},
      { x:"270",  y:"122", code:"act1_v2_n4", glimmer:"act1_v2_n4", imago:"node",  status:"not-visited"},
      { x:"205",  y:"160", code:"act1_v2_p1", glimmer:"act1_v2_p1", imago:"node",  status:"not-visited"},
      { x:"240",  y:"150", code:"act1_v2_p2", glimmer:"act1_v2_p2", imago:"node",  status:"not-visited"},
      { x:"227",  y:"185", code:"act1_v2_m1", glimmer:"act1_v2_m1", imago:"node",  status:"not-visited"},
      { x:"330",  y:"100", code:"act1_t2_n1", glimmer:"act1_t2_n1", imago:"node",  status:"not-visited"},
      { x:"365",  y:"95", code:"act1_t2_n2", glimmer:"act1_t2_n2", imago:"node",  status:"not-visited"},
      { x:"400",  y:"95", code:"act1_t2_n3", glimmer:"act1_t2_n3", imago:"node",  status:"not-visited"},
      { x:"435",  y:"100", code:"act1_t2_n4", glimmer:"act1_t2_n4", imago:"node",  status:"not-visited"},
      { x:"360",  y:"130", code:"act1_t2_p1", glimmer:"act1_t2_p1", imago:"node",  status:"not-visited"},
      { x:"400",  y:"130", code:"act1_t2_p2", glimmer:"act1_t2_p2", imago:"node",  status:"not-visited"},
      { x:"385",  y:"165", code:"act1_t2_m1", glimmer:"act1_t2_m1", imago:"node",  status:"not-visited"},
      { x:"500",  y:"115", code:"act1_a2_n1", glimmer:"act1_a2_n1", imago:"node",  status:"not-visited"},
      { x:"535",  y:"115", code:"act1_a2_n2", glimmer:"act1_a2_n2", imago:"node",  status:"not-visited"},
      { x:"570",  y:"125", code:"act1_a2_n3", glimmer:"act1_a2_n3", imago:"node",  status:"not-visited"},
      { x:"600",  y:"138", code:"act1_a2_n4", glimmer:"act1_a2_n4", imago:"node",  status:"not-visited"},
      { x:"520",  y:"155", code:"act1_a2_p1", glimmer:"act1_a2_p1", imago:"node",  status:"not-visited"},
      { x:"560",  y:"160", code:"act1_a2_p2", glimmer:"act1_a2_p2", imago:"node",  status:"not-visited"},
      { x:"538",  y:"188", code:"act1_a2_m1", glimmer:"act1_a2_m1", imago:"node",  status:"not-visited"},
      { x:"150",  y:"300", code:"act1_v3_n1", glimmer:"act1_v3_n1", imago:"node",  status:"not-visited"},
      { x:"185",  y:"288", code:"act1_v3_n2", glimmer:"act1_v3_n2", imago:"node",  status:"not-visited"},
      { x:"220",  y:"280", code:"act1_v3_n3", glimmer:"act1_v3_n3", imago:"node",  status:"not-visited"},
      { x:"255",  y:"280", code:"act1_v3_n4", glimmer:"act1_v3_n4", imago:"node",  status:"not-visited"},
      { x:"185",  y:"330", code:"act1_v3_p1", glimmer:"act1_v3_p1", imago:"node",  status:"not-visited"},
      { x:"220",  y:"320", code:"act1_v3_p2", glimmer:"act1_v3_p2", imago:"node",  status:"not-visited"},
      { x:"215",  y:"360", code:"act1_v3_m1", glimmer:"act1_v3_m1", imago:"node",  status:"not-visited"},
      { x:"330",  y:"240", code:"act1_t3_n1", glimmer:"act1_t3_n1", imago:"node",  status:"not-visited"},
      { x:"365",  y:"230", code:"act1_t3_n2", glimmer:"act1_t3_n2", imago:"node",  status:"not-visited"},
      { x:"400",  y:"230", code:"act1_t3_n3", glimmer:"act1_t3_n3", imago:"node",  status:"not-visited"},
      { x:"435",  y:"240", code:"act1_t3_n4", glimmer:"act1_t3_n4", imago:"node",  status:"not-visited"},
      { x:"360",  y:"270", code:"act1_t3_p1", glimmer:"act1_t3_p1", imago:"node",  status:"not-visited"},
      { x:"400",  y:"270", code:"act1_t3_p2", glimmer:"act1_t3_p2", imago:"node",  status:"not-visited"},
      { x:"380",  y:"310", code:"act1_t3_m1", glimmer:"act1_t3_m1", imago:"node",  status:"not-visited"},
      { x:"515",  y:"275", code:"act1_a3_n1", glimmer:"act1_a3_n1", imago:"node",  status:"not-visited"},
      { x:"550",  y:"280", code:"act1_a3_n2", glimmer:"act1_a3_n2", imago:"node",  status:"not-visited"},
      { x:"580",  y:"295", code:"act1_a3_n3", glimmer:"act1_a3_n3", imago:"node",  status:"not-visited"},
      { x:"602",  y:"322", code:"act1_a3_n4", glimmer:"act1_a3_n4", imago:"node",  status:"not-visited"},
      { x:"520",  y:"310", code:"act1_a3_p1", glimmer:"act1_a3_p1", imago:"node",  status:"not-visited"},
      { x:"560",  y:"325", code:"act1_a3_p2", glimmer:"act1_a3_p2", imago:"node",  status:"not-visited"},
      { x:"520",  y:"350", code:"act1_a3_m1", glimmer:"act1_a3_m1", imago:"node",  status:"not-visited"},
      { x:"190",  y:"540", code:"act2_v4_h",  glimmer:"act2_v4_h", imago:"left",  status:"not-visited"},
      { x:"215",  y:"540", code:"act2_v4_s",  glimmer:"act2_v4_s", imago:"right", status:"not-visited"},
      { x:"255",  y:"550", code:"act2_v5_h",  glimmer:"act2_v5_h", imago:"left",  status:"not-visited"},
      { x:"280",  y:"550", code:"act2_v5_s",  glimmer:"act2_v5_s", imago:"right", status:"not-visited"},
      { x:"320",  y:"560", code:"act2_v6_h",  glimmer:"act2_v6_h", imago:"left",  status:"not-visited"},
      { x:"350",  y:"560", code:"act2_v6_s",  glimmer:"act2_v6_s", imago:"right", status:"not-visited"},
      { x:"305",  y:"490", code:"act2_t4_h",  glimmer:"act2_t4_h", imago:"left",  status:"not-visited"},
      { x:"335",  y:"490", code:"act2_t4_s",  glimmer:"act2_t4_s", imago:"right", status:"not-visited"},
      { x:"380",  y:"485", code:"act2_t5_h",  glimmer:"act2_t5_h", imago:"left",  status:"not-visited"},
      { x:"410",  y:"485", code:"act2_t5_s",  glimmer:"act2_t5_s", imago:"right", status:"not-visited"},
      { x:"455",  y:"490", code:"act2_t6_h",  glimmer:"act2_t6_h", imago:"left",  status:"not-visited"},
      { x:"485",  y:"490", code:"act2_t6_s",  glimmer:"act2_t6_s", imago:"right", status:"not-visited"},
      { x:"430",  y:"560", code:"act2_a4_h",  glimmer:"act2_a4_h", imago:"left",  status:"not-visited"},
      { x:"460",  y:"560", code:"act2_a4_s",  glimmer:"act2_a4_s", imago:"right", status:"not-visited"},
      { x:"500",  y:"555", code:"act2_a5_h",  glimmer:"act2_a5_h", imago:"left",  status:"not-visited"},
      { x:"530",  y:"555", code:"act2_a5_s",  glimmer:"act2_a5_s", imago:"right", status:"not-visited"},
      { x:"570",  y:"550", code:"act2_a6_h",  glimmer:"act2_a6_h", imago:"left",  status:"not-visited"},
      { x:"600",  y:"550", code:"act2_a6_s",  glimmer:"act2_a6_s", imago:"right", status:"not-visited"},
      { x:"280",  y:"645", code:"act3_v_h",   glimmer:"act3_v_h", imago:"left",  status:"not-visited"},
      { x:"310",  y:"650", code:"act3_v_s",   glimmer:"act3_v_s", imago:"right", status:"not-visited"},
      { x:"380",  y:"650", code:"act3_t_h",   glimmer:"act3_t_h", imago:"left",  status:"not-visited"},
      { x:"410",  y:"650", code:"act3_t_s",   glimmer:"act3_t_s", imago:"right", status:"not-visited"},
      { x:"480",  y:"650", code:"act3_a_h",   glimmer:"act3_a_h", imago:"left",  status:"not-visited"},
      { x:"510",  y:"645", code:"act3_a_s",   glimmer:"act3_a_s", imago:"right", status:"not-visited"},
      { x:"375",  y:"810", code:"finale",     glimmer:"finale", imago:"scarab",status:"not-visited"}
    ]
  },
  actions: {
    onInit(context, payload){
      context.commit("init", payload);
    },
    gotoPage(context, params) {
      context.commit(params)
    },
    playEpisode(context, params) {
      context.commit(params)
    },
    endEpisode(context, params) {
      context.commit(params)
    },
    clearProgress(context, params) {
      context.commit(params)
    },
    loadProgress(context, params) {
      context.commit(params)
    },
    setGlimmerIndex(context, params) {
      context.commit(params)
    },
  },
  mutations: {
    init(state, payload){
      state.appView = payload;
      let localStorageEpisodeData = localStorage.getItem('episodes')
      if (localStorageEpisodeData !== null) {
        let episodes =  JSON.parse(localStorageEpisodeData)
        console.log("init")
        console.log(episodes)
        let episodeCount = state.episodes.length
        for ( let i = 0; i < episodeCount; i++) {
          state.episodes[i] = episodes[i]
        }
      }
      let localStorageCurrentAct = localStorage.getItem('currentAct')
      state.currentAct = localStorageCurrentAct
      let localStorageFinaleAvailable = localStorage.getItem('finaleAvailable')
      state.finaleAvailable = localStorageFinaleAvailable
    },
    gotoPage(state, payload){
      if (payload.page === "/urworld"){
        state.isUr = true
        state.displayingEpisode = false
      } else {
        state.isUr = false
      }
      state.currentEpisode = this.state.notGlimmeringEpisode
    },
    playEpisode(state, payload) {
      let code = payload.code
      state.currentEpisode = "https://cortrah.github.io/eroica-2022/episodes/" + code + ".mp4"
      state.displayingEpisode = true
      let episodeIndex = state.episodes.findIndex( episode => episode.code === code)

      // Act 1
      if (state.currentAct === "act1") {
        state.episodes[episodeIndex].status = "visited"

        // if all act1 is now visited enable act2
        let act1visitedCount = 0
        let act1EpisodeCount = 63
        for( let i = 0; i < act1EpisodeCount; i++) {
          if (state.episodes[i].status === 'visited') {
            act1visitedCount++
          }
        }
        if (act1visitedCount === act1EpisodeCount) {
          // reveal act2
          state.currentAct = "act2"
        }
      }

      // Act 2
      if (state.currentAct === "act2") {
        if (state.episodes[episodeIndex].status === 'not-visited') {
          //set it to visited
          state.episodes[episodeIndex].status = "visited"
          // and find it's mask brother
          let maskBrotherCode = '';
          let maskChoice = code.charAt(code.length-1)
          if (maskChoice === 'h') {
            maskBrotherCode = code.substr(0,code.length-1) + 's'
          } else {
            maskBrotherCode = code.substr(0, code.length-1) + 'h'
          }
          let maskBrotherIndex = state.episodes.findIndex( episode => episode.code === maskBrotherCode)
          // make that mask brother unchosen
          state.episodes[maskBrotherIndex].status = "unchosen"

          // if all 3 Vienna are chosen their act 3 is made visible and enabled
          let act2StartVIndex = 63
          let act2EndVIndex = 68
          let act2VDecisionCount = 0
          let act2VPositivity = 0
          for( let i = act2StartVIndex; i <= act2EndVIndex; i++) {
            let code = state.episodes[i].code
            if (state.episodes[i].status === 'visited') {
              act2VDecisionCount++
              if (code.endsWith('h')) {
                act2VPositivity++
              }
              if (code.endsWith('s')) {
                act2VPositivity--
              }
            }
            if (act2VDecisionCount >= 3) {
              if (act2VPositivity > 0) {
                state.episodes[81].status = 'not-visited'
                state.episodes[82].status = 'unchosen'
              } else {
                state.episodes[81].status = 'unchosen'
                state.episodes[82].status = 'not-visited'
              }
            }
          }

          // if all 3 Tarrytown are chosen their act 3 is made visible and enabled
          let act2StartTIndex = 69
          let act2EndTIndex = 74
          let act2TDecisionCount = 0
          let act2TPositivity = 0
          for( let i = act2StartTIndex; i <= act2EndTIndex; i++) {
            let code = state.episodes[i].code
            if (state.episodes[i].status === 'visited') {
              act2TDecisionCount++
              if (code.endsWith('h')) {
                act2TPositivity++
              }
              if (code.endsWith('s')) {
                act2TPositivity--
              }
            }
            if(act2TDecisionCount >= 3 ){
              if (act2TPositivity > 0) {
                state.episodes[83].status = 'not-visited'
                state.episodes[84].status = 'unchosen'
              } else {
                state.episodes[83].status = 'unchosen'
                state.episodes[84].status = 'not-visited'
              }
            }
          }

          // if all 3 Amazon are chosen their act 3 is made visible and enabled
          let act2StartAIndex = 75
          let act2EndAIndex = 80
          let act2ADecisionCount = 0
          let act2APositivity = 0
          for( let i = act2StartAIndex; i <= act2EndAIndex; i++) {
            let code = state.episodes[i].code
            if (state.episodes[i].status === 'visited') {
              act2ADecisionCount++
              if (code.endsWith('h')) {
                act2APositivity++
              }
              if (code.endsWith('s')) {
                act2APositivity--
              }
            }
            if (act2ADecisionCount >= 3) {
              if (act2APositivity > 0) {
                state.episodes[85].status = 'not-visited'
                state.episodes[86].status = 'unchosen'
              } else {
                state.episodes[85].status = 'unchosen'
                state.episodes[86].status = 'not-visited'
              }
            }
          }

          // if all 3 locations have chosen their 3 choices then we enter act3
          if ((act2VDecisionCount >= 3) && (act2TDecisionCount >= 3) && (act2ADecisionCount >= 3)) {
            state.currentAct = "act3"
          }
        }
        // if status === 'visited' or 'unchosen' do nothing
      }

      // Act 3
      let act3Count = 0
      if (state.currentAct === "act3") {
        if (state.episodes[episodeIndex].status === 'not-visited') {
          //set it to visited
          state.episodes[episodeIndex].status = "visited"
        }
        // if all act3 are chosen and visited, finaleAvailable = true
        for( let i = 81; i <= 86; i++) {
          if ((state.episodes[i].status === 'visited') || (state.episodes[i].status === 'unchosen')) {
            act3Count++
          }
        }
        if(act3Count >= 6) {
          state.finaleAvailable = true
        }
      }
      localStorage.setItem('episodes', JSON.stringify(state.episodes))
      localStorage.setItem('currentAct', state.currentAct)
      localStorage.setItem('finaleAvailable', state.finaleAvailable)
    },
    endEpisode(state) {
      state.displayingEpisode = false
    },
    setGlimmerIndex(state, payload) {
      let i = state.episodes.findIndex( episode => episode.code === payload.episode.code)
      state.glimmerIndex = i
    },
    clearProgress(state){
      for( let i = 0; i < state.episodes.length; i++) {
        state.episodes[i].status = "not-visited"
        localStorage.setItem(i.toString(), "not-visited")
      }
      localStorage.setItem('episodes', JSON.stringify(state.episodes))
    },
    loadProgress(state, payload){
      let fileData =  JSON.parse(payload.data)
      for( let i = 0; i < fileData.episodes.length; i++) {
        state.episodes[i].status = fileData.episodes[i].status
      }

      // by default start at act1
      state.currentAct = "act1"
      // if all act1 is now visited enable act2
      let act1visitedCount = 0
      let act1EpisodeCount = 63
      for( let i = 0; i < act1EpisodeCount; i++) {
        if (state.episodes[i].status === 'visited') {
          act1visitedCount++
        }
      }
      if (act1visitedCount === act1EpisodeCount) {
        // reveal act2
        state.currentAct = "act2"
      }

      // if all act 2 are chosen make it act 3
      // if all 3 Vienna are chosen their act 3 is made visible and enabled
      let act2StartVIndex = 63
      let act2EndVIndex = 68
      let act2VDecisionCount = 0
      let act2VPositivity = 0
      for( let i = act2StartVIndex; i <= act2EndVIndex; i++) {
        let code = state.episodes[i].code
        if (state.episodes[i].status === 'visited') {
          act2VDecisionCount++
          if (code.endsWith('h')) {
            act2VPositivity++
          }
          if (code.endsWith('s')) {
            act2VPositivity--
          }
        }
        if (act2VDecisionCount >= 3) {
          if (act2VPositivity > 0) {
            state.episodes[81].status = 'not-visited'
            state.episodes[82].status = 'unchosen'
          } else {
            state.episodes[81].status = 'unchosen'
            state.episodes[82].status = 'not-visited'
          }
        }
      }

      // if all 3 Tarrytown are chosen their act 3 is made visible and enabled
      let act2StartTIndex = 69
      let act2EndTIndex = 74
      let act2TDecisionCount = 0
      let act2TPositivity = 0
      for( let i = act2StartTIndex; i <= act2EndTIndex; i++) {
        let code = state.episodes[i].code
        if (state.episodes[i].status === 'visited') {
          act2TDecisionCount++
          if (code.endsWith('h')) {
            act2TPositivity++
          }
          if (code.endsWith('s')) {
            act2TPositivity--
          }
        }
        if(act2TDecisionCount >= 3 ){
          if (act2TPositivity > 0) {
            state.episodes[83].status = 'not-visited'
            state.episodes[84].status = 'unchosen'
          } else {
            state.episodes[83].status = 'unchosen'
            state.episodes[84].status = 'not-visited'
          }
        }
      }

      // if all 3 Amazon are chosen their act 3 is made visible and enabled
      let act2StartAIndex = 75
      let act2EndAIndex = 80
      let act2ADecisionCount = 0
      let act2APositivity = 0
      for( let i = act2StartAIndex; i <= act2EndAIndex; i++) {
        let code = state.episodes[i].code
        if (state.episodes[i].status === 'visited') {
          act2ADecisionCount++
          if (code.endsWith('h')) {
            act2APositivity++
          }
          if (code.endsWith('s')) {
            act2APositivity--
          }
        }
        if (act2ADecisionCount >= 3) {
          if (act2APositivity > 0) {
            state.episodes[85].status = 'not-visited'
            state.episodes[86].status = 'unchosen'
          } else {
            state.episodes[85].status = 'unchosen'
            state.episodes[86].status = 'not-visited'
          }
        }
      }
      // if all 3 locations have chosen their 3 choices then we enter act3
      if ((act2VDecisionCount >= 3) && (act2TDecisionCount >= 3) && (act2ADecisionCount >= 3)) {
        // reveal act3
        state.currentAct = "act3"
      }

      // if all act 3 are chosen enable finale
      let act3Count = 0
      if (state.currentAct === "act3") {
        // if all act3 are chosen and visited, finaleAvailable = true
        for( let i = 81; i <= 86; i++) {
          if ((state.episodes[i].status === 'visited') || (state.episodes[i].status === 'unchosen')) {
            act3Count++
          }
        }
        if(act3Count >= 6) {
          state.finaleAvailable = true
        }
      }
      localStorage.setItem('episodes', JSON.stringify(state.episodes))
    },
  }
})
