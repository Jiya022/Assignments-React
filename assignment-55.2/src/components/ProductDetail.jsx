import { useState } from "react";


const ProductDetail =({img,title, price})=>{

const[count,setCount] = useState(0);
function itemAdd(){
//console.log("Button clicked");
setCount(count+1);
};

return(
  <>
<div className="bg-gray-300 min-h-screen flex justify-center items-center">
        <div className="flex bg-white max-w-7xl px-10 py-10">
             <img className="w-125" src={img} alt="mug-image" />
            <div className="flex flex-col gap-4 ml-7.5">
                <h1 className="text-4xl text-gray-600">{title}</h1>
                <p className="text-xl font-bold text-gray-600">{price}</p>
                <p className="text-gray-600 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, quaerat temporibus! Iure consequuntur repellendus quis cumque distinctio ad consequatur non. Deserunt praesentium sequi, enim laboriosam dolor suscipit dignissimos aliquid mollitia.</p>
                <div>
                <button className="border-2 text-gray-500 pl-3 pr-5 py-1">{count}</button>
                <button className="ml-4 bg-red-500 text-[16px] text-white font-bold px-6 py-2 rounded-lg" onClick={itemAdd}>ADD TO CART</button>
                </div>
                
            </div>
        </div>
    </div>

  </>
)
}
export default ProductDetail;