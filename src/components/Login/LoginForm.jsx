import React, {useState} from 'react'

function LoginForm({Login,error}) {
    const [details,setDatails]= useState({email:'',password:''});

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }
    
    return (
      
        <form onSubmit={submitHandler}>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={e => setDatails({...details,email:e.target.value})} value={details.email}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={e => setDatails({...details,password:e.target.value})} value={details.password}/>
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

        </form>     

    )
}
export default LoginForm


