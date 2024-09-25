import SideNav from "../ui/darkest-dungeon/sidenav";

export default function Layout(
    { children } : { children : React.ReactNode}
){
    return(
        <div>
            <SideNav />
            {children}
        </div>
    )
}