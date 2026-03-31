import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SubTreatements.css";
const SubTreatements = () => {
  const { treatmentId } = useParams();
  const [subTreatments, setSubTreatments] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [formData, setFormData] = useState({
    treatmentId: "",
    name: "",
    description: ""
  });
  const [editData, setEditData] = useState({
    id: "",
    treatmentId: "",
    name: "",
    description: ""
  });
  const [deleteId, setDeleteId] = useState(null);
  useEffect(() => {
    if (treatmentId) {
      fetchSubTreatments();
      setFormData((prev) => ({ ...prev, treatmentId }));
    }
    fetchTreatments();
  }, [treatmentId]);

  const fetchSubTreatments = () => {
    axios
      .get(`https://beedoc.onrender.com/api/subtreatments/${treatmentId}`)
      .then((res) => setSubTreatments(res.data));
  };

  const fetchTreatments = () => {
    axios.get("https://beedoc.onrender.com/treatement")
      .then((res) => setTreatments(res.data));
  };

  const handleAdd = () => {
    axios.post("https://beedoc.onrender.com/api/subtreatments", formData)
      .then(() => {
        fetchSubTreatments();
        setFormData({ treatmentId, name: "", description: "" });
      });
  };
  const openEdit = (item) => setEditData(item);
  const handleUpdate = () => {
    axios.put(`https://beedoc.onrender.com/api/subtreatments/${editData._id}`, editData)
      .then(fetchSubTreatments);
  };
  const handleDelete = () => {
    axios.delete(`https://beedoc.onrender.com/api/subtreatments/${deleteId}`)
      .then(fetchSubTreatments);
  };
  return (
    <div className="sub-container">
      {/* HEADER */}
      <div className="sub-header">
        <h2>Sub Treatments</h2>
        <button className="btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
          + Add New
        </button>
      </div>

      {/* CARDS */}
      <div className="card-grid">
        {subTreatments.map((item) => (
          <div className="sub-card" key={item._id}>
            <div className="card-content">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>

            <div className="card-actions">
              <button className="icon-btn edit" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => openEdit(item)} >
                ✏️ </button>

              <button className="icon-btn delete" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setDeleteId(item._id)} >
                🗑 </button>
            </div>
          </div>
        ))}
      </div>
      {/* ADD MODAL */}
      <div className="modal fade" id="addModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modern-modal">
            <h5>Add SubTreatment</h5>

            <select
              className="input"
              value={formData.treatmentId}
              onChange={(e) =>
                setFormData({ ...formData, treatmentId: e.target.value })
              }
            >
              <option value="">Select Treatment</option>
              {treatments.map((t) => (
                <option key={t._id} value={t._id}>{t.name}</option>
              ))}
            </select>
            <input  className="input" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value }) } />
            <textarea  className="input" placeholder="Description"  value={formData.description}  onChange={(e) => setFormData({ ...formData, description: e.target.value }) } />

            <div className="modal-actions">
              <button data-bs-dismiss="modal" className="btn-secondary">Cancel</button>
              <button data-bs-dismiss="modal" onClick={handleAdd} className="btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <div className="modal fade" id="editModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modern-modal">
            <h5>Edit SubTreatment</h5>

            <input
              className="input"
              value={editData.name || ""}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
            />

            <textarea
              className="input"
              value={editData.description || ""}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
            />

            <div className="modal-actions">
              <button data-bs-dismiss="modal" className="btn-secondary">Cancel</button>
              <button data-bs-dismiss="modal" onClick={handleUpdate} className="btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}
      <div className="modal fade" id="deleteModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content modern-modal text-center">
            <h5>Delete?</h5>
            <p>This action cannot be undone</p>

            <div className="modal-actions">
              <button data-bs-dismiss="modal" className="btn-secondary">Cancel</button>
              <button data-bs-dismiss="modal" onClick={handleDelete} className="btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SubTreatements;