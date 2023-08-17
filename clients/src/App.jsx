 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Offers } from "./pages"
import { Header } from "./component"
 

function App() { 
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
