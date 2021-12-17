import React from "react";
import Search from "./components/Search";
// import Seconds from "./components/Seconds"
// import Counter from "./components/Counter";
// import Form from "./components/Form";
// import Header from "./components/Header";
// import Counter0 from "./components/Counter0";
// import Button from "./components/Button";
class App extends React.Component {
    render() {
        
        return (
            <div className="ui grid container center aligned">
                <div className="column eight wide">
                    <Search />    
                </div>
            </div>
        )

        // return(
        //     <div> 
        //         <Form />


        //         {/* <Header text = "You spent " />
        //         <Counter />
        //         <Button label = "Hey!"/> */}


        //     </div>
        // )
    }
}

export default App;