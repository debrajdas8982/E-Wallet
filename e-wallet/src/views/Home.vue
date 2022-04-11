<template>
  <div class="container">
    <header>
      <Top :title="title"/>
    </header>
    <main>
      
           <article class="active-card">
        <h5>ACTIVE CARD</h5>
        <div class="the-card">
          <Card :card="Cards[this.position]" />
        </div>
      </article>
      <section class="conatiner2">
      <article class="card-stack">
     
                  <CardStack
          v-for="(card, index) in Cards"
          :key="index"
          :card="Cards[index]"
          @actived="actived(index)"
          class="cardStack"
         
        />
      </article>
   </section>
      <div class="btn">
        <router-link to="AddCard" class="add-card-btn">
          add a new card
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>


import Top from "../components/Top";
import Card from "../components/Card";
import CardStack from "../components/CardStack";
export default {
  name: "Home",

  data() {
    return {
      title: "e-wallet",
      position:0
     
    }
  },
  methods:{
     actived(index) {
       console.log(index);
         this.position = index;
       console.log("test onclick card");
     
  },
  
  },
  created:function()
  
  {
    console.log(this.$root.$data.cards)
    console.log('the array of cards')
  },
  
  components: {
    Top,
    Card,
    CardStack
  },
  computed: {
    Cards() {
      return this.$root.$data.cards;
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  main {
    
    max-width: 375px;
    margin: auto;
    .active-card {
      h5 {
        color: #FF5733;
        font-weight: 800;
        margin: 0 0 5px 0;
      }
    }
     .card-stack {
      margin-top: 200px;
      margin-bottom: 50px;
        .cardStack {
        margin-top: -170px;
      }
    }
    
  .the-card{
    margin-bottom: 50px;
  }
 

  .btn {
      display: flex;
      width: 350px;
      margin: auto;
      margin-top:20px;
      border-radius: 5px;
      justify-content: center;
      text-transform: uppercase;
      border: 2px solid  #0275d8;
      .add-card-btn {
        width: 100%;
        color: #0275d8;
        text-decoration: none;
        font-weight: bold;
        padding: 10px 20px;
     
      }
      .add-card-btn:hover {
        background-color: #0275d8;
        border: none;
        color: aliceblue;
        transition: 200ms;
        cursor: pointer;
      }
}
}
}
</style>
