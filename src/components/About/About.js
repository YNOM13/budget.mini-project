import {memo, useContext} from "react";
import CurrencyContext from "../../providers/contex";

const About = memo(() => {
  const currency = useContext(CurrencyContext)
    return(
        <div>
          {JSON.stringify(currency,null,2)}
        </div>
    )
})

export default About