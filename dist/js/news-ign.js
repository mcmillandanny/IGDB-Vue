'use strict';

Vue.component('game-news', {
    props: ['game-stuff'],

    data: function data() {
        return {};
    },
    template: '\n        <div>\n            <h1>{{gameStuff.data.articles}}</h1>\n        </div>'
});
//# sourceMappingURL=news-ign.js.map
