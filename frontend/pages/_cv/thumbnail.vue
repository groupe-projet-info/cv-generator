<template>
  <div id="container">
    <div id="side-panel">
      <h3>{user.fullName}</h3>
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
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
              <g transform-origin="center" transform="scale(0.8)">
                <path fill="#2B2D42" fill-rule="evenodd"
                  d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z" />
              </g>
            </svg>
            <span class="font-small">——————————————<br> ————————</span>
          </li><br>
          <li class="sp-item">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
              <g transform-origin="center" transform="scale(0.8)">
                <path fill="#2B2D42" fill-rule="evenodd"
                  d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354L4.793 6.5 3.146 4.854a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708z" />
              </g>
            </svg>
            <span class="font-small">——————————————</span>
          </li><br>
          <li class="sp-item">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
              <g transform-origin="center" transform="scale(0.8)">
                <path fill="#2B2D42" fill-rule="evenodd"
                  d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5.5v3A1.5 1.5 0 0 0 6 11.5H.5a.5.5 0 0 0 0 1H6A1.5 1.5 0 0 0 7.5 14h1a1.5 1.5 0 0 0 1.5-1.5h5.5a.5.5 0 0 0 0-1H10A1.5 1.5 0 0 0 8.5 10V7H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
              </g>
            </svg>
            <span class="font-small">————————————————<br> ——————————————</span>
          </li><br>
          <li class="sp-item">
            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
              <g transform-origin="center" transform="scale(0.8)">
                <path fill="#2B2D42" fill-rule="evenodd"
                  d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4C14.665 5.474 11.68 6.667 8 6.667 4.318 6.667 1.333 5.473 1.333 4V2.667zm0 3.667v3C1.333 10.805 4.318 12 8 12c3.68 0 6.665-1.193 6.667-2.665V6.334c-.43.32-.931.58-1.458.79C11.81 7.684 9.967 8 8 8c-1.967 0-3.81-.317-5.21-.876a6.508 6.508 0 0 1-1.457-.79zm13.334 5.334c-.43.319-.931.578-1.458.789-1.4.56-3.242.876-5.209.876-1.967 0-3.81-.316-5.21-.876a6.51 6.51 0 0 1-1.457-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z" />
              </g>
            </svg>
            <span class="font-small">———————————————<br> ———————————————</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Centres d'intérêt</h3>
        <div class="sp-item">
          <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
            <g transform-origin="center" transform="scale(0.8)" fill="#2B2D42">
              <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
              <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
              <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
              <path fill-rule="evenodd"
                d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
            </g>
          </svg>
          <span class="font-small">—————————————</span>
        </div><br>
        <div class="sp-item">
          <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
            <g transform-origin="center" transform="scale(0.8)" fill="#2B2D42">
              <path fill-rule="evenodd"
                d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z" />
              <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z" />
            </g>
          </svg>
          <span class="font-small">————————————— <br />——————————</span>
        </div><br>
        <div class="sp-item">
          <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
            <g transform-origin="center" transform="scale(0.8)" fill="#2B2D42">
              <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539a8.372 8.372 0 0 1-1.198-.49 7.01 7.01 0 0 1 2.276-1.52 6.7 6.7 0 0 0-.597.932 8.854 8.854 0 0 0-.48 1.079zM3.509 7.5H1.017A6.964 6.964 0 0 1 2.38 3.825c.47.258.995.482 1.565.667A13.4 13.4 0 0 0 3.508 7.5zm1.4-2.741c.808.187 1.681.301 2.591.332V7.5H4.51c.035-.987.176-1.914.399-2.741zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5H7.5v2.409c-.91.03-1.783.145-2.591.332a12.343 12.343 0 0 1-.4-2.741zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696A12.63 12.63 0 0 1 7.5 11.91v3.014c-.67-.204-1.335-.82-1.887-1.855a7.776 7.776 0 0 1-.395-.872zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964a9.083 9.083 0 0 0-1.565.667A6.963 6.963 0 0 1 1.018 8.5h2.49a13.36 13.36 0 0 0 .437 3.008zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909c.81.03 1.577.13 2.282.287-.12.312-.252.604-.395.872-.552 1.035-1.218 1.65-1.887 1.855V11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5h-2.49a13.361 13.361 0 0 0-.437-3.008 9.123 9.123 0 0 0 1.565-.667A6.963 6.963 0 0 1 14.982 7.5zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855.143.268.276.56.395.872z" />
            </g>
          </svg>
          <span class="font-small">————————————</span>
        </div>
        <br>
        <div class="sp-item">
          <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
            <g transform-origin="center" transform="scale(0.8)" fill="#2B2D42">
              <path fill-rule="evenodd"
                d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
              <path fill-rule="evenodd"
                d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
            </g>
          </svg>
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
    return {
      cv: {}
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