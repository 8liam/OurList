function List() {
    return (
        <div className="my-2 flex space-x-2 flex-row">
            
            <button className="basis-1/2 rounded bg-[#1c1c24] text-center py-2 border-2 border-[#1c1c24] hover:border-[#ffffff] duration-150 ease-in-out">
                <p>Add to List</p>
            </button>
            <button className="basis-1/2 rounded bg-[#1c1c24] text-center py-2 border-2 border-[#1c1c24] hover:border-[#ffffff] duration-150 ease-in-out">
                <p>-</p>
            </button>
        </div>
    )
}

export default List;