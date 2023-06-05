import './App.css';import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Plan from './Plan';


export default class App extends Component {
  state ={
    items:[],
    text:""
  }
  handleChange = e => {
    this.setState({text:e.target.value})
  };
  handleAdd = e => {
    if(this.state.text !== ""){
      const items = [...this.state.items,this.state.text];
      this.setState({items:items,text:""});
    }
  }
  handleDelete = id =>{
    const Olditems = [...this.state.items]
    const items = Olditems.filter((element,i)=> {
      return i !== id
    })
    this.setState({items:items});

  }

  render() {
    return (
     <div className="container-fluid my-5 ">
      <div className='row'>
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className='text-center'>Today's Plan</h2>
          <div className="row">
            <div className="col-9 p-3">
              <input type="text" className='form-control' placeholder='Write Plan Here' onChange={this.handleChange} value={this.state.text} />
            </div>
            <div className="col-2 p-3">
              <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>Add</button>
            </div>
            <div className="container-fluid">
              <ul className='list-unstyled row m-5'>

                {
                  this.state.items.map((value,i) => {
                    return <Plan key={i} value={value} id={i} sendData={this.handleDelete}/> 
                  })
                }
      
              </ul>
            </div>
          </div>
        </div>        
      </div>
     </div>
    )
  }
}


