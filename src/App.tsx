import { BrowserRouter } from "react-router-dom"
import { Suspense } from "react"
import AppRoutes from "./routes";
import './App.css'

const App: React.FC = () => {

  return (
    <>  
      <BrowserRouter>
        <Suspense fallback={<></>} >
          <AppRoutes>
            
          </AppRoutes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
