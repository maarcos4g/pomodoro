import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";

type User = {
    id: string;
    name: string;
    email: string;
    avatar: string;
    isAuthenticated: boolean;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const onSubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, email, photoURL, uid } = user;

                if (!displayName || !email || !photoURL) {
                    throw new Error("Missing information from Google Account");
                }

                setUser({
                    id: uid,
                    name: displayName,
                    email: email,
                    avatar: photoURL,
                    isAuthenticated: true,
                })
                
            }
        })
        return () => {
            onSubscribe();
        }
    }, [])

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        const result = await signInWithPopup(auth, provider);

        if (result.user) {
            const { displayName, email, photoURL, uid } = result.user;

            if (!displayName || !photoURL || !email) {
                throw new Error("Missing information from Google Account");
            }

            setUser({
                id: uid,
                name: displayName,
                email: email,
                avatar: photoURL,
                isAuthenticated: false,
            });
        }

    }

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}