import React from 'react'

export default function FormInput(props) {
    const {onChange, id, errorMessage, ...inputProps} = props;
  return (
    <input {...inputProps} 
     onChange={onChange}  className="mt-2">
    </input>
  )
}
