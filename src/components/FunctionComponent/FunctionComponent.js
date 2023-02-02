import { useState } from "react"

const FunctionComponent = ()=> {
    const [name, setName] = useState("belen")
    return (
        <div>
            El nombre es {name}
            <button onClick={()=> setName("alejandro")}>CambiaNombre</button>
        </div>
       
    )
}

export default FunctionComponent