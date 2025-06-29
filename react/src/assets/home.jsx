import { useEffect } from "react"


function Home() {
    useEffect(()=>{
        document.title = "Flipcart"
    }
)
return (
    <main>
       <div>
        <h3>Flipcart</h3><br/>
    <h4> Online Shopping</h4>
        </div>
        <div>
            <h5>Welcome</h5>
        </div>
    </main>
   


)

}

export default Home
