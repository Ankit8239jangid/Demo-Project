import LeftSection from "../Login_Page/LeftSection";
import RightSection from "../Login_Page/RightSection";


function LoginCard() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/2 md:block hidden bg-gray-50">
      <LeftSection/>
      </div>
      <div className="md:w-1/2 bg-white">
        <RightSection/>
      </div>
    </div>
  );
}

export default LoginCard;


