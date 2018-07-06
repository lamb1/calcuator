// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 申请的高德key
    key: '6bb7824c2c3c11bcb40a31d118556fbc',
    // 插件集合
    plugin: ['']
});

Vue.config.productionTip = false;

import './assets/css/index.css'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});