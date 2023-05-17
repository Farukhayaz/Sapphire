import React from 'react'
import { GoLocation } from "react-icons/go"
import { TfiEmail } from "react-icons/tfi"
import { IoIosCall } from "react-icons/io"


import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsInstagram, BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"

export default function Footer() {
    return (
        <>
            {/* <div className="mainFooter bg-gray-100 h-[400px] p-[5%] flex   justify-between text-gray-500 ">
                <div className="contactUs w-[33%] h-100 flex flex-col justify-between border">
                    <h1 className="text-xl font-medium text-gray-700">Contact Us</h1>
                    <span className="flex items-start h-[80px] ">
                        <p>
                            Sapphire Retail Head Office
                            1.5-Km, Defence Road, Bhobtian Chowk,
                            Off Raiwind Road, Opposite University of Lahore,
                            Lahore.
                        </p>
                    </span>
                </div>
                <div className="customerCare list-none flex flex-col justify-between">
                    <h1 className="text-xl font-medium text-gray-700">Customer Care</h1>
                    <li><a href="">Exchanges & Returns</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Payments</a></li>
                    <li><a href="">Track Your Order</a></li>
                </div>
                <div className="information list-none border flex flex-col justify-between">
                    <h1 className="text-xl font-medium text-gray-700">Information</h1>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Store Locator</a></li>
                    <li><a href="">Sale Guide</a></li>
                    <li><a href="">Fabric Glossary</a></li>
                    <li><a href="">SafePay Guide</a></li>
                    <li><a href="">Blogs</a></li>
                </div>
                <div className="newsletterSignup">
                    <h1 className="text-xl font-medium text-gray-700">Newsletter Signup</h1>
                    <p>
                        Subscribe to our Newsletter for
                        Exclusive Updates
                    </p>
                    <div className="emailDiv absolute flex justify-center items-center">
                        <input type="email" placeholder="Your Email Address" className="p-2 w-[350px]  border-2 border-black" />
                        <button className="absolute bg-black text-white h-[35px] p-1 w-[100px] right-1 border">Subscribe</button>
                    </div>
                </div>

            </div> */}
            <div>
                <div class="bg-gray-100  p-3 space-y-10 md:grid border-2 lg:mt-4 grid-cols-2 md:-mt-6 lg:grid-cols-4">
                    <div class="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                        <h1 class="text-black text-xl font-medium">Contact Us</h1> <br />
                        <p class="text-gray-400 text-base "> <GoLocation className='inline mr-2' />Sapphire Retail Head Office 1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road, Opposite University of Lahore, Lahore. </p> <br />
                        <p class="text-gray-400 text-base "><TfiEmail className='inline mr-2 text-xl' /> wecare@sapphireonline.pk </p>
                        <p class="text-gray-400 text-base mt-2 "><IoIosCall className='inline  mr-2 text-xl' /> +92(0)42 111-738-245 </p>
                    </div>
                    <div class="leading-9 md:w-2/4 md:order-3 md:ml-24">
                        <h1 class="text-black text-xl  font-medium tracking-[0.030rem]"> Customer Care </h1>
                        <ul class="mt-2 text-gray-400 ">
                            <li> <i class="fa fa-chevron-right text-gray-400"></i> <a href="#" class="text-gray-400 ">
                                Exchanges & Returns</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                FAQs</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                Contact Us</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                Payments</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                Track Your Order</a> </li>
                        </ul>
                    </div>
                    <div class="leading-9 md:w-3/4 md:order-4">
                        <h1 class="text-black text-xl font-medium tracking-[0.030rem]"> Information </h1>
                        <ul class="mt-2 text-gray-300/80">
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                About Us</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 "> Privacy Policy</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                Store Locator</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                Fabric Glossary</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                SafePay Guide</a> </li>
                            <li> <i class="fa fa-chevron-right text-gray-400 "></i> <a href="#" class="text-gray-400 ">
                                Blogs</a> </li>
                        </ul>
                    </div>
                    <div class="md:order-2 lg:order-last">
                        <h1 class="text-black text-xl font-medium tracking-[0.030rem]"> Join Our Newsletter </h1> <br />
                        <p class="text-gray-400 w-3/5 leading-7 mb-5 md:w-3/4"> Join 25,000+ others and never miss out on new
                            tips,tutorials, and more. </p> <input type="email" placeholder="Enter E-mail Here"
                                class="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:border border-orange-600 md:w-1/2 lg:w-3/5" />
                        <button class="text-white bg-black p-1 -translate-x-1 rounded-br-xl hover:bg-blue-500"> Subscribe
                        </button>
                    </div>
                </div>
                <div class="bg-gray-900 p-3 flex flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0">
                    <div
                        class="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                        <p>Copyright © 2023 Sapphire all rights reserved.</p>
                    </div>
                    <div
                        class=" pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                        <a class="w-8 h-8 bg-orange-500 text-black-200 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                            <i
                                class="fa fa-twitter"> <AiOutlineMail class="ml-[16%] mt-[10%]" /></i>
                        </a>
                        <a
                            class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                class="fa fa-instagram"><BsInstagram class="ml-[20%] mt-[10%]" />  </i></a> <a
                                    class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                        class="fa fa-facebook"> <FaFacebookF class="ml-[16%] mt-[10%]" /></i></a> <a
                                            class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                                class="fa fa-google"> <BsTelephone class="ml-[16%] mt-[10%]" /></i></a> <a
                                                    class="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                                        class="fa fa-linkedin"><BsYoutube class="ml-[16%] mt-[10%]" /></i></a> </div>
                </div>
            </div>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            <script src="https://cdn.tailwindcss.com"></script>

        </>
    )
}
