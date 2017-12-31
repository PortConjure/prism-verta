//
// Just a communication bus between Vue
// components where using Vuex wouldn't make sense.
// 
// Documentation: https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication
//

import Vue from 'vue';

export let Bus = new Vue();