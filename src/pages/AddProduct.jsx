import React, { useState } from 'react';
import './AddProduct.css'
function AddProducts() {
  const [productData, setProductData] = useState({
    Name: '',
    Description: '',
    RawMaterials: [
      {
        Material: '',
        Percentage: '',
      },
    ],
    Company: '',
    Price: 0,
    Type: '',
    ManufacturingProcess: '',
    Transportation: '',
    EnergyEfficiency: false,
    WaterUsage: '',
    CarbonEmissions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
<div className="form">
        <div className="left">
        
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={productData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="Description"
            value={productData.Description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Raw Material:</label>
          <input
            type="text"
            name="RawMaterials[0].Material"
            value={productData.RawMaterials[0].Material}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Percentage:</label>
          <input
            type="text"
            name="RawMaterials[0].Percentage"
            value={productData.RawMaterials[0].Percentage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="Company"
            value={productData.Company}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="right">
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="Price"
            value={productData.Price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="Type"
            value={productData.Type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Manufacturing Process:</label>
          <input
            type="text"
            name="ManufacturingProcess"
            value={productData.ManufacturingProcess}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Transportation:</label>
          <input
            type="text"
            name="Transportation"
            value={productData.Transportation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Energy Efficiency:</label>
          <input
            type="checkbox"
            name="EnergyEfficiency"
            checked={productData.EnergyEfficiency}
            onChange={() =>
              setProductData({
                ...productData,
                EnergyEfficiency: !productData.EnergyEfficiency,
              })
            }
          />
        </div>
        <div>
          <label>Water Usage:</label>
          <input
            type="text"
            name="WaterUsage"
            value={productData.WaterUsage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Carbon Emissions:</label>
          <input
            type="text"
            name="CarbonEmissions"
            value={productData.CarbonEmissions}
            onChange={handleChange}
          />
        </div>
        </div>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProducts;
