import Link from "next/link";
import { MdStarRate } from "react-icons/md"

const index = () => {
    return (
        <div className="bg-white text-black">

            <div className="contactHeroBg  py-32">
                <h2 className="w-[90%] md:w-[80%] mx-auto text-5xl font-semibold text-white">Contact Us</h2>
            </div>

            {/* breadcrump */}
            <div className="py-2 border-y">
                <p className="w-[90%] md:w-[80%] mx-auto font-medium"><Link href="/" className="hover:text-blue-500">Home</Link> | <Link href="/contact" className="hover:text-blue-500">Contact</Link></p>
            </div>


            {/* content section */}
            <div className="w-[90%] md:w-[80%] mx-auto mt-16">

                {/* container */}
                <div className="grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-8">

                    {/* main content */}
                    <div className="my-14">
                        <p className="text-gray-600 text-lg font-medium">At TrustCare, we’re committed to providing you with the highest quality care. Please let us know how we can help with any problems, questions, or comments you have. You may also use this form to schedule a wellness exam.</p>

                        <p className="text-lg mt-6 font-semibold">
                            <em>
                                If you think you're having a heart attack or other life-threatening medical emergency, call 911 immediately or go to the nearest hospital.
                            </em>
                        </p>


                        {/* contact form */}
                        <form className="my-12">

                            {/* name field */}
                            <div className="mb-4">
                                <label htmlFor="name" className="text-base font-medium my-2 inline-block relative">Your Name
                                    <MdStarRate className="absolute top-1 -right-3 text-[9px] text-red-500" />

                                </label>



                                <input type="text" name="name" id="name" required className="w-full p-2 bg-white text-black border border-black rounded" />
                            </div>

                            {/* email field */}
                            <div className="mb-4">
                                <label htmlFor="email" className="text-base font-medium my-2 inline-block relative">Your Email

                                    <MdStarRate className="absolute top-1 -right-3 text-[9px] text-red-500" />
                                </label>
                                <input type="email" name="email" id="email" required className="w-full p-2 bg-white text-black border border-black rounded" />
                            </div>

                            {/* phone number field */}
                            <div className="mb-4">
                                <label htmlFor="number" className="text-base font-medium my-2 inline-block relative">Your Phone Number

                                    <MdStarRate className="absolute top-1 -right-3 text-[9px] text-red-500" />
                                </label>
                                <input type="text" name="number" id="number" required className="w-full p-2 bg-white text-black border border-black rounded" />
                            </div>

                            {/* message area */}
                            <div className="mb-4">
                                <label htmlFor="message" className="text-base font-medium my-2 inline-block relative">Message
                                    <MdStarRate className="absolute top-1 -right-3 text-[9px] text-red-500" />

                                </label>
                                <textarea name="message" id="message" cols="30" rows="5" required className="w-full p-2 bg-white text-black border border-black rounded"></textarea>
                            </div>
                            <button type="submit" className="btn btn-info text-white hover:bg-sky-500 px-8 rounded-none">Submit</button>

                        </form>

                    </div>



                    <div>
                        {/* sidebar */}
                        <div className="px-3 my-12">
                            <div className="bg-[#F4F5F5]">
                                <h4 className="py-4 px-6 text-white text-xl font-semibold bg-[#0E162F]">Navigation</h4>
                                <div className="px-6 py-8 bg-[#3FC2CD] text-white">
                                    <ul className="list-none">
                                        <Link href="/"><li className="pb-2 border-b my-2 hover:text-black font-medium text-lg">Home</li></Link>
                                        <Link href="/about"><li className="pb-2 border-b my-2 hover:text-black font-medium text-lg">About</li></Link>
                                        <Link href="/employer"><li className="pb-2 border-b my-2 hover:text-black font-medium text-lg">Employer</li></Link>
                                        <Link href="/services"><li className="pb-2 border-b my-2 hover:text-black font-medium text-lg">Services</li></Link>
                                        <Link href="/ourPhysicians"><li className="pb-2 border-b my-2  hover:text-black font-medium text-lg">Our Physians</li></Link>
                                        <Link href="/contact"><li className="pb-2 my-2 hover:text-white text-black font-medium text-lg">Contact</li></Link>
                                    </ul>




                                </div>
                            </div>
                        </div>

                        {/* contact info */}
                        <div className="px-3">
                            <div className="bg-[#F4F5F5]">
                                <h4 className="py-4 px-6 text-white text-xl font-semibold bg-[#6D7274]">Contact Info</h4>
                                <div className="px-6 py-8">
                                    <p className="text-lg font-bold mb-3">General</p>
                                    <p className="font-medium">Email: <span className=" text-sky-500"> team@gmail.com</span></p>

                                    {/* billing section */}
                                    <p className="text-lg font-bold mt-6 mb-3">Billing</p>
                                    <p className="font-medium">Phone: <span className=" text-sky-500"> (601) 707-3279</span> </p>
                                    <p className="font-medium">Email: <span className=" text-sky-500"> billing@trustcarehealth.com</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    );
};

export default index;