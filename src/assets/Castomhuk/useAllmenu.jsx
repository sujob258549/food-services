import { useQuery } from "@tanstack/react-query";
import UsseAxeos from './UsseAxeos';


const useAllmenu = () => {
    const axiosSecur = UsseAxeos()
    const {refetch, data:menu = []} = useQuery({
        queryKey: 'menu',
        queryFn: async ()=>{
            const res = await axiosSecur.get('/menu');
            return res.data
        }

    })
    return [refetch, menu]
       
};

export default useAllmenu;