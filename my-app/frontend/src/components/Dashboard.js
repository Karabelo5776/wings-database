// src/components/Dashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductBarChart from './ProductBarChart';
import './Dashboard.css';

const Dashboard = ({ products }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    return isNaN(numericPrice) ? 'N/A' : numericPrice.toFixed(2);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h2>Dashboard</h2>
          <nav className="dashboard-nav">
            <Link to="/products" className="nav-link">Product Management</Link>
            <Link to="/users" className="nav-link">User Management</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </nav>
        </header>

        <section className="dashboard-main">
          <h3>Products Overview</h3>

          {products.length === 0 ? (
            <p>No products have been added yet.</p>
          ) : (
            <div className="dashboard-data">
              <div className="chart-container">
                <ProductBarChart products={products} />
              </div>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{formatPrice(product.price)}</td>
                        <td>{product.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Images with animation moved below the table and graph */}
          <div className="image-container">
  <img src="apple.jpeg" alt="Product 1" className="dashboard-image slide-in" />
  <img src="OIP.jpeg" alt="Product 2" className="dashboard-image fade-in" />
  <img src="strawberries.jpeg" alt="strawberries" className="dashboard-image bounce-in" />
  <img src="grapes.jpeg" alt="" className="dashboard-image1 rotate-in" />
  <img src="pears.jpeg" alt="" className="dashboard-image2 zoom-in" />
  <img src="coke.jpeg" alt="" className="dashboard-image1 slide-in" />
  <img src="cake.jpeg" alt="cake.jpeg" className="dashboard-image2 fade-in" />
  <img src="sandwitch.jpeg" alt="" className="dashboard-image1 bounce-in" />
</div>

        </section>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="#" className="footer-link">About</Link>
            <Link to="#" className="footer-link">Privacy Policy</Link>
            <Link to="#" className="footer-link">Terms of Service</Link>
            <Link to="#" className="footer-link">Contact</Link>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
