import data from './data.js'

export default function sumMonthlySales(params) {

    let months = []
    data.map((item) => {
        if (
            item.Category == params.Category &&
            item.Product == params.Product &&
            item.Brand == params.Brand
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
