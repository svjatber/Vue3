
const app = Vue.createApp({
    data(){
        return {
         output: '',
         output2: ''
        }
    },
    methods:{
        showAlert(){
            alert('Clicked')
        },
        setOutput(event){
                this.output = event.target.value
        }

    }
})

app.mount('#events')
