<template>
  <v-layout column>
    <v-flex xs12 sm12 md12>
      <CalenderWidget />
      <Events />
    </v-flex>
  </v-layout>
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
