import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="mx-auto p-8 text-center mt-14 max-w-screen-md">
      <h1 className="text-3xl text-primary font-wavvePADO heading-underline">Contact</h1>
      <div className="mt-8 p-9 text-lg leading-9 border border-primary w-full max-w-md mx-auto">
        <p>PHONE : 010. 2910. 0416</p>
        <p>
          E-MAIL :{" "}
          <a href="mailto:duwls1503@gmail.com" className="hover:text-primary">
            duwls1503@gmail.com
          </a>
        </p>
        <p>
          GITHUB :{" "}
          <a href="https://github.com/Yeojin-Kim12" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            https://github.com/Yeojin-Kim12
          </a>
        </p>
        <p>
          BLOG :{" "}
          <a href="https://velog.io/@duwls1503/posts" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            https://velog.io/@duwls1503/posts
          </a>
        </p>
      </div>
      <p className="mt-56 text-gray-300">Copyright 2024. Yeojin All rights reserved.</p>
    </section>
  );
};

export default Contact;
