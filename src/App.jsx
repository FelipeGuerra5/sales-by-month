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

function DataFilter({ params, name }) {

  return (
    <div>
      <label htmlFor="product">{name}</label>
      <select name={name} id={name}>
        {
          params.map(item => {
            return (
              <option value={item} key={item}>{item.toUpperCase()}</option>
            )
          })
        }
      </select>
    </div>

  )
}

function FilterSection() {
  const options = getParamsForSelect()

  return (
    <section className={Styles.filter_section}>
      <DataFilter params={options.category} name={'Category'} />
      <DataFilter params={options.product} name={'Product'} />
      <DataFilter params={options.brand} name={'Brand'} />
    </section>
  )
}

export default App
