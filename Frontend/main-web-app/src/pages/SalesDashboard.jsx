import { useEffect, useState } from 'react';
import '../styles/SalesDashboard.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Important: Register Chart.js components if using Chart.js v4
Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const SalesDashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  const prepareChartData = (data) => {
    const dates = data.map((sale) => sale.date.slice(0, 10)); // Only YYYY-MM-DD
    const amounts = data.map((sale) => sale.amount);

    setChartData({
      labels: dates,
      datasets: [
        {
          label: 'Sales Over Time',
          data: amounts,
          fill: true,
          backgroundColor: 'rgba(251, 186, 63, 0.2)', // slightly transparent
          borderColor: '#fbba3f',
          tension: 0.3, // smoother lines
          pointBackgroundColor: '#ffd873',
          pointBorderColor: '#fbba3f',
        },
      ],
    });
  };

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/sales'); // full URL if needed
        setSalesData(response.data);
        prepareChartData(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Sales Dashboard</h1>

      <div className="chart-section">
        {chartData.labels.length > 0 ? (
          <Line data={chartData} />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>

      <div className="sales-table">
        <h2>Recent Sales</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Salesperson</th>
            </tr>
          </thead>
          <tbody>
            {salesData.length > 0 ? (
              salesData.map((sale) => (
                <tr key={sale._id}>
                  <td>{sale.date.slice(0, 10)}</td>
                  <td>{sale.product}</td>
                  <td>${sale.amount}</td>
                  <td>{sale.salesperson}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>No sales data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesDashboard;
