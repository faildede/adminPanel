

const test = () => {
   
   const somedate = async() =>{
    const response = await fetch("http://localhost:5094/Device",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
    });
    const data = await response.json();
    console.log(data);
   }
 somedate();
    return(
        <div>
            
        </div>
    )
}
export default test;