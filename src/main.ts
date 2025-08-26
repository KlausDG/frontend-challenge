import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { AxiosAdapter } from './http/HttpClient'
import { OrderGatewayHttp } from './gateway/OrderGateway'

const app = createApp(App)
const httpClient = new AxiosAdapter()
const orderGateway = new OrderGatewayHttp(httpClient)

app.provide('orderGateway', orderGateway)
app.use(router)

app.mount('#app')
