
import { Component } from 'react';
import '../App.css';
import AddUser from './AddUser';
import Header from './Header';
import List from './List';
import Search from './Search';
import dl from './data/data.json';

// function App() {
class App extends Component{
  constructor(props, context) {
    super(props, context);
    this.state={hienThiForm:true,
    data:dl,
    search:'',
    add:'',
    editUserStatus: false,
    userEditObject:{}//khai báo 1 biến state để lưu đối tượng
  }
  }
  
  // thongBao=() =>{
  //   alert('đã kết nối');
  // }

  doiTrangThai=() =>{
    this.setState({hienThiForm:!this.state.hienThiForm});
  }
  
//hàm lấy thông tin tìm kiếm
  infoSearch=(dlSearch) =>{
    // alert("dữ liệu bố nhận được " +dl)
    // console.log(dlSearch);
    this.setState({search:dlSearch})
  }

  //hàm lấy thông tin thêm user
  getNewUser=(name,tel,permission) =>{
    //alert('ok')
    //log ra xem bố đã nhận được chưa
    // console.log(name);
    // console.log(tel);
    // console.log(permission);
    // xuất ra theo 1 item chứ không xuất theo từng giá trị

    var item={};//ban đầu là đối tượng rỗng
    item.id='';
    item.name=name;
    item.tel=tel;
    item.permission=permission;
    // console.log(item);

    //lưu vào json nên k lưu vào data f5 là mất 
    var newItem=this.state.data;
    newItem.push(item);
    // console.log(newItem);
    this.setState({data:newItem});
  }

  
  //hàm lấy id xóa từ list
  deleteUserInfo=(idUser) =>{
    // console.log(idUser);
    //hàm duyệt data 
    // this.state.data.forEach((value,key)=>{
    //   if(value.id===idUser){
    //     // console.log(value.name);
    //     //lấy hàm filter để xóa

    //   }
    // })

    // var manga=[1,2,3,4,5];
    // var x=3;
    // manga=manga.filter(abc=>abc!=x)
    // console.log(manga);

    var tempData=this.state.data;
    tempData=tempData.filter(item=>item.id!=idUser);
    // console.log(tempData);
    this.setState({
      data:tempData
    });
  }


//hàm lấy thông tin cần sửa
editUser=(abc) =>{
  // alert("thông tin nhận được "+abc);
  this.setState({userEditObject:abc})
}

//state viết trong app nên truyền setstate cho app luôn
//hàm thay đổi trạng thái
changeEditUserForm=() =>{
  this.setState({
    editUserStatus:!this.state.editUserStatus
  });
}

// hàm lấy thông tin cần sửa từ list
getEditInfoApp=(info) =>{
  // alert("thông tin đã sửa " + info.name);
  this.state.data.forEach((value,key) =>{
    if(value.id===info.id){
      value.name=info.name;
      value.tel=info.tel;
      value.permission=info.permission;
    }
  })

}

  render(){
    // console.log(dl);
    // console.log(this.state.search);
    var ketqua=[]//khai báo mảng rỗng để lưu kết quả
    this.state.data.forEach((item) =>{
      if(item.name.indexOf(this.state.search)!==-1){
        ketqua.push(item)
      }
    })
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row'>
          <Search 
          ketnoi={() =>this.doiTrangThai()}
          infoSearch={(dl) =>this.infoSearch(dl)}
          //nếu true thì hiện form sửa ra
          editUserStatus={this.state.editUserStatus}
          changeEditUserForm={() =>this.changeEditUserForm()}
          userEditObject={this.state.userEditObject}
          getEditInfoApp={(info) =>this.getEditInfoApp(info)}
          hThi={this.state.hienThiForm}
          />
          <List dataUser={ketqua}
                deleteUserInfo={(idUser) =>this.deleteUserInfo(idUser)}
                edit={(abc)=> this.editUser(abc)}
                changeEditUserForm={() =>this.changeEditUserForm()}
          />
          <AddUser 
          hienThiForm={this.state.hienThiForm}
          //id tự động nên k thêm vào
          AddNewUser={(name, tel, permission) =>this.getNewUser(name, tel, permission)}
          />
        </div>
      </div>
    </div>
  );
}
}

export default App;
