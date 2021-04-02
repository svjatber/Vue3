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
      console.log(this.currentUserInput)
    },
    setText() {
        this.message = this.currentUserInput
    },
  },
  beforeCreate(){
      console.log('beforeCreate')
  },
  created(){
      console.log('created')
  },
  beforeMount(){
      console.log('beforeMount')
  },
  mounted(){
      console.log('mounted')
  },
  beforeUpdate(){
      console.log('beforeUpdate')
  },
  updated(){
      console.log('updated')
  },
  beforeUnmount(){
      console.log('beforeUnMount')
  },
  unmounted(){
      console.log('unmounted')
  }
});

app.mount('#app');

setTimeout(()=>{
    app.unmount()
}, 3000)

const app2 = Vue.createApp({
    data() {
        return {
           message: 'good'
        };
    }
});

app2.mount('#app2');


