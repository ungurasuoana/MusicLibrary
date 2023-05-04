import { LoginForm } from "../components/loginForm"
import { UserState, useAuthStore } from "../store/useAuthStore"
import { Users } from "../types/users"

export const Login = () => {
    const {users, setUser} = useAuthStore( (state:UserState) => ({
        users: state.users,
        setUser: state.setUser
    }))

    const onLogin = (email: string, password: string) => {
        const user = users.find((user:Users) => 
        user.email === email && user.pass=== password)
        
        if(user) {
            setUser(user);
            console.log('yay')
        }
        else {
            console.log('nay')
        }
    }

    return(
        <LoginForm onPress={onLogin}/>
    )
}