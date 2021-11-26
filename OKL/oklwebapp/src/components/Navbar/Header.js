import React from 'react'

function Header() {
    return (
        <div styles={styles.Container}>
            <div class="logo" ></div>
            <div class="navContent"></div>
            <div class="social"></div>
        </div>
    )
}

const styles = {
    Container : {
        height: "60px",
        backgroundColor:"red"
    }
}

export default Header
