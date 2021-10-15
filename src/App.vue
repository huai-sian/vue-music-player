<template>
  <div id="app">
    <div
      class="modal"
      tabindex="-1"
      ref="trialModal"
      :class="{ 'd-block': modalShow }"
      aria-hidden="true"
      >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content p-4">
          <div class="modal-body text-white d-flex">
          <div class="order-2">
            <img src="./assets/images/sam-mar-OQOKSsj8QME-unsplash.jpg" width="330">
          </div>
          <div class="order-1 text-start">
            <h2 class="fw-bolder text-success modal__h2 mb-4">只要 NT$19.00</h2>
            <h3 class="text-white modal__h3 mb-2">即享 3 個月熱門音樂</h3>
            <p class="blockquote-footer mt-0">Premium 可讓你隨時隨地播放喜歡的歌曲，0廣告干擾。</p>
            <button
              type="button"
              class="btn btn-success fw-bolder my-3 btn__close"
              @click="modalShow = false">關閉</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      modalShow: true,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
@import 'assets/style.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
