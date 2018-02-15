import React , { Component }from "react";
import { mapValues } from "lodash";
import { v4 } from "uuid";
import { connect } from "react-redux";
import * as actions from "../../actions";

  class FilterOptions extends Component {
constructor(props) {
  super(props);
  this.state = {
    selectedCategory:"",
  };
}
onFilter = e => {
  this.props.setFilter(e ? e.target.id:"ALL");
  this.setState({selectedCategory: this.props.filters})
};

 displayCategory= (tags, onClick ) => {
let tagNames = Object.values(mapValues(tags, o => o.name)).sort();

tagNames.unshift("ALL");

return tagNames.map(tag => (

    <button onClick={onClick} id={tag} className={this.state.selectedCategory===tag ? "filter-selected"  : "filter-tag"} >
      {tag}
    </button>

));
};


render(){

  console.log("filter", this.state.selectedCategory);
  const { tags,onClick }=this.props;
  // const tags =this.props.tags
return(
  <li key={v4()}>
    {this.displayCategory(tags, this.onFilter())}

  </li>
)

}
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(null, actions)(FilterOptions);
