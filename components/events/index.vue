<template>
  <div class="event-list-main">
    <v-list class="list-items-main" two-line>
      <v-list-item v-for="(event, index) in events" :key="index" class="p0">
        <v-card class="event-card" :flat="true">
          <v-list-item-content>
            <v-list-item-title v-text="event.name" />
            <v-list-item-subtitle v-text="event.details" />
            <v-list-item-subtitle>
              <v-icon small>
                mdi-alarm
              </v-icon>
              09:00 AM - 10:00 AM
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon small>
              <v-icon small color="grey lighten-1">
                mdi-close
              </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-card>
      </v-list-item>
    </v-list>

    <v-btn color="#c7141a" dark fixed bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'Events',
  data() {
    return {
      addNew: false,
      events: [
        {
          name: 'Navaneeth',
          details: 'Vacations',
          start: '2018-12-29',
          end: '2019-01-01',
          color: 'purple lighten-5'
        },
        {
          name: 'Meeting',
          details: 'Spending time on how we do not have enough time',
          start: '2019-01-07 09:00',
          end: '2019-01-07 09:30',
          color: 'indigo lighten-5'
        },
        {
          name: 'Large Event',
          details:
            'This starts in the middle of an event and spans over multiple events',
          start: '2018-12-31',
          end: '2019-01-04',
          color: 'amber lighten-5'
        },
        {
          name: '3rd to 7th',
          details: 'Testing',
          start: '2019-01-03',
          end: '2019-01-07',
          color: 'cyan lighten-5'
        },
        {
          name: 'Big Meeting',
          details: 'A very important meeting about nothing',
          start: '2019-01-07 08:00',
          end: '2019-01-07 11:30',
          color: 'deep-orange lighten-5'
        },
        {
          name: 'Another Meeting',
          details: 'Another important meeting about nothing',
          start: '2019-01-07 10:00',
          end: '2019-01-07 13:30',
          color: 'brown lighten-5'
        },
        {
          name: '7th to 8th',
          start: '2019-01-07',
          end: '2019-01-08',
          color: 'blue lighten-5'
        },
        {
          name: 'Lunch',
          details: 'Time to feed',
          start: '2019-01-07 12:00',
          end: '2019-01-07 15:00',
          color: 'deep-orange lighten-5'
        },
        {
          name: '30th Birthday',
          details: 'Celebrate responsibly',
          start: '2019-01-03',
          color: 'teal lighten-5'
        },
        {
          name: 'New Year',
          details: 'Eat chocolate until you pass out',
          start: '2019-01-01',
          end: '2019-01-02',
          color: 'green lighten-5'
        },
        {
          name: 'Conference',
          details: 'The best time of my life',
          start: '2019-01-21',
          end: '2019-01-28',
          color: 'grey lighten-5'
        },
        {
          name: 'Hackathon',
          details: 'Code like there is no tommorrow',
          start: '2019-01-30 23:00',
          end: '2019-02-01 08:00',
          color: 'red lighten-5'
        }
      ]
    }
  },
  mounted() {
    this.$nuxt.$on('close-form', () => {
      this.addNew = false
    })
  }
}
</script>
<style lang="scss" scoped>
.event-list-main {
  margin-top: 20px;
  .list-items-main {
    background: none;
  }
}
.event-card {
  width: 100%;
  display: flex;
  margin: 0 0 20px 0;
  border-radius: 0;
  border-left: 3px solid #c7141a;
  align-items: center;
  padding: 5px 10px;
}
</style>
