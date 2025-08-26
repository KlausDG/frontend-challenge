import type HttpClient from '@/http/HttpClient'
import type { PurchaseOrder } from '@/models'

export default interface OrderGateway {
  getOrderById(id: number): Promise<PurchaseOrder>
}

export class OrderGatewayHttp implements OrderGateway {
  constructor(readonly httpClient: HttpClient) {}

  async getOrderById(id: number): Promise<PurchaseOrder> {
    const response = await this.httpClient.get(`/api/orders/${id}`)
    return response
  }
}
