<template>
  <div class="container-fluid albumList p-4">
    <div v-for="(type) in typeList" :key="type">
      <h2 class="albumList__h2 mb-3">{{ type }}</h2>
      <div class="row mb-4">
          <div class="col-12 col-md-4 mb-3" v-for="(album) in album[type]" :key="album.album">
            <div class="albumList__img mx-auto mb-2"
            :style="`background-image: url(${album.img})`"
            @click="toAlbum(album);
            updateNavbar('Playlist');"></div>
            <p class="text-white albumList__name"
              @click="toAlbum(album);
              updateNavbar('Playlist');">{{ album.album }}</p>
          </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  props: ['album'],
  data() {
    return {
      listName: null,
    };
  },
  computed: {
    typeList() {
      return Object.keys(this.album);
    },
  },
  methods: {
    toAlbum(d) {
      this.$emit('getAlbum', d);
    },
    updateNavbar(nav) {
      this.$store.dispatch('changeNav', nav);
    },
  },
  created() {
    console.log(this.album);
  },
};
</script>
