import Styles from './App.module.css'

function App() {
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

function GraphView() {
  return (
    <div className={Styles.graph}>
      Here will be the graph!
    </div>
  )
}





export default App
