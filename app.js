const app = Vue.createApp({
    data(){
        return {
            detailsAreVisible: true,
            friends:[
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manual@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.component('friend-contact', {
    template: ` <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>`,
    data(){
        return {
            detailsAreVisible: true,
            friend:
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manual@localhost.com'
                }
        }
        },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app')
