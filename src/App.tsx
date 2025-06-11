
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'
import { Stack } from '@mui/material'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <Stack>
      <RouterProvider router={router} />
      <ToastContainer />
    </Stack>
  )
}

export default App
