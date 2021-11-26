import React from 'react'
import Logo from "../../assets/Logo/LogoTransparent.png";

function Header() {
    return (
        <div style={styles.container}>
            <div class="logo" style={styles.logo}><img src={Logo} style={styles.logoImage} alt="LogoImage" /></div>
            <div class="navContent" style={styles.navContent}></div>
            <div class="social" style={styles.social}></div>
        </div>
    )
}

const styles = {
    container : {
        display:"flex",
        height: "60px",
        // backgroundColor:"red",
        justifyContent:"space-evenly",
        borderBottom:"1px solid tomato",
        boxShadow:"0px 0px 4px 4px #f5aa42"
    },
    logo:{
        // backgroundColor:"yellow",
        width: "20%"
    },
    logoImage:{
        fill:"tomato",
    },
    navContent:{
        // backgroundColor:"green",
        width:"60%",
    },
    social:{
        // backgroundColor:"cyan",
        width: "20%"
    }
}

export default Header
