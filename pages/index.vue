<template>
  <div class="content">
    <v-layout>
      <v-flex xs12 sm4 md4>
        <CalenderWidget />
        <Events />
      </v-flex>
      <v-flex xs12 sm8 md8 />
    </v-layout>
  </div>
</template>

<script>
import CalenderWidget from '@/components/calender'
import Events from '@/components/events'
export default {
  components: {
    CalenderWidget,
    Events
  }
}
</script>
<style lang="scss" scoped>
.content {
  max-width: 1200px;
  margin: 10px auto;
}
</style>
