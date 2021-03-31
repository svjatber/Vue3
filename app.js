
const app = Vue.createApp({
    data(){
        return {
         counter: 0,
         name: '',
         confirmedName:'svj'
        }
    },
    methods:{
        setConfirmedName(){
            this.confirmedName = this.name
        },
        submitForm(){
           alert('Submitted')
        },
        add(num){
            this.counter += num
        },
        reduce(num){
            this.counter -= num
        },
        setName(event, lastName){
            this.name = event.target.value + ' ' + lastName
        }
    }
})

app.mount('#events')
