import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HeaderPage } from "./components/page/HeaderPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<HeaderPage />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
