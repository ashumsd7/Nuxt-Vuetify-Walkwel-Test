<template>
<div class="">
     <v-alert
      border="right"
      color="blue-grey"
      dark
    >
     Welcome : Edit your details
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
    <span class="chkbox" v-if="!isNRI"
      ><input 
        type="checkbox"
        value="1"
        v-model="isIndian"
        
      />
      INDIAN </span
    >
    <span class="chkbox" v-if="!isIndian">
      <input type="checkbox" value="1" v-model="isNRI"  />
      NRI 
    </span>

    <v-text-field
      type="number"
      v-if="isNRI || isIndian"
      v-model="personalID"
      :label="isNRI ? 'Green Card Number' : 'Aadhaar Card Number'"
      :rules="numberRule"
    />

    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->
<br>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      MODIFY
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
      (v) => /.+@.+\..+/.test(v) || "E-mail is not valid",
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
    personalID:'',
    id:null
  }),
  beforeMount(){
           
        let fecthedUser=    this.$store.getters.getUsers.find(val=> val.id==this.$route.params.id )
        console.log("before mount matchd",fecthedUser);
           this.name= fecthedUser.name,
           this.email= fecthedUser.email,
           this.number= fecthedUser.number
           this.id= fecthedUser.id,
           this.gender= fecthedUser.gender,
           this.isNRI= fecthedUser.isNRI,
           this.isIndian= fecthedUser.isIndian,
           this.personalID= fecthedUser.personalID
           this.id= fecthedUser.id

       },

  methods: {
    validate() {
      this.$refs.form.validate();
     if(this.$refs.form.validate()){
       this.sendData();
     }
    },
    sendData(){
         
                let editedData={
                    id:this.id,
                    email: this.email,
                    gender: this.gender,
                     name: this.name,
                    isNRI: this.isNRI ? 'NRI' : 'INDIAN',
                    isIndian: this.isIndian ? 'INDIAN' : 'NRI',
                    personalID: this.personalID,
                    number: this.number,


                }
            this.$store.dispatch('editUserAction',editedData)
            console.log(editedData);
            
                this.$router.push('/view')
              

                
            }
    
   
  },
};
</script>
<style scoped>
.chkbox{
  margin-left: 1rem;
  margin-bottom: 1rem;
}

</style>
