<template>
  <div>
    <v-container>
      <v-row class="justify-center">
        <v-col cols="8">
          <div class="intro">
            <v-card>
                   <v-alert type="error" v-if="error">
                    {{error}}
                  </v-alert>             
              <v-card-title>
                <div class="header">
                  <h3 class="text-center">Enter Your Name Here</h3>
                </div>
              </v-card-title>
              <v-card-text>
                  <v-text-field
                    name="name"
                    label="Enter Your Name Here"
                    type="text"
                    v-model="name"
                  ></v-text-field>
              </v-card-text>
              <v-card-text>
               <div class="btn">
                  <v-btn color="success" @click="EnterTracker">Enter-Tracker</v-btn>
               </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        name: null,
        error: null
      }
    },
    methods: {
        EnterTracker() {
          if(this.name) {
            this.$router.push({name:'covid', params:{updatename: this.name}})
          }else {
            this.error = 'You Must Enter A Valid Name'
          }
        }
    }
  }
</script>
