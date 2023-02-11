import React from 'react';

export default function Container(){
    return (
       <div class="col"  style={{marginBottom: "0rem"}}>
            <div className="card rounded-0 p-0 border-4 flex-fill flex-column h-100">
                <div className="card-header px-3 pt-3" style={{marginTop: "0rem"}}>
                    <h5 className="mt-2">Officers</h5>
                </div>
                <div className="card-body mb-auto gap-3 overflow-auto d-flex align-content-start flex-wrap ag-theme-alpine-dark">
                <div>item</div><div>item</div><div>item</div><div>item</div><div>item</div><div>item</div>
                <div>item</div><div>item</div><div>item</div><div>item</div><div>item</div><div>item</div>
                <div>item</div><div>item</div><div>item</div><div>item</div><div>item</div><div>item</div>
                <div>item</div><div>item</div><div>item</div><div>item</div><div>item</div><div>item</div>
                <div>item</div><div>item</div><div>item</div><div>item</div><div>item</div><div>item</div>
                </div>
            </div>
            </div>
       
    )
}