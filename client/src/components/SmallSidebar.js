import { FaTimes } from "react-icons/fa";
import SmallSidebarWrapper from "../assets/wrappers/SmallSidebar";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <SmallSidebarWrapper>
      <div className={`sidebar-container ${showSidebar && "show-sidebar"}`}>
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </SmallSidebarWrapper>
  );
};
export default SmallSidebar;
