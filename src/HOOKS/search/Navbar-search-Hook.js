import { useState } from "react"
import ViewSearchProductsHook from "../productHooks/viewSearchHook"
import { useEffect } from "react"

const NavbarSearchHook =()=>{

    const [getProduct]= ViewSearchProductsHook()

    const [searchWord , setSearchWord] =useState("")

const  onChangeSearch =(e)=>{
    console.log(e.target.value)
    setSearchWord(e.target.value)
   
}


useEffect(()=>{
 setTimeout(()=>{
    getProduct()

 },1000)
},[searchWord])

return [searchWord , onChangeSearch] 
}
export default NavbarSearchHook