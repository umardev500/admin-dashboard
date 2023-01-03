export interface CustomerLocation {
    address: string
    village: string
    district: string
    city: string
    province: string
    postal_code: string
}

export interface CustomerDetail {
    npsn: string
    name: string
    email: string
    wa: string
    type: string
    level: string
    about: string
    location: CustomerLocation
}

export interface CustomerResponse {
    customer_id: string
    user: string
    pass: string
    detail: CustomerDetail
    status: string
    exp_until: number
    created_at: number
    updated_at: number
    deleted_at: number
}
