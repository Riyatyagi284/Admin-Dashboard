import React from 'react'

const MultiLoginPriviledges = ({ labelNames }) => {
    return (

        <div className="priviledges-wrapper">
            {
                labelNames.map((labelName) => (
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            {labelName}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}

export default MultiLoginPriviledges
