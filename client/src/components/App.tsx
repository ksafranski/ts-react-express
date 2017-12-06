import * as React from 'react'

export interface AppProps {
  word: string
}

export class App extends React.Component<AppProps, {}> {
  render () {
    return (
      <h1>Hello {this.props.word}!</h1>
    )
  }
}
