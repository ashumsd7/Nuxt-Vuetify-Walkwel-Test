
 
    <template>
  <div class="">
      <v-alert
      dense
      type="info" v-if="getUserLength"
    >
     List of registered members :
    </v-alert>
    <v-alert v-if="!getUserLength" border="top" color="red lighten-2" dark>
     No user is registered yet!! <nuxt-link to="/"><v-btn
      depressed
      color="primary"
    >
      REGISTER
    </v-btn></nuxt-link>
    </v-alert>
    <v-simple-table dense v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">NAME</th>
            <th class="text-left">EMAIL</th>
            <th class="text-left">NUMBER</th>
            <th class="text-left">GENDER</th>
            <th class="text-left">IDENTITY</th>
            <th class="text-left">ID</th>
            <th class="text-left">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getUser" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.isNRI }}</td>

            <td>{{ item.personalID }}</td>

            <td>
              <v-btn @click="edit(item.id)" color="primary"  > EDIT </v-btn>
              <v-btn @click="del(item.id)" color="red" > DELETE </v-btn>
              <!-- <v-btn @click="delete(item.id)"  class="action_delete"> DELETE </v-btn> -->
            </td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>



<script>
export default {
  computed: {
    getUser() {
      return this.$store.getters.getUsers;
    },
     getUserLength() {
      return !!this.$store.getters.getUsers.length;
    },
  },
  methods: {
    edit(id) {
      this.$router.push("/edit/" + id);
    },
    del(id) {
      this.$store.dispatch("deleteUserAction", id);
    },
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
th{
    background: linear-gradient(230deg,rgb(155, 248, 118),rgb(255, 255, 255));
    color: white;
    
}
</style>