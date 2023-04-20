const Balance = ({balance}) => <div className="flex text-white">
    {balance<0?
        <div className="bg-black rounded  py-[5px] px-[10px] ">{balance}</div>
        :<div className="bg-black rounded py-[5px] px-[10px] ">{balance}</div>}
</div>

export default Balance