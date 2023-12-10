import Link from "next/link";
import classes from './MainNavigation.module.css';


function MainNavigation(){
     return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="logo.svg"/>
            </div>
            
            <nav className="classes.links">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href='#'>Places</Link>
                    </li>
                    <li>
                        <Link href='#'>Gallery</Link>
                    </li>
                    
                    <li>
                        <Link href='#'>About Us</Link>
                    </li>
                    
                    <li>
                        <Link href='#'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
     )
}
export default MainNavigation;