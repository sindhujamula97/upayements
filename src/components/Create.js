import React from "react";
import "./style.css";

function Create() {
  return (
    <div className="create-product-container">
      <div className="container-fluid">
          <div className="Title">
            <h3>Title</h3>
          </div>
        <form className="form">
          <div className="form-group">
            <input
              type="productName"
              className="form-control"
              id="productName"
              placeholder="Product name"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="Description"
              placeholder="Description"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="imageurl"
              className="form-control"
              id="imageurl"
              placeholder="Image Url"
            />
          </div>
          <div className="form-group">
            <select
              id="category"
              className="form-control"
              placeholder="Category"
            >
              {/* <option selected></option>
              <option>...</option> */}
            </select>
          </div>
          <div className="form-group">
            <input
              type="price"
              className="form-control"
              id="price"
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-light form-control">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
