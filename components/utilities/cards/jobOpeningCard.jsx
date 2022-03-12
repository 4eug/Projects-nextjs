function JobOpeningCard(props) {
  return (
    <div className="px-10">
      <div className="dark-card ">
        <div className="text-left mt-4">
          <h4 className="text-white">{props.title}</h4>
          <p className="mt-7 text-ijikod-sm">{props.content}</p>
          <div className="flex justify-end">
            <button className="apply">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobOpeningCard;
