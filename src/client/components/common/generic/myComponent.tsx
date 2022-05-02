import React from 'react'
import { DataTable, DataTableOptions, createDataTable } from '../../../../component'
import Com from './base'

/**
 * Thin wrapper around the DataTable component
 */
export const render = (props: { options: DataTableOptions, setComponent?: (component: DataTable) => void }) => (
  <Com
    componentOptions={props.options}
    createComponent={createDataTable}
    setComponent={props.setComponent}
    name="component"
  />
)

export default render
