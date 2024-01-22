import React from 'react'

export default function AlertMsg(props) {
    // console.log(props)
  return (
   props.alert && <div className='container'>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show mt-3`} role="alert">
<strong>{props.alert.type}: </strong> {props.alert.msg}
</div>
</div>
  )
}
