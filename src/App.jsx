import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page from './components/Page.jsx'
import Work from './components/Work.jsx'
import Arts from './components/Arts.jsx'
import Radio from './components/Radio.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/work" element={<Work />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/radio" element={<Page />} />
        <Route path="/blogs" element={<Page />} />
        <Route path="/@nuzzio" element={<Page />} />
      </Routes>
      <Radio />
    </div>
  )
}

export default App