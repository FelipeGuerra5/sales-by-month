import Styles from './App.module.css'

function App() {
  return (
    <>
      <NavBar />
      <h1>Hello world</h1>
    </>
  )
}


const NavBar = () => {
  return (
    <nav className={Styles.navbar} >
      <div className={Styles.menu_user}>
        <menu>Menu</menu>
        <div>Username</div>
      </div>
      <h1 className={Styles.title}>Sales Report</h1>
    </nav>
  )
}


export default App
