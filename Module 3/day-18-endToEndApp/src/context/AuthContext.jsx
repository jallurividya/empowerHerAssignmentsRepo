import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import * as authService from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser);
setLoading(false);
});
return unsubscribe;
}, []);

const value = {
user,
login: authService.loginUser,
signup: authService.signupUser,
logout: authService.logoutUser,
};

return (
<AuthContext.Provider value={value}>
{!loading && children}
</AuthContext.Provider>
);
};

export const useAuth = () => useContext(AuthContext);