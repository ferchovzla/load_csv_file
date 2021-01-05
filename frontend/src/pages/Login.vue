<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>

            <fg-input
              class="no-border input-lg"
              label="Username"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Username..."
              v-model="username"              
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              label="Password"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password"
              type="password"
              v-model="password"
            >
            </fg-input>

            <template>
              <div class="card-footer text-center">
                <v-btn
                  color="warning"
                  class="btn-primary btn-round btn-md btn-block"
                  @click="validate"
                >
                  Sign in
                </v-btn>
                </div>
              <div class="pull-left">
                <h6>
                  <a href="#" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  data () {
      return {
        valid: true,
        username: '',
        password: '',
        activeLoading: false,
      }
  },
  mounted () {
      this.clear()
  },
  methods: {
    validate () {      
      this.$router.push("/landing");
    },
    clear () {
      this.username = ''
      this.password = ''
    }
  },
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
