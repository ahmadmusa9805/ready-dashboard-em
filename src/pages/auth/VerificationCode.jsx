import { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useSearchParams } from "react-router-dom";

const VerificationCode = () => {
  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const email = searchParams.get('email');


//   const onSent = () => {

//   }
  return (
    <div className="h-screen">
      {/* Background Image */}
      <div className="bg-primary py-14  h-full">
        {/* Form Container */}
        <div className="relative z-10 flex items-center justify-center h-full px-3  text-white">
          <div className="bg-[#ffffff] text-black overflow-hidden shadow-lg max-w-5xl  w-full grid grid-cols-1 md:grid-cols-2">
            {/* Login Form */}
            <div className="p-8 md:py-44">
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">
                  Verification Code
                </h1>
              </div>

              <div className="flex justify-center">
                <div className="flex gap-2 mb-4">
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span className="w-4" />}
                    renderInput={(props) => (
                      <input
                        {...props}
                        style={{ width: "50px" }}
                        className="w-12 h-12 border-2 border-gray-300 rounded-md text-center text-lg focus:border-blue-500 focus:outline-none"
                      />
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <Link to={"/auth/set-new-password"}>
                <button
                //   onClick={onSent}
                //   disabled={isLoading}
                  type="primary"
                //   htmltype="submit"
                  className="bg-primary text-white px-5 py-2 rounded-none"
                >
                  Verify
                </button>
                </Link>
              </div>
              <p className="text-center mt-4 text-gray-600">
                You have not received the email?{" "}
                <span className="text-[#020202] cursor-pointer">Resend</span>
              </p>
            </div>

            {/* Welcome Back Section */}
            <div className="p-8 bg-[#c9dffd] text-center flex flex-col justify-center">
              <p className="mb-6 text-center">
                Welcome to out forgot password page ! provide your email for
                confirm 4 digit verification code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
