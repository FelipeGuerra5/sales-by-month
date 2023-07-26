import data from './data.js'

export default function sumMonthlySales(Category, Product, Brand) {

    let months = []
    data.map((item) => {
        if (
            item.Category == Category &&
            item.Product == Product &&
            item.Brand == Brand
        ) {
            item.MonthlySales.map((element) => {
                const month = element.month
                const sales = element.sales
                const monthSales = { month: month, sales: sales }
                months.push(monthSales)
            })
        }
    })
    months.push({ month: "", sales: null })
    console.log(months)
    return months
}
