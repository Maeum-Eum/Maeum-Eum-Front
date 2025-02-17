import { create } from "zustand";
import { api } from "../api/api";

type LoginState = {
    username: string;
    password: string;
    isAuthenticated: boolean;
    loading: boolean;
    error : string | null;
    rememberId: boolean;
    autoLogin: boolean;
    setUsername: (username : string) => void;
    setPassword: (password: string) => void;
    login: () => Promise<void>;
    logout: () => void;
    setRememberId: (rememberId: boolean) => void;
    setAutoLogin: (autoLogin: boolean) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
    username:'',
    password:'',
    isAuthenticated: false,
    loading: false,
    error: null,
    rememberId: false,
    autoLogin: false,

    setUsername: (username) => set({username}),
    setPassword: (password)=> set({password}),
    setRememberId: (rememberId) => set({rememberId}),
    setAutoLogin:(autoLogin) => set({autoLogin}),
    
    login: async () => {
        set({loading: true, error: null});
        try {
            const {username, password} = useLoginStore.getState();
            const response = await api.post('/login', {username, password});
            if(response.status === 200){
                set({isAuthenticated: true});
            }
        } catch(error: any) {
            set({ error: error.response?.data?.message || '로그인 실패'});
        } finally {
            set({loading: false});
        }
      },
    
      logout: () => {
        set({ username: '', password: '', isAuthenticated: false });
      },
}))