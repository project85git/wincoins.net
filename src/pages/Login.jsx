import { useState } from "react";
import GlobalInput from "../component/mainComponent.jsx/GlobalInput";
import { Facebook, GoogleIcon } from "../assets/svg/Svg";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        let valid = true;

        if (!email) {
            setEmailError('Username or Email is required');
            valid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        }

        if (valid) {
            console.log('Login attempt with:', { email, password });
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordError) {
            setPasswordError('');
        }
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <div className="text-white w-full mt-3 flex flex-col items-center justify-center text-2xl font-bold">
                <p className="text-3xl lg:text-4xl">
                    W<span className="text-blue-500">O</span>W
                </p>
                <span className="text-xs text-white">VEGAS</span>
            </div>
            <div className="flex m-auto items-center justify-center">
                <div className="w-full min-w-[350px] lg:min-w-[500px] max-w-[500px] lg:p-8 text-center text-white">
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                        <p className="text-sm text-gray-400">Please log in to continue</p>
                    </div>

                    <div className="flex justify-between mb-4">
                        <button className="flex-1 px-6 py-2 flex items-center gap-3 shadow-md mr-2 text-white bg-[#262629] rounded-xl">
                            <Facebook />
                            Facebook
                        </button>
                        <button className="flex-1 flex gap-3 items-center px-6 py-2 shadow-md mr-2 text-white bg-[#262629] rounded-xl">
                            <GoogleIcon />
                            Google
                        </button>
                    </div>

                    <p className="my-6 text-sm lg:text-[16px] text-gray-400">Or Log in with Email</p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}
                        className="w-full"
                    >
                        <div className="w-full flex flex-col mt-2 items-start gap-1 relative">
                            <p className="text-sm">Username or Email Address</p>
                            <GlobalInput
                                type="text"
                                bgColor="white"
                                textColor="black"
                                padding="6px"
                                borderRadius="6px"
                                placeholder="Enter your username or email"
                                value={email}
                                textSize="14px"

                                onChange={handleEmailChange}
                                className={`pr-10 ${emailError ? 'border border-red-500' : email ? 'border border-green-500' : ''}`}
                            />
                            {email && !emailError && (
                                <FaCheckCircle className="absolute right-3 top-9 text-green-500" />
                            )}
                            {emailError && (
                                <>
                                    <FaExclamationCircle className="absolute right-3 top-9 text-red-500" />
                                    <p className="text-sm text-red-500 mt-1">{emailError}</p>
                                </>
                            )}
                        </div>
                        <div className="w-full mt-4 flex flex-col items-start gap-1 relative">
                            <p className="text-sm">Password</p>
                            <GlobalInput
                                type={showPassword ? "text" : "password"}
                                bgColor="white"
                                textColor="black"
                                padding="6px"
                                borderRadius="6px"
                                textSize="14px"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                className={`pr-10 ${passwordError ? 'border border-red-500' : password ? 'border border-green-500' : ''}`}
                            />
                            {password && !passwordError && (
                                <FaCheckCircle className="absolute right-3 top-9 text-green-500" />
                            )}
                            {passwordError && (
                                <>
                                    <FaExclamationCircle className="absolute right-3 top-9 text-red-500" />
                                    <p className="text-sm text-red-500 mt-1">{passwordError}</p>
                                </>
                            )}
                            {/* <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-10 top-9 text-gray-600 hover:text-gray-800"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button> */}
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 mt-6 py-[10px] text-white bg-green-600 duration-500 ease-in-out rounded hover:bg-green-700"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="mt-4">
                        <a href="/forgot-password" className="text-[15px] text-blue-500 hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center w-full mb-8">
                <p className="text-[15px] text-gray-400">
                    Don’t have an account?{' '}
                    <a href="/sign-up" className="text-blue-500 hover:underline">
                        Sign up now!
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
