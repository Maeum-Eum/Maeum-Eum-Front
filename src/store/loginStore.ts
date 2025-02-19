import { create } from 'zustand';
import { authService } from '../api/apiService';

type LoginState = {
  id: string;
  password: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  idError: string | null;
  passwordError: string | null;
  rememberId: boolean;
  autoLogin: boolean;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  login: () => Promise<void>;
  logout: () => void;
  setRememberId: (rememberId: boolean) => void;
  setAutoLogin: (autoLogin: boolean) => void;
  setIdError: (error: string | null) => void;
  setPasswordError: (error: string | null) => void;
};

export const useLoginStore = create<LoginState>((set) => ({
  id: '',
  password: '',
  isAuthenticated: false,
  userRole: null,
  loading: false,
  error: null,
  idError: null,
  passwordError: null,
  rememberId: false,
  autoLogin: false,

  setId: (id) => set({ id }),
  setPassword: (password) => set({ password }),
  setRememberId: (rememberId) => set({ rememberId }),
  setAutoLogin: (autoLogin) => set({ autoLogin }),

  setIdError: (error) => set({ idError: error }),
  setPasswordError: (error) => set({ passwordError: error }),

  login: async () => {
    set({
      loading: true,
      error: null,
      idError: null,
      passwordError: null,
    });
    try {
      const { id, password } = useLoginStore.getState();
      const response = await authService.login({ id, password });

      console.log("로그인 응답", response)

      if (response.status === 200) {
        
        const accessToken = response.accessToken;
        const refreshToken = response.refreshToken;
    
        console.log('🔑 받은 Access Token:', accessToken);
        console.log('🔑 받은 Refresh Token:', refreshToken);

        if (accessToken) {
          localStorage.setItem('accessToken', accessToken.replace('Bearer ', ''));
        }
        if (refreshToken) {
          localStorage.setItem('refreshToken', refreshToken);
        }
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);
        set({ isAuthenticated: true });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || '로그인 실패';
      set({ error: errorMessage });

      // 에러 메시지에 따라 필드별로 에러 표시
      if (errorMessage.includes('아이디')) {
        set({ idError: '아이디가 잘못되었습니다.' });
      }
      if (errorMessage.includes('비밀번호')) {
        set({ passwordError: '비밀번호가 잘못되었습니다.' });
      }
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    set({ id: '', password: '', isAuthenticated: false });
  },
}));
