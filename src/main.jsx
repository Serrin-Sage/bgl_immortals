import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userSlice from './features/user'
import linkSlice from './features/linkType'
import userTypeSlice from './features/userType'
import statusSlice from './features/loginStatus'

import App from './App'
import './index.css'
import './stylesheets/landingpage.css'
import './stylesheets/header.css'
import './stylesheets/mainpage.css'
import './stylesheets/meritpage.css'
import './stylesheets/immortalpage.css'
import './stylesheets/usercheckpage.css'
import './stylesheets/instructorpage.css'
import './stylesheets/signinuppage.css'

const store = configureStore({
  reducer: {
    user: userSlice,
    link: linkSlice,
    usertype: userTypeSlice,
    status: statusSlice,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
)
