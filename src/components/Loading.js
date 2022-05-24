import React from 'react'

function Loading() {
  return (
    <div style={{textAlign: "center" , marginTop: "10%"}}>
        {/* <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div> */}
        <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
  )
}

export default Loading