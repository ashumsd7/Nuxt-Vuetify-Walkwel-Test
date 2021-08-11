<template>
<div class="">
   <v-alert
      border="left"
      color="indigo"
      dark
    >
     Register Your self with us.
    </v-alert>
 
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>



    <v-text-field
      type="number"
      v-model="number"
      label="Phone Number"
      :rules="numberRule"
    />

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="gender"
      :items="items"
      :rules="[(v) => !!v || 'Item is required']"
      label="Select Gender"
      required
    ></v-select>
    <span v-if="!isNRI"
      ><input class="chkbox"
        type="checkbox"
        value="1"
        v-model="isIndian"
        
      />
      INDIAN </span
    >
    <span v-if="!isIndian">
      <input type="checkbox" class="chkbox" value="1" v-model="isNRI"  />
      NRI 
    </span>

    <v-text-field
      type="number"
      v-if="isNRI || isIndian"
      v-model="personalID"
      :label="isNRI ? 'Green Card Number' : 'Aadhaar Card Number'"
      :rules="numberRule"
    />

<br>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Sumbit
    </v-btn>
  </v-form>
  </div>
</template>
<script>

export default {
  components:{
  
  },
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "Enter a valid Email",
    ],
    number: "",
    numberRule: [
      (v) =>
        (!isNaN(parseFloat(v)) && v >= 0 && v <= 9999999999) ||
        "Enter a valid number",
    ],
    gender: null,
    items: ["female", "male", "not to say"],
    checkbox: false,
    isNRI: "",
    isIndian: "",
    personalID:''
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
     if(this.$refs.form.validate()){
       this.sendData();
     }
    },
    sendData(){
            let dt= new Date()
                let timeStamp= dt.getTime();
                let storeData={
                    id:timeStamp,
                    email: this.email,
                    gender: this.gender,
                     name: this.name,
                    isNRI: this.isNRI ? 'NRI' : 'INDIAN',
                    isIndian: this.isIndian,
                    personalID: this.personalID,
                    number: this.number,


                }
                this.$store.dispatch('addUsersAction',storeData)
                console.log("goin to store,",storeData);
                this.$router.push('/view')
              

               
            }
    
   
  },
};
</script>

<style scoped>

</style>
