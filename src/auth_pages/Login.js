import {useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../redux/AuthActions';
import './Login.css';
import netmovies_logo from '../netmovies_logo-nobg.png'
import ChangeTitle from '../ChangePageTitle'
import {userLogin} from '../api/AuthenticationService';
import {Alert,Spinner} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

const LoginPage=({loading,error,...props})=>{
    let navigate = useNavigate();

    const [values, setValues] = useState({
        userName: '',
        password: ''
        });

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();

        userLogin(values).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                props.setUser(response.data);
                navigate(`/`)
            }
            else{
               props.loginFailure('Something Wrong!Please Try Again');
            }


        }).catch((err)=>{
            
            if(err && err.response){
            
            switch(err.response.status){
                case 401:
                    console.log("401 status");
                    props.loginFailure("Authentication Failed.Bad Credentials");
                    break;
                default:
                    props.loginFailure('Something Wrong!Please Try Again'); 

            }

            }
            else{
                props.loginFailure('Something Wrong!Please Try Again');
            }
                

            

        });
        //console.log("Loading again",loading);

        
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ",loading);

    return (
        <>
        <ChangeTitle pageTitle={`Log In - Netmovies`} />
        <div className="login-page">
            <div className="container ">
                <div className="app-logo">
                    <img id="app-logo-img" src={netmovies_logo} alt="App Logo" />
                </div>
                <div className="row justify-content-md-left ">
                    <div className="card-wrapper">
                        <div className="card fat">
                            <div className="card-body p-0">
                                <h2 className="card-title">Log In</h2>
                                <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                    <div className="form-group pt-1">
                                        <label htmlFor="email">User Name</label>
                                        <input placeholder='User Name' id="username" type="text" className="form-control bg-light border-0" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />
                                        <div className="invalid-feedback">
                                            UserId is invalid
                                        </div>
                                    </div>
                                    <div className="form-group pt-1">
                                        <label>Password
                                            {/* <a href="forgot.html" className="float-right">
                                                Forgot Password?
                                            </a> */}
                                        </label>
                                        <input placeholder='Password' id="password" type="password" className="form-control bg-light border-0" minLength={8} value={values.password} onChange={handleChange} name="password" required/>
                                        <div className="invalid-feedback">
                                            Password is required
                                        </div>
                                    </div>
                                    {/* <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                        </div>
                                    </div> */}
                                    <div className="form-group m-0 pt-3">
                                        <button type="submit" className="btn btn-outline-danger">
                                            Login
                                            {loading && (
                                                <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            )}
                                            {/* <ClipLoader
                                            //css={override}
                                            size={20}
                                            color={"#123abc"}
                                            loading={loading}
                                            /> */}
                                        </button>
                                    </div>
                                </form>
                                { error &&
                                <Alert style={{marginTop:'20px'}} variant="danger">
                                        {error}
                                    </Alert>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )


    
}

const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);