
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Admissions() {
  const [currentStep, setCurrentStep] = useState(1);
  const [programmes, setProgrammes] = useState([]);
  const [loadingProgrammes, setLoadingProgrammes] = useState(true);
  const [programmeError, setProgrammeError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    residential_address: "",
    next_of_kin_name: "",
    next_of_kin_phone: "",
    previous_school: "",
    highest_qualification: "",
    qualification_year: "",
    programme_id: "",
    second_programme_id: "",
    study_mode: "",
    message: "",
    declaration_accepted: false
  });

  // LOAD PROGRAMMES FROM POSTGRESQL
  useEffect(() => {
    const fetchProgrammes = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/programmes"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error("Unable to load programmes.");
        }

        setProgrammes(data.programmes || []);
      } catch (error) {
        setProgrammeError(
          "We could not load programmes. Please refresh the page."
        );
      } finally {
        setLoadingProgrammes(false);
      }
    };

    fetchProgrammes();
  }, []);

  // UPDATE FORM FIELDS
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value
    }));

    setErrorMessage("");
  };

  // VALIDATE EACH STEP
  const validateStep = () => {
    let requiredFields = [];

    if (currentStep === 1) {
      requiredFields = [
        "firstName",
        "lastName",
        "date_of_birth",
        "gender",
        "nationality"
      ];
    }

    if (currentStep === 2) {
      requiredFields = [
        "email",
        "phone",
        "residential_address"
      ];
    }

    if (currentStep === 3) {
      requiredFields = [
        "previous_school",
        "highest_qualification",
        "qualification_year"
      ];
    }

    if (currentStep === 4) {
      requiredFields = [
        "programme_id",
        "study_mode"
      ];
    }

    for (const field of requiredFields) {
      if (!String(formData[field]).trim()) {
        setErrorMessage("Please complete all required fields.");
        return false;
      }
    }

    if (currentStep === 2) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(formData.email.trim())) {
        setErrorMessage("Please enter a valid email address.");
        return false;
      }
    }

    if (currentStep === 3) {
      const year = Number(formData.qualification_year);
      const currentYear = new Date().getFullYear();

      if (
        !Number.isInteger(year) ||
        year < 1950 ||
        year > currentYear
      ) {
        setErrorMessage("Please enter a valid qualification year.");
        return false;
      }
    }

    if (currentStep === 4) {
      if (
        formData.second_programme_id &&
        formData.second_programme_id === formData.programme_id
      ) {
        setErrorMessage(
          "Your second choice must be different from your first choice."
        );
        return false;
      }
    }

    setErrorMessage("");
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((previousStep) => previousStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    setErrorMessage("");
    setCurrentStep((previousStep) => previousStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SUBMIT APPLICATION TO BACKEND
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.declaration_accepted) {
      setErrorMessage(
        "Please accept the applicant declaration before submitting."
      );
      return;
    }

    if (
      formData.second_programme_id &&
      formData.second_programme_id === formData.programme_id
    ) {
      setErrorMessage(
        "Your second choice must be different from your first choice."
      );
      setCurrentStep(4);
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            applicant_name:
              `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone,
            date_of_birth: formData.date_of_birth,
            gender: formData.gender,
            nationality: formData.nationality,
            residential_address: formData.residential_address,
            next_of_kin_name: formData.next_of_kin_name,
            next_of_kin_phone: formData.next_of_kin_phone,
            previous_school: formData.previous_school,
            highest_qualification: formData.highest_qualification,
            qualification_year: Number(formData.qualification_year),
            programme_id: Number(formData.programme_id),
            second_programme_id:
              formData.second_programme_id
                ? Number(formData.second_programme_id)
                : null,
            study_mode: formData.study_mode,
            message: formData.message,
            declaration_accepted: formData.declaration_accepted
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Your application could not be submitted."
        );
      }

      setSuccess(data.application);

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const getProgrammeName = (id) => {
    const programme = programmes.find(
      (item) => String(item.id) === String(id)
    );

    return programme ? programme.programme_name : "Not selected";
  };

  // SUCCESS SCREEN
  if (success) {
    return (
      <div className="admissions-page">
         {/* TOP UTILITY BAR */}
              <div className="top-bar">
                <div className="top-bar-container">
                  <div className="top-left">
                    <span></span>
                  </div>
        
                  <div className="top-right">
                    <Link to="/students">Students</Link>
                    <Link to="/e-learning">E-Learning </Link>
                    <Link to="/contact">Staff</Link>
                    <Link to="/contact">Alumni</Link>
                    <Link to="/contact">Giving</Link>
                  </div>
                </div>
              </div>
        <header className="crane-about-header">
          
         <Link to="/" aria-label="Crane College home">
             <img
               src="/crane.ico"
               alt="Crane College Logo"
               className="logo-image"
             />
           </Link>
           

          <nav className="crane-about-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <div className="application-success-page">
          <div className="application-success-card">
            <div className="success-icon">✓</div>
            <p className="section-label">APPLICATION RECEIVED</p>
            <h1>Thank you for applying!</h1>

            <p>
              Your application has been submitted successfully.
              Our admissions team will review your information.
            </p>

            <div className="reference-box">
              <span>YOUR APPLICATION REFERENCE</span>
              <strong>{success.reference_number}</strong>
            </div>

            <p className="success-note">
              Please keep this reference number for future enquiries.
            </p>

            <Link to="/" className="application-home-button">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admissions-page">

      {/* HEADER */}
      <header className="crane-about-header">
        <Link to="/" aria-label="Crane College home">
            <img
              src="/crane.ico"
              alt="Crane College Logo"
              className="logo-image"
            />
          </Link>

        <nav className="crane-about-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programmes">Programmes</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="page-hero">
        <div>
          <p className="welcome">CRANE COLLEGE ADMISSIONS</p>
          <h1>Begin Your Academic Journey.</h1>
          <p>
            Apply to join our academic community and take
            the next step towards your future.
          </p>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="admissions-form-section">
        <div className="application-container">

          <div className="application-heading">
            <p className="section-label">ONLINE APPLICATION</p>
            <h2>Application for Admission</h2>
            <p>
              Complete all five sections to submit your application.
              Fields marked with * are required.
            </p>
          </div>

          {/* PROGRESS */}
          <div className="application-progress">
            <div className="progress-information">
              <span>Application progress</span>
              <strong>Step {currentStep} of 5</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${currentStep * 20}%` }}
              ></div>
            </div>

            <div className="step-labels">
              <span className={currentStep >= 1 ? "active" : ""}>Personal</span>
              <span className={currentStep >= 2 ? "active" : ""}>Contact</span>
              <span className={currentStep >= 3 ? "active" : ""}>Academic</span>
              <span className={currentStep >= 4 ? "active" : ""}>Programme</span>
              <span className={currentStep >= 5 ? "active" : ""}>Review</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="university-application-form">

            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="application-step-content">
                <div className="step-heading">
                  <span>01</span>
                  <div>
                    <h3>Personal Information</h3>
                    <p>Tell us about yourself.</p>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your surname"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Date of Birth *</label>
                    <input
                      type="date"
                      name="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Nationality *</label>
                  <input
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="e.g. Mosotho"
                  />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="application-step-content">
                <div className="step-heading">
                  <span>02</span>
                  <div>
                    <h3>Contact Information</h3>
                    <p>How can Crane College contact you?</p>
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Residential Address *</label>
                  <textarea
                    name="residential_address"
                    value={formData.residential_address}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Enter your current residential address"
                  />
                </div>

                <h4 className="form-subheading">Next of Kin (Optional)</h4>

                <div className="form-row">
                  <div className="form-group">
                    <label>Next of Kin Full Name</label>
                    <input
                      name="next_of_kin_name"
                      value={formData.next_of_kin_name}
                      onChange={handleChange}
                      placeholder="Full name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Next of Kin Phone</label>
                    <input
                      type="tel"
                      name="next_of_kin_phone"
                      value={formData.next_of_kin_phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="application-step-content">
                <div className="step-heading">
                  <span>03</span>
                  <div>
                    <h3>Academic Background</h3>
                    <p>Provide details of your previous education.</p>
                  </div>
                </div>

                <div className="form-group">
                  <label>Previous School or Institution *</label>
                  <input
                    name="previous_school"
                    value={formData.previous_school}
                    onChange={handleChange}
                    placeholder="Name of your previous school"
                  />
                </div>

                <div className="form-group">
                  <label>Highest Qualification Obtained *</label>
                  <select
                    name="highest_qualification"
                    value={formData.highest_qualification}
                    onChange={handleChange}
                  >
                    <option value="">Select qualification</option>
                    <option value="High School Certificate">
                      High School Certificate
                    </option>
                    <option value="Diploma">Diploma</option>
                    <option value="Higher Certificate">
                      Higher Certificate
                    </option>
                    <option value="Bachelor's Degree">
                      Bachelor's Degree
                    </option>
                    <option value="Postgraduate Qualification">
                      Postgraduate Qualification
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Year Qualification Was Obtained *</label>
                  <input
                    type="number"
                    name="qualification_year"
                    value={formData.qualification_year}
                    onChange={handleChange}
                    min="1950"
                    max={new Date().getFullYear()}
                    placeholder="e.g. 2025"
                  />
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <div className="application-step-content">
                <div className="step-heading">
                  <span>04</span>
                  <div>
                    <h3>Programme Selection</h3>
                    <p>Choose the programme you wish to study.</p>
                  </div>
                </div>

                {programmeError && (
                  <p className="form-error">{programmeError}</p>
                )}

                <div className="form-group">
                  <label>First Choice Programme *</label>
                  <select
                    name="programme_id"
                    value={formData.programme_id}
                    onChange={handleChange}
                    disabled={loadingProgrammes || programmes.length === 0}
                  >
                    <option value="">
                      {loadingProgrammes
                        ? "Loading programmes..."
                        : "Select first choice"}
                    </option>

                    {programmes.map((programme) => (
                      <option key={programme.id} value={programme.id}>
                        {programme.programme_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Second Choice Programme (Optional)</label>
                  <select
                    name="second_programme_id"
                    value={formData.second_programme_id}
                    onChange={handleChange}
                    disabled={loadingProgrammes || programmes.length === 0}
                  >
                    <option value="">Select second choice</option>

                    {programmes
                      .filter(
                        (programme) =>
                          String(programme.id) !== formData.programme_id
                      )
                      .map((programme) => (
                        <option key={programme.id} value={programme.id}>
                          {programme.programme_name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Preferred Study Mode *</label>
                  <select
                    name="study_mode"
                    value={formData.study_mode}
                    onChange={handleChange}
                  >
                    <option value="">Select study mode</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Distance Learning">Distance Learning</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Additional Information (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any additional information for the admissions office"
                  />
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {currentStep === 5 && (
              <div className="application-step-content">
                <div className="step-heading">
                  <span>05</span>
                  <div>
                    <h3>Review Your Application</h3>
                    <p>Check your information before submitting.</p>
                  </div>
                </div>

                <div className="review-section">
                  <h4>Personal Information</h4>
                  <p><strong>Full Name:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Date of Birth:</strong> {formData.date_of_birth}</p>
                  <p><strong>Gender:</strong> {formData.gender}</p>
                  <p><strong>Nationality:</strong> {formData.nationality}</p>
                </div>

                <div className="review-section">
                  <h4>Contact Information</h4>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Address:</strong> {formData.residential_address}</p>
                  <p><strong>Next of Kin:</strong> {formData.next_of_kin_name || "Not provided"}</p>
                  <p><strong>Next of Kin Phone:</strong> {formData.next_of_kin_phone || "Not provided"}</p>
                </div>

                <div className="review-section">
                  <h4>Academic Background</h4>
                  <p><strong>Previous School:</strong> {formData.previous_school}</p>
                  <p><strong>Qualification:</strong> {formData.highest_qualification}</p>
                  <p><strong>Year Obtained:</strong> {formData.qualification_year}</p>
                </div>

                <div className="review-section">
                  <h4>Programme Selection</h4>
                  <p><strong>First Choice:</strong> {getProgrammeName(formData.programme_id)}</p>
                  <p><strong>Second Choice:</strong> {formData.second_programme_id ? getProgrammeName(formData.second_programme_id) : "Not selected"}</p>
                  <p><strong>Study Mode:</strong> {formData.study_mode}</p>
                </div>

                <div className="declaration-box">
                  <label className="declaration-label">
                    <input
                      type="checkbox"
                      name="declaration_accepted"
                      checked={formData.declaration_accepted}
                      onChange={handleChange}
                    />

                    <span>
                      I declare that the information provided in this
                      application is true and complete to the best of
                      my knowledge. I understand that providing false
                      information may affect my application.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="form-error">
                {errorMessage}
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            <div className="application-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="previous-button"
                  onClick={handlePrevious}
                  disabled={submitting}
                >
                  ← Previous
                </button>
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  className="next-button"
                  onClick={handleNext}
                >
                  Save & Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  className="next-button"
                  disabled={submitting || loadingProgrammes}
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </div>

            <p className="application-security-note">
              Your application information will be submitted securely
              to the Crane College admissions system.
            </p>

          </form>
        </div>
      </section>
    </div>
  );
}

export default Admissions;
