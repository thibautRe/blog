import React from 'react'

class Age extends React.Component {
  constructor(props) {
    super(props)
    this.birthDate = new Date('1991-09-21T19:30')
    this.state = { age: this.getAge() }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({age: this.getAge()})
    }, 10)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getAge() {
    return Math.round((Date.now() - this.birthDate)/(365 * 24 * 60 * 60 * 1000) * Math.pow(10, 8)) / Math.pow(10, 8)
  }

  render() {
    return <span style={{ fontFamily: "monospace"}}>{this.state.age}</span>
  }
}

export default Age
