import { Route, Routes } from 'react-router-dom'
import { BaseLayout } from './components/common'
import { HomePage, NotFoundPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
