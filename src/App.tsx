
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './store/ReduxStore'

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
    </Provider>
  )
}

export default App
