import { BasicAPIResponse } from './basicAPIResponse'

export interface UserLocation {
    address: string
    village: string
    district: string
    city: string
    province: string
    postal_code: string
}

export interface UserDetail {
    name: string
    email: string
    phone: string
    avatar: string
    gender: string
    location: UserLocation
}

export interface User {
    user_id: string
    user: string
    pass: string
    detail: UserDetail
    level: string
    status: string
    created_at: number
    update_at: number
    deleted_at: number
}

export interface UserData {
    is_empty: boolean
    payload: User
}

export interface UserResponse extends BasicAPIResponse {
    data: UserData
}
