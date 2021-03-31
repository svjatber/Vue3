
const app = Vue.createApp({
    data(){
        return {
           name: 'Svjatoslav',
           age: 20,
           img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'
        }
    },
    methods: {
        getCourseGoal() {
            return this.courseGoal
        }
    }

})

app.mount('#app')
