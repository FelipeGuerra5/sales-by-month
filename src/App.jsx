import { useState, useEffect } from 'react'
import Styles from './App.module.css'
import GraphView from './components/GraphView'
import sumMonthlySales from './lib/sumMonthlySales'
import getParamsForSelect from './lib/getParamsForSelect'
import getFilteredParamsForSelect from './lib/getFilteredParamsForSelect'

function App() {

  // const [filters, setFilters] = useState({
  //   Category: 'Dairy',
  //   Product: 'Milk and Derivatives',
  //   Brand: 'MooMilk Co.'
  // })
  const [category, setCategory] = useState('Dairy')
  const [product, setProduct] = useState('Milk and Derivatives')
  const [brand, setBrand] = useState('MooMilk Co.')

  const [options, setOptions] = useState(getParamsForSelect(
    {
      Category: 'Dairy',
      Product: 'Milk and Derivatives',
      Brand: 'MooMilk Co.'
    }
  ))
  const [data, setData] = useState(sumMonthlySales({category, product, brand}))

  useEffect(() => {
    setOptions(getParamsForSelect(category, product, brand))
    setData(sumMonthlySales(category, product, brand))
  }, [category, product, brand])


  return (
    <main>
      <NavBar />
      <FilterSection
        category={category}
        product={product}
        brand={brand}
        setCategory={setCategory}
        setProduct={setProduct}
        setBrand={setBrand}
        options={options}
      />
      <GraphView
        data={data}
      />
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

function DataFilter({ params, name, filter, setFilter }) {
  console.log(filter)
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <select name={name} id={name} onChange={e => setFilter(e.target.value)}>
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

function FilterSection({ category, setCategory, product, setProduct, brand, setBrand, options }) {

  return (
    <section className={Styles.filter_section}>
      <DataFilter params={options.category} name={'Category'} filter={category} setFilters={setCategory} />
      <DataFilter params={options.product} name={'Product'} filter={product} setFilters={setProduct} />
      <DataFilter params={options.brand} name={'Brand'} filter={brand} setFilters={setBrand} />
    </section>
  )
}

export default App
