import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu, setManu] = useState([]);
    const [loder, setLoder] = useState(true)
    useEffect(() => {
        fetch('../../../public/menu.json')
            .then(res => res.json())
            .then(data => {
                setManu(data);
                setLoder(false)
            })
    }, [])
    return [menu , loder]
        
    
};

export default useMenu;