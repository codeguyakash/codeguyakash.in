import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeCard({ data }) {
    return (
        <div>
            <h2>{data.title || <Skeleton />}</h2>
            {data.body || <Skeleton count={5} />}
        </div>
    )
}

export default SkeCard