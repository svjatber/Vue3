
const app = Vue.createApp({
    data(){
        return {
            goals: [],
            goalValue: '',
            showList: true,
            name: ''
        }
    },
    methods:{
        addGoal(){
            if(!this.goals.includes(this.goalValue)){
                this.goals.push(this.goalValue)
                return
            }

        }
    }
})

app.mount('#user-goals')
