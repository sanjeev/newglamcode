export default function Confirmation() {
    return (<div className="wrapper" id="confirmation">
        <main className="main-content">
            <div className="checkout-all">
                <div className="thanksImg">
                    <span className="material-symbols-outlined iconsixe">
                        <svg xmlns="http://www.w3.org/2000/svg" width={150} height={150} viewBox="0 0 24 24"><path fill="blue" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45Zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6ZM12 12Zm-1.05 3.55L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12Z" /></svg>
                    </span>
                </div>
                <p className="thankstitle">Thank You</p>
                <p className="thankssubtitle">For availing services from us</p>
                <p className="thanksinside">Just a second we’re sending the order details to your email/phone</p>
                <div className="hrading-section">
                    <p className="subtitle-all">if you choose to cancel, you can do it anytime before 4 Hours of the appointment time. Post which a cancellation  fee will we charged of  ₹200</p>
                    <div className="inside-section-bg">
                        <p className="thinsidetext">Note- Dear customer! your timely contribution can provide this        opportunity to other needed customer</p>
                    </div>
                </div>
                <div className="spaBeet">
                    <div>
                        <a href="/">
                            <button className="Homebutton">Home</button>
                        </a>
                    </div>
                    <div>
                        <a href="/mybookings">
                            <button className="Bookbutton">My Booking</button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </div>
    )

}