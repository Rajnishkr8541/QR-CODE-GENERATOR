import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './QRCodeGenerator.css'; 

const QRCodeGenerator = () => {
  const [batchNumber, setBatchNumber] = useState('');
  const [manufactureDate, setManufactureDate] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleBatchNumberChange = (e) => {
    setBatchNumber(e.target.value);
  };

  const handleManufactureDateChange = (e) => {
    setManufactureDate(e.target.value);
  };

  const generateQRCodeData = () => {
    return `Manufactured by: Sheetal Electrotech\nBatch Number: ${batchNumber}\nManufacture Date: ${manufactureDate}`;
  };

  const handleGenerateQR = () => {
    if (batchNumber && manufactureDate) {
      setGenerated(true);
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className="centered-container">
      <div className="card">
        <h1>QR Code Generator</h1>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Batch Number"
            value={batchNumber}
            onChange={handleBatchNumberChange}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter Manufacture Date (mm/yy)"
            value={manufactureDate}
            onChange={handleManufactureDateChange}
            className="input-field"
          />
        </div>

        <button onClick={handleGenerateQR} className="generate-btn">
          Generate QR Code
        </button>

        {generated && (
          <div className="qr-container">
            <QRCodeCanvas value={generateQRCodeData()} size={256} />
            <div className="qr-details">
              <p>Manufactured by: Sheetal Electrotech</p>
              <p>Batch Number: {batchNumber}</p>
              <p>Manufacture Date: {manufactureDate}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
