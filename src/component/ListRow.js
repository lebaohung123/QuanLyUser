import React, { Component } from "react";

export default class ListRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: "",
      trangThai: true,
      hoten: this.props.userName,
      dienthoai: this.props.tel,
      quyen: this.props.quyen,
    };
  }

  cacQuyen = () => {
    if (this.props.quyen == 1) {
      return "Admin";
    } else if (this.props.quyen == 2) {
      return "User";
    } else if (this.props.quyen == 3) {
      return "Moderator";
    } else {
      return "Nomal User";
    }
  };
  deleteUser = (idUser) => {
    // console.log("id User la: " + idUser);
    this.props.deleteClick(idUser);
  };
  run = () => {
    this.props.updateClick(
      this.props.id,
      this.state.hoten,
      this.state.dienthoai,
      this.state.quyen
    );
    this.doiTrangThai();
  };
  doiTrangThai = () => {
    this.setState({ trangThai: !this.state.trangThai });
  };
  isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    // console.log(value);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <tr>
        {this.state.trangThai === true ? (
          <>
            <td scope="row">{this.props.stt + 1}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.tel}</td>
            <td>{this.cacQuyen()}</td>
            <td>
              <div className="btn-group">
                <div
                  className="btn btn-warning sua"
                  onClick={() => this.doiTrangThai()}
                >
                  <i className="fa fa-pencil" aria-hidden="true" />
                  Sửa
                </div>
                <div
                  className="btn btn-danger xoa"
                  // onClick={() => this.props.getID(this.props.id)}
                  onClick={(idUser) => this.deleteUser(this.props.id)}
                >
                  <i className="fa fa-minus" aria-hidden="true" />
                  Xóa
                </div>
              </div>
            </td>
          </>
        ) : (
          <>
            <td scope="row">{this.props.stt + 1}</td>
            <td>
              <input
                value={this.state.hoten}
                onChange={(e) => this.isChange(e)}
                name="hoten"
              />
            </td>
            <td>
              <input
                value={this.state.dienthoai}
                onChange={(e) => this.isChange(e)}
                name="dienthoai"
              />
            </td>
            <td>
              <input
                value={this.state.quyen}
                onChange={(e) => this.isChange(e)}
                name="quyen"
              />
            </td>
            <td>
              <div className="btn-group">
                <div
                  className="btn btn-primary sua"
                  onClick={() => {
                    this.run();
                  }}
                >
                  <i className="fa fa-save" aria-hidden="true" />
                  <> </>Lưu
                </div>
              </div>
            </td>
          </>
        )}
      </tr>
    );
  }
}
