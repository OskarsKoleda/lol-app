<template>
  <base-big-button @click="openForm">+</base-big-button>
  <additional-comments-form
    @save-data="saveFormData"
    @close="closeForm"
    v-if="formOpened"
  ></additional-comments-form>
</template>

<script>
import CommentsForm from './AdditionalCommentsForm.vue';
import AdditionalCommentsForm from '../../components/lastgame/AdditionalCommentsForm.vue';

export default {
  components: {
    CommentsForm,
    AdditionalCommentsForm,
  },
  props: ['summonerName'],
  data() {
    return {
      formOpened: false,
    };
  },
  methods: {
    openForm() {
      this.formOpened = true;
    },
    closeForm() {
      this.formOpened = false;
    },
    async saveFormData(formData) {
      const payload = {
        formData,
        summoner: this.summonerName,
      };
      this.closeForm();
      try {
        await this.$store.dispatch('lastGame/saveSummonerCommentToDB', payload);
      } catch (error) {
        console.log('COULD NOT SAVE SUMMONER COMMENTS');
        console.log(error);
      }
    },
  },
};
</script>

<style scoped></style>
