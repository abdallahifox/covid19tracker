<template>
    <div>
        <v-container>
            <v-row class="justify-center">
                <v-col cols="8">
                    <div class="header">
                        <h3 class="text-center">Welcome {{updatename}} </h3>
                    </div>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                <v-col cols="12">
                    <div class="data-table">
                      <v-card dark>
                        <v-card-title>
                          COVID-19-TRACKER
                          <v-spacer></v-spacer>
                          <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                          ></v-text-field>
                        </v-card-title>                        
                        <v-data-table
                          dark
                          :headers="headers"
                          :items="data"
                          :items-per-page="5"
                          :search="search"
                          class="elevation-1"
                        >
                        </v-data-table>
                      </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios';
export default {
    props: ['updatename'],
        data () {
      return {
       search: '',   
       headers: [
        {
          text: 'country',
          align: 'center',
          sortable: true,
          value: 'country',
        },
        {
          text: 'Cases(active)',
          align: 'center',
          sortable: false,
          value: 'cases.active',
        },  
        {
          text: 'Cases(new)',
          align: 'center',
          sortable: false,
          value: 'cases.new',
        },        
        {
          text: 'Cases(critical)',
          align: 'center',
          sortable: false,
          value: 'cases.critical',
        },  
        {
          text: 'Cases(recovered)',
          align: 'center',
          sortable: false,
          value: 'cases.recovered',
        },  
        {
          text: 'Deaths(new)',
          align: 'center',
          sortable: false,
          value: 'deaths.new',
        },          
        {
          text: 'Day',
          align: 'center',
          sortable: false,
          value: 'day',
        },  
        {
          text: 'Total(Cases)',
          align: 'center',
          sortable: false,
          value: 'cases.total',
        },  
        {
          text: 'Total(Deaths)',
          align: 'center',
          sortable: false,
          value: 'deaths.total',
        },                                                           
       
      ],         
          data:[
          ],
      }

    },
    created () {
        axios({
            method: 'get',
            url: 'https://covid-193.p.rapidapi.com/statistics',
            headers: {
                	"x-rapidapi-host": "covid-193.p.rapidapi.com",
		            "x-rapidapi-key": "dadf2e5568msh938656ec5239e6cp1aab88jsn08bb1eca9125"
            }            
        })
        .then(res => {
            this.data = res.data.response
        }).catch(err => {
            console.log(err)
        })
    },
    
    
}
</script>


