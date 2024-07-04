// MainContent.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SidebarWithLogo from './Sidebar/sidebar';
import { SearchBar } from './SearchBar';
import ProjectGrid from './ProjectGrid';
import Map from './Map/Map';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import HelpModal from './Help/HelpModal';
import WishList from './WishList/WishList';
import BlogPage from './Blog/BlogPage'; 
import Requirement from './Requirements/Requirement';
import AgentModal from './AgentModal/AgentModal';
import Profile from './Profile/Profile';

function MainContent({ view, projects, handleSearch, handleFilterChange, filters, setMinInvestment, toggleView, loadMoreProjects, totalProjects }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="flex h-screen">
      <div className={`fixed w-64 h-full bg-white-800 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-20`}>
        <SidebarWithLogo sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleModal={toggleModal} />
      </div>
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`} style={{ width: `calc(100% - 16rem)` }}>
        <div className=''>
          <div className="h-20 bg-white-100 border-b-2 border-gray-300 flex items-center p-4">
            <Typography variant="h5" color="blue-gray">
              TruEstate
            </Typography>
          </div>
          {/* <div className="h-10vh bg-white-100 border-b-2 border-gray-300 flex items-center">
            <SearchBar
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
              minInvestment={filters.minInvestment}
              setMinInvestment={setMinInvestment}
              filters={filters}
            />
            <button
              onClick={toggleView}
              className="ml-4 p-2 bg-white border border-gray-300 rounded"
            >
              {view === 'grid' ? 'Map' : 'Grid'}
            </button>
          </div> */}
        </div>
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={
              <div className="h-full">
                {view === 'grid' ? (
                  <ProjectGrid projects={projects} loadMoreProjects={loadMoreProjects} totalProjects={totalProjects} />
                ) : (
                  <Map
                    projects={projects}
                    onSearch={handleSearch}
                    onFilterChange={handleFilterChange}
                    minInvestment={filters.minInvestment}
                    setMinInvestment={setMinInvestment}
                    filters={filters}
                  />
                )}
              </div>
            } />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/insights" element={<BlogPage />} /> {/* Add this line */}
            <Route path="/requirement" element={<Requirement />} />
          </Routes>
        </div>
      </div>
      {modalOpen && <HelpModal closeModal={toggleModal} />}
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleSidebar}></div>}
      <button className={`md:hidden p-2 fixed top-4 left-4 z-50 ${sidebarOpen ? 'hidden' : 'block'}`} onClick={toggleSidebar}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default MainContent;
