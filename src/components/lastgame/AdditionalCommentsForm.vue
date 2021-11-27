<template>
  <div @click="tryClose" class="backdrop"></div>

  <dialog open>
    <form @submit.prevent>
      <div class="form-control">
        <div>
          <input
            type="checkbox"
            id="abuser"
            value="verbalabuse"
            v-model="tags"
          />
          <label for="abuser">Verbal Abuse</label>
        </div>
      </div>
      <div class="form-control">
        <div>
          <input type="checkbox" id="leaver" value="leaver" v-model="tags" />
          <label for="abuser">Leaver</label>
        </div>
      </div>
      <div class="form-control">
        <div>
          <input type="checkbox" id="idiot" value="idiot" v-model="tags" />
          <label for="abuser">Idiot</label>
        </div>
      </div>
      <div class="form-control commet-text">
        <label for="comment">Comment</label>
        <textarea
          id="comment"
          v-model.trim="comment"
          rows="1"
          cols="20"
        ></textarea>
      </div>
      <base-big-button @click="submitForm">Save</base-big-button>
      <base-big-button @click="tryClose">Cancel</base-big-button>
    </form>
  </dialog>
</template>

<script>
export default {
  emits: ['close', 'save-data'],
  data() {
    return {
      tags: [],
      comment: '',
    };
  },
  methods: {
    tryClose() {
      this.$emit('close');
    },
    submitForm() {
      const formData = {
        tags: [...this.tags],
      };
      if (this.comment !== '') {
        formData['comment'] = this.comment;
      }
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}
input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  /* width: 80%; */
  z-index: 100;
  border-radius: 6px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  /* padding: 0; */
  /* margin: 0; */
  background-color: rgb(97, 219, 144);
}

.commet-text {
  display: flex;
  align-items: center;
}
.commet-text > label {
  margin: 1rem;
}
</style>
