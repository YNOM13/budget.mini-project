import PropTypes from "prop-types";
function Transaction({transaction:{value,date,comment='comment'}}) {
    return(
        <div className="flex justify-center">
            {value > 0
                ? <div className="basis-[500px] bg-green-300 text-black p-2 m-1 rounded flex items-center flex-wrap">
                    <span className="bg-white p-1 rounded m-2">{date}</span> get
                    <span className="bg-green-600 p-1 rounded m-2">{value}$,</span>
                    from <span className="bg-white p-1 rounded m-2">{comment}</span>
                  </div>
                : <div className="basis-[500px] bg-red-400 text-black p-2 m-1 rounded flex items-center flex-wrap">
                    <span className="bg-white p-1 rounded m-2">{date}</span> spend
                    <span className="bg-red-600 p-1 rounded m-2">{value}$,</span>
                    on <span className="bg-white p-1 rounded m-2">{comment}</span>
                  </div>
            }
        </div>

    )
}

Transaction.propTypes = {
    transaction:PropTypes.shape({
        label:PropTypes.string,
        value:PropTypes.string,
        date:PropTypes.string,
        comment:PropTypes.string
    })
}
Transaction.defaultProps = {
    transaction:{
        label:'',
        value:0,
        comment:"",
        date:new Date().toISOString().substring(0,10)
    }
}
export default Transaction