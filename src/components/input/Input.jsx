

import "./İnput.css"

const Input = ({type ,placeHolder}) => {
  return (
    <>
     <input className="input" type={type} placeHolder={placeHolder} />
      
    </>
  )
}

export default Input