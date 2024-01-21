import React, { useState } from 'react'
import QRCode from "react-qr-code";

const Home = () => {
    const [qrcode, setqrcode] = useState('')
    const [show, setshow] = useState(false)
    const showQRSEC = (value) => {
        if (value === "") {
            setshow(false)
        } else {
            setqrcode(value)
        }
    }
    const genrateCode = () => {
        setshow(false)
        setshow(true)
    }
    return (
        <div className='home'>
            <div className="heading">
                <h2>Enter the text below to genrate QRcode</h2>
                <div className="form-box">
                    <input type="text" onChange={(e) => showQRSEC(e.target.value)} />
                    <button type="submit" onClick={genrateCode}>Genrate QR</button>
                </div>
                <div className={show ? "removable-download-box" : "hide"}>
                    <div className="qrbox">
                        <div className="qr-image">
                            <QRCode value={qrcode} />
                        </div>
                        <div className="qrAction">
                            {/* <button>Download</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home