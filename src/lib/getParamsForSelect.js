import data from './data.js';

console.log(data);

export default function getParamsForSelect() {
    const brand = [];
    const product = [];
    const category = [];

    data.forEach(item => {
        if (!brand.includes(item.Brand)) {
            brand.push(item.Brand);
        }
        if (!product.includes(item.Product)) {
            product.push(item.Product)
        }
        if (!category.includes(item.Category)) {
            category.push(item.Category);
        }
    });

    return {
        brand: brand,
        product: product,
        category: category,
    };
}

getParamsForSelect()
