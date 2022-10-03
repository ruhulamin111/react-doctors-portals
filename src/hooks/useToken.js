import { useEffect } from "react"
import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        if (user) {
            fetch(`https://vast-waters-48657.herokuapp.com/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-tpye': 'application/json',
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token)
                    setToken(data.token);
                })
        }
    }, [user])
    return [token]
}

export default useToken;