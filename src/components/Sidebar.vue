<template>
  <div class="bg-dark sidebar ps-3">
    <div class="mb-2 mb-md-5 pt-3 pt-md-5">
        <h3 class="text-white text-start d-inline-block me-1">La Musica</h3>
        <i class="fas fa-headphones-alt text-white"></i>
    </div>
    <ul>
      <li class="mb-3">
        <a
          @click.prevent="changeNav('Home');"
          :class="{ 'active': navbar === 'Home' }"
          class="sidebar__link">Home</a>
      </li>
      <li>
        <a
          @click.prevent="changeNav('Playlist');"
          :class="{ 'active': navbar === 'Playlist' }"
          class="sidebar__link">Playlist</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    changeNav(nav) {
      this.$store.dispatch('changeNav', nav);
    },
  },
  computed: {
    navbar() {
      return this.$store.state.navbar;
    },
  },
};
</script>
