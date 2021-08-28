<template>
  <div style="color:whitesmoke">
    <h1>Progress</h1>
    <h3>
      Download Progress as
    </h3>
    <input ref="filename" v-model="filename"/>
    <button @click="downloadProgress()">Save</button>
    <h3 @click="uploadProgress()">
      Upload Progress from
    </h3>
    <file-reader @load="text = $event"></file-reader>
    <h3>
      Clear All Progress
    </h3>
    <button @click="clearProgress()">
      Clear
    </button>
    <textarea v-show=false rows="10" v-model="text"></textarea>
    <br>
    <button @click="testAFewInAct1">A few selected in Act 1</button>
    <button @click="testAboutToFinishAct1">About to finish Act 1</button>
    <button @click="testAboutToFinishAct2">About to finish Act 2</button>
    <button @click="testEnableFinale">About to enable finale</button>
  </div>
</template>
<script>
import FileReader from "../components/FileReader";

let aFewInAct1 = { episodes: [
  { x:"120", y:"40",  code:"act1_v1_n1", glimmer:"Promptings and seizures", imago:"node", status:"visited"},
  { x:"144", y:"20",  code:"act1_v1_n2", glimmer:"Sounding brass", imago:"node",  status:"visited"},
  { x:"175", y:"10",  code:"act1_v1_n3", glimmer:"A whited sepulcher", imago:"node",  status:"visited"},
  { x:"210", y:"5",  code:"act1_v1_n4", glimmer:"Demon dance of the new", imago:"node",  status:"visited"},
  { x:"155", y:"55",  code:"act1_v1_p1", glimmer:"Window mirror eye", imago:"node",  status:"visited"},
  { x:"190", y:"45",  code:"act1_v1_p2", glimmer:"Wings and talons", imago:"node",  status:"visited"},
  { x:"185", y:"82", code:"act1_v1_m1", glimmer:"A puddle of tallow", imago:"node",  status:"visited"},
  { x:"350",  y:"20",  code:"act1_t1_n1", glimmer:"The consummate design", imag:"node",  status:"visited"},
  { x:"385",  y:"20",  code:"act1_t1_n2", glimmer:"Ahh skin ...", imag:"node",  status:"not-visited"},
  { x:"420",  y:"20",  code:"act1_t1_n3", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"455",  y:"20",  code:"act1_t1_n4", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"380",  y:"60",  code:"act1_t1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
  { x:"420",  y:"60",  code:"act1_t1_p2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"400",  y:"100", code:"act1_t1_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"550",  y:"20",  code:"act1_a1_n1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"585",  y:"20",  code:"act1_a1_n2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"620",  y:"20",  code:"act1_a1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
  { x:"655",  y:"20",  code:"act1_a1_n4", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"580",  y:"60",  code:"act1_a1_p1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"620",  y:"60",  code:"act1_a1_p2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"600",  y:"100", code:"act1_a1_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"150",  y:"200", code:"act1_v2_n1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"185",  y:"200", code:"act1_v2_n2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"220",  y:"200", code:"act1_v2_n3", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"255",  y:"200", code:"act1_v2_n4", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"180",  y:"240", code:"act1_v2_p1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"220",  y:"240", code:"act1_v2_p2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"200",  y:"280", code:"act1_v2_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"350",  y:"200", code:"act1_t2_n1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"385",  y:"200", code:"act1_t2_n2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"420",  y:"200", code:"act1_t2_n3", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"455",  y:"200", code:"act1_t2_n4", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"380",  y:"240", code:"act1_t2_p1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"420",  y:"240", code:"act1_t2_p2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"400",  y:"280", code:"act1_t2_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"550",  y:"200", code:"act1_a2_n1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"585",  y:"200", code:"act1_a2_n2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"620",  y:"200", code:"act1_a2_n3", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"655",  y:"200", code:"act1_a2_n4", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"580",  y:"240", code:"act1_a2_p1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"620",  y:"240", code:"act1_a2_p2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"600",  y:"280", code:"act1_a2_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"150",  y:"380", code:"act1_v3_n1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"185",  y:"380", code:"act1_v3_n2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"220",  y:"380", code:"act1_v3_n3", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"255",  y:"380", code:"act1_v3_n4", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"180",  y:"420", code:"act1_v3_p1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"220",  y:"420", code:"act1_v3_p2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"200",  y:"460", code:"act1_v3_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"350",  y:"380", code:"act1_t3_n1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"385",  y:"380", code:"act1_t3_n2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"420",  y:"380", code:"act1_t3_n3", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"455",  y:"380", code:"act1_t3_n4", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"380",  y:"420", code:"act1_t3_p1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"420",  y:"420", code:"act1_t3_p2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"400",  y:"460", code:"act1_t3_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"550",  y:"380", code:"act1_a3_n1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"585",  y:"380", code:"act1_a3_n2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"620",  y:"380", code:"act1_a3_n3", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"655",  y:"380", code:"act1_a3_n4", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"580",  y:"420", code:"act1_a3_p1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"620",  y:"420", code:"act1_a3_p2", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"600",  y:"460", code:"act1_a3_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
  { x:"20",   y:"560", code:"act2_v4_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"50",   y:"560", code:"act2_v4_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"80",   y:"560", code:"act2_v5_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"110",  y:"560", code:"act2_v5_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"140",  y:"560", code:"act2_v6_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"170",  y:"560", code:"act2_v6_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"320",  y:"560", code:"act2_t4_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"350",  y:"560", code:"act2_t4_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"380",  y:"560", code:"act2_t5_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"410",  y:"560", code:"act2_t5_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"440",  y:"560", code:"act2_t6_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"470",  y:"560", code:"act2_t6_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"620",  y:"560", code:"act2_a4_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"650",  y:"560", code:"act2_a4_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"680",  y:"560", code:"act2_a5_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"710",  y:"560", code:"act2_a5_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"740",  y:"560", code:"act2_a6_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"770",  y:"560", code:"act2_a6_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"80",   y:"610", code:"act3_v_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"110",  y:"610", code:"act3_v_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"380",  y:"610", code:"act3_t_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"410",  y:"610", code:"act3_t_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"680",  y:"610", code:"act3_a_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
  { x:"710",  y:"610", code:"act3_a_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
  { x:"400",  y:"685", code:"finale",     glimmer:"gogo", imag:"scarab",status:"not-visited"}
]};

let aboutToFinishAct1 = { episodes: [
    { x:"150",  y:"20",  code:"act1_v1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"20",  code:"act1_v1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"20",  code:"act1_v1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"20",  code:"act1_v1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"60",  code:"act1_v1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"60",  code:"act1_v1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"100", code:"act1_v1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"20",  code:"act1_t1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"20",  code:"act1_t1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"20",  code:"act1_t1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"20",  code:"act1_t1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"60",  code:"act1_t1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"60",  code:"act1_t1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"100", code:"act1_t1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"20",  code:"act1_a1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"20",  code:"act1_a1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"20",  code:"act1_a1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"20",  code:"act1_a1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"60",  code:"act1_a1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"60",  code:"act1_a1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"100", code:"act1_a1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"150",  y:"200", code:"act1_v2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"200", code:"act1_v2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"200", code:"act1_v2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"200", code:"act1_v2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"240", code:"act1_v2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"240", code:"act1_v2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"280", code:"act1_v2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"200", code:"act1_t2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"200", code:"act1_t2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"200", code:"act1_t2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"200", code:"act1_t2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"240", code:"act1_t2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"240", code:"act1_t2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"280", code:"act1_t2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"200", code:"act1_a2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"200", code:"act1_a2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"200", code:"act1_a2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"200", code:"act1_a2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"240", code:"act1_a2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"240", code:"act1_a2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"280", code:"act1_a2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"150",  y:"380", code:"act1_v3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"380", code:"act1_v3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"380", code:"act1_v3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"380", code:"act1_v3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"420", code:"act1_v3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"420", code:"act1_v3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"460", code:"act1_v3_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"380", code:"act1_t3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"380", code:"act1_t3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"380", code:"act1_t3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"380", code:"act1_t3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"420", code:"act1_t3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"420", code:"act1_t3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"460", code:"act1_t3_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"380", code:"act1_a3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"380", code:"act1_a3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"380", code:"act1_a3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"380", code:"act1_a3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"420", code:"act1_a3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"420", code:"act1_a3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"460", code:"act1_a3_m1", glimmer:"gogo", imag:"node",  status:"not-visited"},
    { x:"20",   y:"560", code:"act2_v4_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"50",   y:"560", code:"act2_v4_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"80",   y:"560", code:"act2_v5_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"110",  y:"560", code:"act2_v5_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"140",  y:"560", code:"act2_v6_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"170",  y:"560", code:"act2_v6_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"320",  y:"560", code:"act2_t4_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"350",  y:"560", code:"act2_t4_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"380",  y:"560", code:"act2_t5_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"410",  y:"560", code:"act2_t5_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"440",  y:"560", code:"act2_t6_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"470",  y:"560", code:"act2_t6_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"620",  y:"560", code:"act2_a4_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"650",  y:"560", code:"act2_a4_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"680",  y:"560", code:"act2_a5_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"710",  y:"560", code:"act2_a5_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"740",  y:"560", code:"act2_a6_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"770",  y:"560", code:"act2_a6_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"80",   y:"610", code:"act3_v_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"110",  y:"610", code:"act3_v_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"380",  y:"610", code:"act3_t_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"410",  y:"610", code:"act3_t_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"680",  y:"610", code:"act3_a_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"710",  y:"610", code:"act3_a_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"400",  y:"685", code:"finale",     glimmer:"gogo", imag:"scarab",status:"not-visited"}
  ]};


let aboutToFinishAct2 = { episodes: [
    { x:"150",  y:"20",  code:"act1_v1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"20",  code:"act1_v1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"20",  code:"act1_v1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"20",  code:"act1_v1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"60",  code:"act1_v1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"60",  code:"act1_v1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"100", code:"act1_v1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"20",  code:"act1_t1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"20",  code:"act1_t1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"20",  code:"act1_t1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"20",  code:"act1_t1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"60",  code:"act1_t1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"60",  code:"act1_t1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"100", code:"act1_t1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"20",  code:"act1_a1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"20",  code:"act1_a1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"20",  code:"act1_a1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"20",  code:"act1_a1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"60",  code:"act1_a1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"60",  code:"act1_a1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"100", code:"act1_a1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"150",  y:"200", code:"act1_v2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"200", code:"act1_v2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"200", code:"act1_v2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"200", code:"act1_v2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"240", code:"act1_v2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"240", code:"act1_v2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"280", code:"act1_v2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"200", code:"act1_t2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"200", code:"act1_t2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"200", code:"act1_t2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"200", code:"act1_t2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"240", code:"act1_t2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"240", code:"act1_t2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"280", code:"act1_t2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"200", code:"act1_a2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"200", code:"act1_a2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"200", code:"act1_a2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"200", code:"act1_a2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"240", code:"act1_a2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"240", code:"act1_a2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"280", code:"act1_a2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"150",  y:"380", code:"act1_v3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"380", code:"act1_v3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"380", code:"act1_v3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"380", code:"act1_v3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"420", code:"act1_v3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"420", code:"act1_v3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"460", code:"act1_v3_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"380", code:"act1_t3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"380", code:"act1_t3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"380", code:"act1_t3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"380", code:"act1_t3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"420", code:"act1_t3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"420", code:"act1_t3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"460", code:"act1_t3_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"380", code:"act1_a3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"380", code:"act1_a3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"380", code:"act1_a3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"380", code:"act1_a3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"420", code:"act1_a3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"420", code:"act1_a3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"460", code:"act1_a3_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"20",   y:"560", code:"act2_v4_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"50",   y:"560", code:"act2_v4_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"80",   y:"560", code:"act2_v5_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"110",  y:"560", code:"act2_v5_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"140",  y:"560", code:"act2_v6_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"170",  y:"560", code:"act2_v6_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"320",  y:"560", code:"act2_t4_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"350",  y:"560", code:"act2_t4_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"380",  y:"560", code:"act2_t5_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"410",  y:"560", code:"act2_t5_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"440",  y:"560", code:"act2_t6_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"470",  y:"560", code:"act2_t6_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"620",  y:"560", code:"act2_a4_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"650",  y:"560", code:"act2_a4_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"680",  y:"560", code:"act2_a5_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"710",  y:"560", code:"act2_a5_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"740",  y:"560", code:"act2_a6_h",  glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"770",  y:"560", code:"act2_a6_s",  glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"80",   y:"610", code:"act3_v_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"110",  y:"610", code:"act3_v_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"380",  y:"610", code:"act3_t_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"410",  y:"610", code:"act3_t_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"680",  y:"610", code:"act3_a_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"710",  y:"610", code:"act3_a_s",   glimmer:"gogo", imag:"right", status:"not-visited"},
    { x:"400",  y:"685", code:"finale",     glimmer:"gogo", imag:"scarab",status:"not-visited"}
  ]};

let enableFinale = { episodes: [
    { x:"150",  y:"20",  code:"act1_v1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"20",  code:"act1_v1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"20",  code:"act1_v1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"20",  code:"act1_v1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"60",  code:"act1_v1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"60",  code:"act1_v1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"100", code:"act1_v1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"20",  code:"act1_t1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"20",  code:"act1_t1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"20",  code:"act1_t1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"20",  code:"act1_t1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"60",  code:"act1_t1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"60",  code:"act1_t1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"100", code:"act1_t1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"20",  code:"act1_a1_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"20",  code:"act1_a1_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"20",  code:"act1_a1_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"20",  code:"act1_a1_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"60",  code:"act1_a1_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"60",  code:"act1_a1_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"100", code:"act1_a1_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"150",  y:"200", code:"act1_v2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"200", code:"act1_v2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"200", code:"act1_v2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"200", code:"act1_v2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"240", code:"act1_v2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"240", code:"act1_v2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"280", code:"act1_v2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"200", code:"act1_t2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"200", code:"act1_t2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"200", code:"act1_t2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"200", code:"act1_t2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"240", code:"act1_t2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"240", code:"act1_t2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"280", code:"act1_t2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"200", code:"act1_a2_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"200", code:"act1_a2_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"200", code:"act1_a2_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"200", code:"act1_a2_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"240", code:"act1_a2_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"240", code:"act1_a2_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"280", code:"act1_a2_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"150",  y:"380", code:"act1_v3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"185",  y:"380", code:"act1_v3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"380", code:"act1_v3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"255",  y:"380", code:"act1_v3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"180",  y:"420", code:"act1_v3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"220",  y:"420", code:"act1_v3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"200",  y:"460", code:"act1_v3_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"350",  y:"380", code:"act1_t3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"385",  y:"380", code:"act1_t3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"380", code:"act1_t3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"455",  y:"380", code:"act1_t3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"380",  y:"420", code:"act1_t3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"420",  y:"420", code:"act1_t3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"400",  y:"460", code:"act1_t3_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"550",  y:"380", code:"act1_a3_n1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"585",  y:"380", code:"act1_a3_n2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"380", code:"act1_a3_n3", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"655",  y:"380", code:"act1_a3_n4", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"580",  y:"420", code:"act1_a3_p1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"620",  y:"420", code:"act1_a3_p2", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"600",  y:"460", code:"act1_a3_m1", glimmer:"gogo", imag:"node",  status:"visited"},
    { x:"20",   y:"560", code:"act2_v4_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"50",   y:"560", code:"act2_v4_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"80",   y:"560", code:"act2_v5_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"110",  y:"560", code:"act2_v5_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"140",  y:"560", code:"act2_v6_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"170",  y:"560", code:"act2_v6_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"320",  y:"560", code:"act2_t4_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"350",  y:"560", code:"act2_t4_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"380",  y:"560", code:"act2_t5_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"410",  y:"560", code:"act2_t5_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"440",  y:"560", code:"act2_t6_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"470",  y:"560", code:"act2_t6_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"620",  y:"560", code:"act2_a4_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"650",  y:"560", code:"act2_a4_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"680",  y:"560", code:"act2_a5_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"710",  y:"560", code:"act2_a5_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"740",  y:"560", code:"act2_a6_h",  glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"770",  y:"560", code:"act2_a6_s",  glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"80",   y:"610", code:"act3_v_h",   glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"110",  y:"610", code:"act3_v_s",   glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"380",  y:"610", code:"act3_t_h",   glimmer:"gogo", imag:"left",  status:"visited"},
    { x:"410",  y:"610", code:"act3_t_s",   glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"680",  y:"610", code:"act3_a_h",   glimmer:"gogo", imag:"left",  status:"not-visited"},
    { x:"710",  y:"610", code:"act3_a_s",   glimmer:"gogo", imag:"right", status:"unchosen"},
    { x:"400",  y:"685", code:"finale",     glimmer:"gogo", imag:"scarab",status:"not-visited"}
  ]};

export default {
  name: 'Options',
  data: () => (
      {
        filename:'eroica.txt',
        text:''
      }
  ),
  watch: {
    text: function (newVal) {
      this.$store.dispatch({type:"loadProgress", data: newVal.toString()})
      this.$router.push("/urworld")
    }
  },
  components: {
    FileReader
  },
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => this.$emit("load", e.target.result);
      reader.readAsText(file);
      this.loadProgress(file);
      this.$router.push("/urworld")
    },
    downloadProgress() {
      let body = localStorage.getItem('episodes')
      let element = document.createElement('a');
      element.setAttribute('href',
          'data:text/plain;charset=utf-8, '
          + encodeURIComponent(body));
      element.setAttribute('download', this.data.fileName);
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },
    clearProgress() {
      this.$store.dispatch({type:"clearProgress"});
      this.$router.push("/urworld")
    },
    testAFewInAct1(){
      this.$store.dispatch({type:"loadProgress", data: JSON.stringify(aFewInAct1)});
      this.$router.push("/urworld")
    },
    testAboutToFinishAct1(){
      this.$store.dispatch({type:"loadProgress", data: JSON.stringify(aboutToFinishAct1)})
      this.$router.push("/urworld")
    },
    testAboutToFinishAct2(){
      this.$store.dispatch({type:"loadProgress", data: JSON.stringify(aboutToFinishAct2)})
      this.$router.push("/urworld")
    },
    testEnableFinale(){
      this.$store.dispatch({type:"loadProgress", data: JSON.stringify(enableFinale)})
      this.$router.push("/urworld")
    }
  },
}
</script>
