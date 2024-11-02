import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const options = [
//   {
//     name: 'Enable backdrop (default)',
//     scroll: false,
//     backdrop: true,
//   },
//   {
//     name: 'Disable backdrop',
//     scroll: false,
//     backdrop: false,
//   },
//   {
//     name: 'Enable body scrolling',
//     scroll: true,
//     backdrop: false,
//   },
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <button onClick={toggleShow} className="NavButton">
        <GiHamburgerMenu/>
      </button>
      <Offcanvas show={show} onHide={handleClose} placement='end' className="custom-offcanvas" {...props}>
        <Offcanvas.Header closeButton className="custom-offcanvas-header">
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body className="custom-offcanvas-body">
          <div id='pages'>
            <Link className='navlinks' to="/">Home</Link>
            <Link className='navlinks' to="/about">About</Link>
            <Link className='navlinks' to="/strategy">Strategy</Link>
            <Link className='navlinks' to="/career">Career</Link>
            <Link className='navlinks' to="/contact">Contact</Link>
          </div>
          <div id='socials'>
            socials
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function NavSidebar() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

export default NavSidebar;