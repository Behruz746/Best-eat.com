import {
  Navbar,
  Hero,
  HeadlineCards,
  Food,
  Category,
} from "./components/pathIndex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
