import React from "react";

// images
import ads from "../asstes/images/ads.svg";
import book from "../asstes/images/book.svg";
import clock from "../asstes/images/clock-icon.svg";
import edu from "../asstes/images/edu.svg";
import live from "../asstes/images/live.svg";
import backGround from "../asstes/images/backGround.png";
import PlanForm from "./PaymentForm";


export const PaymentDashboard= () => {
  const pointsData = [
    {
      img: book,
      heading: () => ( <><span className="font-semibold text-[#0096FF]">100+</span> Job relevant courses{" "}</>
      ),
    },
    {
      img: clock,
      heading: () => (
        <>
          <span className="font-semibold text-[#0096FF]">20,000+</span> Hours of content{" "}
        </>
      ),
    },
    {
      img: live,
      heading: () => (
        <>
          <span className="font-semibold text-[#0096FF]">Exclusive</span> webinar access{" "}
        </>
      ),
    },
    {
      img: edu,
      heading: () => (
        <>
          Scholarship worth <span className="font-semibold text-[#0096FF]">₹94,500</span> 
        </>
      ),
    },
    {
      img: ads,
      heading: () => (
        <>
          <span className="font-semibold text-[#0096FF]">Ad Free</span> learning experience{" "}
        </>
      ),
    },
  ];

  return (
    <div className="w-[100%] h-[auto]"
      style={{
        backgroundImage: `url('${backGround}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="max-w-screen-xl md:mx-auto py-8 px-4 xl:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-[100%] md:w-[50%]">
            <div>
              <div>
                <h1 className="text-[34px] font-semibold text-white">
                  Access curated courses worth 
                  <span> ₹ <span className="relative"><div className="absolute bottom-5 left-0 h-[6px] w-[90%] bg-[#FF0000]"></div>18,500 </span>at just
                  <span className="text-[#0096FF]"> ₹ 99 </span>per year!</span>
                </h1>
              </div>
              <div className="mt-10">
                <ol className="gap-12">
                  {pointsData.map((elePoints, ep) => {
                    return (
                      <li key={ep} className="flex gap-6 mt-8">
                        <div className="w-[48px] h-[48px]">
                          <img src={elePoints.img} alt={elePoints.heading} />
                        </div>
                        <h5 className="text-[22px] font-normal text-white">
                          {elePoints.heading()}
                        </h5>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] md:ml-8 mt-8">
            <PlanForm />
          </div>
        </div>
      </div>
    </div>
  );
};