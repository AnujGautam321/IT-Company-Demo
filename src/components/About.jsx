import React from "react";
import aboutImg from "../assets/about1.png";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              dolore voluptas repudiandae ad dolorem? Ex optio ad voluptatum.
              Fuga reiciendis, fugiat officia vero magnam voluptates voluptate
              vel at quos voluptatibus! Quo expedita sint veritatis et in quidem
              laboriosam voluptate beatae odit, autem dicta ducimus nostrum. Aut
              vitae voluptatibus accusamus error est harum accusantium. Atque
              impedit rem labore nulla molestias eius?
            </p>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/members.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/clubs.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    46,328
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
              </div>

             <div className="space-y-8">
             <div className="flex items-center gap-4">
                <img src="/src/assets/icons/event.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    828,867
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/payments.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,926,436
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
             </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
