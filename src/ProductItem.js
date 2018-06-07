import React, { Component } from 'react';
import EditProduct from './EditProduct';

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, name } = this.props;

    onDelete(name);
  }

  onEdit() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(...params) {
    this.setState({ isEdit: false });
    this.props.onEditSubmit(...params);
  }

  render() {
    const { name, price } = this.props;

    return (
      <div>
        {
          this.state.isEdit
          ? (
            <EditProduct
              name={name}
              price={price}
              onEditSubmit={this.onEditSubmit}
            />
          )
          : (
            <div>
              <span>{name}</span>
              {` | `}
              <span>{price}</span>
              {` | `}
              <button onClick={this.onEdit}>Edit</button>
              {` | `}
              <button onClick={this.onDelete}>Delete</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductItem;
