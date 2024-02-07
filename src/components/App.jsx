import React from "react"; 
import { Component, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
  };

  handleSearch = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}
