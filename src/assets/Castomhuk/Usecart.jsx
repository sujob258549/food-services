import { useQuery } from "@tanstack/react-query";
import UsseAxeos from './UsseAxeos';


const Usecart = () => {
    const axiosSecur = UsseAxeos()

    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecur.get('/carts')
            return res.data
        }
    })

    return [refetch, cart]
};

export default Usecart;

