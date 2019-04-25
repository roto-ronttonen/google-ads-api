import PropTypes from 'prop-types'
import React from 'react'
import sortBy from 'lodash.sortby'

import Attribute from './attribute'

const AttributesTable = ({ data, title, section }) => {
    const getRows = rows => {
        return sortBy(Object.keys(rows), key => {
            return key + rows[key]._oneof
        }).map(key => {
            const details = rows[key]
            if (typeof details !== 'object') {
                return null
            }

            return <Attribute data={details} section={section} name={key} enums={details._enums} />
        })
    }

    return (
        <table className="f5 w-100 ba b--white mw6" style={{ width: '70%' }}>
            <thead>
                <tr className="fw6 tl pa3">
                    <th>{title || 'Attributes'}</th>
                </tr>
            </thead>
            <tbody>{getRows(data)}</tbody>
        </table>
    )
}

AttributesTable.propTypes = {
    data: PropTypes.object.isRequired,
    section: PropTypes.string,
    title: PropTypes.string,
}

export default AttributesTable
