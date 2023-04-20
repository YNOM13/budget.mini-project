import Transaction from "../Transaction/Transaction";
import PropTypes from "prop-types";
function Transactions({transactions = []}) {
    return(
        <>
            {transactions.map(i=><Transaction transaction={i} key={i.id}/>)}
        </>
    )
}
Transactions.propTypes = {
    transactions: PropTypes.array
}
Transactions.defaultProps = {
    transactions:[]
}
export default  Transactions