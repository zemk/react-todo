import React, {Component} from "react"
import './search-panel.css'
export default class SearchPanel extends Component  {
  constructor(props) {
    super(props)
    this.state= {
      term: ''
    }
    this.onUdateSearch =this.onUdateSearch.bind(this)
  }
  onUdateSearch(e){
    const term = e.target.value;
    // {term:term}
    this.setState({term});
    this.props.onUdateSearch(term);
  }
  render(){
    return (
    <input 
      className='form-control search-input'
      type='text'
      placeholder="Поиск по записям"
      onChange={this.onUdateSearch}
    />
  )
  }
  
}