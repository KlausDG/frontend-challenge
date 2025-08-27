import './assets/css/reset.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { AxiosAdapter } from './http/HttpClient'
import { OrderGatewayHttp } from './gateway/OrderGateway'
import Unicon from 'vue-unicons'
import {
  uniUser,
  uniEnvelope,
  uniPhone,
  uniPrint,
  uniExclamationCircleSolid,
  uniMapMarker,
  uniFileLandscapeAlt,
  uniEye,
  uniArrowCircleDownMonochrome,
  uniArrowCircleUpMonochrome,
} from 'vue-unicons/dist/icons'

Unicon.add([
  uniUser,
  uniEnvelope,
  uniPhone,
  uniPrint,
  uniExclamationCircleSolid,
  uniMapMarker,
  uniFileLandscapeAlt,
  uniEye,
  uniArrowCircleDownMonochrome,
  uniArrowCircleUpMonochrome,
])

const app = createApp(App)
const httpClient = new AxiosAdapter()
const orderGateway = new OrderGatewayHttp(httpClient)

app.provide('orderGateway', orderGateway)
app.use(Unicon, {
  fill: '#566574',
  height: 14,
  width: 14,
})
app.mount('#app')
