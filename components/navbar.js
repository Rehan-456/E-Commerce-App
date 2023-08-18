import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter()
    function isActive(route){
      if (route == router.pathname){
        return "active"
      } 
      else ""

    }
    return(
        <nav>
        <div class="nav-wrapper #1565c0 blue darken-3">
          <Link class="brand-logo" href="/">Maxazon</Link>
          <ul id="nav-mobile" class="right">
            <li className={isActive("/login")}><Link href="/login">Login</Link></li>
            <li className={isActive("/signup")}><Link href="/signup">Signup</Link></li>
            <li className={isActive("/create")}><Link href="/create">Create</Link></li>
          
            
          </ul> 
        </div>
      </nav>
    )
}