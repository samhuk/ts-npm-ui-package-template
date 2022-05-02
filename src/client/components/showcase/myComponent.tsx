import React from 'react'
import { DataTable, DataTableOptions } from '../../../component'
import DataTableWithReact from '../common/generic/myComponent'
import ItemBase from './itemBase'

const COMPONENT_OPTIONS: DataTableOptions = {
  initialText: 'Hello, World!'
}

const Operations = (props: { component: DataTable }) => (
  <>
    <button
      type="button"
      className="button--white"
      onClick={() => props.component.updateText('New text!')}
    >
      Update the text of the component
    </button>
  </>
)

export const render = () => (
  <ItemBase component={DataTableWithReact} componentOptions={COMPONENT_OPTIONS} operationsComponent={Operations} />
)

export default render
