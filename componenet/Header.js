import Link from "next/link"
import Head from "next/head";

 function Header() {
    return (
     <>
      <div className="header">
      <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/posts">posts</a>
        <a href="/form">contact</a>
      </div>
     </>
    )
  }
   export default Header