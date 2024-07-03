import React from "react";
import dayjs from "dayjs";

export default function JobCards(props) {
  // const skills = ["Javascript", "React", "nodejs"];
  const day1 = dayjs(Date.now());
  const daydiff = day1.diff(props.postedOn, "day");
  return (
    <div className="flex items-center bg-zinc-50 shadow-lg mx-60 mb-4  justify-between rounded-lg border-solid border-2">
      <div className="ml-5 my-3">
        <h3 className="font-semibold">
          {props.title}-{props.company}
        </h3>
        <p className="mb-4 text-sm">
          {props.type} &#x2022; {props.exprience} &#x2022; {props.location}
        </p>
        <div className="flex gap-3 items-center">
          {props.skills.map((skill) => (
            <p
              key={skill}
              className="border-solid border-2 py-1 px-2 text-gray-500 rounded-lg"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <p>Posted {daydiff > 1? `${daydiff} days` : `${daydiff} day`} ago</p>
        <a href={props.link}>
          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Apply
          </button>
        </a>
      </div>
    </div>
  );
}
