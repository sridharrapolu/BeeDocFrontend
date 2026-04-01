import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Treatements.css";
import { useNavigate } from "react-router-dom";

const Treatements = () => {
  const [treatements, setTreatements] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [editData, setEditData] = useState({ id: "", name: "", description: "" });
  const [deleteId, setDeleteId] = useState(null);
  //  image states
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [editFile, setEditFile] = useState(null);
  const [editPreview, setEditPreview] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://beedoc.onrender.com/treatement")
      .then((res) => setTreatements(res.data))
      .catch((err) => console.log(err));
  };
  const handleChange = (e, type = "add") => {
    if (type === "add") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setEditData({ ...editData, [e.target.name]: e.target.value });
    }
  };
  //  file handler
  const handleFileChange = (e, type = "add") => {
    const selected = e.target.files[0];
    if (type === "add") {
      setFile(selected);
      setPreview(selected ? URL.createObjectURL(selected) : "");
    } else {
      setEditFile(selected);
      setEditPreview(selected ? URL.createObjectURL(selected) : "");
    }
  };
  //  CREATE
  const handleSubmit = () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    if (file) data.append("image", file);

    axios
      .post("https://beedoc.onrender.com/treatement", data)
      .then(() => {
        fetchData();
        setFormData({ name: "", description: "" });
        setFile(null);
        setPreview("");
        document.getElementById("closeAddModal").click();
      })
      .catch((err) => console.log(err));
  };
  //  OPEN EDIT
  const openEditModal = (t) => {
    setEditData({ id: t._id, name: t.name, description: t.description });
    setEditPreview(t.image?.url || "");
    setEditFile(null);
  };
  //  UPDATE
  const handleUpdate = () => {
    const data = new FormData();
    data.append("name", editData.name);
    data.append("description", editData.description);
    if (editFile) data.append("image", editFile);

    axios
      .put(`https://beedoc.onrender.com/treatement/${editData.id}`, data)
      .then(() => {
        fetchData();
        setEditFile(null);
        setEditPreview("");
        document.getElementById("closeEditModal").click();
      })
      .catch((err) => console.log(err));
  };
  //  DELETE
  const confirmDelete = () => {
    axios
      .delete(`https://beedoc.onrender.com/treatement/${deleteId}`)
      .then(() => {
        fetchData();
        document.getElementById("closeDeleteModal").click();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="trt-container">
      {/* HEADER */}
      <div className="trt-header">
        <h2 className="trt-title">Treatments</h2>
        <button type="button" className="trt-add-btn" data-bs-toggle="modal" data-bs-target="#addModal" >  + Add </button>
      </div>
      {/* CARDS */}
      <div className="trt-grid">
        {treatements.map((t) => (
          <div className="trt-card" key={t._id}>
            {/*  IMAGE */}
            <img
              src={t.image?.url || "https://via.placeholder.com/300"}
              alt={t.name}
              className="trt-img"
            />
            <h5>{t.name}</h5>
            <p>{t.description}</p>
            <div className="trt-actions">
              <button className="trt-btn trt-edit" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => openEditModal(t)} >  Edit </button>
              <button className="trt-btn trt-delete" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => setDeleteId(t._id)} > Delete </button>
              <button className="trt-btn trt-sub" onClick={() => navigate(`/admin/subtreatments/${t._id}`)} > Sub </button>
            </div>
          </div>
        ))}
      </div>
      {/* ADD MODAL */}
      <div className="modal fade" id="addModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5>Add Treatment</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="form-control mb-2"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="form-control mb-2"
              />

              {/*  IMAGE INPUT */}
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "add")}
                className="form-control"
              />

              {preview && <img src={preview} alt="preview" className="trt-preview" />}
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" id="closeAddModal" data-bs-dismiss="modal" > Close </button>
              <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </div>

          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      <div className="modal fade" id="editModal">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5>Edit Treatment</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={(e) => handleChange(e, "edit")}
                className="form-control mb-2"
              />

              <textarea
                name="description"
                value={editData.description}
                onChange={(e) => handleChange(e, "edit")}
                className="form-control mb-2"
              />

              {/*  IMAGE INPUT */}
              <input
                type="file"
                onChange={(e) => handleFileChange(e, "edit")}
                className="form-control"
              />

              {editPreview && <img src={editPreview} alt="preview" className="trt-preview" />}
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" id="closeEditModal" data-bs-dismiss="modal" > Close </button>
              <button className="btn btn-success" onClick={handleUpdate}>Update</button>
            </div>

          </div>
        </div>
      </div>
      {/* DELETE MODAL */}
      <div className="modal fade" id="deleteModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Confirm Delete</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this treatment?
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" id="closeDeleteModal" data-bs-dismiss="modal" > Cancel </button>
              <button className="btn btn-danger" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Treatements;