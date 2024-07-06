// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import useAxiosConfig from './utils/useAxiosConfig';

import { useLoader } from './context/LoaderContext';
import Loader from './pages/Loader/Loader';

function App() {
  // const [count, setCount] = useState(0)
  useAxiosConfig();

  const { isLoading } = useLoader();

  return (
    <>
      {/* <h1>Loading.... {isLoading ? 'Jitendra': 'Rajput'}</h1> */}
        <Loader />
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
