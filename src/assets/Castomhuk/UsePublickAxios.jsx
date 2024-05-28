import axios from "axios";

export const axiosPublick = axios.create({
    baseURL: 'http://localhost:3000'
})

const UsePublickAxios = () => {
    return axiosPublick
};

export default UsePublickAxios;