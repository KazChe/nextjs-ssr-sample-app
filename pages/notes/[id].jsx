import React from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

export default () => {
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            <h1>Note params received: {id} </h1>
            <Link href='/'><a>Home</a></Link>
        </div>
        
    )
}