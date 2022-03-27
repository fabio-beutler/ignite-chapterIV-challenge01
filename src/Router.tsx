import { Routes, Route } from 'react-router-dom'
import { Continent } from './pages/Continent'
import { Homepage } from './pages/Homepage'

const Router = () => {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path=':continent' element={<Continent />} />
    </Routes>
  )
}

export default Router
