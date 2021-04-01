
const app = Vue.createApp({
    data(){
        return {
         counter: 0,
         name: '',
         confirmedName:'svj'
        }
    },
    watch:{
        name(value){
            console.log('Running again')
            if(value === ''){
                this.counter = 2
            }else{
                this.counter = 5
            }
        }
    },
    // computed:{
    //     fullName(){
    //         console.log('Running again')
    //         if(this.name === ''){
    //             return ''
    //         }
    //         return this.name + '' + 'Sch'
    //     }
    // },
    methods:{
        // setConfirmedName(){
        //     this.confirmedName = this.name
        // },
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
