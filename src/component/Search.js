import React, { Component } from "react";

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { nd: "" };
  }

  //lấy giá trị từ form target value
  isChange = (event) => {
    // console.log(event.target.value);
    this.setState({ nd: event.target.value });
    this.props.dlSearch(event.target.value);
  };
  render() {
    return (
      <div class="col-12">
        <div class="row">
          <div class="col-9">
            <div className="form-search">
              <div className="form-group">
                <div className="btn-group">
                  <input
                    onChange={(event) => this.isChange(event)}
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa"
                    style={{ width: "800px" }}
                  />
                  <div
                    onClick={() => this.props.infoSearch(this.state.nd)}
                    className="btn btn-info"
                  >
                    Tìm
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            {this.props.trangThai === true ? (
              <div
                className="btn btn-outline-info btn-block"
                onClick={() => this.props.ketnoi()}
              >
                Thêm mới
              </div>
            ) : (
              <div
                className="btn btn-outline-secondary btn-block"
                onClick={() => this.props.ketnoi()}
              >
                Đóng
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
