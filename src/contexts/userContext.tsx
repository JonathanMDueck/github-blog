import { ReactNode, createContext } from "react";

interface UserContextProviderProps {
    children: ReactNode
}

interface UserContextType {
    userName: string;
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
    const userName = "jonathanmdueck";

    return (
        <UserContext.Provider value={{ userName }}>
            {children}
        </UserContext.Provider>
    )
}