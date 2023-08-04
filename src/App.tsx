import Content from "./Element/Content";
import Header from "./Element/Header";

const App = () => {
  return (
    <main className="bg-white pl-14 pr-[240px] pt-[60px] pb-[40px] rounded-xl rounded-br-[30%]">
      <Header />
      <Content />
    </main>
  );
};

export default App;
