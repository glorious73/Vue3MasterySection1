const vi = Vue.createApp({
    data() {
        return {
            firstName: "Amjad",
            middleName: "Mohammad",
            lastName: "Aj",
            url: "https://twitter.com",
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },
        increment() {
            this.age++;
        },
        updateMiddleName(e) {
            this.middleName = e.target.value;
        },
        updateLastName(msg, e) {
            console.log(msg);
            this.lastName = e.target.value;
        }
    }
}).mount('#app');

setTimeout(() => {
    vi.firstName = "Hussain";
}, 3000);