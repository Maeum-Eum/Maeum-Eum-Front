import { create } from 'zustand';
import { apiClient } from '../api/api';

type LoginState = {
  username: string;
  password: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  usernameError: string | null;
  passwordError: string | null;
  rememberId: boolean;
  autoLogin: boolean;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  login: () => Promise<void>;
  logout: () => void;
  setRememberId: (rememberId: boolean) => void;
  setAutoLogin: (autoLogin: boolean) => void;
  setUsernameError: (error: string | null) => void;
  setPasswordError: (error: string | null) => void;
};

export const useLoginStore = create<LoginState>((set) => ({
  username: '',
  password: '',
  isAuthenticated: false,
  loading: false,
  error: null,
  usernameError: null,
  passwordError: null,
  rememberId: false,
  autoLogin: false,

  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setRememberId: (rememberId) => set({ rememberId }),
  setAutoLogin: (autoLogin) => set({ autoLogin }),

  setUsernameError: (error) => set({ usernameError: error }),
  setPasswordError: (error) => set({ passwordError: error }),

  login: async () => {
    set({
      loading: true,
      error: null,
      usernameError: null,
      passwordError: null,
    });
    try {
      const { username, password } = useLoginStore.getState();
      const response = await apiClient.post('/login', { username, password });
      if (response.status === 200) {
        set({ isAuthenticated: true });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || '로그인 실패';
      set({ error: errorMessage });

      // 에러 메시지에 따라 필드별로 에러 표시
      if (errorMessage.includes('아이디')) {
        set({ usernameError: '아이디가 잘못되었습니다.' });
      }
      if (errorMessage.includes('비밀번호')) {
        set({ passwordError: '비밀번호가 잘못되었습니다.' });
      }
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    set({ username: '', password: '', isAuthenticated: false });
  },
}));
