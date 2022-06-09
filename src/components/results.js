import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsPosts from "./resultsPosts";

class Results extends Component {
  handleSearchBarSubmit(query) {
    console.log(query);
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
        <ResultsPosts />
      </div>
    );
  }
}
export default Results;
