import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Landing from './Landing/Landing'
import Board from './pages/Board/Board'

const ROUTES = [
  {  path: '/', key: 'ROOT', exact: true, component: <Landing />},
  {  path: '/board/:boardId', key: 'BOARD_PAGE', exact: true, component: <Board />}
]

export default ROUTES


export function RenderRoutes({routes}) {
  return (
    <Routes>
      {routes.map(route => 
         <Route 
           key={route.key}
           path={route.path}
           exact={route.exact}
           element={route.component}
          />
      )}
      <Route element={<h1>{'Not found!'}</h1>} />
    </Routes>
  )
}