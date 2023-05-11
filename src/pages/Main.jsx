import React from "react";
import Nav from "./components/Navigation";
import SearchBox from "./components/SearchBox";
import Table from "./components/Tables";
import TicketsPanel from "./components/TicketsPanel";
import Filter from "./components/FilterModal";
import TotalperPersonChart from "./components/TotalperPersonChart";
import { Container } from "react-bootstrap";
import FilterChartMonthly from "./components/FilterChartMonthly";

const Main = () => {
  return (
    <div>
      <section>
        <TicketsPanel />
      </section>
      <Container>
        <section>
          <FilterChartMonthly/>
        </section>
        <section className="mt-4">
          <TotalperPersonChart />
        </section>
      </Container>
    </div>
  );
};

export default Main;
