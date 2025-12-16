import React from "react";
import { Link } from "react-router-dom";
import "./FeePayment.css";
import QR from "../images/QR.png";

export default function FeePayment() {
  return (
    <section className="payment-section">
      {/* -------- TOP HEADER GRADIENT -------- */}
      <header className="payment-header">
        <div className="payment-header-inner">
          <h1>Online Fee Payment</h1>

          <p className="breadcrumb">
            <Link to="/" className="breadcrumb-home">
              Home
            </Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Online Payment</span>
          </p>

          <p className="payment-subtitle">
            Pay your fees securely through bank transfer or UPI by using our
            official QR code and verified bank details.
          </p>
        </div>
      </header>

      {/* -------- MAIN CONTENT (QR + BANK DETAILS) -------- */}
      <div className="payment-content">
        {/* LEFT: QR CODE BOX */}
        <div className="qr-box">
          <h3 className="qr-title">Pay via QR Code</h3>

          <div className="qr-card">
            <div className="qr-image-wrapper">
              <img src={QR} alt="Fee Payment QR Code" className="qr-image" />
            </div>
            <p className="qr-note">
              Scan this QR code using your UPI app (PhonePe, Google Pay, Paytm,
              etc.) to make a secure payment.
            </p>
            <p className="qr-warning">
              Ensure the receiver name appears as
              <strong> Meenakshi Education Sansthan</strong> before confirming
              the payment.
            </p>
          </div>
        </div>

        {/* RIGHT: BANK DETAILS TABLE */}
        <div className="bank-details-box">
          <h3 className="bank-title">Bank Details</h3>
          <p className="bank-subtitle">
            You can also pay via NEFT / RTGS / IMPS using the following bank
            details.
          </p>

          <div className="bank-table-wrapper">
            <table className="bank-table">
              <tbody>
                <tr>
                  <th>Account Holder Name</th>
                  <td>Meenakshi Education Sansthan</td>
                </tr>
                <tr>
                  <th>Bank Name</th>
                  <td>Bank Of Baroda</td>
                </tr>
                <tr>
                  <th>IFSC Code</th>
                  <td>BARB0SALUMB</td>
                </tr>
                <tr>
                  <th>Account Number</th>
                  <td>34530200000444</td>
                </tr>
                <tr>
                  <th>Branch Address</th>
                  <td>SALUMBER BRANCH, SALUMBAR</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="payment-notes">
            <p>
              After completing the payment, please share the transaction receipt
              with the college office or upload it through the student portal.
            </p>
            <p>
              In case of any discrepancy, kindly contact the accounts department
              with your payment reference number.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
