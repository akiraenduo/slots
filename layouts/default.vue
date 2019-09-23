<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app :elevation="0">
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container class="p0">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
      title: 'Codilar'
    }
  }
}
</script>

<style lang="scss">
.theme--light.v-application {
  background: #f2ece9;
}
.p0 {
  padding: 0;
}
</style>
