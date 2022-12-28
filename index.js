const Welcome =(props)=>{
    const {name,message} = props
    
    return (
        <h1>{message}, {name}</h1>
    )

}
   
const Greeting =()=>(
    <div>
        <Welcome name="Salman" message="How u doing"/>
        <Welcome name="Sandhya" message="How u are u"/>
    </div>
    
)


ReactDOM.render(<Greeting/>,document.getElementById("root"))