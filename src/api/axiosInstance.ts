import axios, { type CreateAxiosDefaults } from 'axios'
import { API_URL } from '@/config/axios.config'

const options: CreateAxiosDefaults = {
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
}

export const axiosInstance = axios.create(options)