const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.dir(this.$refs.userText)
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
    data() {
        return {
           message: 'good'
        };
    }
});

app2.mount('#app2');


