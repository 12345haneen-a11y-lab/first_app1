import Link from "next/link"
import Header from "./Header"
function Layout(props) {
    return (
     <>
        <Header/>

        {props.children}

        <footer>
        </footer>
     </>
    )
  }
   export default Layout