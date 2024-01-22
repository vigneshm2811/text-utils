import React from 'react'

export default function Alert(props) {
  return (
      <div className='container'>
        console.log(props)
          <div className="alert alert-warning alert-dismissible fade show mt-3" role="alert">
  <strong>{props.alert.typ}</strong> {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
