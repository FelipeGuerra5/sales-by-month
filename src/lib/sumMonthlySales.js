import data from './data.js'

export default function sumMonthlySales(category, product, brand) {

    let months = []
    data.map((item) => {
        if (
            item.Category == category &&
            item.Product == product &&
            item.Brand == brand
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
    return months
}
