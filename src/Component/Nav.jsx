import { defaults } from "autoprefixer";
import react from "react";

function Nav() {

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div>
            <h1 className="text-3xl font-bold">Recipe Calories</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-lg">
            <li><a>Home</a></li>
            <li>
              <a>Recipes</a>
            </li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <div className="navbar-end ">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow rounded-lg" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>

          <button className="btn btn-circle btn-outline ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>

    </>
  )


}
export default Nav