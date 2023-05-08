import './App.css';
import Nav from './pages/components/Navigation'
import SearchBox from './pages/components/SearchBox';
import Table from './pages/components/Tables';


function App() {
  return (
    <div>
      <div>
     <Nav/>
      </div>
     <section className='mt-4 container'>
        <h2>Dashboard</h2>
        <SearchBox/>
     </section>
     <section className='mt-4'>
      <Table/>
     </section>
    </div>
  );
}

export default App;
