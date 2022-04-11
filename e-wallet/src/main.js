import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTheMask from "vue-the-mask";

Vue.config.productionTip = false;
Vue.use(VueTheMask);
new Vue({
  router,
  data(){
    return{
      cards: [
        {
           "id": "8811242745",
           "holder": "Prasuna Kaveti",
           "vendor": "bitcoin",
           "number": "5410 8945 7330 2420",
           "validMonth": "10",
           "validYear": "24",
           "bgColor": "#78A419",
           "textColor": "#C0C0C0",
           "img": "bitcoin"
        },
        {
           "id": "8101227424",
           "holder": "Tushita Roy",
           "vendor": "evil",
           "number": "5334 5324 4588 7363",
           "validMonth": "12",
           "validYear": "25",
           "bgColor": "#940602",
           "textColor": "#C0C0C0",
           "img": "evil"
        },
        {
           "id": "8298472839",
           "holder": "Vamsi Krishna",
           "vendor": "blockchain",
           "number": "5825 4351 6532 7872",
           "validMonth": "01",
           "validYear": "23",
           "bgColor": "#132959",
           "textColor": "#C0C0C0",
           "img": "blockchain"
        },
        {
           "id": "78121847283",
           "holder": "Gopinath Pinnu",
           "vendor": "ninja",
           "number": "5300 8355 6900 7870",
           "validMonth": "02",
           "validYear": "25",
           "bgColor": "#323334",
           "textColor": "#FFFFFF",
           "img": "ninja"
        }
      ]
    }
  },
  render: h => h(App)
}).$mount("#app");
