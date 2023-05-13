import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';
import OrderDataShow from './OrderDataShow';

const OrderHistory = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/all-orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    const deleteHandler = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/all-orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = orders.filter(order => order._id !== id)
                            setOrders(remaining)
                        }
                    })
            }
        })
    }

    const confirmHandler = id => {
        fetch(`http://localhost:5000/all-orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id)
                    const updated = orders.find(order => order._id === id)
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining]
                    setOrders(newBooking)
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Details</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderDataShow
                                key={order._id}
                                order={order}
                                deleteHandler={deleteHandler}
                                confirmHandler={confirmHandler}
                            ></OrderDataShow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderHistory;