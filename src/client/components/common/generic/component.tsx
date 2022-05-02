import React from 'react'
import { Component, ComponentOptions, createComponent } from '../../../../component'
import Com from './base'

export const render = (props: { options: ComponentOptions, setComponent?: (component: Component) => void }) => (
  <Com
    componentOptions={props.options}
    createComponent={createComponent}
    setComponent={props.setComponent}
    name="component"
  />
)

export default render
