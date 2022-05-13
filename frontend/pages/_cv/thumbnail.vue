<template>
  <div id="container">
    <div id="side-panel">
      <h3>{{ cv.fullName }}</h3>
      <p>
        ———————<br>
        —————
      </p>
      <div>
        <h3>A propos</h3>
        <ul class="no-style">
          <li class="sp-item">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
              <g transform-origin="center" transform="scale(0.8)">
                <path fill="#2B2D42" fill-rule="evenodd"
                  d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
              </g>
            </svg>
            <span class="font-small">—————————</span>
          </li><br>
          <li class="sp-item">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
              <g transform-origin="center" transform="scale(0.8)">
                <path fill="#2B2D42" fill-rule="evenodd"
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </g>
            </svg>
            <span class="font-small">————————————————</span>
          </li><br>
          <li class="sp-item">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
              <g transform-origin="center" transform="scale(0.8)">
                <path fill="#2B2D42" fill-rule="evenodd"
                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
              </g>
            </svg>
            <span class="font-small">—————————</span>
          </li><br>
          <li class="sp-item">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
              <g transform-origin="center" transform="scale(0.8)">
                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
              </g>
            </svg>
            <span class="font-small">—————</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Langues</h3>
        <p class="no-margin">—————</p>
        <p class="no-margin">———————</p>
      </div>
      <div>
        <h3>Informatique</h3>
        <ul class="no-style">
          <li class="sp-item">
            <span class="font-small">——————————————<br> ————————</span>
          </li><br>
          <li class="sp-item">
            <span class="font-small">——————————————</span>
          </li><br>
          <li class="sp-item">
            <span class="font-small">————————————————<br> ——————————————</span>
          </li><br>
          <li class="sp-item">
            <span class="font-small">———————————————<br> ———————————————</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Centres d'intérêt</h3>
        <div class="sp-item">
          <span class="font-small">—————————————</span>
        </div><br>
        <div class="sp-item">
          <span class="font-small">————————————— <br />——————————</span>
        </div><br>
        <div class="sp-item">
          <span class="font-small">————————————</span>
        </div>
        <br>
        <div class="sp-item">
          <span class="font-small">———————————————</span>
        </div>
      </div>
    </div>
    <div id="main-panel">
      <div class="header-box">
        <h1>{{ cv.jobTitle }}</h1>
      </div>
      <div class="main-item">
        <div class="item-header">
          <h2 class="no-margin">—————</h2>
        </div>
        <div style="height: 200px;">
        </div>
      </div>
      <div class="main-item">
        <div class="item-header">
          <h2 class="no-margin">—————</h2>
        </div>
        <div style="height: 100px;">
        </div>
      </div>
      <div class="main-item">
        <div class="item-header">
          <h2 class="no-margin">—————</h2>
        </div>
        <div style="height: 100px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
  layout: 'empty',
  async asyncData({ $api, route }) {
    try {
      let cv = await $api.cv.getItem(route.params.cv)
      return { cv }
    } catch (_err) {
      return {
        cv: {
          fullName: '',
          jobTitle: ''
        }
      }
    }
  }
})
</script>

<style>
@page {
  margin: 0;
}

body {
  transform-origin: 0 0;
  transform: scale(0.35);
}

#container,
body {
  padding: 0;
  margin: 0;
  display: inline-flex;
  background-color: white;
  color: black;
  /*! border: 1px solid black; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#container {
  height: 29.7cm;
  width: 21cm;
}

h1 {
  margin: 0;
  padding: .5cm;
  letter-spacing: 1px;
}

h3 {
  margin: 0;
  padding: .5cm;
}

p {
  margin-top: 16px;
  margin-bottom: 16px;
}

#side-panel {
  padding: .2cm;
  padding-right: 0;
  background-color: #2B2D42;
  color: white;
  box-shadow: 1px 5px 10px #2B2D42;
}

#side-panel>img {
  margin: -.2cm;
  margin-right: 0;
  margin-bottom: 0;
}

#main-panel {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  /* background: #06aed5;
  color: white; */
}

.sp-item {
  display: inline-flex;
  margin-bottom: 5px;
}

.sp-item>svg {
  margin-right: 4px;
}

.black-box {
  background-color: black;
  color: white;
}

.header-box {
  width: 100%;
  text-align: center;
  background: #014f86;
  color: white;
  margin-bottom: 25px;
  border-bottom-right-radius: 5px;
  box-shadow: 1px 5px 10px #2B2D42;
}

.main-item {
  margin: 16px;
}

.item-header {
  background: #2B2D42;
  /* #59a5d8 ; #EF233C; */
  color: white;
  padding: 2mm;
  margin-left: 3cm;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 5px;
  border: 1px solid #07c8f5;
  background: #06aed5;
  /* box-shadow:  7px 7px 14px #0594b5, 
             -7px -7px 14px #07c8f5; */
}

.item {
  display: inline-flex;
  padding-top: 1mm;
  padding-bottom: 1mm;
  align-items: baseline;
}

.item-date {
  min-width: 3cm;
  width: 3cm;
  max-width: 3cm;
  margin-right: 8px;
  font-style: italic;
  font-size: .9rem;
}

#footer {
  position: absolute;
  bottom: 0;
  right: 3px;
}

.no-margin {
  margin: 0;
}

.no-padding {
  padding: 0;
}

.no-wrap {
  word-wrap: none;
}

.font-small {
  font-size: .8rem;
  font-style: normal;
}

.no-style {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.c-lines {
  line-height: 25px;
  font-size: 1.1rem;
}
</style>