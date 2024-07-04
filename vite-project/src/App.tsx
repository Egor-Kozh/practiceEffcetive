import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Character_info_ from './pages/Character_info'
import Comices_ from './pages/Comices'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path='/character/:id' element={<Character_info_/>}/>
          <Route path='/comics/' element={<Comices_/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
