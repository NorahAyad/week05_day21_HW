import {  useHistory } from "react-router-dom";
function Home(){
    const history = useHistory();
    const Click=()=>{
      
       history.goBack();
       

    }
    return(
        <div>
            <h1> Welcome to the home page </h1>
            <button  className="click" onClick={Click}> Go Back  </button>
           
        </div>
    )
}
export default Home;