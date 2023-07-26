import data from './data.js';


export default function getParamsForSelect({ Category, Product, Brand }) {
    const brand = [];
    const product = [];
    const category = [];

    data.forEach(item => {
        if (!category.includes(item.Category) &&
            Category != '' &&
            item.Category == Category
        ) {
            category.push(item.Category);
            product.push(item.Product)
            brand.push(item.Brand)
        }
        // if (!product.includes(item.Product) &&
        //     Product != '' &&
        //     item.Product == Product
        // ) {
        //     category.push(item.Category);
        //     product.push(item.Product)
        //     brand.push(item.Brand)
        // }
        // if (!brand.includes(item.Brand) &&
        //     Brand != '' &&
        //     item.Brand == Brand
        // ) {
        //     category.push(item.Category);
        //     product.push(item.Product)
        //     brand.push(item.Brand)
        // }

        console.log(category)
        console.log(brand)
        console.log(product)
    });

    return {
        brand: brand,
        product: product,
        category: category,
    };
}

