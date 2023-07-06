import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleClick = (index) => {
    const updatedMenuItems = menuItem.map((item, i) => {
      if (i === index) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });

    setMenuItem(updatedMenuItems);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 576);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItem = [
    {
      path: "/",
      name: "profile",
      icon: <i className="bi bi-file-person" />,
      isActive: false,
    },
    {
      path: "/report",
      name: "Report",
      icon: <i className="bi bi-graph-up-arrow" />,
      isActive: false,
    },
    {
      path: "/content",
      name: "Content",
      icon: <i className="bi bi-files" />,
      isActive: false,
    },
  ];

  return (
    <div className="container-fluid d-flex">
      <div className="row">
        <div
          style={{ width: isOpen ? "200px" : "50px" }}
          className="col-12 col-sm-2 sidebar bg-light vh-100"
        >
          <div className="top_section">
            <div
              style={{ marginLeft: isOpen ? "5px" : "0px" }}
              className="bars mb-4 d-flex"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
        <NavLink
        to={item.path}
        key={index}
        className={`nav-link link d-flex mb-4 text-dark`}
        activeClassName="active"
        >
        <div className="icon">{item.icon}</div>
        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
          {item.name}
        </div>
      </NavLink>
      
      
       
        
        
        
         
          
          ))}
        </div>
        <main className="col-12 col-sm-10">{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
