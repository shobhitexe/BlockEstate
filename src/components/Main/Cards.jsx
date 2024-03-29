import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { motion } from "framer-motion";

export default function Cards({
  estates,
  contractPrice,
  setRenderLimit,
  isRendered,
  fullRendered,
}) {
  return (
    <div className="flex flex-col mb-[100px]">
      <div className="xs:mt-10 mt-[150px]  sm:flex grid grid-cols-2 xs:gap-8 gap-5 flex-wrap justify-center">
        {estates.map((data, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: "spring",
                stiffness: 40,
              }}
              key={index}
            >
              {data && (
                <Link
                  className="flex relative sm:w-[200px] xs:w-[200px] w-[150px] sm:h-[300px] xs:h-[250px] h-[200px] sm:mx-0 mx-auto cursor-pointer"
                  to={`property/${index}`}
                >
                  <img
                    src={data["image"]}
                    alt={`${data.tittle}-img`}
                    loading="lazy"
                    className="rounded-3xl object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0, translateY: "100%" }}
                    whileInView={{ opacity: 1, translateY: "0%" }}
                    transition={{
                      delay: 0.2,
                      duration: 1,
                      type: "spring",
                      stiffness: 60,
                    }}
                    className="card-gradient absolute bottom-0 w-full xs:h-[40%] h-[42%] cursor-pointer"
                  >
                    <motion.h1
                      className="text-primary font-orbitron font-semibold xs:p-3 p-1 xs:text-[15px] text-[12px]"
                      initial={{ zIndex: 0, translateY: "50%" }}
                      whileInView={{ translateY: "0%" }}
                      transition={{
                        delay: 0.9,
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {data.tittle}
                    </motion.h1>
                    <div className="flex px-3 justify-between mt-1">
                      <div className="flex">
                        <div className="flex flex-col mx-1 text-primary font-poppins my-auto">
                          <motion.p
                            className="xs:text-[9px] text-[8px] opacity-80 "
                            initial={{ zIndex: 0, translateY: "50%" }}
                            whileInView={{ translateY: "0%" }}
                            transition={{
                              delay: 0.9,
                              duration: 1,
                              type: "spring",
                              stiffness: 100,
                            }}
                          >
                            Area
                          </motion.p>
                          <h1 className="text-[11px] ">{data.area} sqft</h1>
                        </div>
                      </div>
                      <div className="flex flex-col mx-1 text-primary font-poppins my-auto px-3">
                        <motion.p
                          className="xs:text-[10px] text-[8px] opacity-80 "
                          initial={{ zIndex: 0, translateY: "50%" }}
                          whileInView={{ translateY: "0%" }}
                          transition={{
                            delay: 0.9,
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                          }}
                        >
                          Price
                        </motion.p>
                        <motion.h1
                          className="xs:text-[13px] text-[8px] xs:font-normal font-bold"
                          initial={{ zIndex: 0, translateY: "50%" }}
                          whileInView={{ translateY: "0%" }}
                          transition={{
                            delay: 0.9,
                            duration: 1,
                            type: "spring",
                            stiffness: 100,
                          }}
                        >
                          {contractPrice[index]} ETH
                        </motion.h1>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>

      {!fullRendered && isRendered && (
        <div
          className="glass-gradient font-orbitron text-primary mx-auto px-5 py-2 my-10 cursor-pointer"
          onClick={() => {
            setRenderLimit((prev) => prev + 8);
          }}
        >
          Load More....
        </div>
      )}
      {!isRendered && <Loading />}
    </div>
  );
}
