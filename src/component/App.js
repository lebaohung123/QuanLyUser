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
  getNewUser = (dlAdd) => {
    // console.log(dlAdd);
    const newUser = {
      id: Math.floor(Math.random() * 10),
      name: dlAdd.name,
      tel: dlAdd.tel,
      permission: dlAdd.permission,
    };
    this.setState({
      data: [...this.state.data, newUser],
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
              xoaID={(abc) => this.deleteUser(abc)}
            />
            <AddUser
              hienThiForm={this.state.hienThiForm}
              AddNewUser={(add) => this.getNewUser(add)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
