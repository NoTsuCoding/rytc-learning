import React from 'react'
import { Link } from 'react-router-dom'

function TestNav() {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/contract">contract</Link>
    </>
  )
}

export default TestNav