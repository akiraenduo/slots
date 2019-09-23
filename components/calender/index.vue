<template>
  <v-row class="p0" align="center">
    <v-col cols="12" sm="6" class="p0">
      <v-date-picker
        ref="picker"
        v-model="date"
        color="#c7141a"
        header-color="#c7141a"
        full-width
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10)
  })
}
</script>
