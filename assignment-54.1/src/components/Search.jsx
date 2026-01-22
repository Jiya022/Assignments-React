const Search = () =>{
  return(
    <>
         <select className="border border-slate-300 rounded-sm text-sm px-3 py-2 bg-white">
        <option>Default sorting</option>
        <option>Price: low to high</option>
        <option>Price: high to low</option>
        </select>
        </>
  )
}
export default Search;