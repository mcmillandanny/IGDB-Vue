'use strict';

Vue.component('game-news', {
    props: ['game-stuff'],

    data: function data() {
        return {};
    },

    methods: {
        moment: function (_moment) {
            function moment() {
                return _moment.apply(this, arguments);
            }

            moment.toString = function () {
                return _moment.toString();
            };

            return moment;
        }(function () {
            return moment();
        })
    },

    template: '\n        <div>\n            <div v-if="gameStuff && gameStuff.data">\n                <div class="news-wrapper" v-for="array in gameStuff.data.articles">\n                    <h1 class="desc-news">{{array.description}}</h1>\n                    <h2>Published {{moment(array.publishedAt).format("MMM Do, YYYY")}}</h2>\n                    <h3>By {{array.author}}</h3>\n                    <img v-bind:src="array.urlToImage"  class="content-img" alt="image">\n                    <a v-bind:href="array.url" class="url-news">View this article</a>\n                </div>\n            </div>\n        </div>'
});
//# sourceMappingURL=news-ign.js.map
