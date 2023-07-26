import data from './data.js';


export default function getParamsForSelect() {
    const brand = [];
    const product = [];
    const category = [];

    data.forEach(item => {
        if (!category.includes(item.Category)) {
            category.push(item.Category);
        }
        if (
            !product.includes(item.Product)
        ) {
            product.push(item.Product)
        }
        if (
            !brand.includes(item.Brand)
        ) {
            brand.push(item.Brand);
        }
    });

    return {
        brand: brand,
        product: product,
        category: category,
    };
}

