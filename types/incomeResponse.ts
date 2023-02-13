import { BasicAPIResponse } from './basicAPIResponse'

export interface IncomeResponse extends BasicAPIResponse {
    data: {
        is_empty: boolean
        payload: {
            total: number
        }
    }
}
