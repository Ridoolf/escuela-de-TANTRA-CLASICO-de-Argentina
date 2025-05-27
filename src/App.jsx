import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { menuRoutes } from "./routes/menuRoutes"
import { NotFound } from "./components/pages/notFound/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {
            menuRoutes.map(({id, path, Element}) => {
              return <Route key={id} path={path} element={<Element/>} />
            })
          }
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
