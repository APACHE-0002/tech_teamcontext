import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const UserProfile = () => {
    const { setUser } = useContext(UserContext);

    return(
        <div>
                <p>user</p>

                <button onClick={() => setUser({ name: 'Andy'})}>
                    Change the user
                </button>
        </div>
    )
}