import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProd, deleteProd } from '../actions';
import {Link} from 'react-router-dom';

class ProdDetail extends Component{
  componentDidMount(){
    const {desc,datetime} = this.props.match.params;
    this.props.fetchProd(desc,datetime);
  }

  onDeleteClick(){
    const {id} = this.props.match.params;
    this.props.deletePost(id,() => {
      this.props.history.push("/");
    });
  }

  render(){
    const {prod} = this.props;
    console.log("This is ", prod)
    if(!prod){
      return <div>loading...</div>
    }
    return(
      <div>
      <Link to="/">Back to index</Link>
      <button
        className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}
      >
        Delete Post
      </button>
        <h3>{prod.id}</h3>
        <h6>Categories: {prod.datetime}</h6>
        <p>{prod.id}</p>
      </div>
    )
  }
}

function mapStateToProps({prods}, ownProps){
  return { prod: prods[ownProps.match.params.desc] };
}

export default connect(mapStateToProps, {fetchProd,deleteProd})(ProdDetail);