export interface OrderUser {
    customer_id: string
    name: string
    user: string
}

export interface OrderProduct {
    product_id: string
    name: string
    price: number
    duration: number
    description: string
}

export interface OrderResponse {
    status_code: number
    message: string
    order_id: string
    buyer: OrderUser
    product: OrderProduct
    status: string
    created_at: number
    updated_at: number
}
