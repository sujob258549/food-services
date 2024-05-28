import { useQuery } from "@tanstack/react-query";
import UsseAxeos from './UsseAxeos';
import { useContext } from "react";
import { CreatAuthContext } from "../Firebase/Context";


const Usecart = () => {
    const axiosSecur = UsseAxeos()
    const {user} = useContext(CreatAuthContext)

    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecur.get(`/carts?email=${user.email}`)
            return res.data
        }
    })

    return [refetch, cart]
};

export default Usecart;

