import { Component } from "react";
import "../App.css";
import AddUser from "./AddUser";
import Header from "./Header";
import List from "./List";
import Search from "./Search";
import dl from "./data/data.json";

// function App() {
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { hienThiForm: true, data: dl, search: "" };
  }

  // thongBao=() =>{
  //   alert('đã kết nối');
  // }
  searchDL = (abc) => {
    this.setState({
      search: abc,
    });
  };

  doiTrangThai = () => {
    this.setState({ hienThiForm: !this.state.hienThiForm });
  };

  //hàm lấy thông tin tìm kiếm
  infoSearch = (dl) => {
    // alert("dữ liệu bố nhận được " +dl)
    // console.log(dlSearch);
    this.setState({ search: dl });
  };

  deleteUser = (abc) => {
    // console.log("duoc roi ne " + abc);
    const currentData = this.state.data;
    this.setState({
      data: currentData.filter((item) => item.id !== abc),
    });
  };
  //hàm lấy thông tin thêm user
  getNewUser = (name, tel, permission) => {
    // console.log(name);
    // console.log(tel);
    // console.log(permission);
    //khai bao doi tuong rong
    var item = {};
    item.id = Math.floor(Math.random() * 100);
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    // console.log(item);
    var newItem = this.state.data;
    newItem.push(item);
    // console.log(newItem);
    this.setState({
      data: newItem,
    });
  };
  // Ham Lay ID Xoa Tu List
  deleteUserInfo = (idUser) => {
    // console.log(idUser);
    // this.state.data.forEach((value, key) => {
    //   if(value.id == idUser){
    //     console.log(value.name);
    //   }
    // })
    var tempData = this.state.data;
    // console.log(tempData);
    this.setState({ data: tempData.filter((item) => item.id !== idUser) });
  };
  upDateUser = (id, name, phone, permission) => {
    // console.log(id);
    // console.log(name);
    // console.log(phone);
    // console.log(permission);
    const currentData = this.state.data;
    const tempItem = currentData.find((idData) => idData.id === id);
    // console.log(tempItem);
    tempItem.name = name;
    tempItem.tel = phone;
    tempItem.permission = permission;
    console.log(currentData);
    this.setState({
      data: currentData,
    });
  };
  render() {
    // console.log(dl);
    // console.log(this.state.search);
    var ketqua = []; //khai báo mảng rỗng để lưu kết quả
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.search) !== -1) {
        ketqua.push(item);
      }
    });
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Search
              ketnoi={() => this.doiTrangThai()}
              infoSearch={(dl) => this.infoSearch(dl)}
              trangThai={this.state.hienThiForm}
              dlSearch={(abc) => this.searchDL(abc)}
            />
            <List
              dataUser={ketqua}
              deleteUserInfo={(idUser) => this.deleteUserInfo(idUser)}
              upDateUserInfo={(id, name, phone, permission) =>
                this.upDateUser(id, name, phone, permission)
              }
              // xoaID={(abc) => this.deleteUser(abc)}
            />
            <AddUser
              hienThiForm={this.state.hienThiForm}
              AddNewUser={(name, tel, permission) =>
                this.getNewUser(name, tel, permission)
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
