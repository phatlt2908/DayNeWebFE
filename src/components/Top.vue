<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="navbar-item minecraft-font">
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
        <div class="navbar-start minecraft-font">
          <router-link :to="{ name: 'home' }" class="navbar-item">
            Trang chủ
          </router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a
              class="navbar-link"
              href="https://bulma.io/documentation/overview/start/"
            >
              Hướng dẫn
            </a>
            <div class="navbar-dropdown is-boxed">
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/overview/start/"
              >
                Mẹo minecraft
              </a>
              <hr class="navbar-divider" />
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/elements/box/"
              >
                Mods
              </a>
              <a
                class="navbar-item is-active"
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <router-link
                  :to="{ name: 'register' }"
                  class="bd-tw-button button"
                >
                  <!-- <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span> -->
                  <span class="minecraft-font"> Đăng ký </span>
                </router-link>
              </p>
              <p class="control">
                <a class="button is-primary">
                  <!-- <span class="icon">
                    <i class="fas fa-download"></i>
                  </span> -->
                  <span class="minecraft-font"> Đăng nhập </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
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
  margin-bottom: 20px;
  box-shadow: black 0 0 10px;
}
</style>
