import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';

function Layout(props){
    return(
        <div>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}
export default Layout;
//hey its a commit from nabin
//nabin is gay