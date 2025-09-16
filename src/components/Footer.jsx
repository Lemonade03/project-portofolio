const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="flex gap-7">
            <a href="#beranda" className="sm:text-lg text-base font-medium
                 hover:text-blue-600 transition-colors duration-300">Beranda</a>
            <a href="#tentang" className="sm:text-lg text-base font-medium
                 hover:text-blue-600 transition-colors duration-300">Tentang</a>
            <a href="#proyek" className="sm:text-lg text-base font-medium
                 hover:text-blue-600 transition-colors duration-300">Proyek </a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/Lemonade03?tab=repositories" target="_blank">
                <i className="ri-github-fill ri-2x 
                 hover:text-blue-600 transition-colors duration-300" ></i>
            </a>
            <a href="https://www.instagram.com/riiizqyramadhan/" target="_blank">
                <i className="ri-instagram-fill ri-2x 
                 hover:text-blue-600 transition-colors duration-300"></i>
            </a>            
            <a href="https://www.linkedin.com/in/mohammadrizqyramadhan/" target="_blank">
                <i className="ri-linkedin-fill ri-2x 
                 hover:text-blue-600 transition-colors duration-300"></i>
            </a>
        </div>
    </div>
  );
};

export default Footer 

/*const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#">Beranda</a>
            <a href="#">Tentang</a>
            <a href="#">Proyek</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-tiktok-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
        </div>
    </div>
  );
};

export default Footer  */