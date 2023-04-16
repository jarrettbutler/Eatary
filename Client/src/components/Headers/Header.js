
import './Header.css'
import Navigation from  './Navigation.js'


const Header =()=>{
    return (
      
        <header className="header">
          <img src="src/img/logo.png" alt="Logo" className="header__logo" />
          <form className="search">
            <input
              type="text"
              className="search__field"
              placeholder="Search over 1,000,000 recipes..."
            />
            <button className="btn search__btn">
              <svg className="search__icon">
                <use href="src/img/icons.svg#icon-search"></use>
              </svg>
              <span>Search</span>
            </button>
          </form>
            <Navigation/>
         
        </header>
       


    )

} 

export default Header