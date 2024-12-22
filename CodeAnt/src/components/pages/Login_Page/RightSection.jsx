import React, { useState } from "react";
import { Right_Auth_Page_Data } from "../../../Fixed_Data/Fix.Data";
import { NavLink } from "react-router-dom";

function RightSection() {
    const [isSAAS, setIsSAAS] = useState(true); // Default to SAAS

    return (
        <div className="flex flex-col justify-center  h-screen items-center  bg-[#FAFAFA] px-6">
            <div className="w-full max-w-md md:mt-5 mt-0 bg-[#fff] border-[1px] rounded-xl  ">
                {/* Header Section */}
                <div className="flex flex-col items-center  border-b-[1px] pb-4 pt-3">
                    <div className="flex gap-2 justify-center ">
                        <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6142 0.159087C18.2303 0.232699 17.633 0.400956 17.281 0.527148C16.9291 0.653341 16.1825 0.979338 15.6278 1.25275C15.0732 1.52617 14.1133 2.08352 13.4947 2.49365C12.8761 2.90377 11.9162 3.62938 11.3616 4.12363C10.807 4.60737 10.039 5.35401 9.65508 5.78517C9.27112 6.20581 8.58852 7.0576 8.11923 7.66753C7.6606 8.27746 6.95667 9.31855 6.56204 9.98106C6.15675 10.6436 5.55947 11.7583 5.21817 12.4523C4.88754 13.1464 4.39691 14.2611 4.14094 14.9236C3.8743 15.5861 3.54366 16.6062 3.39434 17.1845C3.1917 18.0048 3.11704 18.6042 3.07437 19.9187C3.03171 21.0229 3.06371 21.8747 3.14903 22.39C3.22369 22.8211 3.39434 23.4837 3.52233 23.8622C3.65032 24.2408 3.89563 24.8087 4.05561 25.1242C4.2156 25.4396 4.5569 25.9654 4.80221 26.2809C5.04752 26.5964 5.48481 27.0486 5.77278 27.2799C6.06076 27.5113 6.65803 27.9004 7.09532 28.1423C7.53262 28.3946 8.62051 28.8784 9.4951 29.2149C10.3803 29.5619 11.6709 30.0141 12.3748 30.2244C13.0788 30.4347 14.2306 30.6976 14.9346 30.8238C15.9905 31.0026 16.5131 31.0236 17.921 30.9816C19.1688 30.9395 19.8621 30.8764 20.4807 30.7082C20.95 30.5925 21.7393 30.2875 22.2299 30.0457C22.8058 29.7617 23.3498 29.3831 23.7337 29.0151C24.0644 28.6891 24.4697 28.1633 24.6403 27.8057C24.907 27.2694 24.9603 27.0276 24.9923 26.1758C25.0243 25.3765 24.9816 24.9769 24.7683 24.1777C24.6297 23.6309 24.3097 22.716 24.0644 22.1586C23.8297 21.5908 23.3818 20.6864 23.0725 20.1606C22.7632 19.6243 22.1552 18.7094 21.7073 18.131C21.27 17.5526 20.5234 16.7008 20.0541 16.2276C19.5848 15.7649 18.8062 15.0813 18.3263 14.7028C17.857 14.3347 17.3877 14.0297 17.2917 14.0297C17.1957 14.0297 17.121 14.0508 17.121 14.0823C17.121 14.1139 17.4197 14.4188 17.7716 14.7659C18.1343 15.1129 18.6889 15.7018 18.9982 16.0804C19.3075 16.4589 19.5741 16.806 19.5741 16.8691C19.5741 16.9322 19.0835 16.4589 18.4756 15.8175C17.8676 15.176 17.1104 14.4609 16.7904 14.219C16.4704 13.9772 15.9265 13.6091 15.5745 13.3988C15.2226 13.199 14.5506 12.9045 14.0813 12.7468C13.4094 12.5365 13.0041 12.4734 12.1615 12.4734C11.4576 12.4628 10.8923 12.5259 10.5083 12.6416C10.1884 12.7363 9.69774 12.9571 9.42044 13.1359L8.90849 13.4514C8.73784 12.9256 8.69517 12.5996 8.69517 12.3998C8.69517 12.1999 8.79116 11.7267 8.89782 11.3481C9.01514 10.9696 9.34578 10.3071 9.64442 9.8759C9.93239 9.44475 10.4977 8.74017 10.8923 8.30901C11.2976 7.88837 12.0122 7.24689 12.4815 6.89987C12.9508 6.55284 13.7507 6.0691 14.2733 5.81671C14.7853 5.56433 15.6172 5.22782 16.1398 5.07008C16.9824 4.81769 17.2277 4.78614 18.8275 4.78614C20.1927 4.77563 20.7794 4.81769 21.4406 4.97543C21.9099 5.08059 22.6778 5.30143 23.1471 5.46968C23.6164 5.63794 24.235 5.95342 24.523 6.17426C24.8216 6.38458 25.2056 6.76316 25.3763 7.00503C25.5576 7.24689 25.8135 7.62547 25.9522 7.84631C26.0802 8.06714 26.3362 8.33005 26.5068 8.43521C26.6881 8.52985 26.9548 8.61398 27.1041 8.61398C27.2641 8.61398 27.4987 8.48779 27.6907 8.2985C27.936 8.04611 28 7.88837 28 7.54134C28 7.23638 27.8933 6.91038 27.6907 6.56335C27.5307 6.27942 27.0828 5.76413 26.7095 5.42762C26.3362 5.09111 25.6642 4.63892 25.2269 4.41808C24.7896 4.18673 24.1177 3.91331 23.7337 3.79763C23.3498 3.68196 22.5819 3.53473 22.0272 3.46112C21.3766 3.36648 20.5874 3.34545 19.8408 3.38751C19.1902 3.42957 18.2623 3.55577 17.761 3.66093C17.2597 3.7766 16.4918 3.99744 16.0545 4.14466C15.6172 4.3024 14.9452 4.58634 14.5613 4.77563C14.1773 4.96491 13.4307 5.40659 12.9081 5.75362C12.3855 6.10065 11.5429 6.75264 11.0523 7.21535C10.5617 7.66754 9.81507 8.48779 9.39911 9.03462C8.97248 9.58145 8.41787 10.4122 8.16189 10.8749C7.7566 11.5795 7.67127 11.6741 7.64994 11.4533C7.62861 11.3061 7.76726 10.7382 7.94858 10.1914C8.12989 9.64455 8.47119 8.83482 8.70584 8.40366C8.94048 7.9725 9.38844 7.28896 9.70841 6.87883C10.0177 6.47922 10.6257 5.81671 11.0523 5.4171C11.4896 5.00698 12.2468 4.41808 12.7481 4.1026C13.2494 3.78712 14.0493 3.34545 14.5399 3.12461C15.0199 2.90377 15.8838 2.58829 16.4491 2.42003C17.025 2.26229 17.825 2.06249 18.2409 1.99939C18.6569 1.92578 19.5421 1.83114 20.2141 1.77856C21.1633 1.70494 21.4833 1.64185 21.6326 1.49462C21.7393 1.38946 21.8246 1.16863 21.8246 0.989854C21.8246 0.800565 21.7286 0.590245 21.5793 0.453536C21.4406 0.327344 21.2273 0.169603 21.0887 0.106507C20.9607 0.0434108 20.5021 -0.0091694 20.0754 0.00134664C19.6595 0.00134664 18.9982 0.0749589 18.6142 0.159087ZM10.9136 15.6071C10.6257 15.6913 10.2417 15.9226 10.0497 16.1119C9.82574 16.3222 9.65509 16.6377 9.56977 16.9742C9.48444 17.2792 9.46311 17.6788 9.50577 17.9207C9.53777 18.152 9.67642 18.5516 9.79375 18.8145C9.92173 19.0774 10.2844 19.5506 10.615 19.8766C10.9883 20.2552 11.5003 20.6128 12.0549 20.8862C12.5242 21.1175 13.2708 21.4435 13.708 21.5908C14.1453 21.7485 15.2972 22.1166 16.2678 22.411C17.473 22.7791 18.2303 22.9473 18.6462 22.9578C19.2009 22.9684 19.2968 22.9368 19.5315 22.6844C19.6808 22.5057 19.7875 22.2533 19.7875 22.0745C19.7875 21.9062 19.7128 21.5802 19.6168 21.3699C19.5315 21.1491 19.2435 20.6864 18.9982 20.3394C18.7422 19.9923 17.921 19.0879 17.1637 18.3203C16.3211 17.4685 15.4999 16.7639 15.0412 16.4694C14.6253 16.2171 14.0067 15.9016 13.6547 15.7649C13.2814 15.6282 12.6841 15.5125 12.2149 15.4915C11.6922 15.4599 11.2443 15.502 10.903 15.6071H10.9136Z" fill="#081735" />
                            <path d="M2.61575 14.5766C2.24245 15.0288 1.7625 15.7018 1.53852 16.0804C1.31454 16.4589 1.00524 17.0899 0.845253 17.5C0.685268 17.9102 0.471955 18.5621 0.365299 18.9723C0.258642 19.3824 0.119989 20.2026 0.0559947 20.8126C-0.0186649 21.5697 -0.0186649 22.2428 0.0559947 22.9684C0.119989 23.5467 0.258642 24.3775 0.375964 24.8087C0.482621 25.2398 0.706599 25.9023 0.866584 26.2809C1.03723 26.6595 1.27188 27.1432 1.41053 27.3641C1.54919 27.5744 1.83716 27.953 2.05047 28.1843C2.27445 28.4262 2.74374 28.8258 3.09571 29.0677C3.44767 29.32 4.02362 29.6566 4.37558 29.8353C4.72755 30.0036 5.48481 30.298 6.05009 30.4768C6.62604 30.6556 7.36197 30.8344 7.6926 30.8869C8.11923 30.9395 8.31121 30.929 8.4072 30.8238C8.49253 30.7327 8.49964 30.6591 8.42853 30.603C8.36454 30.5504 7.88458 30.2875 7.36197 30.0141C6.82868 29.7407 6.05009 29.278 5.6128 28.973C5.17551 28.6786 4.54623 28.1738 4.22626 27.8583C3.89563 27.5428 3.42634 26.996 3.1917 26.649C2.94639 26.3019 2.65841 25.8287 2.54109 25.5974C2.4131 25.366 2.22112 24.8718 2.1038 24.4932C1.98648 24.1146 1.82649 23.389 1.7625 22.8632C1.66651 22.1376 1.65584 21.6539 1.75183 20.76C1.82649 20.129 1.97581 19.151 2.1038 18.6042C2.22112 18.0574 2.48776 17.132 2.69041 16.5536C2.89306 15.9752 3.21303 15.218 3.38368 14.871C3.55433 14.524 3.68232 14.1454 3.66099 14.0297C3.63965 13.9141 3.55433 13.8089 3.44767 13.7879C3.34102 13.7668 3.04238 14.0403 2.61575 14.5766Z" fill="#081735" />
                        </svg>

                        <h1 className="text-2xl mb-4">CodeAnt AI</h1>
                    </div>
                    <h1 className="text-3xl font-bold mb-3">{Right_Auth_Page_Data.title}</h1>
                    <div className="flex gap-4 md:gap-10 justify-center ">
                        {/* Toggle Buttons */}
                        <button
                            onClick={() => setIsSAAS(true)}
                            className={`w-40 py-1 rounded-lg text-lg ${isSAAS ? "bg-blue-500 text-white" : "border-2 border-blue-500 text-blue-500"}`}
                        >
                            SAAS
                        </button>
                        <button
                            onClick={() => setIsSAAS(false)}
                            className={`w-40  rounded-lg text-lg ${!isSAAS ? "bg-blue-500 text-white" : "border-2 border-blue-500 text-blue-500"}`}
                        >
                            Self Hosted
                        </button>
                    </div>

                </div>

                {/* Display Content Based on Active State */}
                <div className="flex flex-col items-center w-full min-h-[300px]">
                    {isSAAS
                        ? Right_Auth_Page_Data.imageData.map((item) => (
                            <NavLink
                                to="/dashboard"
                                key={item.id}
                                className="flex flex-row items-center justify-center gap-4 w-full md:w-1/4 lg:w-2/3 p-3 mt-4 mb- border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
                            >
                                <img src={item.src} alt={item.alt} className="h-6 w-6" />
                                Sign in with {item.alt}
                            </NavLink>
                        ))
                        : Right_Auth_Page_Data.imageData2.map((item) => (
                            <NavLink
                                to="/dashboard"
                                key={item.id}
                                className="flex flex-row items-center justify-center gap-4 w-full md:w-3/4 lg:w-2/3 p-3 mt-4  border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300"
                            >
                                <img src={item.src} alt={item.alt} className="h-6 w-6" />
                                Sign in with {item.alt}
                            </NavLink>
                        ))}
                </div>


            </div>
            <p className=" mt-1 text-gray-500 text-sm text-center">
                By signing up you agree to the <a href="#" className="text-blue-500">Privacy Policy</a>.
            </p>
        </div>
    );
}

export default RightSection;