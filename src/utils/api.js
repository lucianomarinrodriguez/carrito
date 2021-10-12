import axios from "axios"

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
    //params: {
        //api_key: "miApiKey",
        //page: 1
    //}
})

export {api}