
const app = Vue.createApp({
    data(){
        return {
            boxA: false,
            boxB: false,
            boxC: false
        }
    },
    computed:{
      classBoxA(){
          return {active: this.boxA}
      }
    },
    methods:{
        boxSelected(str){
            if(str === 'A'){
                this.boxA = true
                console.log('a')
            }else if(str === 'B'){
                this.boxB = true
            }else if(str === 'C'){
                this.boxC = true
            }
        }
    }
})

app.mount('#events')
