<template>
  <v-app>
        <v-app-bar
          app
          color="indigo darken-4"
          dark
        >
          <div class="logo-icon">
            <v-img
            src="https://rapidapi-prod-collections.s3.amazonaws.com/1934d868-b8b9-40bf-a3a0-a978f007f89d.png"
           style="width:40px;" ></v-img>
          </div>
          <v-toolbar-title>COVID-19 Tracker</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn larg text rounded link to='/'>
            Home
          </v-btn>        
          <v-spacer></v-spacer>
        </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
   <v-footer>
     <div>Powerd By Abdallah Muhammed</div>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>   
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
