import Link from "next/link";
import classes from './MainNavigation.module.css';
import SearchBar from "./Header/SearchBar";

function MainNavigation(){
     return (
        <header className={classes.header}>
            <div className={classes.logo}>NepalWonders</div>
            <SearchBar/>
            <nav>
                <ul>
                    <li>
                        <Link href="/">All Places</Link>
                    </li>
                    <li>
                        <Link href='/new-place'>Add New Place</Link>
                    </li>
                    <li>
                        <Link href='#'>About Us</Link>
                    </li>
                    <li>
                        <Link href='#'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
     )
}
export default MainNavigation;