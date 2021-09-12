import { useContext } from "react";
import { UserContext } from "./context/UserContext"; 
import { UserProfile } from "./UserProfile";

export const Dashboard = () =>{
    const { user, setUser } = useContext(UserContext);


    return(
        <div>
            <h1>This is my dashboard</h1>
            {user.name}
            <button onClick={() => setUser({ name: 'Nandy', gender: 'male' })}>Change the user</button>

            <UserProfile/>
        </div>
    )
}