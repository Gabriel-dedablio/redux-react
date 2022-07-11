import React from "react";
import FamiliaMembro from "./FamiliaMembro";
export default function Familia(props) {

  return(
    <div>
      <FamiliaMembro nome="Pedro" {...props}></FamiliaMembro>
      <FamiliaMembro nome="Ana" {...props}></FamiliaMembro>
      <FamiliaMembro nome="Gustavo" {...props}></FamiliaMembro>
    </div>
  )
}