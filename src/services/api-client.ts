import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "bf36924d790a4eb1b9ecfe980119cda7"
    }
})

