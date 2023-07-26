import data from './data.js'

export default function getParamsForSelect(category, product, brand) {
    console.log({ category, product, brand })

    const brands = new Set()
    const products = new Set()
    const categories = new Set()

    data.forEach(item => {
        categories.add(item.Category)
        if (category && item.Category === category) {
            products.add(item.Product)
        }
        if (product && item.Product == product) {
            brands.add(item.Brand)
        }
    })

    return {
        brand: Array.from(brands),
        product: Array.from(products),
        category: Array.from(categories),
    }
}

