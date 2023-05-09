import React from "react";
import Nav from "./components/Navigation";
import SearchBox from "./components/SearchBox";
import Table from "./components/Tables";
import TicketsPanel from "./components/TicketsPanel";
import Filter from "./components/Filter";

const Main = () => {
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
};

export default Main;
