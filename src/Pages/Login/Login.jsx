import loginImg from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex gap-20">
                    <div className="text-center lg:text-left w-[50%]">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <h1 className="text-2xl font-bold text-center">Login now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                                {/* <button className="btn btn-primary">Login</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;