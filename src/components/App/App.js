import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Statistics from "../Statistics/Statistics";
import React from "react";
import {open} from "../../utils/indexdb";
import CurrencyContext from "../../providers/contex";

//2.18hour
class App extends React.Component{
     constructor(props) {
         super(props);
         this.state = {
             loading:true
         }

     }
    componentDidMount() {
        open().then(()=>{
            this.setState({
                loading:false
            })
        }).catch(e=>{
            console.log(e)
        })
    }

     render() {
         if(this.state.loading){
             return (<div className="flex justify-center">
                    <span className="bg-green-400 p-4 m-4 rounded text-white
                    basis-[100%] text-center text-[18px] uppercase font-bold ">Loading</span>
             </div>)
         }
         return(
           <CurrencyContext.Provider value={{currency:'UAH'}}>
             <BrowserRouter>
                 <Header/>
                 <Routes>
                     <Route path="/*" element={<Home/>}/>
                     <Route path="/about" element={<About/>}/>
                     <Route path="/statistics" element={<Statistics/>}/>
                 </Routes>
             </BrowserRouter>
           </CurrencyContext.Provider>
         )
     }


}
export default App