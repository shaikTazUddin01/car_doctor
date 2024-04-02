const BookingDataTable = ({ booking ,handleDalete,handleEdit}) => {
  
    return (
        <tr>
            <td>
            <button className="btn btn-error btn-sm" onClick={()=>handleDalete(booking?._id)}>X</button>
        </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={booking?.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{booking?.name}</td>
            <td>
                {booking?.email}
            </td>
            <td>{booking?.price}</td>
            <th className="flex gap-2 justify-center">
                {
                    booking?.status=="confirmed"?
                    <button className="btn btn-primary btn-sm" >comfirmed</button>
                    :
                    <button className="btn btn-success btn-sm" onClick={()=>handleEdit(booking?._id)}>Please comfirm</button>
                }
                
               
            </th>
        </tr>

    );
};

export default BookingDataTable;