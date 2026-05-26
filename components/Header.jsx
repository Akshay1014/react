const Header = () => {
    return (
        <div className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-gradient-to-b from-black z-50">

            {/* Logo */}
            <img
                className="w-32"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="logo"
            />

            {/* Right Section */}
            <div className="flex items-center gap-4">
                <button className="text-white">GPT Search</button>

                <img
                    className="w-10 rounded"
                    src="https://i.pravatar.cc/40"
                    alt="user"
                />

                <button className="text-white">Sign Out</button>
            </div>
        </div>
    );
};

export default Header;