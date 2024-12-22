import './Header.css';

function Header() {
    return (
        <header className='header-title'>

             <div>
                <img src="images/flag.png" alt='Brazil Flag'/>
                <h1 className='title'>My Pronunciation BR</h1>
             </div>   
            <a className='link-about' href='https://github.com/pablohenriques/my-pronunciation-app' target='_black'>
                https://github.com/pablohenriques
            </a>
        </header>
    );
}

export default Header;
