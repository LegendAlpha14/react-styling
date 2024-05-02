import './App.css'


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NormalStyling from './components/normal-styling/normal-css'
import Home from './components/home'
import ModuledStyle from './components/moduled-styling/ModuledStyle'
import StyledComponent1 from './components/styled-components/styleComponent1'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/normalstyling',
      element:<NormalStyling/>
    },
    {
      path:'/moduledstyling',
      element:<ModuledStyle/>
    }
    ,
    {
      path:'/styledcss',
      element:<StyledComponent1/>
    }

  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
