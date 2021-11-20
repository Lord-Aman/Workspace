import React, { useContext } from "react";
import { Button, Box } from "theme-ui";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "components/drawer";
import { Link } from "components/link";

import { DrawerContext } from "contexts/drawer/drawer.context";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import menuItems from "./header.data";
import Logo from "components/logo";
import { Dropdown } from "react-bootstrap";
import "./header.css";

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo />
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
            <Dropdown>
              <Dropdown.Toggle className="dropdown" id="dropdown-basic">
                Our Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link path="/webdev" label="Web Developement" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/appdev" label="App Developement" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/socialmedia" label="Social Media Management" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/graphicdesign" label="Graphics Design" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/videoprod" label="Video Production" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/contentwriting" label="Content Writing" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/leadgeneration" label="Lead Generation" />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link path="/seomanagement" label="SEO Management" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Box>

          <Box sx={styles.menuFooter}>
            <Link path="/contactus" label="Contact Us" sx={styles.button} />
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 960px)": {
      display: "none",
    },
  },

  drawer: {
    width: "100%",
    height: "100%",
    background: "#fff",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "30px",
    right: "30px",
    zIndex: "1",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    pt: "30px",
    pb: "40px",
    px: "30px",
  },

  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "30px",

    a: {
      fontSize: "16px",
      fontWeight: "400",
      color: "black",
      py: "5px",
      cursor: "pointer",
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  button: {
    fontSize: "15px",
    fw: "700",
    height: "48px",
    borderRadius: "3px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
    backgroundColor: "#0b3257",
    color: "#fff",
  },
};

export default MobileDrawer;
