import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false); // State for chatbot
  const [chatStep, setChatStep] = useState(0); // Step in chatbot conversation
  const [symptom, setSymptom] = useState(""); // User's symptom input
  const [medicine, setMedicine] = useState(""); // Suggested medicine

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : ""
  );

  const logoutFunc = () => {
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
    navigate("/login");
  };

  const prescribeMedicine = (symptom) => {
    const prescriptions = {
      cold: "Paracetamol and Vitamin C supplements",
      fever: "Ibuprofen or Acetaminophen",
      headache: "Aspirin or Ibuprofen",
      cough: "Cough syrup with Dextromethorphan",
    };
    return prescriptions[symptom.toLowerCase()] || "Consult a doctor for proper diagnosis.";
  };

  const handleChatSubmit = () => {
    const prescribed = prescribeMedicine(symptom);
    setMedicine(prescribed);
    setChatStep(2); // Move to the final step
  };

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        <h2 className="nav-logo">
          <NavLink to={"/"}>Integrated Healthcare Solution</NavLink>
        </h2>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/doctors"}>Doctors</NavLink>
          </li>
          {token && user.isAdmin && (
            <li>
              <NavLink to={"/dashboard/users"}>Dashboard</NavLink>
            </li>
          )}
          {token && !user.isAdmin && (
            <>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <NavLink to={"/applyfordoctor"}>Apply for doctor</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </>
          )}
          {!token ? (
            <>
              <li>
                <NavLink
                  className="btn"
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="btn"
                  to={"/register"}
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <span
                className="btn"
                onClick={logoutFunc}
              >
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>

      {/* Chatbot Button */}
      <div className="chatbot-button" onClick={() => setChatbotOpen(!chatbotOpen)}>
        💬 Chatbot
      </div>

      {/* Chatbot Modal */}
      {chatbotOpen && (
        <div className="chatbot-modal">
          <h3>Health Tips Chatbot</h3>
          {chatStep === 0 && (
            <>
              <p>Hello! What symptom are you experiencing?</p>
              <input
                type="text"
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                placeholder="Enter your symptom (e.g., cold)"
              />
              <button onClick={() => setChatStep(1)}>Next</button>
            </>
          )}
          {chatStep === 1 && (
            <>
              <p>You mentioned: {symptom}. Let me find a suggestion for you.</p>
              <button onClick={handleChatSubmit}>Get Medicine</button>
            </>
          )}
          {chatStep === 2 && (
            <>
              <p>Suggested Medicine: {medicine}</p>
              <button onClick={() => setChatbotOpen(false)}>Close</button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;