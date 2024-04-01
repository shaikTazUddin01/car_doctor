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

    console.log(bookingData)
    return (
        <div className="overflow-x-auto mx-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
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
                bookingData?.map(item=><BookingDataTable key={item?._id} booking={item}></BookingDataTable>)
            }
          </tbody>
          
        </table>
      </div>
    );
};

export default Booking;