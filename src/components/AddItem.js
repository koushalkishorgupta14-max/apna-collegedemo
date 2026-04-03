import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);

    // state initialization
    this.state = {
      productname: "",
      productprice: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // send data to parent
    this.props.addItem({
      name: this.state.name,
      price: this.state.price
    });

    console.log("Item Added:", this.state);

    // reset fields
    this.setState({
      name: "",
      price: ""
    });
  };

  render() {
    return (
      <div className="container mt-4">
        <h3>Add Item</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={(e) =>
                this.setState({ name: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={this.state.price}
              onChange={(e) =>
                this.setState({ price: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn btn-primary col-4">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;