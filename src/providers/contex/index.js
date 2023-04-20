import {createContext} from "react";


const currency = {
  value:'UAH',
  title:'Гривня',
}


const CurrencyContext = createContext(currency)

export default CurrencyContext