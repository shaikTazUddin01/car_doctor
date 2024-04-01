const BookingDataTable = ({ booking }) => {
    return (
        <tr>
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
                <button className="btn btn-success btn-sm">Edit</button>
                <button className="btn btn-error btn-sm">Delete</button>
            </th>
        </tr>

    );
};

export default BookingDataTable;