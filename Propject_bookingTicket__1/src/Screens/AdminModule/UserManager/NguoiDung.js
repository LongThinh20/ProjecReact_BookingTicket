import React, { Component } from "react";

export default class NguoiDung extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label>Ma NV</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Ten NV</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" />
        </div>
      </div>
    );
  }
}
