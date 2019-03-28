import axios from 'axios'

export const InvoicerApi = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 5000,
    headers: { 
        'Content-Type': 'application/json',
    }
})

export const DummyApi = axios.create({
    baseURL: 'https://my-json-server.typicode.com/typicode/demo/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})