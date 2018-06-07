import React, { Component } from 'react';

class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={this.props.name}/>
        <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={this.props.price}/>
        <button>Save</button>
      </form>
    );
  }
}

export default EditProduct;
