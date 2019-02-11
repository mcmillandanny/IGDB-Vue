Vue.component('game-news', {
    props: ['game-stuff'],
  
    data: function () {
      return {
      }
    },
    template: `
        <div>
            <h1>{{gameStuff.data.articles}}</h1>
        </div>`
  })