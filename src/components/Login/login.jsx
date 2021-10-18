import React , { useState } from "react";
import LoginForm  from  './LoginForm';
function Login() {       

    const adminUser = {
        email:'admin@admin.com',
        password:'admin123'
    }

    const [user, setUser] = useState({email:"",password:""});

    const [error,setError] = useState("");

    const Login = details =>{
        console.log(details);
        if (
            details.email === adminUser.email && details.password === adminUser.password
        ){

            console.log('logged in')        
            setUser({
                email:details.email
            })

        }
        else{
            
            console.log('details not match!')

        }
    }
    
    const Logout = () =>{
        setUser({email:''});
        console.log('Logout');
    }

    return (
        <React.StrictMode>
            <main className='container'>
                {
                    (user.email != '') ? (
                        <div className='welcome'>

                            <h2>
                                Welcome 
                                <span> 
                                    {user.email} 
                                </span>
                            </h2>

                            <button className='btn-primary' onClick={Logout}>
                                Logout
                            </button>

                        </div>
                    ) : (
                        <div>            
                            <section className='my-5'>
                
                                <div className='col-lg-5 mx-auto shadow py-3'>
                
                                    <h1 className='text-black-50'>
                                        Login
                                    </h1>

                                    <LoginForm Login={Login} error={error} />
                        
                                </div>

                            </section>
                        </div>
                    )
                }
            </main>
        </React.StrictMode>
    );    
}
 
export default Login;