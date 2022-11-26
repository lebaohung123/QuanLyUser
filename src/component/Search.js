import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={nd:'', userObj:{}}
    }
    
    //lấy giá trị từ form target value
    isChange=(event) =>{
        // console.log(event.target.value);
        this.setState({nd:event.target.value})
    }

    //hàm sử dụng biến trạng thái edit để ẩn hiện form sửa
    isShowEdit=() =>{
     if(this.props.editUserStatus===true){
        return <EditUser 
        changeEditUserForm={() =>this.props.changeEditUserForm()}
        userEditObject={this.props.userEditObject}
        getEditInfo={(info) =>this.getEditInfo(info)}
        />
    }
  }
//hàm lấy dữ liệu
  getEditInfo=(info) =>{
    this.setState({userObj:info})
    this.props.getEditInfoApp(info);
  }

  hienThi = () => {
    if(this.props.hThi === true){
        return <div onClick={() =>this.props.ketnoi()} className="btn btn-outline-info btn-block">Thêm mới</div>
    } else{
        return <div onClick={() =>this.props.ketnoi()} className="btn btn-outline-secondary btn-block">Đóng</div>
    }
  }
  render() {
    return (
        <div className='col-12'>
            <div className='row'>
                {/* <EditUser/> */}
                {this.isShowEdit()}
            </div>
    <div class="col-12">
            <div class="row">
                <div class="col-9">
                    <div className="form-search">
                        <div className="form-group">
                            <div className="btn-group">
                                <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khóa" style={{width: '800px'}} />
                                <div onClick={(dl) =>this.props.infoSearch(this.state.nd)} className="btn btn-info">Tìm</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    
                    {this.hienThi()}
                </div>
            </div>
        </div>
        </div>
    )
  }
}
