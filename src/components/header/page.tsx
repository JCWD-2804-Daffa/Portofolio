import { TypeAnimation } from 'react-type-animation';
import 'boxicons'

const Header = () => {
  
  return (
    <div>
    <header className="header">
        <a href="#" className="logo">Portofolio</a>

          <nav className="navbar">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Portfolio</a>
          </nav>
      </header>
      <section className="home">
      <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Daffa Naufal Ramadhan</h1>
          <h3 className='text-2xl'>
            And I'm a {" "}
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'Fulltack Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', fontWeight: 'bold' }}
              repeat={Infinity}
            />
          </h3>
          
          <p>
            I'm a web Developer with extensive experience for over 3 years.
            <br/>expertise is to create and web design, frontend design
          </p>
          <div className="home-sci">
            <a href="daffanr20@gmail.com"><i className='bx bx-envelope' ></i></a>
            <a href="https://www.linkedin.com/in/daffa-naufal/"><i className="bx bxl-linkedin"></i></a>
            <a href="https://wa.link/td85jq"><i className="bx bxl-whatsapp"></i></a>
            <a href="https://www.instagram.com/daffnr/"><i className="bx bxl-instagram"></i></a>
            <a href="#"><i className="bx bxl-tiktok"></i></a>
          </div>
          <a href="#" className="btn-box">More About Me</a>
          
          </div>
    </section>
    </div>
  )
}

export default Header;
