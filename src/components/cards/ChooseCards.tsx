import React from "react";

function ChooseCards() {
  return (
    <section className="pt-3 lg:pt-[10px] pb-10 lg:pb-20 bg-[#F3F4F6]">
      <div className="container mx-auto max-w-[500px] md:max-w-[90%]">
        <div className="flex flex-wrap  justify-center -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="./src/assets/images/online1.jpg"
                alt="image"
                className="w-full"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Online training from the comfort of your home
                  </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  Book a training session with one of our professional trainers
                  and get in a quick workout from the comfort of your home.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     
                     transition
                     bg-blue
                     text-white
                     hover:opacity-75
                     "
                >
                  Online
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                alt="image"
                className="w-full"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Train in person with one of our trainers
                  </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  Book a training for an in person session. Currently we are
                  providing or in person trainings in London.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     transition
                     bg-blue
                     text-white
                     hover:opacity-75
                     "
                >
                  In person
                </a>
              </div>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                alt="image"
                className="w-full"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                  >
                    Creative Card Component designs graphic elements
                  </a>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>
                <a
                  href="javascript:void(0)"
                  className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                >
                  View Details
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ChooseCards;
