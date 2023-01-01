import React from "react";
import "./demo.scss";
// dùng kiểu class component  ES6
// khi muốn dùng js thì viết trong dấu {}
class ChildComponent extends React.Component {
  // // key : value
  // state = {
  //   firstName: "",
  //   LastName: "",
  // };
  // handleChangeFirstName = (event) => {
  //   this.setState({
  //     firstName: event.target.value,
  //   });
  // };
  // handleChangeLastName = (event) => {
  //   this.setState({
  //     LastName: event.target.value,
  //   });
  // };
  // hendleSubmit = (event) => {
  //   event.preventDefault(); // coder ko cần lagding lại trang web
  //   alert("ok");
  //   console.log(this.state); // dữ liệu đa ta
  // };

  // render() {
  //   console.log(this.props); // kiểm tra props

  //   // let name = this.props.name; // cánh 2
  //   // let age = this.props.age; // cánh 2
  //   // let address = this.props.address; // cánh 2

  //   let { name, age, address, arrJobs } = this.props; // cánh 3 gắn gọn

  //   return (
  //     <>
  //       {/* {/* <form>
  //         <label htmlFor="fname">First name:</label>
  //         <br />
  //         <input
  //           type="text"
  //           value={this.state.firstName}
  //           onChange={(event) => this.handleChangeFirstName(event)}
  //         />
  //         <br />
  //         <label htmlFor="lname">Last name:</label>
  //         <br />
  //         <input
  //           type="text"
  //           value={this.state.LastName}
  //           onChange={(event) => this.handleChangeLastName(event)}
  //         />
  //         <br />
  //         <input type="submit" onClick={(event) => this.hendleSubmit(event)} />
  //       </form> */}

  //       {/* <div>
  //         check ChildComponent : {this.props.name} - {this.props.age} -{this.props.address} // cánh 1
  //       </div> */}
  //       {/* {} */}
  //       <div>
  //         check ChildComponent : {name} - {age} - {address}
  //       </div>
  //       <div className="job-lists">
  //         {arrJobs.map((item, index) => {
  //           // dùng vòng lặp map để lấy ra từng data
  //           if (item.salary >= 500) {
  //             // điều kiện
  //             return (
  //               <div key={item.id}>
  //                 {item.title} - {item.salary} $
  //               </div>
  //             );

  //             // } else if (item.salary <= 300) {
  //             //   // điều kiện
  //             //   return (
  //             //     <div key={item.id}>
  //             //       {item.title} - {item.salary} $
  //             //     </div>
  //             //   );
  //           }
  //         })}
  //       </div>
  //     </> // cánh 2 đặt bên trên
  //   );
  // }

  state = {
    showJobs: false,
  };

  hendleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs, // ! phủ định (đúng thành sai và ngược lại)
    });
  };

  handleOnclickDelete = (job) => {
    console.log("handleOnclickDelete :", job); // delete arrJobs =>(<span onClick={()=> this.handleOnclickDelete(item)}>x</span> )
    this.props.deleteAjob(job);
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false ? ( // dấu ? (là ngược lại ) và dấu => nếu là  ? = false (in ra ND : bên trong) nếu là true = (:) (sẽ in ra tếp đằng sau dấu :)
          // nếu là false sẽ in ra bên dưới
          <div>
            <button className="btn-show" onClick={() => this.hendleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          // nếu là true sẽ in ra bên dưới
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}{" "}
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.hendleShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;
