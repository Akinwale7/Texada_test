import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchProds} from '../actions';
import SideNav from './side_nav';

class ProdIndex extends Component{
  
  componentDidMount(){
    this.props.fetchProds()
  }
  
  renderProds(){
  return _.map(this.props.prods, (prod) => {
    return(
      <tr  key={prod.id}>
        <td>
          <Link to={`products/${prod.description}/${prod.datetime}/`}>
            {prod.id}
          </Link>
        </td>
        
        <td>
          <Link to={`products/${prod.description}/${prod.datetime}/`}>
            {prod.description}
          </Link>
        </td>
        
        <td>
        <Link to={`products/${prod.description}/${prod.datetime}/`}>
            {prod.datetime}
          </Link>
        </td>
        
        <td>
        <Link to={`products/${prod.description}/${prod.datetime}/`}>
            {prod.longitude}
          </Link>
        </td>
        
        <td>
        <Link to={`products/${prod.description}/${prod.datetime}/`}>
            {prod.latitude}
          </Link>
        </td>
        
        <td>
          <Link to={`products/${prod.description}/${prod.datetime}/`}>
            {prod.elevation}
          </Link>
        </td>
      </tr>
    );
  });
}
  
  render(){
    return(
    <div>
      <div className="container-1">
       
           <SideNav />
         
          <div className="main">
             <h1>Products</h1>
             
             <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DESCRIPTION</th>
                  <th>DATETIME</th>
                  <th>LONGITUDE</th>
                  <th>LATITUDE</th>
                  <th>ELEVATION</th>
                </tr>
              </thead>
              <tbody>
                {this.renderProds()}
              </tbody>
            </table>
              
          </div>
    
      </div>
      
    </div>
      
    );
  }
}


function mapStateToProps(state){
  return { prods: state.prods };
}

export default connect(mapStateToProps, {fetchProds})(ProdIndex);