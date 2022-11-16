import React, { Component } from 'react'
import ListRow from './ListRow'

export default class List extends Component {
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
                userName={value.name} 
                tel={value.tel}
                quyen={value.permission}
                id={value.id}
                getID={(abc) => this.props.xoaID(abc)}
                />
              ))
            }
          </tbody>
        </table>
      </div>
      
    )
  }
}
