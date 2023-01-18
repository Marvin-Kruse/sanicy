import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
export default function Component() {
    const { data: session } = useSession()
    const router = useRouter()
    const login = (e) => {
        const { id } = router.query
        const url = '/checkout/' + id
        signIn('discord', {
            callbackUrl: url
        })
    }
    if (session) {
        return (
            <>
                <button id='button' type="button" className="btn btn-dark btn-block mt-4 disabled">CheckOut</button>
            </>
        )
    }
    return (
        <>
            <button onClick={(event) => login()} type="button" className="btn btn-primary btn-block mt-4">Login with Discord</button>
        </>
    )
}

