import axios from "axios"

const instance = axios.create({
    baseURL: "https://localhost:4200"
})

export default instance;
