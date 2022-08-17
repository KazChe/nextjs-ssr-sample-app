import React from 'react'
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    const id = router.query.id
    // OR  const {id} = router.query

    return (
        <h1>Note id received: {id} </h1>
    )
}