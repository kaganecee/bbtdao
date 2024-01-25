import React, { useState } from "react";

const AccountBox = ({logout}) => {
  const [openAccountBox, setOpenAccountBox] = useState(false);
  const handleAccountBoxClick = () => {
    setOpenAccountBox((prev) => !prev);
  };

  const handleLogout = () => {
    logout()
    setOpenAccountBox(false)
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className=" flex items-center justify-center w-full rounded-md pr-12 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50"
          id="options-menu"
          onClick={handleAccountBoxClick}
        >
          <svg
            width="50"
            fill="currentColor"
            height="30"
            className="text-white"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
          </svg>
          <div className="text-white comfortaa">User</div>
        </button>
      </div>
      {openAccountBox && (
        <div className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block block px-4 py-2 text-md text-gray-700"
              role="menuitem"
            >
              <span className="flex flex-col">
                <button onClick={handleLogout}>Logout</button>
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountBox;
