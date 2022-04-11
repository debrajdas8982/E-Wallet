<template>
  <div class="container">
     <router-link to="/" class="back"
      >
    </router-link>
    
    <main>
      
      <section class="default-card">
         
      <Card :card="DefaultCard"/>
        </section>
        <section class="add-card-form">
          <form class="submit-card" @submit.prevent="send" ref="form">
            <label for="cardNumber">Card Number</label>
            <the-mask  mask="#### #### #### ####"
            type="text"
            name="cardNumber"
            class="card-number"
            placeholder="XXXX XXXX XXXX XXXX"
            v-model="DefaultCard.number"
            />
            <label for="cardholderName">cardholder name</label>
          <input
            type="text"
            name="cardholderName"
            class="cardholder-name"
            placeholder="Firstname Lastname"
             v-model="DefaultCard.holder"
            />
            <div class="valid-cvc">
                      
              <div class="valid-month">
                <label for="validMonth" class="valid-label">Month</label>
                </div>
                <div>
                  <select name="validMonth" v-model="DefaultCard.validMonth">
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>

          </select>
          </div>
          <div class="validYear">
           <label for="validMonth" class="valid-label">Year</label>
           </div>
           <div>
           <select name="validYear" v-model="DefaultCard.validYear">
            <option >21</option>
            <option >22</option>
            <option >23</option>
            <option >24</option>
            <option >25</option>
         
             </select>
          
              </div>
            </div>
           
        
            <select name="vendor" v-model="DefaultCard.vendor" @change="changeColor">
            <option value="bitcoin">Bitcoin</option>
            <option value="ninja">Ninja</option>
            <option value="blockchain">Blockchain</option>
            <option value="evil">Evil</option>
          </select>
          <button>ADD CARD</button>
            </form>

          </section>
      </main>
  </div>
</template>
<script>

import Card from "./Card.vue";

export default {
  components: {
   Card,
},
data()
{
  return{
    FormTitle: "add a new card",
     DefaultCard: {
        id: "7410242839",
        holder: "",
        vendor: "bitcoin",
        number: "XXXX XXXX XXXX XXXX",
        validMonth: "MM",
        validYear: "YY",
        bgColor: "#78A419",
        textColor: "#2c3e50",
        img: "bitcoin",
      },
  }
},
methods:{
changeColor(){
  if (this.$refs.form.vendor.value == "bitcoin") {
        this.DefaultCard.bgColor = "#78A419";
        this.DefaultCard.img="bitcoin";
        this.DefaultCard.textColor = "#C0C0C0";
      }
      if (this.$refs.form.vendor.value == "evil") {
        this.DefaultCard.bgColor = "#940602";
        this.DefaultCard.img="evil";
        this.DefaultCard.textColor = "#C0C0C0";
      }
      if (this.$refs.form.vendor.value == "blockchain") {
        this.DefaultCard.bgColor = "#132959";
        this.DefaultCard.img="blockchain";
        this.DefaultCard.textColor = "#C0C0C0";
      }
      if (this.$refs.form.vendor.value == "ninja") {
        this.DefaultCard.bgColor = "#323334";
        this.DefaultCard.img="ninja";
        this.DefaultCard.textColor = "#FFFFFF";
      }
 
},
send()
{
    if (
        this.$refs.form.cardNumber.value.length == 0 ||
        this.$refs.form.cardholderName.value.length == 0 ||
        this.$refs.form.validYear.length == 0 ||
        this.$refs.form.validMonth.length == 0
      ) {
        alert("Please fill all input");
        this.DefaultCard.number = "XXXX XXXX XXXX XXXX";
        this.DefaultCard.holder = "firstname lastname";
        this.DefaultCard.vendor = "bitcoin";
        this.DefaultCard.bgColor = "#D8D8D8";
        this.DefaultCard.validMonth = "MM";
        this.DefaultCard.validYear = "YY";
      }
     
      this.$root.$data.cards.push(this.DefaultCard)
      this.$router.push("/");
}
}
}
</script>
<style lang="scss" scoped>
.container {
  header {
    max-width: 220px;
    margin: auto;
  }
   main {
    max-width: 375px;
    margin: auto;
    .add-card-form {
      form {
        max-width: 352px;
        margin: 50px auto 0 auto;
        display: flex;
        flex-direction: column;
        label {
          text-transform: uppercase;
          font-size: 0.7rem;
          text-align: left;
          margin: 4px 0;
        }
        input {
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          border: 1px solid #000;
        }
        .valid-cvc {
          display: flex;
          justify-content: space-between;
        }
        
          .cvc-part {
            text-align: left;
            width: 49%;
          }
        }
        select {
          border-radius: 4px;
          padding: 10px;
        }
        select[name="validMonth"]{
            margin-bottom: 5px;
           
        }
        select[name="validYear"]{
    margin-bottom: 5px;

}
        button {
          background-color: #00AB66;
          color: #fff;
          font-weight: bold;
          border-radius: 6px;
          margin-top: 20px;
          padding: 15px;
          border: 1px solid #00AB66;
        }
        button:hover {
          cursor: pointer;
          transition: 200ms;
          background-color: #fff;
          color: black;
          border: 1px solid #000;
        }
      }
    }
    
  }
  .back {
    float: left;
    font-size: 2rem;
    color: black;
  }

</style>
