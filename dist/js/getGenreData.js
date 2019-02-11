'use strict';

Vue.component('game-feed', {
  props: ['game-data'],

  data: function data() {
    return {};
  },
  template: '<div>\n \t\t\t<genre v-for="gamename in gameData" :game-object="gamename"></genre>\n\n \t\t\t </div>'
});
//# sourceMappingURL=getGenreData.js.map
