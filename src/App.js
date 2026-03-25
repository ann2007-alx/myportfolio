import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [modalImg, setModalImg] = useState("");

  const showPage = (p) => setPage(p);

  const openModal = (src) => setModalImg(src);

  const closeModal = () => setModalImg("");

  const sendFeedback = (e) => {
    e.preventDefault();
    alert("Feedback submitted!");
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav>
        <button onClick={() => showPage("home")}>Home</button>
        <button onClick={() => showPage("skills")}>Skills</button>
        <button onClick={() => showPage("certificates")}>Certificates</button>
        <button onClick={() => showPage("contact")}>Contact</button>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div className="container">
          <div className="card">
            <img src="/profile.jpeg" className="profile" alt="profile" />
            <h1>Marie Ann Saniya V</h1>
            <div className="typing">Web Developer</div>
          </div>
        </div>
      )}

      {/* SKILLS */}
      {page === "skills" && (
        <div className="container">
          <div className="card">
            <h2>💻 Skills</h2>
            <p>HTML, CSS, JavaScript, Python, GitHub, Cloud Computing</p>

            <h2>🎓 Education</h2>
            <p>BCA in Cloud Computing</p>
            <p>Kristu Jayanti University</p>
          </div>
        </div>
      )}

      {/* CERTIFICATES */}
      {page === "certificates" && (
        <div className="container">
          <div className="card">
            <h2>📜 Certificates</h2>
            <div className="certificates">
              <img src="/html_certificate2.jpeg" alt="certificate" onClick={() => openModal("/html_certificate2.jpeg")} />
              <img src="/aws_certificate1.jpeg" alt="certificate" onClick={() => openModal("/aws_certificate1.jpeg")} />
              <img src="/css_certificate3.jpeg" alt="certificate" onClick={() => openModal("/css_certificate3.jpeg")} />
              <img src="/javascript_certificate4.jpeg" alt="certificate" onClick={() => openModal("/javascript_certificate4.jpeg")} />
              <img src="/frontendweb_certificate5.jpeg" alt="certificate" onClick={() => openModal("/frontendweb_certificate5.jpeg")} />
              <img src="/nodejs_certificate6.jpeg" alt="certificate" onClick={() => openModal("/nodejs_certificate6.jpeg")} />
              <img src="/github_certificate7.jpeg" alt="certificate" onClick={() => openModal("/github_certificate7.jpeg")} />
            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <div className="container">
          <div className="card">
            <h2>📞 Contact</h2>
            <p>📧 saniyaa51015@gmail.com</p>
            <p>🔗 https://www.linkedin.com/in/marie-ann-saniya-v-19a651379</p>
            <p>💻 https://github.com/ann2007-alx/portfolio</p>

            <h2>💬 Feedback</h2>

            <form onSubmit={sendFeedback}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL */}
      {modalImg && (
        <div className="modal" onClick={closeModal}>
          <span>&times;</span>
          <img src={modalImg} alt="certificate" />
        </div>
      )}

    </div>
  );
}

export default App;
  