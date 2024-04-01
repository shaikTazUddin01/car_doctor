import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const servicedata = useLoaderData();
    const {_id, title, price,img } = servicedata;
    const { user } = useContext(AuthContext)


    const handleBookService = (e) => {
        e.preventDefault()
        const form = e.target;
        const serviceId=_id
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;

        const orderInfo = {
           serviceId, name, email, date, price,title,img
        }
        fetch('http://localhost:5000/booking',{
            method:"post",
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify(orderInfo)

        })
        .then(res=>res.json())
        .then(data=>{
            if (data?.insertedId) {
                alert('data inserted successfull')
                // form.reset()
            }else{
                alert('something is wrong please try again')
            }
        })

    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>Book Sevice:{title}</h1>
            {/* check out form */}
            <div className=" min-h-screen bg-base-200">
                <div className=" flex-col lg:flex-row-reverse w-1/2 mx-auto mt-10">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleBookService}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" name='name' required defaultValue={user?.displayName} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" placeholder="password" className="input input-bordered" name='date' required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" defaultValue={user?.email} required name='email' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due price</span>
                                    </label>
                                    <input type="text" defaultValue={"$" + price} className="input input-bordered" name='price' required />

                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>OrderNow</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;