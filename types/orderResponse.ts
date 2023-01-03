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

export interface Order {
    order_id: string
    buyer: OrderUser
    product: OrderProduct
    status: string
    created_at: number
    updated_at: number
}

export interface OrderData {
    orders: Order[]
    rows: number
    pages: number
    per_page: number
    active_page: number
    total: number
}

export interface OrderResponse {
    status_code: number
    message: string
    data: OrderData
}
