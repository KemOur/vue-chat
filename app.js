import notification from "./app/notification.js";

const user ={
    props: ['user'],
    template: `<li class="list-group-item"><svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="lightgreen"></rect></svg>{{user.username}}</li>`,
};
 const users ={
     data() {
         return {
             user: {
                 id: '',
                 username: ''
             },
             users: [],
         };
     },
     methods: {
       UserConnected() {
           const userCo = {
               username: faker.name.findName()
           };
           this.users.unshift(userCo);
           this.$emit('user', this.users.username);
       },
     },
     mounted(){
       setInterval(this.UserConnected, 2000);
     },
     components: {
         User : user,
     },
     template: ` <div class="bg-light p-2 rounded">
                <h5 style="text-align: center">Connected Users:</h5>
                <ul class="list-group" style="width: 100%">
                 <user :user="user"
                 v-for="user in users"></user>
                </ul>
            </div>`,
 };

const message ={
    data() {
        return{
            message: {
                id: Date.now,
                username: '',
                message:'',
                date: '',

            },
            messages: []
        }
    },
    methods: {
        addNewTodo(){
            const message = {
                id: Date.now(),
                username: 'user',
                message: this.message.message,
                date: new Date(Date.now()).toLocaleDateString(),
            };
            this.messages.push(message);
            this.message.id = Date.now();
            this.message.message='';
            this.message.date='';

        },
    },
    template: `<br>

                <div v-for="message in messages" class="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <div class="d-flex justify-content-between">
                                <strong class="text-gray-dark">El Junioré</strong><em>{{message.date}}</em>
                            </div>
                            <span class="d-block">@Juju</span><br>
                            <p class="lead">{{message.message}}</p>
              </div>
              
              <form @submit.prevent="addNewTodo">
                  <div class="input-group mb-3">
                    <input v-model="message.message" type="text" class="form-control" aria-describedby="basic-addon2">
                    <span id="basic-addon2"  ><button class="btn btn-lg btn-info" type="submit" style="color: white" role="button">send</button></span>
                </div>
              </form>
                   `,
};
const chat ={
    data() {
        return{
        title : " GOLAZOOOOO !"
    };
    },
    components: {
        Message: message,
        Notification: notification,
    },
    template: `
                    <div class="bg-light p-5 rounded">
                    <notification></notification>
                        <div class="my-3 p-3 bg-white rounded shadow-sm">
                            <h6 class="border-bottom pb-2 mb-0">{{ title }}</h6>
                            <message></message>
                    </div>
            </div>
        </div>`,

};

const app = Vue.createApp({
    data() {
        return {};
    },
    components: {
        Chat: chat,
        Users: users,
    },
});

app.mount("#app");
