import React from 'react';
import Link from 'next/link';
import SigninBtn from '../_components/button';

const SignInPage = () => {
  /* const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); */

/*   const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn("credentials", { 
        email, 
        password, 
        callbackUrl: "/dashboard" 
      });
    } catch (error) {
      console.error("Login failed", error);
    }
    setLoading(false);
  }; */
  

  return (
    <div className="lg:w-1/2 xl:w-5/12 m-auto w-full p-6 sm:p-12">
      {/* <h3 className="text-sm mb-5 font-bold">Login Here</h3> */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <SigninBtn />

        <div className="my-8 border-b text-center w-full">
          {/* <span className="bg-white px-2 text-sm text-gray-600 font-medium">Or sign in with your email</span> */}
        </div>

        {/* <form onSubmit={handleSignIn} className="mx-auto w-full max-w-xs">
          <input 
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4" 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type='submit' 
            className="mt-5 tracking-wide font-semibold bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center">
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className="mt-6 text-xs text-gray-600 text-center">
            Don&apos;t have an account?
            <Link href="/signup" className="border-b border-gray-500 ml-1 font-bold border-dotted"> Sign up</Link>
          </p>
        </form> */}

          <p className="mt-6 text-xs text-gray-600 text-center">
            Don&apos;t have an account?
            <Link href="/signup" className="border-b border-gray-500 ml-1 font-bold border-dotted"> Sign up</Link>
          </p>
      </div>
    </div>
  );
};

export default SignInPage;
