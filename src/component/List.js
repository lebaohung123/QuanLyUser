import React, { Component } from 'react'
import ListRow from './ListRow'

export default class List extends Component {

  //hàm lấy id từ listRow gửi lên
  deleteClick=(idUser) =>{
    // console.log(idUser);
    this.props.deleteUserInfo(idUser);
    
  }

  render() {
    // console.log(this.props.dataUser);
    return (
        <div className="col">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Họ Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {
              //nhiều dòng thì dùng ngoặc nhọn và return còn 1 thì dùng ngoặc tròn
              this.props.dataUser.map((value,key) =>(
                <ListRow 
                stt={key}
                id={value.id}
                userName={value.name} 
                tel={value.tel}
                quyen={value.permission}
                deleteClick={(idUser) =>this.deleteClick(idUser)}
                //trong hàm map nên lấy giá trị value
                editFunClick={(abc) =>this.props.edit(value)}
                changeEditUserForm={() =>this.props.changeEditUserForm()}
                />
              ))
            }
          </tbody>
        </table>
      </div>
      
    )
  }
}
