import SideNav from "@/app/components/darkest-dungeon/sidenav";

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