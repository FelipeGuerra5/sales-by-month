import Styles from './App.module.css'
import GraphView from './components/GraphView'
import sumMonthlySales from './lib/sumMonthlySales'

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
      <GraphView />

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

function DataFilter() {
  return (
    <div>
      <label for="product">Produto</label>
      <select name="product" id="product">
        <option value="prod1">prod1</option>
        <option value="prod2">prod2</option>
        <option value="prod3">prod3</option>
      </select>
    </div>

  )
}

function FilterSection() {
  return (
    <section className={Styles.filter_section}>
      <DataFilter />
      <DataFilter />
      <DataFilter />
    </section>
  )
}

export default App
