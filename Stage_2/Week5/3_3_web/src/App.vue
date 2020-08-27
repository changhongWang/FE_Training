<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action>
        <div class="layui-form-item" :class="{ 'form-group--error': $v.name.$error }">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              v-model.trim="name"
              @input="setName($event.target.value)"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="error layui-form-mid" v-if="!$v.name.required">用户名不得为空</div>
          <div class="error layui-form-mid" v-if="!$v.name.email">用户名输入格式错误</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入标题"
              autocomplete="off"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid captcha" v-html="svgImage" @click="getCaptcha" />
        </div>
        <button type="button" class="layui-btn">点击登陆</button>
        <a class="imooc-link" href="http://www.layui.com">忘记密码</a>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { required, email } from 'vuelidate/lib/validators';
export default {
  name: 'app',
  data() {
    return {
      svgImage: '',
      name: ''
    }
  },
  validations: {
    name: {
      required,
      email
    },
    password: {
      required
    },
    code: {
      required
    },
  },
  mounted() {
    this.getCaptcha();
  },
  methods: {
    setName(val) {
      this.name = val;
      this.$v.name.$touch();
    },
    getCaptcha() {
      axios.get('http://127.0.0.1:3000/getCaptcha').then(res => {
      if (res.status === 200 && res.data.code === 200) {
        const { data } = res.data;
        this.svgImage = data;
      }
    })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}
.layui-container {
  background: #fff;
}
input {
  width: 190px;
}
.imooc-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}

.captcha {
  position: relative;
  top: -15px; 
}

.error {
  display: none;
}
.form-group--error .error {
  display: block;
}
</style>
