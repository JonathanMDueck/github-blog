import { ReactNode, createContext } from "react";

interface UserContextProviderProps {
    children: ReactNode
}

interface UserContextType {
    userName: string;
    repositoryName: string;
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
    const userName = "rocketseat-education";
    const repositoryName = "reactjs-github-blog-challenge";

    return (
        <UserContext.Provider value={{ userName, repositoryName }}>
            {children}
        </UserContext.Provider>
    )
}