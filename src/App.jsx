import Styles from './App.module.css'
import GraphView from './components/GraphView'
import sumMonthlySales from './lib/sumMonthlySales'
import getParamsForSelect from './lib/getParamsForSelect'

function App() {
  const data = sumMonthlySales(
    {
      Category: "Dairy",
      Product: "Milk and Derivatives",
      Brand: "MooMilk Co."
    }
  )

  return (
    <main>
      <NavBar />
      <FilterSection />
      <GraphView data={data} />

    </main>
  )
}


function NavBar() {
  return (
    <nav className={Styles.navbar} >
      <div className={Styles.menu_user}>
        <menu>Menu</menu>
        <div className={Styles.username}>
          <div className={Styles.status}>
          </div>
          Username
        </div>
      </div>
      <h1 className={Styles.title}>Sales Report</h1>
    </nav>
  )
}

function DataFilter(params) {
  // params.caegory.map(item => console.log(item))

  return (
    <div>
      <label htmlFor="product">Product</label>
      <select name="product" id="product">
        <option value="prod1">prod1</option>
        <option value="prod2">prod2</option>
        <option value="prod3">prod3</option>
      </select>
    </div>

  )
}

function FilterSection() {
  const options = getParamsForSelect()
  return (
    <section className={Styles.filter_section}>
      <DataFilter params={options} />
    </section>
  )
}

export default App
