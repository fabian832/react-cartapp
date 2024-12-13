import React from 'react'

const Navbar = () => {
  return (
    <header className="App-header">
        <h1>CART APP</h1>
        <div className="header-right">
        <a href='/'>Home</a>
        <a href='/cart'>Cart</a>
        <a href='/transaction'>Transaction</a>
        </div>
    </header>
  )
}

export default Navbar