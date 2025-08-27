import type OrderGateway from '@/gateway/OrderGateway'
import type { Order } from '@/models'
import { inject, ref, onMounted } from 'vue'

export function useOrder(id: number) {
  const orderGateway = inject('orderGateway') as OrderGateway
  if (!orderGateway) {
    throw new Error('orderGateway não fornecido')
  }

  const data = ref<Order | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchOrder = async () => {
    loading.value = true
    error.value = null
    try {
      data.value = await orderGateway.getOrderById(id)
    } catch (err: any) {
      error.value = err.message || 'Erro ao buscar pedido'
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchOrder)

  return { data, loading, error }
}
