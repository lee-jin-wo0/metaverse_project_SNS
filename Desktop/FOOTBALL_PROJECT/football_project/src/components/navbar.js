import React from 'react'

export default function NavBar() {
  return (
    <>
        <div className="navbar bg-base-100" data-theme="dark">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Results</a></li>
                <li tabIndex={0}><a className='justify-between'>Fixtures</a></li>
                <li><a>Odds</a></li>
              </ul>
            </div>
            <a href='/' className="btn btn-ghost text-xl">LiveScores</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Results</a></li>
              <li tabIndex={0}><a>Fixtures</a></li>
              <li><a>Odds</a></li>
            </ul>
          </div>
        </div>
    </>
  )
}
