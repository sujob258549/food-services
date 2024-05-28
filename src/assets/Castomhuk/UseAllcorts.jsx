import { useQuery } from "@tanstack/react-query";
import UsePublickAxios from './UsePublickAxios';


const UseAllcorts = () => {
    const axiosPublick = UsePublickAxios()

    const {refetch, data: allcart = [] } = useQuery({
        queryKey: ['allcart'],
        queryFn: async () => {
            const res = await axiosPublick.get(`/allcarts`)
            return res.data
        }
    })

    return [refetch, allcart]
};

export default UseAllcorts;
