const Header = () => {
  return (
    <header className="flex">
      <div>
        <h2>DAY</h2>
        <input type="text" placeholder="DD" />
      </div>
      <div>
        <h2>MONTH</h2>
        <input type="text" placeholder="MM" />
      </div>
      <div>
        <h2>YEAR</h2>
        <input type="text" placeholder="YYYY" />
      </div>
    </header>
  );
};

export default Header;
