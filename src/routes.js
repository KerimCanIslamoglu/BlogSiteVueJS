// // const BlogPost=r => require.ensure([], () => r(require('./components/main/BlogPost.vue')))

import MainPage from "./Components/MainPage.vue"
import AboutUs from "./Components/AboutUs.vue"
import Contact from "./Components/Contact.vue"
import Navbar from "./Components/Navbar.vue"



export const routes = [
    {
        path: "*",
        redirect: {
            name: "Anasayfa"
        }
    },
    {
        path: '/', name: 'Anasayfa', component: MainPage
    },
    {
        path: '/about', name: 'Hakkımızda', component: AboutUs
    },
    {
        path: '/contact', name: 'İletişim', component: Contact
    },

]