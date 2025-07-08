import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

// import pages
import HomePage from "./pages/home/Index.jsx"

const router = createBrowserRouter(
  [
    { path: "/", element: <HomePage /> }
  ]
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
