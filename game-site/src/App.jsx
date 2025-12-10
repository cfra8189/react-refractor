import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <div id="homePage">
    <main>
        <h1>Welcome to my website</h1>
    </main>

    {/* Navigation Bar */}
    <footer className="footerNav">
        <nav>
            <ul id="homeNav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </nav>
    </footer>
    </div>
  )
}

export default App
