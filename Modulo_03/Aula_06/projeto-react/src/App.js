import React from 'react';
import './App.css';
import Text from './components/Text/Text';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  contador() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.contador()
    }, 1000)
  }

  render() {
    return (
      <>
        <p>{this.state.seconds}</p>
        <Text text="Bem vindo a blue!"/>
        <Text text="Ivo"/>
        <Text text="Leo"/>
        <Text text="Teste componente"/>
        <Text text="infomacao"/>
        <Text text="exemplo"/>
      </>
    )
  };
};