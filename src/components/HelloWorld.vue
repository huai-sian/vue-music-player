<template>
  <div class="container-fluid px-0 bg-dark">
    <div class="row">
      <div class="col-lg-2 col-md-3 px-0 position-relative bg-dark">
        <Sidebar />
      </div>
      <div class="col-lg-10 col-md-9 px-0 overflow-auto"
        style="background-color: #212121;">
        <Playlist/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Playlist from './Playlist.vue';

export default {
  name: 'HelloWorld',
  components: {
    Sidebar,
    Playlist,
  },
  data() {
    return {
    };
  },
  props: {
    msg: String,
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
