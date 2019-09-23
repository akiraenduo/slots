<template>
  <div class="text-center">
    <v-dialog v-model="dialog" :persistent="true" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Book your slot
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <div class="flex-grow-1" />
          <v-btn outlined color="#c7141a" text>
            Submit
          </v-btn>
          <v-btn
            elevation="0"
            color="#c7141a"
            dark
            @click="
              () => {
                this.$nuxt.$emit('close-form')
              }
            "
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      slots: [
        '09:00AM',
        '10:00AM',
        '11:00AM',
        '12:00PM',
        '01:00PM',
        '02:00PM',
        '03:00PM',
        '04:00PM',
        '05:00PM',
        '06:00PM',
        '07:00PM',
        '08:00PM',
        '09:00PM',
        '10:00PM',
        '11:00PM'
      ]
    }
  },
  computed: {
    dialog() {
      return this.show
    }
  }
}
</script>
