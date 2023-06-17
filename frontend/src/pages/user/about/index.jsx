import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <section id="about-us">
        <div class="about">
          <h1 class="text-3xl heading font-brooklyn">
            What is this all <span className="text-secondary ">about</span> ?
          </h1>{" "}
          <br />
          <p class="para head-des text-md">
            We solve the problem of blood emergencies by connecting{" "}
            <span class="one-line">
              <br />
            </span>{" "}
            blood donors directly with people in blood need.{" "}
          </p>
          <div class="row">
            <div class="about-col rounded-xl">
              <div class="image">
                <img src="./Images/drop.png" />
              </div>
              <h3 className="text-primary">What we do ?</h3>
              <p className="para text-sm">We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.</p>
            </div>
            <div class="about-col">
              <div class="image">
                <img src="./Images/innovation.png" />
              </div>
              <br />
              <h3>Innovative</h3>
              <p className="para">
                Blood Buddy is an innovative approach to address global health.We provide <span>immediate access</span> to blood donors.
              </p>
            </div>
            <div class="about-col">
              <div class="image">
                <img src="./Images/netwotk.png" />
              </div>
              <h3>Network</h3>
              <p className="para">Blood Buddy is one of several community organizations working together as a network that responds to emergencies in an efficient manner.</p>
            </div>
            <div class="about-col">
              <div class="image">
                <img src="./Images/noti.png" />
              </div>
              <h3>Get notified</h3>
              <p>Blood Buddy Connect works with network partners to connect blood donors and recipients through an automated SMS service and a mobile app.</p>
            </div>
            <div class="about-col">
              <div class="image">
                <img src="./Images/cost.png" />
              </div>
              <h3>Totally Free</h3>
              <p className="para">
                Blood Budyy's ultimate goal is to provide an easy -to-use, easy-to-access, fast, efficient, and reliable way to get life-saving blood, totally <span>Free of cost.</span>
              </p>
            </div>
            <div class="about-col">
              <div class="image">
                <img src="./Images/save.png" />
              </div>
              <h3>Save Life</h3>
              <p className="para">
                We are a non profit foundation and our main objective is to make sure that everything is done to protect vulnerable persons.<span>Help us by making a gift!</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
