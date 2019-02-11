Vue.component('game-feed', {
  props: ['game-data'],

  data: function () {
    return {
    }
  },
  template: `
        <div>
          <h1>{{gameData.name}}</h1>
          <p>{{gameData.summary}}</p>
          <img v-if="gameData.screenshots"  :src="gameData.screenshots[0].url.replace('t_thumb', 't_screenshot_med')">
       </div>`
})

