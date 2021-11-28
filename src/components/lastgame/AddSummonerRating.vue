<template>
  <section class="container">
    <form @submit.prevent>
      <div class="god-troll">
        <input
          type="radio"
          :id="idGod"
          value="god"
          name="rating"
          class="hidebx"
          v-model="ratings"
        />
        <label class="lbl-radio" :for="idGod">
          <div class="display-box">God</div>
        </label>
        <input
          type="radio"
          :id="idTroll"
          value="troll"
          name="rating"
          class="hidebx"
          v-model="ratings"
        />
        <label class="lbl-radio" :for="idTroll">
          <div class="display-box">Troll</div>
        </label>
      </div>

      <div class="numbers">
        <input
          type="radio"
          :id="idThree"
          value="three"
          name="rating"
          class="hidebx"
          v-model="ratings"
        />
        <label class="lbl-radio" :for="idThree">
          <div class="display-box">3</div>
        </label>
        <input
          type="radio"
          :id="idTwo"
          value="two"
          name="rating"
          class="hidebx"
          v-model="ratings"
        />
        <label class="lbl-radio" :for="idTwo">
          <div class="display-box">2</div>
        </label>
        <input
          type="radio"
          :id="idOne"
          value="one"
          name="rating"
          class="hidebx"
          v-model="ratings"
        />
        <label class="lbl-radio" :for="idOne">
          <div class="display-box">1</div>
        </label>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: ['akey'],
  data() {
    return {
      ratings: [],
    };
  },
  created() {
    console.log(this.akey);
  },
  computed: {
    idGod() {
      return 'god' + this.akey;
    },
    idTroll() {
      return 'troll' + this.akey;
    },
    idOne() {
      return 'one' + this.akey;
    },
    idTwo() {
      return 'two' + this.akey;
    },
    idThree() {
      return 'three' + this.akey;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
.god-troll {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.numbers {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hidebx {
  display: none;
}

.lbl-radio {
  text-align: center;
  margin: 5px 5px;
  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.35);
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.3s ease-in;
}

.display-box {
  font-weight: 600;
  font-size: 11pt;
  min-width: 50px;
  padding: 5px;
}

input[type='radio']:checked + .lbl-radio {
  border-color: #845ec2;
  background-color: bisque;
  box-shadow: none;
}
</style>
