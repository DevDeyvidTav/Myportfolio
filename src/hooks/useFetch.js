import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const url = 'https://api.github.com/users/DevDeyvidTav/repos'

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })



    }, [])
    return { data, loading }

}