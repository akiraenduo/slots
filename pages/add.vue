<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Description"
            required
          />
        </v-col>

        <v-col cols="12" md="4">
          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            full-width
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="Start Time"
                prepend-icon="mdi-alarm"
                readonly
                v-on="on"
              />
            </template>
            <v-time-picker v-if="modal2" v-model="time" full-width>
              <div class="flex-grow-1" />
              <v-btn text color="primary" @click="modal2 = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(time)">
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" md="4">
          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            full-width
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="time"
                label="End Time"
                prepend-icon="mdi-alarm"
                readonly
                v-on="on"
              />
            </template>
            <v-time-picker v-if="modal2" v-model="time" full-width>
              <div class="flex-grow-1" />
              <v-btn text color="primary" @click="modal2 = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(time)">
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </v-col>
      </v-row>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Submit
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Cancel
      </v-btn>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      time: null,
      menu2: false,
      modal2: false
    }
  }
}
</script>
