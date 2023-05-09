import "./App.css";
import Nav from "./pages/components/Navigation";
import SearchBox from "./pages/components/SearchBox";
import Table from "./pages/components/Tables";
import TicketsPanel from "./pages/components/TicketsPanel";
import Filter from "./pages/components/Filter";

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <section className="my-4 container">
        <SearchBox />
      </section>
      <section>
        <TicketsPanel />
      </section>
      <section className="mt-4">
        <Table />
      </section>
    </div>
  );
}

export default App;
