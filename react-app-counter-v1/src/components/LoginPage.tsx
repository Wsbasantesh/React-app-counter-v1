import { useAuthContext } from "../context/AuthContext"

export default function LoginPage() {
  
 const{stateValue} = useAuthContext();
    return (
    <>
        <h3>Welcome to the Page</h3>


    </>
  )
}
