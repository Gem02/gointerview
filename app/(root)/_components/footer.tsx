
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <Link href="/"> 
                            <Image src="/go-logo-dark.png" width={150} height={100} alt="logo" />
                        </Link>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                        <Link href="javascript:;"  className="py-2.5 px-5 h-9 block w-fit bg-green-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-green-700 lg:mx-0">
                            Contact us
                        </Link>
                    </div>
                
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Go-Interview</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><Link href="/"  className="text-gray-600 hover:text-gray-900">Home</Link></li>
                            <li className="mb-6"><Link href="/about"  className=" text-gray-600 hover:text-gray-900">About</Link></li>
                            <li><Link href="/pricing"  className=" text-gray-600 hover:text-gray-900">Pricing</Link></li>
                        </ul>
                    </div>
                
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Blog</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><Link href="/"  className="text-gray-600 hover:text-gray-900">Blog Post Heading</Link></li>
                            <li className="mb-6"><Link href="/"  className=" text-gray-600 hover:text-gray-900">Another heading goes here</Link></li>
                            <li><Link href="/"  className=" text-gray-600 hover:text-gray-900">Anotherone here too</Link></li>
                        </ul>
                    </div>
                
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><Link href="/support"  className="text-gray-600 hover:text-gray-900">Customer Support</Link></li>
                            <li className="mb-6"><Link href="/terms"  className=" text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
                            <li ><Link href="/privacy"  className=" text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                        </ul>
                    </div>
                
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Subscribe</h4>
                        <p className="text-sm text-gray-500 leading-6 mb-7">Subscribe to get the latest news from us</p>
                        <Link href="javascript:;"  className="flex items-center justify-center gap-2 border border-green-600 rounded-full py-3 px-6 w-fit lg:mx-0  text-sm text-green-600 font-semibold transition-all duration-500 hover:bg-green-50">Subscribe<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </Link>
                    </div>
                </div>
            
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">

                    <span className="text-sm text-gray-500">
                    © <Link href="/">Go-Interview</Link> {new Date().getFullYear()}, All rights reserved.
                    </span>

                        
                    </div>
                </div>
            </div>
        </footer>
    );
  };
  
  export default Footer;
  