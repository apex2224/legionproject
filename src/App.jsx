import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page from './components/Page.jsx'
import Work from './components/Work.jsx'
import Arts from './components/Arts.jsx'
import Skills from './components/Skills.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/work" element={<Work />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Page />} />
        <Route path="/@nuzzio" element={<Page />} />
      </Routes>
    </div>
  )
}

export default App