<template>
  <body>
    <Top />
    <div class="container">
      <nav class="breadcrumb minecraft-font" aria-label="breadcrumbs">
        <ul>
          <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb" :class="{'is-active' : index === (breadcrumbs.length - 1)}">
            <router-link :to="{ path: breadcrumb.path }">{{
              breadcrumb.name
            }}</router-link>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
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