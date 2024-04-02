import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingDataTable from "./BookingDataTable";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState([])
  const usereEmail = user?.email;


  useEffect(() => {
    fetch(`http://localhost:5000/booking?email=${usereEmail}`)
      .then(res => res.json())
      .then(data => setBookingData(data))
  }, [usereEmail])

  const handleDalete = (id) => {
    // const deleteId = booking?._id
    fetch(`http://localhost:5000/booking/${id}`, {
      method: 'DELETE'

    }).then(res => res.json())
      .then(data => {
        if (data?.deletedCount) {
          alert('delete success')
          const remaining = bookingData.filter(item => item?._id !== id)
          setBookingData(remaining)
        }
      })
  }
  const handleEdit = (id) => {
    const updateData={status:"confirmed"}
    fetch(`http://localhost:5000/booking/${id}`,{
      method:'PATCH',
      headers:{
        'Content-type':'application/json',
    },
    body:JSON.stringify(updateData)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data?.modifiedCount){
        const remaining=bookingData?.filter(item=>item?._id !==id)
        const newData=bookingData?.find(item=>item?._id == id)
        newData.status='confirmed'
       const newBooking=[newData, ...remaining]
        setBookingData(newBooking)
        alert("updated")
      }
    })
  }
  console.log(bookingData)
  return (
    <div className="overflow-x-auto mx-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>Delete</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            bookingData?.map(item => <BookingDataTable key={item?._id} booking={item} handleDalete={handleDalete} handleEdit={handleEdit}></BookingDataTable>)
          }
        </tbody>

      </table>
    </div>
  );
};

export default Booking;