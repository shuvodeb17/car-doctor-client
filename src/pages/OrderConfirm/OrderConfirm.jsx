import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';

const OrderConfirm = () => {

    const { user } = useContext(AuthContext)
    const orderData = useLoaderData()
    console.log(orderData);
    const { _id, img, title, price } = orderData;

    const checkOutHandler = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const date = e.target.date.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;
        const checkoutCustomerInfo = {
            customerName: name,
            serviceTitle: title,
            img: img,
            email: email,
            date: date,
            phone: phone,
            message: message,
            serviceId: _id,
            servicePrice: price
        }
        console.log(checkoutCustomerInfo);

        fetch('http://localhost:5000/checkout-information', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkoutCustomerInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Order confirm successful',
                    })

                }
            })
    }

    return (
        <div>
            <div className="carousel-item relative w-full ">
                <img src={img} className="w-full" style={{ height: '53vh' }} />
                <div style={{ height: '53vh' }} className="absolute flex flex-col justify-center transform bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] w-full pl-10">
                    <div className='text-white space-y-5'>
                        <h1 className="text-5xl font-bold">
                            Check Out : {title}
                        </h1>
                    </div>
                </div>
            </div>


            <div>
                <form onSubmit={checkOutHandler}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} readOnly placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="date" name='date' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="phone" name='phone' className="input input-bordered" />
                        </div>
                    </div>
                    <div className='form-control'>
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea name="message" id="" cols="30" rows="7" style={{ border: '1px solid #ddd' }}></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderConfirm;