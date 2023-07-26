import { useState, useEffect } from 'react'
import Styles from './App.module.css'
import GraphView from './components/GraphView'
import sumMonthlySales from './lib/sumMonthlySales'
import getParamsForSelect from './lib/getParamsForSelect'

function App() {
  const [filters, setFilters] = useState({
    category: 'Dairy',
    product: 'Milk and Derivatives',
    brand: 'MooMilk Co.'
  })

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
  const data = sumMonthlySales(filters)

  return (
    <main>
      <NavBar />
      <FilterSection
        filters={filters}
        setFilters={setFilters}
      />
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

function DataFilter({ params, name, filter, setFilters }) {
  console.log(filter)
  return (
    <div>
      <label htmlFor="product">{name}</label>
      <select name={name} id={name} onChange={e => setFilters(filters => ({
        ...filters, [name]: e.target.value
      }))}>
        {
          params.map(item => {
            return (
              <option value={item} key={item}>{item}</option>
            )
          })
        }
      </select>
    </div>
  )
}

function FilterSection({ filters, setFilters }) {
  const options = getParamsForSelect(filters)

  return (
    <section className={Styles.filter_section}>
      <DataFilter params={options.category} name={'Category'} filter={filters.category} setFilters={setFilters} />
      <DataFilter params={options.product} name={'Product'} filter={filters.product} setFilters={setFilters} />
      <DataFilter params={options.brand} name={'Brand'} filter={filters.brand} setFilters={setFilters} />
    </section>
  )
}

export default App
