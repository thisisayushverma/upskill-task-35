import { createContext, useContext } from "react";


const User = createContext({

});

const useUser = ()=> useContext(User)

export const UserProvider = User.Provider

export default useUser

