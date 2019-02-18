Vue.component('game-news', {
    props: ['game-stuff'],
  
    data: function () {
      return {
      }
    },

    methods: {
        moment: function () {
            return moment();
        }
    },

    template: `
        <div>
            <div v-if="gameStuff && gameStuff.data">
                <div class="news-wrapper" v-for="array in gameStuff.data.articles">
                    <h1 class="desc-news">{{array.description}}</h1>
                    <h2>Published {{moment(array.publishedAt).format("MMM Do, YYYY")}}</h2>
                    <h3>By {{array.author}}</h3>
                    <img v-bind:src="array.urlToImage"  class="content-img" alt="image">
                    <a v-bind:href="array.url" class="url-news">View this article</a>
                </div>
            </div>
        </div>`
  })