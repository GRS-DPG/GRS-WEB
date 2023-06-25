import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export interface User {
  name: string;
  username: string;
  password: string;
  token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(authUser) {
    isAuthenticated.value = true;
    const user: User = {
      name: authUser.data.user_info.name,
      username: authUser.data.user_info.username,
      password: authUser.data.user_info.password,
      token: authUser.data.token
    };
    errors.value = {};

    JwtService.saveToken(authUser.data.token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    localStorage.clear();
    JwtService.destroyToken();
  }

  function login(credentials: User) {
    return ApiService.post("auth/login", credentials)
      .then(({ data }) => {
        setAuth(data);
        var now = Date.now();
        var schedule = now + (2*60*60)*1000 as any; 
        localStorage.setItem("_grs_user", JSON.stringify(data.data.user_info));
        localStorage.setItem("expiry", schedule);
       
      })
      .catch(({ response }) => {
        setError([response.data.status]);
      });
  }

  function logout() {
    purgeAuth();
    localStorage.clear();
  }

  function register(credentials: User) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function verifyAuth() {
    // if (JwtService.getToken()) {
    //   ApiService.setHeader();
    //   ApiService.post("auth/verify_token", { api_token: JwtService.getToken() })
    //     .then(({ data }) => {
    //       setAuth(data);
    //     })
    //     .catch(({ response }) => {
    //       setError(response.data.errors);
    //       purgeAuth();
    //     });
    // } else {
    //   purgeAuth();
    // }
    var expiry = "" as any;
    expiry = localStorage.getItem('expiry');
    const now = new Date()
    const time = now.getTime() as any;
    // compare the expiry time of the item with the current time
    if (time > expiry) {
      purgeAuth();
    }


  }

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
  };
});
