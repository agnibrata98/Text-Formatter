import React from 'react'

function Contact() {
  return (
    <div>
        <>
        <p>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                Contact Details
            </button>
        </p>
        <div style={{minHeight: '120px' }}>
            <div className="collapse width" id="collapseWidthExample">
                <div className="card card-body" style={{width: '320px',height: '100%' }}>
                    <strong>Feel Free To Call Us:<a href="tel:6031112298">6031112298</a></strong>
                    <br />
                    <br />
                    <strong>Send A Mail:<a href="mailto:admin@gmail.com">admin@gmail.com</a></strong>
                    <br />
                    <br />
                    <strong>Visit Us:<a href="#">www.abc.com</a></strong>
                </div>
            </div>
        </div>
        </>
    </div>
  )
}

export default Contact