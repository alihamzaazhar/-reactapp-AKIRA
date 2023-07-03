import React from "react";
import "./styles.css";
import logo from "../../Others/assets/logo.png";
import hide_password from "../../Others/assets/hide_password.png";
const Login = () => {
  return (
    // <div className='container'>
    //   <div className="imgContainer">
    //   {/* <img src={logo} alt="Logo" className="logo"/> */}
    //   </div>
    //   <div className="form_container">
    //     <div className="header_container">
    //     <h1 className="header_txt">UVRSE</h1>
    //     </div>
    //     <h2 className="subtitle_txt">unified Reality App</h2>
    //   </div>
    // </div>
    <div className="container">
      <section className="section">
        <div className="img_container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="form_container">
          <div className="header_container">
            <h1 className="header_txt">UVRSE</h1>
            <h2 className="subtitle_txt">unified reality app</h2>
          </div>

          <div className="form">
            <form className="form_section">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="textInput"
              />
              <label className="label">Password</label>
              <div
                style={{
                  border: "1px solid  #5B5B5B",
                  display: "flex",
                  width: "100%",
                  padding: "3.5%",
                  borderRadius: "4px",
                  marginBottom: "3%",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  style={{
                    border: "none",
                    fontSize: "0.65rem",
                    fontFamily: "Inter-Medium",
                    paddingLeft: "2%",
                    outline: "none",
                    width: "80%",
                  }}
                />
                <img
                  src={hide_password}
                  style={{
                    objectFit: "contain",
                    width: "14px",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "50%",
                  }}
                >
                  <input type="checkbox" checked="checked" name="remember" />
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "Inter-Medium",
                      paddingLeft: "1%",
                    }}
                  >
                    Remember Me
                  </p>
                </div>
                <div style={{ display: "flex"}}>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "Inter-Medium",
                    }}
                  >
                    Forget Password
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
