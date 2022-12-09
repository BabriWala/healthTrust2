import React from "react";
import Image from "next/image";

import profilePic from "./Assets/tc_plus_logo_reversed@2x.png";
import tic from "./Assets/Path-3.svg";
import person1 from "./Assets/Mask-Group-7_2022-07-13-185640_pdlv.png";
import pic2 from "./Assets/iphone-messaging.png";
import pic3 from "./Assets/Mask-Group-8-1.png";
import tic2 from "./Assets/Group-31.svg";
import ic1 from "./Assets/7Days.png";
import ic2 from "./Assets/Group-72.png";
import ic3 from "./Assets/Group-73.png";
import ic4 from "./Assets/Group-74.png";

import { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed/YoutubeEmbed";

const Membership = () => {
  const [isOff, setIsOff] = useState(true);
  return (
    <div className="text-black" style={{ backgroundColor: "#FFFFFF" }}>
      <section className="w-full my-10 ">
        <div className="my-10 p-10" style={{ backgroundColor: "#0e162f" }}>
          <Image
            className="mx-auto my-20"
            src={profilePic}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <p className="text-white text-5xl font-bold mx-auto text-center p-0">
            Introducing membership with all the bells and whistles.
          </p>

          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 text-center my-10 text-white ">
            <div className="flex items-center mx-auto text-center text-2xl">
              <Image src={tic} alt="checkmark" /> Prescription refills
            </div>
            <div className="flex items-center  mx-auto text-2xl  ">
              <Image src={tic} alt="checkmark" /> Text your Care Team from
              anywhere
            </div>
            <div className="flex items-center  mx-auto text-2xl">
              <Image src={tic} alt="checkmark" /> Discounts on prescriptions
            </div>
            <div className="flex items-center  mx-auto text-2xl">
              <Image src={tic} alt="checkmark" /> Priority access to any clinic
            </div>
          </div>

          <div className="mx-auto text-center">
            <button
              style={{ backgroundColor: "#3fc2cd" }}
              className="text-white text-2xl p-3 rounded-lg "
            >
              Join Today
            </button>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#fff" }}
          class="grid lg:grid-cols-2 sm:grid-cols-1 my-10 bg-slate-500"
        >
          <div className="text-center my-auto">
            <p className="text-4xl ">
              A fast pass to all of our clinics.
              <br /> You heard right.
            </p>
            <p>With TrustCare+, our members have little to no wait.</p>
          </div>
          <Image
            className="mx-auto my-20"
            src={person1}
            alt="Picture of the author"
          />
        </div>

        <div class="grid lg:grid-cols-2 sm:grid-cols-1 my-10 bg-slate-50">
          <Image
            className="mx-auto my-20"
            src={pic2}
            alt="Picture of the author"
          />
          <div className=" my-auto">
            <p className="text-4xl ">
              Text with your Care Team <br /> from anywhere with the app.
            </p>
            <p className="text-xl">
              Have a question but don’t have time to go in for a visit? Our Care
              Team is always on call, 7 days a week.
            </p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 sm:grid-cols-1 my-10 ml-5 bg-slate-400">
          <div className=" my-auto">
            <p className="text-4xl ">
              Prescription refills & <br /> discounts for your busy <br />{" "}
              lifestyle.
            </p>
            <p className="text-xl">
              TrustCare+ gives you access to discounts on hundreds of <br />{" "}
              prescriptions. And, you can easily request refills through the
              app.
            </p>
          </div>
          <Image
            className="mx-auto my-20"
            src={pic3}
            alt="Picture of the author"
          />
        </div>

        {/* amount  */}

        <section className="mx-auto text-center  bg-slate-300 p-10">
          <div className="mx-auto">
            <div className="mx-auto ">
              <span className="text-5xl font-bold">Monthly</span>{" "}
              <input
                type="checkbox"
                onClick={() => setIsOff(!isOff)}
                className="toggle mx-auto"
                unchecked
              />{" "}
              <span className="text-5xl font-bold">Anually</span>
            </div>
            <div class="row align-middle align-center ">
              <div class="large-12 medium-12 small-12 columns">
                <div class="heading">
                  {!isOff && <h2 className="text-5xl font-bold">$12</h2>}
                  {isOff && <h2 className="text-5xl font-bold">$15</h2>}

                  <p class="payment-term text-5xl font-bold">per month</p>
                  {!isOff && (
                    <p class="text-3xl font-semibold">
                      Save 20% on your membership when you subscribe annually
                    </p>
                  )}
                </div>

                <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 text-center my-10  ">
                  <div className="flex items-center mx-auto text-center">
                    <Image src={tic2} alt="checkmark" /> Access to digital
                    health
                  </div>
                  <div className="flex items-center  mx-auto ">
                    <Image src={tic2} alt="checkmark" /> Coordinated care
                  </div>
                  <div className="flex items-center  mx-auto">
                    <Image src={tic2} alt="checkmark" /> Priority access to any
                    clinic
                  </div>
                  <div className="flex items-center  mx-auto">
                    <Image src={tic2} alt="checkmark" /> Discounts on
                    prescriptions
                  </div>
                </div>

                <div className="mx-auto text-center">
                  <button
                    style={{ backgroundColor: "#3fc2cd" }}
                    className="text-white text-2xl p-3 rounded-lg "
                  >
                    Join Today
                  </button>
                </div>

                <p className="dont-have-insurance text-xl">
                  Don't have insurance?
                  <br />
                  <a style={{ color: "#3fc2cd" }} href="">
                    Learn about TrustCare+ Prime.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* amount end  */}

        {/* about  */}

        <section>
          <div>
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 text-center my-10 ">
              <div className="flex items-center mx-auto text-center">
                <Image src={ic1} alt="checkmark" />{" "}
                <span>
                  With thousands of 5-star reviews, <br /> patients love the
                  experience at TrustCare
                </span>
              </div>
              <div className="flex items-center  mx-auto ">
                <Image src={ic2} alt="checkmark" /> Less than 5-minute wait for
                scheduled clinic visits
              </div>
              <div className="flex items-center  mx-auto">
                <Image src={ic3} alt="checkmark" /> Days/week where we support
                you
              </div>
              <div className="flex items-center  mx-auto">
                <Image src={ic4} alt="checkmark" /> 12 convenient locations in
                Mississippi and Alabama
              </div>
            </div>
          </div>
        </section>
        {/* about  */}

        {/* health care  */}
        <div className="mx-auto text-center">
          <h1 className="text-5xl font-bold mb-20">Importance of Healt Care</h1>
          <div>
            <YoutubeEmbed embedId="DublqkOSBBA" />
          </div>
        </div>
        {/* health care  */}

        {/* FAQ  */}
        <div className="my-10 mx-20 text-white bg-slate-300 p-10">
          <h1 className="text-5xl  text-center font-bold">
            Frequently Asked Question
          </h1>

          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              Why pay a membership fee for health care?
            </div>
            <div className="collapse-content">
              <p>
                You’re paying for a membership that gives you direct access to
                our Care Team (it’s like having them on speed dial) and did we
                mention you can skip the line in any clinic when you make an
                appointment in the app?
              </p>
            </div>
          </div>

          <div
            tabIndex={1}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              What are your regular clinic hours? Evenings? Weekends?
            </div>
            <div className="collapse-content">
              <p>
                Clinic hours are weekdays from 8AM – 8PM, Saturday 9AM – 5PM and
                Sunday 1PM – 7PM.
              </p>
            </div>
          </div>

          <div
            tabIndex={2}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              Does TrustCare+ accept members with existing medical conditions?
            </div>
            <div className="collapse-content">
              <p>
                Yes. Our memberships are not based on any existing medical
                issues or conditions.
              </p>
            </div>
          </div>

          <div
            tabIndex={3}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              Will my insurance be billed for my clinic visit?
            </div>
            <div className="collapse-content">
              <p>
                Short answer: yes. When you come in to see a medical
                professional, your insurance will be billed using the co-pay and
                insurance information outlined in your agreement. Your
                membership fee is for direct access to our Care Team anytime,
                skipping the line, discounts on prescriptions, and more.
              </p>
            </div>
          </div>

          <div
            tabIndex={4}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              What’s the average wait time for a TrustCare+ member?
            </div>
            <div className="collapse-content">
              <p>
                Our goal is less than 5 minutes, but your membership will put
                you at the front of any line!
              </p>
            </div>
          </div>

          <div
            tabIndex={5}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              How do I schedule an appointment with a provider?
            </div>
            <div className="collapse-content">
              <p>
                Easy. Just open the app and schedule an appointment yourself, or
                message your Care Team in the app. We’ll schedule an appointment
                with a provider at a location that’s convenient for you.
              </p>
            </div>
          </div>

          <div
            tabIndex={6}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              How do I add additional members to my membership?
            </div>
            <div className="collapse-content">
              <p>
                Send an email to plus@trustcarehealth.com with each additional
                member’s name, date of birth and phone number and we’ll get them
                set up. You can also message our team in the app.
              </p>
            </div>
          </div>

          <div
            tabIndex={7}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              Does my membership still work during COVID surges?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely. We treat our members like family, and they always
                get priority.
              </p>
            </div>
          </div>

          <div
            tabIndex={8}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              Are businesses eligible for this as a benefit?
            </div>
            <div className="collapse-content">
              <p>
                Of course. Visit our business page to learn more about our
                business offerings for your team.
              </p>
            </div>
          </div>

          <div
            tabIndex={9}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              Are prescription discounts included in the membership?
            </div>
            <div className="collapse-content">
              <p>
                TrustCare+ comes with hundreds of discounts on prescriptions
                with TrustCare Rx.
              </p>
            </div>
          </div>

          <div
            tabIndex={10}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box  my-5"
          >
            <div className="collapse-title text-xl font-medium">
              Is this available for TrustCare Kids?
            </div>
            <div className="collapse-content">
              <p>
                As long as you have your children on your TrustCare+ membership
                plan, you're covered. Just be sure to let the front desk know
                that you have TrustCare+ and they'll handle the rest! You will
                also have the ability to text the Care Team in the app about any
                of your kids on your membership.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ  */}

        <div></div>
      </section>
    </div>
  );
};

export default Membership;
