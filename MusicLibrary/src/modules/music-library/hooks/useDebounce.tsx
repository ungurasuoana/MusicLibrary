import { useEffect, useState } from "react";

export const useDebounce = (value:any, delay: number):any => {
    const [debVal, setDebVal] = useState<any>(value)

    useEffect(() => {
        const id = setTimeout(() => 
        setDebVal(value)
        , delay)
         return () => clearTimeout(id);
    },[value, delay])

    return debVal
}