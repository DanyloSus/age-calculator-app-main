const Content = () => {
  return (
    <section className="flex flex-col mt-[64px]">
      <div>
        <h1>
          <span className="text-purple" id="numYears">
            --
          </span>{" "}
          years
        </h1>
      </div>
      <div>
        <h1>
          <span className="text-purple" id="numMonths">
            --
          </span>{" "}
          months
        </h1>
      </div>
      <div>
        <h1>
          <span className="text-purple" id="numDays">
            --
          </span>{" "}
          days
        </h1>
      </div>
    </section>
  );
};

export default Content;
