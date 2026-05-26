import bgImage from "../assets/bgImage.jpg"
const Nav = () => {
    return (
        <>
            <div className="px-30 py-5 bg-black text-white z-10" >
                <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{backgroundImage: `url(${bgImage})`}}>
                    
                </div>
                <div className="relative z-0">
                    <div className="py-30 flex flex-col items-center">
                        <div className="text-6xl font-bold w-150 text-center" >Unlimited movies, shows, and more</div>
                        <div className="py-5">Starts at ₹149. Cancel at any time.</div>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="py-5 font-bold text-[16px]">
                            <input className="border p-4 border-gray-500 pr-40 mr-5 rounded " type="text" placeholder="Email address" />
                            <button className="bg-red-600 p-4 px-10 rounded">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav