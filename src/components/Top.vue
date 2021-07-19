<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="container">
        <div class="navbar-brand">
          <router-link
            :to="{ name: 'home' }"
            class="navbar-item minecraft-font-padding"
          >
            <!-- <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          /> -->
            Đây Nè
          </router-link>
          <div
            class="navbar-burger"
            :class="{ 'is-active': isActiveMobile }"
            data-target="navbarExampleTransparentExample"
            @click="onBurger"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          id="navbarExampleTransparentExample"
          class="navbar-menu"
          :class="{ 'is-active': isActiveMobile }"
        >
          <div class="navbar-start minecraft-font-padding">
            <router-link :to="{ name: 'home' }" class="navbar-item">
              Trang chủ
            </router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <router-link
                :to="{ name: 'home' }"
                class="navbar-link is-arrowless"
              >
                Hướng dẫn
              </router-link>
              <div class="navbar-dropdown is-boxed">
                <router-link :to="{ name: 'home' }" class="navbar-item">
                  Mẹo minecraft
                </router-link>
                <hr class="navbar-divider" />
                <router-link :to="{ name: 'home' }" class="navbar-item">
                  Mods
                </router-link>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div v-if="isLogged" class="navbar-item has-dropdown is-hoverable minecraft-font-padding">
              <router-link :to="{ name: 'home' }" class="navbar-link">
                <span class="icon custom-icon-user">
                  <font-awesome-icon icon="user" size="lg" />
                </span>
                <span> {{ username }}</span>
              </router-link>
              <div class="navbar-dropdown is-boxed is-right">
                <router-link :to="{ name: 'home' }" class="navbar-item">
                  Thông tin người dùng
                </router-link>
                <router-link
                  :to="{ name: 'changePassword' }"
                  class="navbar-item"
                >
                  Đổi mật khẩu
                </router-link>
                <hr class="navbar-divider" />
                <a
                  class="navbar-item"
                  href="javascript:void(0)"
                  @click="logout"
                >
                  Đăng xuất
                </a>
              </div>
            </div>
            <div v-else class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <router-link
                    :to="{ name: 'register' }"
                    class="bd-tw-button button"
                  >
                    <!-- <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span> -->
                    <span class="minecraft-font-padding"> Đăng ký </span>
                  </router-link>
                </p>
                <p class="control">
                  <router-link
                    :to="{ name: 'login' }"
                    class="button is-primary"
                  >
                    <!-- <span class="icon">
                    <i class="fas fa-download"></i>
                  </span> -->
                    <span class="minecraft-font-padding"> Đăng nhập </span>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "../axios";

export default {
  name: "top",
  data() {
    return {
      isActiveMobile: false,
    };
  },
  methods: {
    onBurger() {
      this.isActiveMobile = !this.isActiveMobile;
    },
    logout() {
      this.$store.dispatch("logout");
      delete axios.defaults.headers.common["authorization"];
      localStorage.removeItem("accessToken");

      this.$swal({
        icon: "success",
        title: "Đã đăng xuất",
        toast: true,
        timer: 3000,
        position: "bottom-start",
        showConfirmButton: false,
        type: "success",
      });

      this.$router.push({ name: "home" });
    },
  },
  computed: {
    isLogged() {
      return this.$store.state.user.isLogged;
    },
    username() {
      return this.$store.state.user.username;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
nav {
  box-shadow: black 0 0 10px;
}
.custom-icon-user {
  margin-right: 10px;
  padding-top: 8px;
}
</style>
