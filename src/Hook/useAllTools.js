import { useEffect, useState } from "react"

const useAllTools = () => {
    const [allTools, setAllTools] = useState([]);

    useEffect(() => {
        fetch('tools.json')
        .then(res => res.json())
        .then(data => setAllTools(data))
    }, [])
    return [allTools, setAllTools]
}

export default useAllTools