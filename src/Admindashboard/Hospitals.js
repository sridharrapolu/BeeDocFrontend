import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Hospitals.css";

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
  });

  const [logo, setLogo] = useState(null);
  const [images, setImages] = useState([]);

  const fetchHospitals = async () => {
    try {
      const res = await axios.get("https://beedoc.onrender.com/api/hospital");
      setHospitals(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("address", formData.address);
    data.append("description", formData.description);

    if (logo) data.append("logo", logo);
    images.forEach((img) => data.append("images", img));

    try {
      await axios.post("https://beedoc.onrender.com/api/hospital/add", data);

      setShowModal(false);
      setFormData({ name: "", address: "", description: "" });
      setLogo(null);
      setImages([]);

      fetchHospitals();
    } catch (err) {
      console.error(err);
      alert("Error adding hospital");
    }
  };

  const deleteHospital = async (id) => {
    try {
      await axios.delete(`https://beedoc.onrender.com/api/hospital/${id}`);
      fetchHospitals();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ha-container">
      <div className="ha-header">
        <h2>Hospitals Management</h2>
        <button className="ha-add-btn" onClick={() => setShowModal(true)}>
          + Add Hospital
        </button>
      </div>

      <div className="ha-grid">
        {hospitals.map((h) => (
          <div key={h._id} className="ha-card">
            <img src={h.logo} alt="logo" className="ha-logo" />

            <h3>{h.name}</h3>
            <p>{h.address}</p>
            <p className="ha-desc">{h.description}</p>

            <div className="ha-images">
              {h.images?.map((img, i) => (
                <img key={i} src={img} alt="hospital" />
              ))}
            </div>

            <button
              className="ha-delete-btn"
              onClick={() => deleteHospital(h._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="ha-modal">
          <div className="ha-modal-content">
            <h3>Add Hospital</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Hospital Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />

              <input type="file" onChange={(e) => setLogo(e.target.files[0])} />
              <input type="file" multiple onChange={(e) => setImages([...e.target.files])} />

              <div className="ha-modal-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hospitals;