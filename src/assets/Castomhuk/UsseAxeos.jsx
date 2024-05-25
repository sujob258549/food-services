
import  axios  from 'axios';
export const axiosSecur = axios.create({
    baseURL: "http://localhost:3000"
})

const UsseAxeos = () => {

    return axiosSecur

};

export default UsseAxeos;