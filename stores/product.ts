import { defineStore } from 'pinia'

interface Product {
    id: number
    title: string
    weight: string
    src: string
    price: string
    row:string 
}

type State = {
  products: Product[]
}

export const productsStore = defineStore('product', {
    state: (): State => {
        return {
            products: [
                {
                    id: 1,
                    title: 'چیپس برگه ای کچاپ مزمز ',
                    weight: '65 گرمی',
                    src: "../public/-65-.jpg",
                    price: '138,000 ریال',
                    row:'vv'
                },
                {
                    id: 2,
                    title:'پاپ کرن کچاپ متوسط مزپف مزمز ',
                    weight: '60 گرمی',
                    src: "../public/-60-.jpg",
                    price: '128,000 ریال',
                    row:'vv'
                },
                {
                    id: 3,
                    title: 'نکتار انار یک و یک ',
                    weight: '200میلی لیتر',
                    src: "../public/-200-.jpg",
                    price: '103,000 ریال',
                    row:'vv'
                },
                {
                    id: 4,
                    title: 'نوشابه کوکاکولا',
                    weight: '330سی سی',
                    src: "../public/-330-.jpg",
                    price: '190,000 ریال',
                    row:'vv'
                },
                {
                    id: 5,
                    title: 'آلبالو خشکه مزمز ',
                    weight: '80گرمی',
                    src: "../public/-80-.jpg",
                    price: '148,000 ریال',
                    row:'vv'
                },
                {
                    id: 5,
                    title: 'پودر ژله پرتقال فرمند',
                    weight: '100گرمی',
                    src: "../public/-100-.jpg",
                    price: '185,000 ریال',
                    row:'ll'
                },
                {
                    id: 5,
                    title: 'پودر ژله موز فرمند',
                    weight: '100گرمی',
                    src: "../public/-10-.jpg",
                    price: '170,000 ریال',
                    row:'ll'
                },
                {
                    id: 5,
                    title: 'پودر ژله آناناس فرمند',
                    weight: '100گرمی',
                    src: "../public/-1-.jpg",
                    price: '170,000 ریال',
                    row:'ll'
                },
                {
                    id: 5,
                    title: 'پودر ژله آلوئه ورا فرمند',
                    weight: '100گرمی',
                    src: "../public/-12-.jpg",
                    price: '175,000 ریال',
                    row:'ll'
                },
                {
                    id: 5,
                    title: 'پودر ژله هندوانه فرمند',
                    weight: '100گرمی',
                    src: "../public/-13-.jpg",
                    price: '185,000 ریال',
                    row:'ll'
                },

                
            ],
        }
    },
})