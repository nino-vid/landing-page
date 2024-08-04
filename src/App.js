import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header_container">
          <div className="nav_bar">
            <p>About us</p>
            <p>Projects</p>
            <p>Services</p>
            <p>Awards</p>
          </div>
          <div className="header-text">
            <h1>
              Transforming Spaces to Inspire
              <br />
              Lives with Innovative Design.
            </h1>
            <h3>
              Explore the craftmenship of our cutting-edge architecture <br />
              marvels that redefine contemporary living.
            </h3>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="div-1">
          <div className="div-1_left">
            <div className="div-1_left__top">
              <h1>
                Personalized Designs and <br />
                Sustainable Transformations
              </h1>
              <h4>
                We base our interior design approach on crafting spaces that are
                not only practiacl but also aesthatically striking. We are
                strong advocates for the impact of great design in altering
                lives.
              </h4>
            </div>
            <div className="div-1_left__bottom">
              <hr />
              <ul>
                <li>Innovative designs that inspire and captivate.</li>
                <li>Creating spaces that reflect your individual style.</li>
                <li>
                  Transforming ordinary spaces into extraordinary experiences.
                </li>
              </ul>
            </div>
          </div>
          <div className="div-1_right">
            <img
              src="/assets/images/IMG_20240803_151159_868-asddasd.jpg"
              alt="room"
            />
          </div>
        </div>
        <div className="div-2">
          <div className="div-2_left">
            <img
              src="/assets/images/IMG_20240803_151200_081-1000.jpg"
              alt="room"
            />
          </div>
          <div className="div-2_right">
            <div className="div-2_right__top">
              <h1>
                <span className="shadow-text">Discover </span> Our Expertise in
                <br />
                Design, Planning, and
                <br />
                Construction Management
              </h1>
            </div>
            <div className="div-2_right__bottom">
              <h4>
                Our interior design service focuses on optimizing your space
                whileincorporating sustainable practices, creating a harmonious
                and eco-friendly environment.
              </h4>
            </div>
          </div>
        </div>
        <div className="div-3">
          <div className="div-3_left">
            <h1>
              Revamp Your Space with Our
              <br />
              <span className="shadow-text">Professional </span>
              architecture Design Services
            </h1>
            <hr />
          </div>
          <div className="div-3_right">
            <div>
              <h3>Elevate Your Space with OurTailored Design Options</h3>
              <h4>
                Our skilled designers will collaborate closelly with you
                totransform your vision into reality.
              </h4>
              <p>
                Sign up <span>&#x2C3;</span>
              </p>
            </div>
            <div>
              <h3>Elevate Your Space with Our Tailored Design Options</h3>
              <h4>
                We provide a veriety of services to fulfill your interiordesign
                requirements, including constructions.
              </h4>
              <p>
                Learn more <span>&#x2C3;</span>
              </p>
            </div>
            <div>
              <h3>Get Inspired by Our Stunning Remarkable Design Portfolio</h3>
              <h4>
                Take a look at our portfolio to view the stunningenvironments we
                have designed for our clients.
              </h4>
              <p>
                View <span>&#x2C3;</span>
              </p>
            </div>
          </div>
        </div>
        <div className="div-4">
          <div className="div-4_top">
            <h1>
              Inspiring <span className="shadow-text">Designs</span> that
              Elevate Your Space and Spark Creativity
            </h1>
            <h4>
              Feel free to browse through our stunning collection of past
              projects atyour leisure.
            </h4>
          </div>
          <div className="div-4_bottom">
            <div className="img-container">
              <img
                src="/assets/images/IMG_20240803_151200_014-1000.jpg"
                alt="room"
                className="img-1"
              />
              <div className="vertical-line"></div>
            </div>
            <div className="img-container">
              <img
                src="/assets/images/IMG_20240803_151159_868-asddasd.jpg"
                alt="room"
              />
              <div className="vertical-line-2"></div>
            </div>
          </div>
        </div>
        <div className="div-5">
          <div className="div-5_left">
            <h1>
              Get Inspired with{" "}
              <span className="shadow-text">DesignTrends</span>
            </h1>
            <h3>
              Subscribe to our newsletter for the latest design tips, trends and
              companynews. Join our community of design enthusiasts and stay
              updated onindustry insights, exclusive offers, and upcoming
              events.
            </h3>
            <input type="email" placeholder="Enter your email" />
            <p>Subscribe for our Newsletter</p>
          </div>
          <div className="div-5_right">
            <img src="/assets/images/IMG_20240803_151159_683.png" alt="room" />
          </div>
        </div>
        <footer className="footer">
          <div className="footer_left">
            <h1>
              JakSite<span>&#174;</span>
            </h1>
          </div>
          <div className="footer_right">
            <div className="company">
              <h4>Company</h4>
              <p>About us</p>
              <p>Projects</p>
              <p>Service</p>
              <p>Shop</p>
            </div>
            <div className="resources">
              <h4>Resources</h4>
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Events</p>
              <p>Help center</p>
            </div>
            <div className="social">
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in icon"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-google-plus-g icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
