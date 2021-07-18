<template>
  <div>
    <div class="field">
      <label class="label">Tài khoản</label>
      <div
        class="control has-icons-left"
      >
        <input
          class="input"
          type="text"
          placeholder="Tài khoản"
          v-model="username"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Mật khẩu</label>
      <div class="control">
        <input
          class="input"
          type="password"
          placeholder="Mật khẩu"
          v-model="password"
        />
      </div>
    </div>

    <div class="field is-grouped mt-3">
      <div class="control">
        <button
          @click="login"
          class="button is-primary"
          :class="{ 'is-loading': isLoging }"
        >
          <span>Đăng nhập</span>
          <span class="icon">
            <font-awesome-icon icon="sign-in-alt" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      isLoging: false,
    };
  },
  methods: {
    async login() {
      this.isLoging = true;

      let loginForm = {
        username: this.username,
        password: this.password,
      };

      api
        .login(loginForm)
        .then((res) => {
          console.log("Login successfully ", res);
          this.$swal({
            icon: "success",
            title: "Đăng nhập thành công",
            toast: true,
            timer: 3000,
            position: "bottom-start",
            showConfirmButton: false,
            type: "success",
          });

          this.user.setLogged(res.data);

          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.error("Login failed ", err);
          this.$swal({
            icon: "error",
            title: "Lỗi đăng nhập :(",
            text: "Tài khoản hoặc mật khẩu không đúng",
            timer: 3000,
            showConfirmButton: false,
            type: "error",
          });
        })
        .finally(() => {
          this.isLoging = false;
        });
    },
  },
};
</script>