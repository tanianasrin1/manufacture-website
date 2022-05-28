import { useEffect, useState } from "react"

const useAllTools = () => {
    const [allTools, setAllTools] = useState([]);

    useEffect(() => {
        fetch('https://evening-citadel-12417.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setAllTools(data))
    }, [])
    return [allTools, setAllTools]
}

export default useAllTools