import React from 'react'

class Mail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mail: 'mailto:spammy-spams@thibaut.re' }
  }

  componentDidMount() {
    this.setState({ mail: 'mailto:hello@thibaut.re' })
  }

  render() {
    return <a href={this.state.mail}>{this.props.children}</a>
  }
}

export default Mail
