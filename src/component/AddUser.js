import React, { Component } from 'react'

export default class AddUser extends Component {
    //conc
    constructor(props, context) {
        super(props, context);
        this.state={trangthainut: true,
        id:'',
        name:'',
        tel:'',
        permission:''
        }
    }
    hienForm=() =>{
        if(this.state.trangthainut===false)
        return(
            <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">Thêm thành viên</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="name" placeholder="Tên user" />
            </div>
            <div className="form-group">
              <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="tel" placeholder="Số điện thoại" />
            </div>
            <div className="form-group">
              <select onChange={(event) =>this.isChange(event)} className="form-control" name="permission">
                <option selected>Choose...</option>
                <option value={1}>Admin</option>
                <option value={2}>User</option>
                <option value={3}>Modrater</option>
              </select>
            </div>
            <div className="form-group">
              <div className="btn btn-block btn-primary">Thêm</div>
            </div>
          </div>
        </div>
        )
        
    }
//hàm lấy thông tin
    isChange=(event) =>{
      const name=event.target.name;
      const value=event.target.value;
      // console.log(name);
      // console.log(value);
      this.setState({[name]:value})
    }
    
    
    //hàm hiện nút
    hienNut=() =>{
        if(this.state.trangthainut===true)
            return <div onClick={() =>this.doiTrangThai()} className="btn btn-outline-info btn-block">Thêm mới</div>;
        else return <div onClick={() =>this.doiTrangThai()} className="btn btn-outline-secondary btn-block">Đóng</div>;
    }
    
    doiTrangThai=() =>{
        //sst
        this.setState({trangthainut:!this.state.trangthainut})
    }

    hienFormProps=() =>{
        if(this.props.hienThiForm===true)
        return(
            <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
          <div className="card-header">Thêm thành viên</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="name" placeholder="Tên user" />
            </div>
            <div className="form-group">
              <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="tel" placeholder="Số điện thoại" />
            </div>
            <div className="form-group">
              <select onChange={(event) =>this.isChange(event)} className="form-control" name="permission">
                <option selected>Choose...</option>
                <option value={1}>Admin</option>
                <option value={2}>User</option>
                <option value={3}>Moderater</option>
              </select>
            </div>
            <div className="form-group">
              <div onClick={(name, tel, permission) =>this.props.AddNewUser(this.state.name, this.state.tel, this.state.permission)} className="btn btn-block btn-primary">Thêm</div>
            </div>
          </div>
        </div>
        )
    }

  render() {
    // console.log(this.props.hienThiForm);
    return (
        <div className="col-3">
            {/* { this.hienNut()} */}
            {/* {this.hienForm()} */}
            {this.hienFormProps()}
        
      </div>
      
    )
  }
}
