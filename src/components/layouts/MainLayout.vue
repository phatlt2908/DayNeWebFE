<template>
  <body>
    <Top />
    <section class="hero is-medium is-bold is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Minecraft Đây Nè!</h1>
          <p class="subtitle is-3">
            Chính thức mở server bản thử nghiệm
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <nav class="breadcrumb minecraft-font" aria-label="breadcrumbs">
          <ul>
            <li
              v-for="(breadcrumb, index) in breadcrumbs"
              :key="breadcrumb"
              :class="{ 'is-active': index === breadcrumbs.length - 1 }"
            >
              <router-link :to="{ path: breadcrumb.path }">{{
                breadcrumb.name
              }}</router-link>
            </li>
          </ul>
        </nav>
        <router-view></router-view>
      </div>
    </section>
  </body>
</template>

<script>
import Top from "@/components/Top.vue";

export default {
  name: "MainLayout",
  components: {
    Top,
  },
  computed: {
    breadcrumbs: function () {
      return this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style scoped>
</style>