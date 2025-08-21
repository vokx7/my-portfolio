import AboutTimetableRecord from "./AboutTimetableRecord";

const AboutTimetable = ({ title, records }) => {
  return (
    <div className="flex flex-row">
      <div className="flex-1">
        <h5 className="text-xl">{title}</h5>
      </div>
      <div className="flex-2">
        <hr className="bg-primary w-full" />
        {records.map((record, index) => (
          <AboutTimetableRecord
            key={index}
            place={record.place}
            desc={record.desc}
            year={record.year}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutTimetable;
