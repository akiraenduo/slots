<template>
  <div class="event-list-main">
    <v-list class="list-items-main" two-line>
      <v-list-item v-for="(event, index) in events" :key="index">
        <v-card class="event-card" :flat="true">
          <v-list-item-avatar>
            <v-icon>mdi-home</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="event.name"></v-list-item-title>
            <v-list-item-subtitle v-text="event.details"></v-list-item-subtitle>
            <v-list-item-subtitle>09:00 AM</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon small>
              <v-icon small color="grey lighten-1">mdi-close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-card>
      </v-list-item>
    </v-list>

    <v-btn color="#c7141a" dark small fixed bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'Events',
  data() {
    return {
      dialog: false,
      items2: [
        {
          icon: 'mdi-home',
          iconClass: 'blue white--text',
          title: 'Vacation itinerary',
          subtitle: 'Jan 20, 2014'
        },
        {
          icon: 'mdi-home',
          iconClass: 'amber white--text',
          title: 'Kitchen remodel',
          subtitle: 'Jan 10, 2014'
        }
      ],
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
      ],
      events: [
        {
          name: 'Navaneeth',
          details: 'Vacations',
          start: '2018-12-29',
          end: '2019-01-01',
          color: 'blue'
        },
        {
          name: 'Meeting',
          details: 'Spending time on how we do not have enough time',
          start: '2019-01-07 09:00',
          end: '2019-01-07 09:30',
          color: 'indigo'
        },
        {
          name: 'Large Event',
          details:
            'This starts in the middle of an event and spans over multiple events',
          start: '2018-12-31',
          end: '2019-01-04',
          color: 'deep-purple'
        },
        {
          name: '3rd to 7th',
          details: 'Testing',
          start: '2019-01-03',
          end: '2019-01-07',
          color: 'cyan'
        },
        {
          name: 'Big Meeting',
          details: 'A very important meeting about nothing',
          start: '2019-01-07 08:00',
          end: '2019-01-07 11:30',
          color: 'red'
        },
        {
          name: 'Another Meeting',
          details: 'Another important meeting about nothing',
          start: '2019-01-07 10:00',
          end: '2019-01-07 13:30',
          color: 'brown'
        },
        {
          name: '7th to 8th',
          start: '2019-01-07',
          end: '2019-01-08',
          color: 'blue'
        },
        {
          name: 'Lunch',
          details: 'Time to feed',
          start: '2019-01-07 12:00',
          end: '2019-01-07 15:00',
          color: 'deep-orange'
        },
        {
          name: '30th Birthday',
          details: 'Celebrate responsibly',
          start: '2019-01-03',
          color: 'teal'
        },
        {
          name: 'New Year',
          details: 'Eat chocolate until you pass out',
          start: '2019-01-01',
          end: '2019-01-02',
          color: 'green'
        },
        {
          name: 'Conference',
          details: 'The best time of my life',
          start: '2019-01-21',
          end: '2019-01-28',
          color: 'grey darken-1'
        },
        {
          name: 'Hackathon',
          details: 'Code like there is no tommorrow',
          start: '2019-01-30 23:00',
          end: '2019-02-01 08:00',
          color: 'black'
        },
        {
          name: 'event 1',
          start: '2019-01-14 18:00',
          end: '2019-01-14 19:00',
          color: '#4285F4'
        },
        {
          name: 'event 2',
          start: '2019-01-14 18:00',
          end: '2019-01-14 19:00',
          color: '#4285F4'
        },
        {
          name: 'event 5',
          start: '2019-01-14 18:00',
          end: '2019-01-14 19:00',
          color: '#4285F4'
        },
        {
          name: 'event 3',
          start: '2019-01-14 18:30',
          end: '2019-01-14 20:30',
          color: '#4285F4'
        },
        {
          name: 'event 4',
          start: '2019-01-14 19:00',
          end: '2019-01-14 20:00',
          color: '#4285F4'
        },
        {
          name: 'event 6',
          start: '2019-01-14 21:00',
          end: '2019-01-14 23:00',
          color: '#4285F4'
        },
        {
          name: 'event 7',
          start: '2019-01-14 22:00',
          end: '2019-01-14 23:00',
          color: '#4285F4'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.event-list-main {
  margin-top: 20px;
}
.event-card {
  box-shadow: 0 5px 5px 0 #c7141a0d;
  width: 100%;
  display: flex;
  margin: 0 0 10px 0;
  align-items: center;
  padding: 0 10px;
}
.list-items-main {
  background: none;
}
</style>
