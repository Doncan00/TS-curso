import { create } from "zustand";


interface AuthState{
    status: "authenticated" | "unauthentificated" | "checking" ; 
    token?: string;
    user?: {
        name: string,
        email: string
    }
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()( (set) =>({
    status: "checking",
    token : undefined,
    user: undefined,

    login: (email: string, password:string) => {
        
        set({
            status: "authenticated",
            token: "ABC123",
            user: {
                name: "Lalo Nocorre",
                email: email,
            }
        });
    },

    logout: () => {

        set({
            status: "unauthentificated",
            token: undefined,
            user: undefined,
        })
    },
})
);