import React, { Component } from 'react'

export default class ListRow extends Component {
    cacQuyen=() =>{
        if(this.props.quyen==1){return "Admin";}
        else if(this.props.quyen==2) {return "Moderator";}
        else {return "Nomal User";}
    }


    //hàm lấy id của mẫu tin cần xóa
    deleteUser=(idUser) =>{
      // console.log('id của user là: '+ idUser);
      this.props.deleteClick(idUser);

    }

//hàm để sử dụng props từ cha truyền xuống
editClick=() =>{
  this.props.editFunClick();
  this.props.changeEditUserForm();
}


  render() {
    return (
        <tr>
        <td scope="row">{this.props.stt+1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.cacQuyen()}</td>
        <td>
          <div className="btn-group">
            <div onClick={() => this.editClick()} className="btn btn-warning sua"><i className="fa fa-pencil" aria-hidden="true" />Sửa</div>
            <div onClick={(idUser) =>this.deleteUser(this.props.id)} className="btn btn-danger xoa"><i className="fa fa-minus" aria-hidden="true" /> Xóa</div>
          </div>
        </td>
      </tr>
    )
  }
}
