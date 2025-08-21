const AboutTimetableRecord = ({ place, desc, year }) => {
  return (
    <div className="my-4 flex flex-row items-center justify-between gap-2">
      <div>
        <h6 className="">{place}</h6>
        <p className="text-sm ">{desc}</p>
      </div>
      <div>
        <p className="max-w-[130%]">{year}</p>
      </div>
    </div>
  );
};

export default AboutTimetableRecord;
