import { useEffect, useState } from "react"

const useAllTools = () => {
    const [allTools, setAllTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setAllTools(data))
    }, [])
    return [allTools, setAllTools]
}

export default useAllTools