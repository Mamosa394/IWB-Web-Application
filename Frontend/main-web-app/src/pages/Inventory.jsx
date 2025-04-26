import React, { useState, useEffect } from "react";
import "../styles/inventory.css";

const sampleInventory = [
  {
    id: 1,
    name: "Dell OptiPlex 790",
    type: "Desktop",
    specs: {
      cpu: "Intel i5",
      ram: "8GB",
      storage: "500GB HDD",
      gpu: "Intel HD Graphics",
    },
    price: 1800,
    image: "/images/Inventory/Dell Optiplex 780.jpg",
    status: "Available",
    tags: ["Office", "Compact", "Refurbished"],
  },
  {
    id: 2,
    name: "HP ProBook 450 G5",
    type: "Laptop",
    specs: {
      cpu: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "NVIDIA MX130",
    },
    price: 4500,
    image: "/images/Inventory/HP ProBook 450 G5.jpg",
    status: "Available",
    tags: ["Business", "Portable", "Refurbished"],
  },
  {
    id: 3,
    name: "Lenovo ThinkServer TS140",
    type: "Server",
    specs: {
      cpu: "Intel Xeon E3",
      ram: "32GB",
      storage: "2TB HDD",
      gpu: "Integrated Server Graphics",
    },
    price: 8500,
    image: "/images/Inventory/Lenovo ThinkServer TS140.jpg",
    status: "Recycled",
    tags: ["Server", "Enterprise"],
  },
  {
    id: 4,
    name: "Asus ROG Strix",
    type: "Desktop",
    specs: {
      cpu: "Ryzen 7 3700X",
      ram: "32GB",
      storage: "1TB SSD",
      gpu: "NVIDIA RTX 2070",
    },
    price: 11000,
    image: "/images/Inventory/Asus ROG Strix.jpg",
    status: "Available",
    tags: ["Gaming", "Powerful"],
  },
];

const Inventory = () => {
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true); // Toggle for admin view

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleReserve = (id) => {
    alert(`Computer with ID ${id} reserved!`);
  };

  const handleDelete = (id) => {
    alert(`Computer with ID ${id} deleted (admin only)!`);
  };

  const handleEdit = (id) => {
    alert(`Edit form for ID ${id} (admin only)!`);
  };

  const matchesSearch = (item) => {
    const text = `${item.name} ${item.specs.cpu} ${
      item.specs.gpu
    } ${item.tags.join(" ")}`.toLowerCase();
    return text.includes(search.toLowerCase());
  };

  const filteredInventory = sampleInventory.filter((item) => {
    return (filter === "All" || item.type === filter) && matchesSearch(item);
  });

  return (
    <div className={`inventory-container ${theme}`}>
      <header className="inventory-header">
        <h1>IWB Technologies</h1>
        <p>Specialists in Computer Refurbishing & Recycling</p>
        <button className="theme-toggle" onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      <div className="filter-search-bar">
        <div className="filter-buttons">
          {["All", "Desktop", "Laptop", "Server"].map((category) => (
            <button
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search by name, spec, tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="inventory-grid">
        {filteredInventory.map((item) => (
          <div key={item.id} className="inventory-card">
            <img
              src={item.image}
              alt={item.name}
              className="inventory-img"
              onClick={() => setSelectedItem(item)}
            />
            <div className="inventory-info">
              <h3>{item.name}</h3>
              <ul>
                <li>
                  <strong>CPU:</strong> {item.specs.cpu}
                </li>
                <li>
                  <strong>RAM:</strong> {item.specs.ram}
                </li>
                <li>
                  <strong>Storage:</strong> {item.specs.storage}
                </li>
                <li>
                  <strong>GPU:</strong> {item.specs.gpu}
                </li>
                <li>
                  <strong>Price:</strong> M {item.price}
                </li>
              </ul>
              <div className="tag-container">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-actions">
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
                <button onClick={() => handleReserve(item.id)}>Reserve</button>
                {isAdmin && (
                  <>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <p>
              <strong>CPU:</strong> {selectedItem.specs.cpu}
            </p>
            <p>
              <strong>RAM:</strong> {selectedItem.specs.ram}
            </p>
            <p>
              <strong>Storage:</strong> {selectedItem.specs.storage}
            </p>
            <p>
              <strong>GPU:</strong> {selectedItem.specs.gpu}
            </p>
            <p>
              <strong>Price:</strong> M {selectedItem.price}
            </p>
            <p>
              <strong>Status:</strong> {selectedItem.status}
            </p>
            <button onClick={() => setSelectedItem(null)}>Close</button>
          </div>
        </div>
      )}

      <footer className="inventory-footer">
        <p>&copy; 2025 IWB Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Inventory;
