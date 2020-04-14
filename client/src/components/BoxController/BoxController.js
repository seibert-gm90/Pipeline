class BoxController extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
  }

  
render() {

<div className="box-controller">
  <div
    className={
      "controller " + (this.state.isLoginOpen ? "selected-controller" : "")
    }
    onClick={this.showLoginBox.bind(this)}
  >
    Login
  </div>
  <div
    className={
      "controller " + (this.state.isRegisterOpen ? "selected-controller" : "")
    }
    onClick={this.showRegisterBox.bind(this)}
  >
    Register
  </div>
</div>

}

}
