function Header() {
  return (
    <header>
      <video src="./img/telecomm2.jpg" >loop autoplay muted</video>
      <h1>Radio and Microwave Telecommunications</h1>
      <h1>Systems Networking</h1>
      <h1>Internet Service Provisioning</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
         Create an Account
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
         Have an account? Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
