import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Doctors.css";

const API = "https://beedoc.onrender.com";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(API);
      setDoctors(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (doc) => {
    console.log("Edit clicked:", doc); // 🔍 debug
    setEditId(doc._id);
    setEditData(doc);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API}/${editId}`, editData);
      setEditId(null);
      fetchDoctors();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this doctor?")) {
      await axios.delete(`${API}/${id}`);
      fetchDoctors();
    }
  };

  return (
    <div className="doctors-container">
      <h2>Doctors Management</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialization</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Hospital</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr key={doc._id}>
                <td>{doc.name}</td>
                <td>{doc.specialization}</td>
                <td>{doc.phone}</td>
                <td>{doc.email}</td>
                <td>{doc.currentHospital}</td>
                <td>{doc.availability}</td>

                <td className="actions">
                  <button className="edit" onClick={() => handleEdit(doc)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(doc._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ MODAL FIXED */}
      {editId !== null && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Doctor</h3>

            <div className="form-grid">
              <input
                name="name"
                value={editData.name || ""}
                onChange={handleChange}
              />
              <input
                name="specialization"
                value={editData.specialization || ""}
                onChange={handleChange}
              />
              <input
                name="phone"
                value={editData.phone || ""}
                onChange={handleChange}
              />
              <input
                name="email"
                value={editData.email || ""}
                onChange={handleChange}
              />
              <input
                name="currentHospital"
                value={editData.currentHospital || ""}
                onChange={handleChange}
              />
              <input
                name="availability"
                value={editData.availability || ""}
                onChange={handleChange}
              />
            </div>

            <div className="modal-actions">
              <button className="save" onClick={handleUpdate}>
                Save
              </button>
              <button className="cancel" onClick={() => setEditId(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;