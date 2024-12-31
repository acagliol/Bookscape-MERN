import { Children, createContext } from "react"

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

// auth provider
export  const AuthProvider = (children) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const value = {
        currentUser   
    }
    
    return (

        <AuthContext.Provider value = {value}>
            {children}
        </AuthContext.Provider>
    )
}