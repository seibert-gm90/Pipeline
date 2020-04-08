import React from "react";
import "./App.css";


class App extends Component {

  render(){
  return (
    <AppDiv>
        <Header />
          <CenteredHeader>Pipeline</CenteredHeader>
            <ContainerDiv>
              {this.props.children}
          </ContainerDiv>
        <Footer />
      </AppDiv>
  )

}
};

export default App;
