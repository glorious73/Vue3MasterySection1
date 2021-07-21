const vi = Vue.createApp({
    data() {
        return {
            firstName: "Amjad",
            lastName: "Aj"
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