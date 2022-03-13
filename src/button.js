import React from "react"
export default function Button(props){
return <button type="button" className="btn btn-primary  col me-2 mb-2" onClick={ props.previousFunction } >{props}</button>
}
