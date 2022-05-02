import React from 'react'
import { Component, ComponentOptions } from '../../../component'
import ComponentWithReact from '../common/generic/component'
import ItemBase from './itemBase'

const COMPONENT_OPTIONS: ComponentOptions = {
  initialText: 'Hello, World!'
}

const Operations = (props: { component: Component }) => (
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
  <ItemBase component={ComponentWithReact} componentOptions={COMPONENT_OPTIONS} operationsComponent={Operations} />
)

export default render
