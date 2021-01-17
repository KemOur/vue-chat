import notification from "./app/notification.js";

const user ={
    template: `
               <li class="list-group-item"> <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="lightgreen"></rect></svg>Junior</li>
               <li class="list-group-item"> <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="lightgreen"></rect></svg>Nathan</li>
               <li class="list-group-item"><svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="lightgreen"></rect></svg>Thomas</li>`,
};
 const users ={
     components: {
         User : user,
     },
     template: ` <div class="bg-light p-2 rounded">
                <h5 style="text-align: center">Connected Users:</h5>
                <ul class="list-group" style="width: 100%">
                 <user></user>
                </ul>
            </div>`,
 };
const message ={
    template: `<br><div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <div class="d-flex justify-content-between">
                                <strong class="text-gray-dark">El Junioré</strong><em>17:55</em>
                            </div>
                            <span class="d-block">@juju</span>
                            <p class="lead">Salut les amigos, vous avez vû le matcht d'hier ?</p>
              </div>`,
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
                     <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-describedby="basic-addon2">
                    <span id="basic-addon2"><a class="btn btn-lg btn-info" style="color: white" href="/docs/5.0/components/navbar/" role="button">send</a></span>
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
