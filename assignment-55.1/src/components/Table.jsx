import TableRow from './TableRow.jsx'
import { useState } from 'react';


const Table = () =>{
const [num, setNum] = useState(0);
function nextTable(){
  console.log("Next Table Called");
  setNum(num+1);
}




  return(
<div>
  <button onClick={nextTable}
    className="rounded-md px-4 py-1 bg-indigo-700 text-white">Next
  </button>
  <TableRow number={num} index={1} />
    <TableRow number={num} index={2} />
      <TableRow number={num} index={3} />
        <TableRow number={num} index={4} />
</div>
  )
}

export default Table;