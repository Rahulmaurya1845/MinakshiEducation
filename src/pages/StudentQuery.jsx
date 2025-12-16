import React from "react";
import { Link } from "react-router-dom";
import "./StudentQuery.css";

export default function StudentQuery() {
  return (
    <div className="student-query-page">
      {/* HERO / BANNER */}
      <header className="sq-hero">
        <div className="sq-hero-inner">
          <h1 className="sq-title">Online Enquiry</h1>
          <nav className="sq-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Online Enquiry</span>
          </nav>
        </div>
      </header>

      {/* MAIN FORM */}
      <main className="sq-main">
        <form className="sq-card" onSubmit={(e) => e.preventDefault()}>

          {/* Row 1 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Select Course Category *</label>
              <select>
                <option>Select Category</option>
                <option>Graduation</option>
                <option>Other</option>
                <option>B.A. Passed</option>
                <option>B.A.(CBCS)-1st-Sem 2024-2025</option>
                <option>B.Sc(CBCS)-1st-Sem 2024-2025</option>
                <option>BA 1st-Sem 2025-2026</option>
                <option>B.Sc 1st Sem 2025-2026</option>
              </select>
            </div>

            <div className="sq-col">
              <label>Course *</label>
              <select>
                <option>Select Course</option>
                <option>B.A. Course</option>
                <option>B.Sc Course</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Category *</label>
              <select>
                <option>Select Category</option>
                <option>General</option>
                <option>SC/ST</option>
                <option>OBC</option>
                <option>Minority</option>
                <option>HC</option>
                <option>Other</option>
              </select>
            </div>

            <div className="sq-col">
              <label>Class *</label>
              <select>
                <option>Select Class</option>
                <option>B.A. 1st Year</option>
                <option>B.A. 2nd Year</option>
                <option>B.A. 3rd Year</option>
                <option>B.Sc 1st Year</option>
                <option>B.Sc 2nd Year</option>
                <option>B.Sc 3rd Year</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Session *</label>
              <select>
                <option>Select Session</option>
                <option>2019-2020</option>
                <option>2020-2021</option>
                <option>2021-2022</option>
                <option>2022-2023</option>
                <option>2023-2024</option>
                <option>2024-2025</option>
                <option>2025-2026</option>
              </select>
            </div>

            <div className="sq-col">
              <label>Student Name *</label>
              <input type="text" placeholder="Enter Name" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Registration Date *</label>
              <input type="date" />
            </div>

            <div className="sq-col">
              <label>Date Of Birth *</label>
              <input type="date" />
            </div>
          </div>

          {/* Row 5 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Father Name *</label>
              <input type="text" placeholder="Enter Father Name" />
            </div>

            <div className="sq-col">
              <label>Mother Name *</label>
              <input type="text" placeholder="Enter Mother Name" />
            </div>
          </div>

          {/* Row 6 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Village Distance KM *</label>
              <input type="text" placeholder="Enter Distance KM" />
            </div>

            <div className="sq-col">
              <label>Parent's Contact No *</label>
              <input type="tel" placeholder="Enter Contact No" />
            </div>
          </div>

          {/* Row 7 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Candidate's Contact No *</label>
              <input type="tel" placeholder="Enter Contact No" />
            </div>

            <div className="sq-col">
              <label>Annual Income Of Father's *</label>
              <input type="text" placeholder="Enter Income" />
            </div>
          </div>

          {/* Row 8 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Gender *</label>
              <select>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="sq-col">
              <label>Nationality *</label>
              <select>
                <option>Indian</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Row 9 */}
          <div className="sq-row">
            <div className="sq-col">
              <label>Marital Status *</label>
              <select>
                <option>Select Marital Status</option>
                <option>Married</option>
                <option>Unmarried</option>
              </select>
            </div>

            <div className="sq-col">
              <label>Facility *</label>
              <select>
                <option>Select Facility</option>
                <option>Hostel</option>
                <option>College Vehicle</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* EDUCATION TABLE */}
          <section className="sq-section-title">Educational / Qualification Details</section>

          <table className="sq-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Name of Exam</th>
                <th>Board/University</th>
                <th>Passing Year</th>
                <th>Subject</th>
                <th>Marks</th>
                <th>Percentage</th>
                <th>Regular/Privet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>High School (SSLC)</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>

              <tr>
                <td>2.</td>
                <td>Intermediate</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>

              <tr>
                <td>3.</td>
                <td>Others</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
            </tbody>
          </table>

          {/* FILE UPLOADS */}
          <div className="sq-row">
            <div className="sq-col">
              <label>10th Marksheet *</label>
              <input type="file" />
            </div>
            <div className="sq-col">
              <label>12th Marksheet *</label>
              <input type="file" />
            </div>
          </div>

          <div className="sq-row">
            <div className="sq-col">
              <label>Transfer Certificate *</label>
              <input type="file" />
            </div>
            <div className="sq-col">
              <label>Character Marksheet *</label>
              <input type="file" />
            </div>
          </div>

          <div className="sq-row">
            <div className="sq-col">
              <label>Provisional Certificate *</label>
              <input type="file" />
            </div>
            <div className="sq-col">
              <label>Aadhar Image *</label>
              <input type="file" />
            </div>
          </div>

          <div className="sq-row">
            <div className="sq-col">
              <label>Bank Passbook *</label>
              <input type="file" />
            </div>
            <div className="sq-col">
              <label>Profile Image (Choose Two Images) *</label>
              <input type="file" multiple />
            </div>
          </div>

          {/* Submit */}
          <div className="sq-submit-wrap">
            <button className="sq-submit">Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}
