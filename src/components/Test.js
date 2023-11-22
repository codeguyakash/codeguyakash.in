import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SkeCard from './SkeCard'

function Test() {
    const [first, setFirst] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setFirst(res.data)
        })
    }, [])

    return (
        <>
            {
                first.map((item, index) => (
                    <SkeCard key={index} data={item} />
                ))
            }
        </>
    )
}

export default Test