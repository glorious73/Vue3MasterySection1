const vi = Vue.createApp({
    data() {
        return {
            firstName: "Amjad",
            lastName: "Aj",
            url: "https://twitter.com",
            raw_url: '<a href="https://google.com" target="_blank">Google</a>'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }
    }
}).mount('#app');

setTimeout(() => {
    vi.firstName = "Hussain";
}, 3000);