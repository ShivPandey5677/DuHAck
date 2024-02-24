import Navbar from './components/Navbar' 
import LoginRegisterPopup from './pages/LoginRegisterPopup'
function App() {
 

  return (

  <div  className="bg-slate-900">
    <Navbar/>
    <header className="App-header">
        <LoginRegisterPopup />
      </header>
  </div>


   
  )
}

export default App
