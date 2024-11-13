import React from "react";
import SectionTitle from "../Components/SectionTitle";
import Button from "../Components/Button";
import Group65Image from "../assets/img/Group 65.jpg";
import MaskGroupImage from "../assets/img/Mask Group.jpg";
import InfoCard from "../Components/InfoCard";
import BlackIcon from "../assets/img/Black.jpg";

const Home = () => {
  return (
    <div>
      {/* Hero section START */}
      <div className="flex flex-row items-center justify-center px-8 py-10">
        <div className="flex flex-col items-center justify-center">
          <SectionTitle
            sectionTitle="Better Insights For Business Growth"
            breadcrumb="We are here"
          />
          <Button children="View More" />
        </div>
        <div flex flex-col items-center justify-center>
          <img
            src={Group65Image}
            alt=""
            className="max-w-lg max-h-lg rounded-xl"
          />
        </div>
      </div>
      {/* Hero section END */}

      {/* About section START */}
      <div className="flex flex-row items-center justify-center px-8 py-10 bg-secondary">
        <div flex flex-col items-center justify-center>
          <img
            src={MaskGroupImage}
            alt=""
            className="max-w-lg max-h-lg rounded-5"
          />
        </div>

        <div className="flex flex-col items-start justify-center px-5">
          <SectionTitle
            sectionTitle="Better Insights For Business Growth"
            breadcrumb="We are here"
          />
          <p className="text-base pl-3 pr-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          <div className="mt-5 ml-3">
            <InfoCard
              bgImage="bg-secondary"
              title="Get Instant Professional Advice"
              image={BlackIcon}
              desc="Ready to Help"
              number="+62 259519252"
            />
          </div>
        </div>
      </div>
      {/* About section END */}
    </div>
  );
};

export default Home;
