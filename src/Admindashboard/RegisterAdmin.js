import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RegisterAdmin.css";

const RegisterAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const initialState = {
    fullName: "",
    email: "",
    password: "",
    role: "Admin",
    status: "Active",
  };
  const [formData, setFormData] = useState(initialState);
  //  GET CONFIG (SAFE TOKEN HANDLING)
  const getConfig = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found");
      return null;
    }
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };
  useEffect(() => {
    fetchAdmins();
  }, []);

  // FETCH ADMINS
  const fetchAdmins = async () => {
    try {
      const config = getConfig();

      if (!config) return; // stop if no token

      const res = await axios.get(
        "https://beedoc.onrender.com/api/admin",
        config
      );
      setAdmins(res.data);
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        console.error("Unauthorized - Invalid or expired token");
      }
    }
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // CREATE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = getConfig();
      if (!config) return;

      if (editId) {
        const updatedData = { ...formData };

        if (!updatedData.password) {
          delete updatedData.password;
        }

        await axios.put(
          `https://beedoc.onrender.com/api/admin/${editId}`,
          updatedData,
          config
        );
      } else {
        await axios.post(
          "https://beedoc.onrender.com/api/admin",
          formData,
          config
        );
      }

      resetForm();
      fetchAdmins();
    } catch (err) {
      console.error(err);
    }
  };

  // EDIT
  const handleEdit = (admin) => {
    setFormData({
      fullName: admin.fullName,
      email: admin.email,
      password: "",
      role: admin.role,
      status: admin.status,
    });

    setEditId(admin._id);
    setShowForm(true);
  };

  //  DELETE
  const handleDelete = async (id) => {
    try {
      const config = getConfig();
      if (!config) return;

      await axios.delete(
        `https://beedoc.onrender.com/api/admin/${id}`,
        config
      );

      fetchAdmins();
    } catch (err) {
      console.error(err);
    }
  };

  // RESET FORM
  const resetForm = () => {
    setFormData(initialState);
    setEditId(null);
    setShowForm(false);
  };

  return (
    <div className="adm-container">
      <div className="adm-header">
        <h2 className="adm-title">Admin Management</h2>
        <button className="adm-add-btn" onClick={() => setShowForm(!showForm)} > + Add Admin </button>
      </div>
      {showForm && (
        <form className="adm-form" onSubmit={handleSubmit}>
          <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input name="password" placeholder={editId ? "Leave blank to keep same password" : "Password"} value={formData.password} onChange={handleChange} required={!editId} />

          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
          </select>

          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Disabled">Disabled</option>
          </select>

          <div className="adm-form-actions">
            <button type="submit" className="adm-save-btn">
              {editId ? "Update Admin" : "Create Admin"}
            </button>

            <button type="button" className="adm-cancel-btn" onClick={resetForm}>  Cancel </button>
          </div>
        </form>
      )}

      <table className="adm-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {admins.map((admin) => (
            <tr key={admin._id}>
              <td>{admin.fullName}</td>
              <td>{admin.email}</td>

              <td>
                <span className={`adm-role ${admin.role.toLowerCase()}`}>
                  {admin.role}
                </span>
              </td>

              <td>
                <span className={`adm-status ${admin.status.toLowerCase()}`}>
                  {admin.status}
                </span>
              </td>
              <td>
                <div className="adm-actions">
                  <button className="adm-edit-btn" onClick={() => handleEdit(admin)} > Edit </button>
                  <button  className="adm-delete-btn" onClick={() => handleDelete(admin._id)} > Delete </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterAdmin;