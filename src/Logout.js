import React from 'react'
import { removeCookie } from './Cookies'

const Logout = () => {
    window.localStorage.setItem("rEmail", "")
    window.localStorage.setItem("loginstatus", "false")
    removeCookie("MY AT")
    window.location.href = "/"
    return (
        <div>Logout</div>
    )
}

export default Logout