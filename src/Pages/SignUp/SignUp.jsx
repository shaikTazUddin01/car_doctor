import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {

    const { signup } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signup(email, password)
            .then(user => {
                alert("success")
            })
            .catch(err => {
                alert(err)
            })
        // console.log(name,email,password)

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex gap-20">
                    <div className="text-center lg:text-left w-[50%]">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <h1 className="text-2xl font-bold text-center">Sign UP</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="sign up" className="btn btn-primary" />
                                {/* <button className="btn btn-primary">Login</button> */}
                            </div>
                        </form>
                        <div className='-mt-5 pb-5'>
                            <p className='text-center'>Already Have An Account? <Link to={'/login'} className='text-yellow-600 font-medium'>Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;