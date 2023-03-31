import Script from 'next/script'
import Button from 'react-bootstrap/Button';
export default function Home() {
  return (
   
   <>
    <div className='div1'>
     <h1>get started with our posts</h1>
     <Button variant="danger"><a href='/posts'>Get started</a></Button>
   </div>
   <Script src="https://example.com/script.js" />
   </>
  )
}