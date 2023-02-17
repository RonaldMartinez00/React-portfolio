import React, { useState } from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="tie-head">
        <img
          id="background-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvHRH6yYvPGTQvZiDSA-JdkqRWkDUX3AhDw&usqp=CAU"
          alt="Blue background abstract image."
        />
        <h1>Ronald's Portfolio</h1>
      </div>
      <Nav />
    </header>
  );
}

function Nav() {
  const [activeSection, setActiveSection] = useState("Me");

  function handleNavClick(section) {
    setActiveSection(section);
  }

  return (
    <nav className="topnav">
      <ul>
        <li>
          <a onClick={() => handleNavClick("Me")} href="#Me">
            About Me
          </a>
        </li>
        <li>
          <a onClick={() => handleNavClick("Work")} href="#work">
            My Work
          </a>
        </li>
        <li>
          <a onClick={() => handleNavClick("Contact")} href="#contact">
            Contact Me
          </a>
        </li>
      </ul>
      <div className="active-section">{activeSection}</div>
    </nav>
  );
}

function Project(props) {
  return (
    <div className="workbox1">
      <img className="images" src={props.image} alt={props.alt} />
      <a className="worklink" href={props.link}>
        {props.title}
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Ronald Martinez</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Welcome to my personal portfolio!</p>
        <img
          id="mepic"
          src="assets/IMG_4639_Original.jpg"
          alt="Photo of Ronald Martinez (myself)"
        />
        <section id="Me">
          <h2>About Me</h2>
          <p>
            I am born and raised in San Diego and i am currently 21 years old. I
            am currently a beginner in the world of coding but aspire to be a
            professional in due time, thanks to the work of the University of
            Arizona coding bootcamp!
          </p>
          <b>Education</b>
          <ul id="school">
            <li>Graduated Highschool</li>
            <li>Some college courses</li>
            <li>Currently enrolled in the University of Arizona Coding Bootcamp</li>
          </ul>
        </section>
        <section id="work">
          <h3>My Work</h3>
          <div id="work-container">
            <Project
              image="assets/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg"
              alt="Image of fans in a live concert."
              link="https://dine-diaryfe.herokuapp.com/"
              title="DineDiary"
            />
            <div className="wbox2-container">
              <Project
                image="assets/Forum.jpg"
                alt="image of laptop opened with a notebook and pen."
                link="https://shroud-forum-73292.herokuapp.com/"
                title="Shroud Forum"
                />...
                <Project
                  image="assets/Forum.jpg"
                  alt="image of laptop opened with a notebook and pen."
                  link="https://shrouded-cove-89923.herokuapp.com/"
                  title="Forum for Gamers"
                />
                <Project
                  image="assets/Workout.jpg"
                  alt="image of a phone displaying a workout app."
                  link="https://ron-avi-wkout.herokuapp.com/"
                  title="Ron-Avi-Workout"
                />
              </div>
              </div>
              </section>
              <section id="contact">
                <h2>Contact Me</h2>
                <form>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
              
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
              
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>
              
                  <input type="submit" value="Submit" />
                </form>
              </section>
              </main>
              <Footer />
    </div>
    );
}
              
