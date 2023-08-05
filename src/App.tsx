import Content from "./Element/Content";
import Header from "./Element/Header";

const App = () => {
  return (
    <main className="bg-white pl-14 pr-[240px] pt-[60px] pb-[40px] rounded-xl rounded-br-[30%] md:px-6 md:pt-13 md:pb-[64px] md:max-w-full anim-left">
      <Header />
      <Content />
    </main>
  );
};

export default App;
