import React, { Component } from "react";

export default class ListRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { id: "" };
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
  render() {
    return (
      <tr>
        <td scope="row">{this.props.stt + 1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.cacQuyen()}</td>
        <td>
          <div className="btn-group">
            <div
              className="btn btn-warning sua"
              onClick={() => this.props.getIDSua(this.props.id)}
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
      </tr>
    );
  }
}
