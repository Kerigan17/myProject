export class Router {
    constructor() {
        this.routs = [
            {
                route: '#/signup',
                title: 'Регистрация',
                template: 'templates/signup.html',
                styles: 'styles/form.css',
                load: () => {

                }
            },
            {
                route: '#/login',
                title: 'Вход',
                template: '/templates/login.html',
                styles: 'styles/form.css',
                load: () => {

                }
            },
        ]
    }

    async openRoute() {
        const newRoute = this.routs.find(item => {
            console.log(item.route)
            return item.route === window.location.hash;
        })

        if (!newRoute) {
            window.location.href = '#/';
            return;
        }

        document.getElementById('content').innerHTML = await fetch(newRoute.template).then(response => response.text());
        document.getElementById('styles').setAttribute('href', newRoute.styles);
        document.getElementById('title').innerText = newRoute.title;
        newRoute.load();
    }
}