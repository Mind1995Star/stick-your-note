import React from 'react';
import {
  RiCopyrightLine,
  RiFacebookLine,
  RiInstagramLine,
  RiGithubLine,
} from 'react-icons/ri';

function Footer() {
  return (
    <footer className="z-30 bg-container absolute inset-x-0 mx-auto mt-12 bottom-1 w-[95%] py-4 flex justify-between border-t-2 border-black">
      <div>
        <p className="font-sans font-semibold leading-4">
          <RiCopyrightLine className="inline-block" size="22px" /> 2022 |
          MindStar
        </p>
      </div>
    </footer>
  );
}

export default Footer;
