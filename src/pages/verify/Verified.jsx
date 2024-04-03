import { useEffect, useState } from "react";
import { axios } from "../../lib/axios";
import { useParams, useNavigate } from "react-router-dom";

const Verified = () => {
  const { email, token } = useParams();
  const navigate = useNavigate();
  const [verified, setVarified] = useState(false);
  console.log("Verified", email, token);
  const handleVarified = async () => {
    const response = await axios.patch(
      `/api/email_varified/${getEmail(email)}/varify/${getToken(token)}`
    );

    if (response.status === 200) {
      setVarified(true);
    } else {
      setVarified(false);
    }
  };

  const getEmail = (emailParam) => {
    // Extract email from email=xxxxx format
    const startIndex = emailParam.indexOf("=") + 1;
    return emailParam.substring(startIndex);
  };

  const getToken = (tokenParam) => {
    // Extract token from token=xxxxx format
    const startIndex = tokenParam.indexOf("=") + 1;
    return tokenParam.substring(startIndex);
  };

  useEffect(() => {
    handleVarified();
  }, []);
  return (
    <div className="flex items-center justify-center flex-col mt-5 h-screen ">
      {verified ? (
        <section className="max-w-2xl mx-auto">
          <div className="h-full bg-zinc-800 w-full text-white flex items-center justify-center flex-col gap-5 p-14 rounded-md">
            <div className="flex items-center gap-3 ">
              <div className="w-10 h-[1px] bg-white"></div>
              <EmailIcon />
              <div className="w-10 h-[1px] bg-white"></div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-center text-sm sm:text-xl tracking-widest font-normal">
                THANKS FOR SIGNING UP!
              </div>
              <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize">
                Verified your E-mail Address
              </div>
              <button
                className="px-6 py-2 mt-6 text-sm font-bold tracking-wider text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
                onClick={() => navigate("/")}>
                Go to login page
              </button>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-white">Not found</div>
      )}
    </div>
  );
};
export default Verified;
const EmailIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
    </svg>
  );
};
