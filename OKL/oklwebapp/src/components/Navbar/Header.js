import React from 'react'
import Logo from "../../assets/Logo/LogoWhite.svg";

function Header() {
    return (
        <div style={styles.container}>
            <div class="logo" style={styles.logo}><img src={Logo} style={styles.logoImage} alt="LogoImage" /><h1 style={styles.logoHeader}>OKidzLabs</h1></div>
            <div class="navContent" style={styles.navContent}>
                <ul style={styles.navList}>
                    <li><a style={styles.navLinks} href="#">Home</a></li>
                    <li><a style={styles.navLinks} href="#">Home</a></li>
                    <li><a style={styles.navLinks} href="#">Home</a></li>
                    <li><a style={styles.navLinks} href="#">Home</a></li>
                </ul>
            </div>
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
        display:"flex",
        color:"tomato",
        alignItems:"orange",
        fontFamily:"cursive",
        width: "250px",
        marginLeft:"10px",
    },
    logoImage:{
        height:"58px",
        color:"orange",
        fill : "orange"
    },
    logoHeader:{
        fontSize:"26px",
        fontFamily:"cursive"
    },
    navContent:{
        // backgroundColor:"green",
        width:"60%",
    },
    navList:{
        display:"flex",
        listStyle:"none",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    social:{
        // backgroundColor:"cyan",
        width: "20%"
    }
}

export default Header
