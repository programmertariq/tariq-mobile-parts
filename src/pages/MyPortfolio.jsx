import React from "react";
import { Link } from "react-router-dom";
import myPic from "../assets/myPic.jpg";

const MyPortfolio = () => {
  return (
    <section className="container mx-auto mb-12">
      <h2 className="text-center text-4xl text-purple-700 font-bold mb-8">
        My Portfolio
      </h2>

      <div className="hero bg-base-200 md:px-8 py-8 rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6 md:gap-24">
          <img src={myPic} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">
              Hi, I am
              <br />
              Md Tariqul Islam
            </h1>
            <div className="my-6">
              <h2 className="text-xl">
                Email:{" "}
                <a
                  className="text-blue-500 font-bold"
                  href="mailto:programmertariq@gmail.com"
                >
                  programmertariq@gmail.com
                </a>
              </h2>
              <h2 className="text-lg">
                College:{" "}
                <span className="text-green-500 font-bold">
                  Paikgacha, College. Social Science, 2017-2024
                </span>
              </h2>
              <h2 className="text-lg">
                Skills: <br />
                <span className="text-green-500 font-bold">
                  ReactJs, JavaScript, NodeJs, HTML, CSS, Java, DSA
                </span>
              </h2>
              <div>
                <h2 className="text-lg">Projects:</h2>
                <ol className="">
                  <li className="text-blue-500 underline">
                    <a href="https://tariq-mobile-parts.web.app/">
                      Tariq Mobile Parts
                    </a>
                  </li>
                  <li className="text-blue-500 underline">
                    <a href="https://fruits-stock-93d52.web.app/">
                      Fruit's Stock
                    </a>
                  </li>
                  <li className="text-blue-500 underline">
                    <a href="https://todo-d1553.web.app/">To-Do List</a>
                  </li>
                </ol>
              </div>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
