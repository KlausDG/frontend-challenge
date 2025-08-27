import type HttpClient from '@/http/HttpClient'
import type { Order } from '@/models'

export default interface OrderGateway {
  getOrderById(id: number): Promise<Order>
}

export class OrderGatewayHttp implements OrderGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getOrderById(id: number): Promise<Order> {
    const response = await this.httpClient.get(`https://api.mercadoe.space/orders/${id}`)
    return response
  }
}
