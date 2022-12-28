import { Fragment, useRef } from "react";

const LoginSignup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const onSubmitDetailsHandler = async(e)=>{
      e.preventDefault()
  let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOrZEaIdE5JVsMsQmrJRijh7X9HpgCeHE";
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  const confirmPassword = confirmPasswordRef.current.value;
  if (password.length > 0 && password !== confirmPassword) {
      alert("password did not match");
      return
  }
    try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "content-type": "application/json",
          }
        });
        const data =await response.json()
        if(response.ok){
            alert(`successfully signedup ${data.email}`)
            console.log("successfully signedup")
        }else{
            throw new Error(data.error.message)
        }
      } catch (error) {
        console.log(error.message)
        alert(error.message);
      }
  }

  return (
    <Fragment>
      <div className="bg-white w-75 p-5 text align-items-center d-flex flex-column position-absolute top-25 start-25 w-100 h-50" >
        <div className="bg-white row gy-3 pb-3 mb-3 border border-secondary">

        <h1 className="text-dark text-center">SignUp</h1>
        <form onSubmit={onSubmitDetailsHandler} >
          <div className="text-center mt-2">
            <input className="p-2 pe-4 border-1 border-light rounded" type="text" ref={emailRef} placeholder="Email" required />
          </div>
          <div className="text-center mt-2">
            <input className="p-2 pe-4 border-1 border-light rounded" type="password" ref={passwordRef} placeholder="Password" required />
          </div>
          <div className="text-center mt-2">
            <input className="p-2 pe-4 border-1 border-light rounded" type="password" ref={confirmPasswordRef} placeholder="Confirm Password" required />
          </div>
          <div className="text-center mt-4 ">
          <input className="btn btn-primary ps-5 pe-5 pt-2 pb-2 rounded-pill" type="submit" value="SignUp" />
          </div>
        </form>
        </div>
        <div className="bg-white border border-secondary pe-5 ps-5 pt-3 pb-3 text-center">
         <span className="pe-5 ps-5"> Have an account?Login </span>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignup;