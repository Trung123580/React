import React from "react";
import ChildComponent from "./ChildComponent"; // kế thừa lớp ChildComponent  =>kế thừa kiểu cha con
import AddComponent from "./AddComponent";
import Add2Component from "./Add2Component";
// dùng kiểu class component  ES6
class Mycomponent extends React.Component {
  // key : value
  state = {
    arrJobs: [
      { id: "001", title: "testter", salary: "500 " },
      { id: "002", title: "developo", salary: "800 " },
      { id: "003", title: "dev", salary: "300 " },
    ],
  };
  addNewJob = (job) => {
    // *
    console.log("check job :", job);
    // let currenJobs = this.state.arrJobs => cánh 2*
    // currenJobs.push(job) => cánh 2 *
    this.setState({
      // => cánh 1 nâng cao
      arrJobs: [...this.state.arrJobs, job], // thêm dữ liệu data vào arrJobs hiện thj tiếp khi nhập dữ lệu toán tử ...là toán tử copy và hiện các phần tử đằng sau dấu ...
    });
    //   this.setState({ // cánh 2
    //     arrJobs : currenJobs
    //   })
  };

  deleteAjob = (job) => {
    let currenJobs = this.state.arrJobs;
    currenJobs = currenJobs.filter((item) => item.id !== job.id); // delete arrJobs (<span onClick={()=> this.handleOnclickDelete(item)}>x</span> )
    this.setState({
      arrJobs: currenJobs,
    });
  };

  // JSX => return block 1 khỗi code
  render() {
    console.log(this.state); // kiểm tra state
    // let name = 'Trung';
    return (
      //short cut <input/> end <div/> end <id/>
      // các lớp con bên dưới
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <Add2Component />

        <ChildComponent
          name={"Trung"}
          age={"20"}
          address={"Ha Noi"}
          arrJobs={this.state.arrJobs} // truyền dữ liệu cho con
          deleteAjob={this.deleteAjob}
        />
      </> // thẻ bọc ngoài thì có thể 2 of nhiều thẻ bên trong do JSX => short cut
    );
  }
}
export default Mycomponent; // để sử dụng bên hàm khác (vd : App.js)
// export default {Mycomponent,Component2,Component3}; => export nhiều component
// dùng cánh trên
// dùng kiểu function định nghĩa 1 component
// function Mycomponent() {
//     return (
//         <div>hello my component</div>
//     )
// }
// export default Mycomponent;
