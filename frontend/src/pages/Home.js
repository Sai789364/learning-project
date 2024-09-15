export const Home = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>We are the World Best Learning Platform</p>
                <h1>Learn-Next</h1>
                <p>
                Are you ready to elevate your learning experience with innovative educational solutions? Look no further! At Course-Vita, we specialize in delivering cutting-edge online courses and tools tailored to help you achieve your personal and professional goals.
                </p>
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">Connect Now</button>
                  </a>
                  <a href="/service">
                    <button className="btn secondary-btn">Learn More</button>
                  </a>
                </div>
              </div>
  
              {/* Hero images */}
              <div className="hero-image">
                <img
                  src="/images/home.png"
                  alt="coding together"
                  width="400"
                  height="500"
                />
              </div>
            </div>
          </section>
        </main>
  
        {/* 3rd section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* Hero images */}
            <div className="hero-image">
              <img
                src="/images/design.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
  
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how Thapa Technical can help your business thrive in
                the digital age.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  export default Home;