import './App.css'
import UserPage from './features/users/userPage'
import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  )
}

export default App
