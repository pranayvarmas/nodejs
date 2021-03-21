import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimilarCity from './SimilarCity';
import SimilarState from './SimilarState';
import SimilarCountry from './SimilarCountry';
import SimilarYear from './SimilarYear';
import SimilarCourses from './SimilarCourses';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/
//var myvar;
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    //<App />
    //localStorage.setItem("cid", this.state.name);
    global.myvar=this.state.name;
    ReactDOM.render(
  <React.StrictMode>

    <MyForm /><App /><SimilarCity /><SimilarState /><SimilarCountry /><SimilarYear /><SimilarCourses />
  </React.StrictMode>,
  document.getElementById('root'));
    ///alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.name}</h1>
      <p>College id:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
//export default myvar;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
