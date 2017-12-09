import * as React from 'react'

export interface FooProps {
  word: string
}

export class Foo extends React.Component<FooProps, {}> {
  render () {
    return (
      <span>{this.props.word}</span>
    )
  }
}

export class App extends React.Component {
  render () {
    return (
      <h1>Hello <Foo word='world' /></h1>
    )
  }
}
