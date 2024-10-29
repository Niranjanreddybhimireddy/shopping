import { legacy_createStore as createStore } from "@reduxjs/toolkit";


const cart=[];

const cartReducer=(state=cart,action)=>{
    const product=action.payload;

    switch (action.type) {
        case "ADD":
            const exist=state.find((x)=> x.id===product.id)
            if(exist){
                return state.map((item)=>
                item.id==product.id?{...item,qty:item.qty+1}:item
                )
            }else{
                return [...state,{...product,qty:1}]
            }
            
        case "DEL":
            const exist1=state.find((x)=>x.id===product.id)
            if(exist1.qty==1){
                return state.filter((x)=>x.id!==exist1.id)
            }
            else{
                return state.map((item)=>
                item.id===product.id?{...item,qty:item.qty-1}:item
                )
            }
        default:
   

            return state
    }
}


 const store=createStore(cartReducer);
 export default store