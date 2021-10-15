<template>
  <div>
    <div>
      <div class="container-fluid p-0" style="background-color: #212121;">
        <div class="h-0">
          <youtube :video-id="videoId"
            ref="youtube"
            class="youtube"
            loop="isLoop"
            @playing="updateDuration" @paused="paused"
            @ended="loopSong"
            autoplay="isAutoPlay" />
        </div>
        <Albumlist
          :album="data"
          v-if="navbar == 'Home'" @getAlbum="getSelectedAlbum"
          ></Albumlist>
        <template v-if="navbar == 'Playlist'">
        <div class="container-fluid p-0">
          <div
            class="playlist__top py-5"
            :style="`background-image: url(${albumData.backgroundImg})`">
            <div style="z-index:3;">
            <div class="text-center">
              <small class="text-success">{{ albumData.followers }} FOLLOWERS</small>
            </div>
            <h3 class="font-weight-bold text-white playlist__top__singer">
              {{ albumData.singer }}
            </h3>
            <div class="playlist__top__btns">
              <button class="playlist__top__play mx-2"
                @click.prevent="togglePlay">
                {{ isPlay? 'PAUSE' : 'PLAY' }}</button>
              <button class="playlist__top__follow mx-2"
                @click.prevent="followHandler(albumData)"
                :class="{ 'text-success': albumData.isFollow }">
                {{ albumData.isFollow ? "UNFOLLOW" : "FOLLOW" }}</button>
            </div>
            </div>
          </div>
          <div class="col-md-8 mx-auto mt-2">
            <ul class="d-flex justify-content-center text-secondary playlist__tab mb-5">
              <li><a class="mx-3 playlist__tab__link text-secondary"
                @click.prevent="playlistTab = 'Overview'"
                :class="{'active': playlistTab == 'Overview'}"
                >OVERVIEW</a></li>
              <li><a class="mx-3 playlist__tab__link text-secondary"
                @click.prevent="playlistTab = 'Related Artist'"
                :class="{'active': playlistTab == 'Related Artist'}"
                >RELATED ARTISTS</a></li>
              <li><a class="mx-3 playlist__tab__link text-secondary"
                @click.prevent="playlistTab = 'About'"
                :class="{'active': playlistTab == 'About'}"
                >ABOUT</a></li>
            </ul>
            <div class="mt-3">
              <div v-if="playlistTab == 'Overview'" class="text-secondary">
                <ul class="px-4">
                  <li class="d-flex justify-content-between align-items-center mb-3 playlist__li"
                    v-for="(song, idx) in albumData.songs" :key="idx">
                    <div class="d-flex align-items-center">
                      <small class="playlist__li__num me-2">#{{ idx+1 }}</small>
                      <span class="playlist__li__name"
                        @click="selectSong(idx, song)"
                        :class="{'text-success': idx === currentIndex}">{{ song.song }}</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-around">
                      <small class="playlist__li__duration">{{ song.duration }}</small>
                      <div class="mx-2">
                        <i class="material-icons"
                          v-if="!isLiked(song)"
                          @click="updateFavorite(song)">favorite_border</i>
                        <i class="material-icons text-success"
                          @click="updateFavorite(song)" v-else>favoriter</i>
                      </div>
                      <div class="position-relative">
                        <i class="material-icons" @click="showPopup(idx)">more_horiz</i>
                        <a class="playlist__li__youtube" v-show="popupIdx === idx"
                          @click.prevent="toYoutube(song.videoId)">Youtube</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="text-secondary text-start mt-4">
                  <small style="font-size: 9px;">若音樂無法正常收聽，請至 Youtube 撥放。</small>
                </div>
              </div>
              <div v-if="playlistTab == 'Related Artist'" class="text-success mt-3">
                <div class="playlist__artist__list">
                  <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4 text-center"
                      v-for="(item, i) in sameTypeList" :key="`artist${i}`">
                      <div class="playlist__artist__img mx-auto"
                        :style="`background-image: url(${item.img})`"
                        @click="getSelectedAlbum(item); playlistTab = 'Overview'"></div>
                      <small class="playlist__artist__name text-white mt-2 d-inline-block">
                        {{ item.singer }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="playlistTab == 'About'" class="text-success">
                <h5 class="text-white">The F2E - 前端修練精神時光屋 第三關 - MP3 Player</h5>
                <small class="text-secondary">
                  使用套件 VueYoutube 串流 Youtube 音源，The F2E 練習作品，無商業用途。
                </small>
              </div>
            </div>
          </div>
          <div class="bottom"></div>
        </div>
        </template>
        <div class="row footer">
          <div class="col-12 col-md-3">
            <div class="d-flex align-items-center">
              <div class="footer__thumbnail me-2"
                :style="`background-image: url('${albumData.img}')`"
                @click="updateNavbar('Playlist')"></div>
              <div class="footer__txtbox text-start d-flex flex-column">
                <h3 class="text-white">{{ currentSong.song }}</h3>
                <p class="text-secondary"
                  @click="updateNavbar('Playlist')">{{ albumData.singer }}</p>
              </div>
            </div>
          </div>
          <div class="col-12 my-auto col-md-6">
            <div class="d-flex align-items-center justify-content-around">
              <i class="fas fa-random text-white footer__icon" @click="isShuffle = !isShuffle"
                v-if="!isShuffle" :class="{'text-success': isShuffle }"></i>
              <i class="fas fa-random footer__icon" @click="isShuffle = !isShuffle"
                v-else :class="{'text-success': isShuffle }"></i>
              <i class="fas fa-backward text-white footer__icon" @click="changeSong(-1)"></i>
              <template>
                <i
                  class="fas fa-pause text-white footer__icon"
                  @click="togglePlay" v-if="isPlay"></i>
                <i
                class="fas fa-play text-white footer__icon"
                @click="togglePlay" v-if="!isPlay"></i>
              </template>
              <i class="fas fa-forward text-white footer__icon" @click="changeSong(1)"></i>
              <i class="material-icons text-white footer__icon"
                @click="isLoop = !isLoop" v-if="!isLoop"
                :class="{'text-success': isLoop }">repeat</i>
              <i class="material-icons footer__icon"
                :class="{'text-success':isLoop}" v-else
                @click="isLoop = !isLoop">repeat_one</i>
            </div>
            <div class="d-flex align-items-center mt-2">
              <small class="text-secondary">{{ currentTime | formatTime }}</small>
              <div class="footer__progress d-flex align-items-center justify-content-center">
                <div class="footer__progressbar" @click="processBarTime" ref="progressBar">
                  <div class="footer__progressbar--circle"
                    :style="{'left':timeLine - 1 +'%'}"></div>
                  <div class="footer__progressbar--fill"
                    :style="{'width':timeLine+'%'}"></div>
                </div>
              </div>
              <small class="text-secondary">{{ duration | formatTime }}</small>
            </div>
          </div>
          <div class="col-12 col-md-3 d-flex align-items-center justify-content-end">
            <div class="d-flex justify-content-end align-items-center">
              <div class="me-1" @click="changeMute">
                <i class="fas fa-volume-down text-white footer__icon" v-if="!isMute"></i>
                <i class="fas fa-volume-mute text-white" v-if="isMute"></i>
              </div>
              <div class="ms-1">
                <input type="range" name="volume" min="0" max="100" class="footer__volumn"
                  ref="volume"
                  v-model="volume"
                  :style="{'background': `linear-gradient(90deg, #26de85,
                  ${volume}%, #6c757d, ${volume}%)`}"
                  @click="changeVolume">
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Vueaxios from 'vue-axios';
import Albumlist from './Albumlist.vue';

Vue.use(Vueaxios, axios);

export default {
  components: {
    Albumlist,
  },
  data() {
    return {
      popupIdx: -1,
      videoId: 'WXOlNBDVt0o',
      isPlay: false,
      data: [],
      playlistTab: 'Overview',
      albumData: [],
      relatedArtist: [],
      volume: 20,
      isMute: false,
      timeLine: 0,
      duration: 0,
      newTime: 0,
      processInterval: null,
      currentTime: 0,
      currentIndex: 0,
      currentSong: {},
      playerState: -1,
      isLoop: false,
      isShuffle: false,
    };
  },
  filters: {
    formatTime(time) {
      const mins = Math.floor(time / 60);
      const secs = Math.floor(time % 60);
      const formattedtime = `${mins < 10 ? 0 : ''}${mins}:${secs < 10 ? 0 : ''}${secs}`;
      return formattedtime;
    },
  },
  methods: {
    togglePlay() {
      this.isPlay = !this.isPlay;
      if (this.isPlay) {
        this.player.playVideo();
      } else {
        this.player.pauseVideo();
      }
    },
    getSelectedAlbum(d) {
      this.albumData = d;
      console.log(this.albumData);
      this.currentSong = this.albumData.songs[this.currentIndex];
      this.videoId = this.currentSong.videoId;
      this.player.loadVideoById(this.videoId);
    },
    default() {
      if (!this.albumData || this.albumData.length === 0) {
        // eslint-disable-next-line no-underscore-dangle
        console.log(this.data['Top Hits'][0]);
        this.albumData = { ...this.data['Top Hits'][0] };
        this.currentSong = this.albumData.songs[this.currentIndex];
        this.videoId = this.currentSong.videoId;
      }
    },
    navbarchange(nav) {
      this.updatedNavbar = nav;
    },
    updateFavorite(song) {
      this.$store.dispatch('addToFavorite', song);
    },
    isLiked(song) {
      const filterArr = this.favorites.filter((item) => item.videoId === song.videoId);
      if (filterArr.length > 0) {
        return true;
      }
      return false;
    },
    changeVolume() {
      this.player.setVolume(this.volume);
      if (this.isMute && this.volume > 0) {
        this.isMute = false;
        this.player.unMute();
      }
      console.log(this.volume);
    },
    changeMute() {
      this.isMute = !this.isMute;
      if (this.isMute) {
        this.volume = 0;
        this.player.mute();
      } else {
        this.volume = 20;
        this.player.unMute();
      }
    },
    processBarTime(e) {
      const progressWidth = this.$refs.progressBar.offsetWidth;
      const x = e.offsetX;
      this.newTime = (x / progressWidth) * this.duration;
      this.player.seekTo(this.newTime);
    },
    async updateDuration() {
      // youtube playing 時執行的function
      this.duration = await this.player.getDuration();
      console.log(this.duration);
      // 建立定時器--每秒get時間秒數以更新調整時間軸
      this.processInterval = setInterval(() => {
        this.player.getCurrentTime().then((currentTime) => {
          this.timeLine = (currentTime / this.duration) * 100;
          this.currentTime = currentTime;
          this.getPlayerState();
          // console.log(this.playerState);
          if (this.playerState === 0) {
            this.isPlay = false;
          } else if (this.playerState === 2) {
            this.isPlay = false;
          } else if (this.playerState === 5) {
            this.isPlay = false;
          } else {
            this.isPlay = true;
          }
        });
      }, 500);
    },
    paused() {
      // youtube pause 時執行的function
      this.$once('hook:beforeDestroy', () => {
        clearInterval(this.processInterval);
      });
    },
    changeSong(click) {
      const total = this.albumData.songs.length;
      this.currentIndex = (this.currentIndex + click + total) % total;
      this.currentSong = { ...this.albumData.songs[this.currentIndex] };
      this.videoId = this.currentSong.videoId;
      console.log(this.currentSong, this.videoId);
      this.init();
      this.player.loadVideoById(this.videoId);
      this.$nextTick(function () {
        this.autoplay();
      });
    },
    init() {
      this.$once('hook:beforeDestroy', () => {
        clearInterval(this.processInterval);
      });
    },
    autoplay() {
      this.isPlay = true;
      this.player.playVideo();
    },
    selectSong(index, item) {
      this.currentIndex = index;
      this.currentSong = { ...item };
      this.videoId = this.currentSong.videoId;
      console.log(index);
      console.log(item);
      this.$nextTick(function () {
        this.autoplay();
      });
    },
    showPopup(idx) {
      this.popupIdx = idx;
      setTimeout(() => {
        this.popupIdx = -1;
      }, 3000);
    },
    toYoutube(videoId) {
      window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
    },
    async getPlayerState() {
      this.playerState = await this.player.getPlayerState();
    },
    loopSong() {
      if (this.isLoop) {
        const id = this.videoId;
        this.player.loadVideoById(id);
        this.$nextTick(function () {
          this.autoplay();
        });
      }
      if (this.isShuffle) {
        const total = this.albumData.songs.length;
        const shuffleIdx = Math.floor(Math.random() * total);
        this.currentIndex = shuffleIdx;
        this.currentSong = { ...this.albumData.songs[this.currentIndex] };
        this.videoId = this.currentSong.videoId;
        this.player.loadVideoById(this.videoId);
        this.init();
        this.$nextTick(function () {
          this.isPlay = true;
          this.player.playVideo();
        });
      }
    },
    followHandler(d) {
      const data = { ...d };
      data.isFollow = !data.isFollow;
      const followers = parseInt(data.followers.replace(/,/g, ''), 10);
      if (data.isFollow) {
        data.followers = (followers + 1).toLocaleString('en-us');
      } else {
        data.followers = (followers - 1).toLocaleString('en-us');
      }
      this.$set(this.albumData, 'isFollow', data.isFollow);
      this.$set(this.albumData, 'followers', data.followers);
    },
    updateNavbar(nav) {
      this.$store.dispatch('changeNav', nav);
    },
  },
  computed: {
    player() {
      // youtube player
      return this.$refs.youtube.player;
    },
    navbar() {
      return this.$store.state.navbar;
    },
    favorites() {
      return this.$store.state.favorite;
    },
    sameTypeList() {
      return this.data[this.albumData.type];
    },
  },
  created() {
    const vm = this;
    this.axios.get('./playlist.json').then((res) => {
      vm.data = res.data;
      console.log(vm.data);
      this.player.setVolume(30);
      this.default();
    });
  },
};
</script>
