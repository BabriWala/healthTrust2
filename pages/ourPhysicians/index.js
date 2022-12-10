import Image from "next/image";
import Link from "next/link";
import doctor1 from "../../public/DanielSeale.png"
import doctor2 from "../../public/Joseph-Hunter-Detail.png"
import doctor3 from "../../public/Phillippi-Cathie-Detail.png"
import doctor4 from "../../public/Washington-Megan-Detail.png"
import doctor5 from "../../public/TimothyShaw.png"
import doctor6 from "../../public/StephenChouteau.png"
const index = () => {
    return (
        <div className="bg-white text-black">
            <div className="physiansHeroBg  py-32">
                <h2 className="w-[90%] md:w-[80%] mx-auto text-5xl font-semibold text-white">Our Physicians</h2>
            </div>

            {/* breadcrump */}
            <div className="py-2 border-y">
                <p className="w-[90%] md:w-[80%] mx-auto font-medium"><Link href="/" className="hover:text-black text-[#3FC2CD]">Home</Link> | <Link href="/contact" className="hover:text-[#3FC2CD]">Our Physicians</Link></p>
            </div>


            {/* contents container */}
            <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-6">

                {/* doctors container */}
                <div className="my-12">

                    {/* first doctor */}
                    <div className="bg-[#F2F3F3] p-8 mb-14">
                        <Image src={doctor1} className="float-left mr-6 mb-4"></Image>
                        <div>
                            <h2 className="text-4xl font-semibold mb-6">Daniel Seale, M.D.</h2>

                            <h4 className="font-semibold text-sky-600 hover:text-black mb-4">Cahaba Heights Clinic in Birmingham, AL</h4>

                            <hr className="h-[2px] bg-black" />

                            <p className="font-medium text-lg mt-4 text-gray-600"><em>Dr. Daniel Seale is a board-certified family medicine physician whose practice areas include primary and urgent care.</em></p>

                            <p className="text-lg font-medium mt-4 text-gray-600">Dr. Daniel Seale, a native of Moundville, Alabama, received his Bachelor of Science in Environmental Engineering from Tulane University, his Master of Science in Environmental Engineering from The University of Alabama, his Master of Science in Human Environmental Sciences from The University of Alabama, and his Doctor of Medicine from The University of Alabama at Birmingham School of Medicine. Dr. Seale joined TrustCare in 2021 at our Cahaba Heights clinic location. His practice includes the comprehensive diagnosis and treatment of acute illnesses.</p>

                            <p className="text-lg font-medium mt-4 text-gray-600">
                                Prior to TrustCare, Dr. Seale served as an urgent care physician for MedCenter in Tuscaloosa, Ala. He completed his residency training as a Family Medicine Resident Physician at Forrest General Hospital in Hattiesburg, Mississippi. Dr. Seale currently resides in Northport, Alabama, and his hobbies include spending time with his family and working on his sunroom.
                            </p>
                        </div>
                    </div>
                    {/* first doctor */}


                    {/* second doctor */}
                    <div className="bg-[#F2F3F3] p-8 mb-14">
                        <Image src={doctor2} className="float-left mr-6 mb-4"></Image>
                        <div>
                            <h2 className="text-4xl font-semibold mb-6">Joseph S. Hunter, M.D.</h2>

                            <h4 className="font-semibold text-sky-600 hover:text-black mb-4">Township Clinic in Ridgeland, MS</h4>

                            <hr className="h-[2px] bg-black" />

                            <p className="font-medium text-lg mt-4 text-gray-600"><em>Dr. Joseph Hunter is a board-certified family medicine physician whose practice areas include primary care, urgent care, sports and industrial medicine.</em></p>

                            <p className="text-lg font-medium mt-4 text-gray-600">Dr. Joseph S. Hunter, a native of West Tennessee, received his Bachelor of Science in Biology from Union University in Jackson, Tennessee, and his Doctor of Medicine from The University of Tennessee Center for the Health Sciences, College of Medicine in Memphis. He completed his residency in family medicine at Womack Army Medical Center in Fort Bragg, North Carolina. Dr. Hunter is Board Certified in Family Medicine. He joined TrustCare in 2022 as a primary care and direct primary care physician located at TrustCare's urgent care clinic location at The Township in Ridgeland, Mississippi. His practice includes disease prevention, health maintenance and diagnosis and treatment of acute and chronic illnesses.</p>

                            <p className="text-lg font-medium mt-4 text-gray-600">
                                Dr. Hunter has over 25 years of experience in family medicine, the majority of which has been in private practice in Mississippi. He most recently served as the Medical Director of Premise Healthcare’s on-site clinic at the Nissan Plant in Canton. He has also served as a family physician and clinic commander in the United States Army. Dr. Hunter enjoys teaching and has been involved with medical student and resident education throughout his career. He lives in Madison and his hobbies include fishing and duck hunting.
                            </p>
                        </div>
                    </div>
                    {/* second doctor */}


                    {/* third doctor */}
                    <div className="bg-[#F2F3F3] p-8 mb-14">
                        <Image src={doctor3} className="float-left mr-6 mb-4"></Image>
                        <div>
                            <h2 className="text-4xl font-semibold mb-6">Catherine Phillippi, M.D.</h2>

                            <h4 className="font-semibold text-sky-600 hover:text-black mb-4">TrustCare Kids Clinic in Gluckstadt, MS</h4>

                            <hr className="h-[2px] bg-black" />

                            <p className="font-medium text-lg mt-4 text-gray-600"><em>Dr. Catherine Phillippi is a board-certified pediatrician whose practice areas include primary care and urgent care for children ranging in age from newborn through college.</em></p>

                            <p className="text-lg font-medium mt-4 text-gray-600">Dr. Catherine Phillippi is a board-certified pediatrician with more than two decades of experience. Her practice areas include primary care and urgent care for children ranging in age from newborn through college. Dr Phillippi earned her Bachelor of Science in Biology from Mississippi College in 1994 and her Doctor of Medicine from The University of Mississippi School of Medicine in 1999. She completed her pediatric training at The University of Arkansas for Medical Sciences/Arkansas Children’s Hospital.</p>

                            <p className="text-lg font-medium mt-4 text-gray-600">
                                Dr. Phillippi joined TrustCare Kids in Gluckstadt, Mississippi, in 2021. Prior to TrustCare, Dr. Phillippi practiced at Children’s Medical Group in Jackson, Mississippi, and Gardendale Pediatric Clinic in Birmingham, Alabama. Dr. Phillippi is married to Dr. Mark Phillippi, a nephrologist at Central Nephrology Clinic, and they reside in Ridgeland with their three children. Her hobbies include cooking, reading and serving as a healthcare volunteer on medical mission trips.
                            </p>
                        </div>
                    </div>
                    {/* third doctor */}


                    {/* fourth doctor */}
                    <div className="bg-[#F2F3F3] p-8 mb-14">
                        <Image src={doctor4} className="float-left mr-6 mb-4"></Image>
                        <div>
                            <h2 className="text-4xl font-semibold mb-6">Megan Washington, D.O.</h2>

                            <h4 className="font-semibold text-sky-600 hover:text-black mb-4">TrustCare Kids Clinic in Gluckstadt, MS</h4>

                            <hr className="h-[2px] bg-black" />

                            <p className="font-medium text-lg mt-4 text-gray-600"><em>Dr. Megan Washington is a board-certified pediatrician whose practice areas include primary care and urgent care for children ranging in age from newborn through college.</em></p>

                            <p className="text-lg font-medium mt-4 text-gray-600">Dr. Megan Washington is a board-certified pediatrician whose practice areas include primary care and urgent care for children ranging in age from newborn through college. She has a special interest in infant and child sleep concerns, breast feeding, ADHD, and behavior issues. Dr. Washington earned her Bachelor of Science in Biology and Comparative Literature from The University of Georgia in 2004 and her Doctor of Osteopathic Medicine from The Kansas City University of Medicine and Biosciences in 2010. She completed her pediatric training at Saint Louis University/Cardinal Glennon Children’s Hospital.</p>

                            <p className="text-lg font-medium mt-4 text-gray-600">
                                Dr. Washington joined TrustCare Kids in Gluckstadt, Mississippi, in 2021. Prior to TrustCare, she practiced at Merit Health Pediatrics in Flowood, Mississippi. She's is married to Dr. Chad Washington, a neurosurgeon at The University of Mississippi Medical Center, and they reside in Madison with their three sons. Her hobbies include photography, gardening, cooking and spending time with family.
                            </p>
                        </div>
                    </div>
                    {/* fourth doctor */}


                    {/* fifth doctor */}
                    <div className="bg-[#F2F3F3] p-8 mb-14">
                        <Image src={doctor5} className="float-left mr-6 mb-4"></Image>
                        <div>
                            <h2 className="text-4xl font-semibold mb-6">Timothy Shaw, D.O.</h2>

                            <h4 className="font-semibold text-sky-600 hover:text-black mb-4">Montgomery Highway Clinic in Vestavia Hills, AL</h4>

                            <hr className="h-[2px] bg-black" />

                            <p className="font-medium text-lg mt-4 text-gray-600"><em>Dr. Timothy Shaw is a board-certified family medicine physician whose practice areas include primary and urgent care.</em></p>

                            <p className="text-lg font-medium mt-4 text-gray-600">Dr. Timothy A. Shaw, a native of Shawnee, Oklahoma, received his Bachelor of Science in Biology from East Central Oklahoma University, and his Doctor of Osteopathic Medicine from Kansas City University of Medicine and Bioscience. His post-doctoral training includes an Internship and Residency in Surgery at Phoenix Arizona General Hospital (now John C. Lincoln Hospital), and a Trauma Surgery and Critical Care Residency at The University of Texas Medical School at Houston. Dr. Shaw is Board Certified in Surgery by the American Osteopathic Board of Surgery.</p>

                            <p className="text-lg font-medium mt-4 text-gray-600">
                                Dr. Shaw joined TrustCare in 2022 at our Vestavia Hills clinic location. His practice includes the comprehensive diagnosis and treatment of acute illnesses. He has more than 30 years of medical practice experience. For the past year, he has practiced urgent care in Anniston, Alabama. From 2014 to 2021, he served as an urgent care physician with American Family Care in Cullman, Alabama. He has also served as Chief of Surgery for the Noble Army Hospital in Ft. McClellan, Alabama, and Chief of Staff at Payson Regional Medical Center in Payson, Arizona.
                            </p>
                            <p className="text-lg font-medium mt-4 text-gray-600">
                                A resident of Winfield, Dr. Shaw's hobbies include playing the guitar, writing and recording music, and playing with his three dogs.
                            </p>
                        </div>
                    </div>
                    {/* fifth doctor */}

                    {/* sixth doctor */}
                    <div className="bg-[#F2F3F3] p-8 mb-14">
                        <Image src={doctor6} className="float-left mr-6 mb-4"></Image>
                        <div>
                            <h2 className="text-4xl font-semibold mb-6">
                                Stephen L. Chouteau, M.D.</h2>

                            <h4 className="font-semibold text-sky-600 hover:text-black mb-4">Old Fannin Clinic in Flowood, MS</h4>

                            <hr className="h-[2px] bg-black" />

                            <p className="font-medium text-lg mt-4 text-gray-600"><em>Dr. Stephen L. Chouteau is a board-certified emergency medicine physician whose practice areas include primary and urgent care.</em></p>

                            <p className="text-lg font-medium mt-4 text-gray-600">Dr. Stephen Chouteau is a native of Hattiesburg, Mississippi. He received his Bachelor of Science degree from The University of Southern Mississippi and his Doctor of Medicine from The University of Mississippi Medical Center, where he also completed his internship in Internal Medicine. Dr. Chouteau practiced emergency medicine and has been a board-certified emergency physician for 40 years. During this time, his duties included serving as Medical Director of the Rankin County Emergency Response Team and Emergency Medical Services, Chief of Staff for Rankin Medical Center, and Medical Director of the Emergency Departments at Rankin Medical Center and River Oaks Hospital.</p>

                            <p className="text-lg font-medium mt-4 text-gray-600">
                                Dr. Chouteau joined TrustCare in June of 2014. His practice at our Flowood clinic includes the comprehensive diagnosis and treatment of acute illnesses. He resides in Pearl, Mississippi with his family. In his spare time, he enjoys attending concerts and spending time with his children in Oxford, Mississippi, and New Orleans.
                            </p>
                        </div>
                    </div>
                    {/* fifth doctor */}


                </div>
                {/* doctors container end */}

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
                                <Link href="/ourPhysicians"><li className="pb-2 border-b my-2 hover:text-white text-black font-medium text-lg">Our Physians</li></Link>
                                <Link href="/contact"><li className="pb-2 my-2 hover:text-black font-medium text-lg">Contact</li></Link>
                            </ul>




                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default index;