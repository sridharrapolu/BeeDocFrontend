import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminAppointments.css";

const API = "https://beedoc.onrender.com/api/appointments";
const AdminAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});
    useEffect(() => {
        fetchAppointments();
    }, []);
    const fetchAppointments = async () => {
        const res = await axios.get(API);
        setAppointments(res.data);
    };
    const handleEdit = (item) => {
        setEditId(item._id);
        setEditData(item);
    };
    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };
    const handleUpdate = async () => {
        await axios.put(`${API}/${editId}`, editData);
        setEditId(null);
        fetchAppointments();
    };
    const handleDelete = async (id) => {
        if (window.confirm("Delete this appointment?")) {
            await axios.delete(`${API}/${id}`);
            fetchAppointments();
        }
    };
    return (
        <div className="admin-appointments">
            <h2>Appointments Management</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Patient</th>
                            <th>Hospital</th>
                            <th>Date</th>
                            <th>Mobile</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((item) => (
                            <tr key={item._id}>
                                {/* EDIT MODE */}
                                {editId === item._id ? (
                                    <>
                                        <td>
                                            <input name="doctorName" value={editData.doctorName} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input name="patientName" value={editData.patientName} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input name="hospital" value={editData.hospital} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input type="date" name="date" value={editData.date} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <input name="mobile" value={editData.mobile} onChange={handleChange} />
                                        </td>
                                        <td>
                                            <button className="edit" onClick={handleUpdate}> Save </button>
                                            <button className="delete" onClick={() => setEditId(null)} > Cancel </button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{item.doctorName}</td>
                                        <td>{item.patientName}</td>
                                        <td>{item.hospital}</td>
                                        <td>{item.date}</td>
                                        <td>{item.mobile}</td>
                                        <td>
                                            <button className="edit" onClick={() => handleEdit(item)}  >  Edit </button>
                                            <button className="delete" onClick={() => handleDelete(item._id)} > Delete </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AdminAppointments;