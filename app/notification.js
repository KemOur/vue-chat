setInterval(function(){

    faker.locale = 'fr'
    let info = faker.helpers.createCard();
    let {username} = info;

    document.querySelector('#name').value = username;
}, 2000);



const notification ={
    template: `<div class="alert alert-success" role="alert">@<input style="background: none; border-width: 0px; width: 120px; border: none" type="text" id="name"> vient d'entrer dans la salle !</div>
`,
}

export default notification;