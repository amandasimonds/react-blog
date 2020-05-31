import axios from "axios";

//create's instance or copy of axios
//will use default configurations, but this instance can override anything you need to
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// you can also make custom interceptors
//instance.interceptors.request...
export default instance;
