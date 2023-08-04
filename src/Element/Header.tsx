import useStoreDate from "../store";

const Header = () => {
  const { days, month, year, writeD, writeM, writeY } = useStoreDate(
    (state) => state
  );

  const checkDates = () => {
    const daysEl = document.getElementById("days") as HTMLDivElement;
    const monthsEl = document.getElementById("months") as HTMLDivElement;
    const yearsEl = document.getElementById("years") as HTMLDivElement;

    if (days === null || days === 0) {
      daysEl.children[1].classList.add("border-lightred");
      daysEl.children[0].classList.add("text-lightred");
      daysEl.children[2].classList.remove("opacity-0");
      daysEl.children[2].classList.add("text-lightred");
      daysEl.children[2].innerHTML = "This field is required";
    } else if (days <= 0 || days > 31) {
      daysEl.children[2].classList.add("text-lightred");
      daysEl.children[1].classList.add("border-lightred");
      daysEl.children[0].classList.add("text-lightred");
      daysEl.children[2].innerHTML = "Must be a valid date";
      daysEl.children[2].classList.remove("opacity-0");
    } else {
      daysEl.children[2].classList.remove("text-lightred");
      daysEl.children[1].classList.remove("border-lightred");
      daysEl.children[0].classList.remove("text-lightred");
      daysEl.children[2].classList.add("opacity-0");
    }

    if (month === null || month === 0) {
      monthsEl.children[1].classList.add("border-lightred");
      monthsEl.children[0].classList.add("text-lightred");
      monthsEl.children[2].classList.remove("opacity-0");
      monthsEl.children[2].classList.add("text-lightred");
      monthsEl.children[2].innerHTML = "This field is required";
    } else if (month <= 0 || month > 12) {
      monthsEl.children[2].classList.add("text-lightred");
      monthsEl.children[1].classList.add("border-lightred");
      monthsEl.children[0].classList.add("text-lightred");
      monthsEl.children[2].innerHTML = "Must be a valid date";
      monthsEl.children[2].classList.remove("opacity-0");
    } else {
      monthsEl.children[2].classList.remove("text-lightred");
      monthsEl.children[1].classList.remove("border-lightred");
      monthsEl.children[0].classList.remove("text-lightred");
      monthsEl.children[2].classList.add("opacity-0");
    }

    if (year === null || year === 0) {
      yearsEl.children[1].classList.add("border-lightred");
      yearsEl.children[0].classList.add("text-lightred");
      yearsEl.children[2].classList.remove("opacity-0");
      yearsEl.children[2].classList.add("text-lightred");
      yearsEl.children[2].innerHTML = "This field is required";
    } else if (year <= 0 || year >= new Date().getFullYear()) {
      yearsEl.children[2].classList.add("text-lightred");
      yearsEl.children[1].classList.add("border-lightred");
      yearsEl.children[0].classList.add("text-lightred");
      yearsEl.children[2].innerHTML = "Must be a valid date";
      yearsEl.children[2].classList.remove("opacity-0");
    } else {
      yearsEl.children[2].classList.remove("text-lightred");
      yearsEl.children[1].classList.remove("border-lightred");
      yearsEl.children[0].classList.remove("text-lightred");
      yearsEl.children[2].classList.add("opacity-0");
    }

    if (
      !daysEl.children[0].classList.contains("text-lightred") &&
      !monthsEl.children[0].classList.contains("text-lightred") &&
      !yearsEl.children[0].classList.contains("text-lightred")
    ) {
      const fromDate = new Date(
        year as number,
        (month as number) - 1,
        days as number
      );
      const currentDate = new Date();

      const timeDifference = currentDate.getTime() - fromDate.getTime();

      const millisecondsPerDay = 3600000 * 24;
      const millisecondsPerMonth = millisecondsPerDay * 30;
      const millisecondsPerYear = millisecondsPerDay * 365;

      const yearsD = Math.floor(timeDifference / millisecondsPerYear);
      const monthsD = Math.floor(
        (timeDifference % millisecondsPerYear) / millisecondsPerMonth
      );

      const daysD = Math.floor(
        ((timeDifference % millisecondsPerYear) % millisecondsPerMonth) /
          millisecondsPerDay
      );

      const numDaysEl = document.getElementById("numDays") as HTMLDivElement;
      const numMonthsEl = document.getElementById(
        "numMonths"
      ) as HTMLDivElement;
      const numYearsEl = document.getElementById("numYears") as HTMLDivElement;

      numDaysEl.innerHTML = daysD.toString();
      numMonthsEl.innerHTML = monthsD.toString();
      numYearsEl.innerHTML = yearsD.toString();
    }
  };

  return (
    <header className="flex gap-8 relative w-full">
      <div id="days" className="">
        <h2>DAY</h2>
        <input
          type="number"
          placeholder="DD"
          value={days ? days.toString() : ""}
          min="1"
          max="31"
          onChange={writeD}
        />
        <span className="opacity-0">Error</span>
      </div>
      <div id="months">
        <h2>MONTH</h2>
        <input
          type="number"
          placeholder="MM"
          max="12"
          value={month ? month.toString() : ""}
          min="1"
          onChange={writeM}
        />
        <span className="opacity-0">Error</span>
      </div>
      <div id="years">
        <h2>YEAR</h2>
        <input
          type="number"
          placeholder="YYYY"
          max={new Date().getFullYear()}
          onChange={writeY}
          value={year ? year.toString() : ""}
          min="1"
        />
        <span className="opacity-0">Error</span>
      </div>
      <div className="absolute -bottom-[100px] flex w-button z-10 items-center">
        <hr className="w-full" />
        <button onClick={checkDates}>
          <img src="./icon-arrow.svg" alt="icon arrow" />
        </button>
      </div>
    </header>
  );
};

export default Header;
