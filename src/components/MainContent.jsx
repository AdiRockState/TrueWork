import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import SidebarWithLogo from './Sidebar/sidebar';
import { SearchBar } from './SearchBar';
import ProjectGrid from './ProjectGrid';
import Map from './Map/Map';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import HelpModal from './Help/HelpModal';
import WishList from './WishList/WishList';
import BlogPage from './Blog/BlogPage';
import BlogContent from './Blog/BlogContent';
import Requirement from './Requirements/Requirement';
import AgentModal from './AgentModal/AgentModal';
import Profile from './Profile/Profile';
import ScheduleMeeting from './ScheduleMeeting/ScheduleMeeting';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import styles from './MainContent.module.css';
import WhatIcon2 from '/icons-1/whatsapp-1.svg';

function MainContent() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [view, setView] = useState('map');
  const [filters, setFilters] = useState({
    searchTerm: '',
    investmentType: '',
    strategy: '',
    minInvestment: 0,
    tenure: ''
  });
  const [offset, setOffset] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 12;

  const handleUserClick = () => {
    navigate('/profile');
  };

  const fetchProjects = useCallback(async (newFilters, newOffset = 0, newView = view) => {
    if (loading) return;

    const appliedLimit = newView === 'grid' ? limit : undefined;
    console.log(`Fetching projects with limit: ${appliedLimit}, offset: ${newOffset}, view: ${newView}`);

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/api/projects', {
        ...newFilters,
        offset: newOffset,
        limit: appliedLimit
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { projects, totalProjects } = response.data;

      if (newOffset === 0 || newView !== view) {
        console.log("Setting new projects");
        setProjects(projects);
      } else {
        console.log("Appending projects");
        setProjects(prevProjects => [...prevProjects, ...projects]);
      }
      setTotalProjects(totalProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, limit, view]);

  useEffect(() => {
    fetchProjects(filters, 0, view);
  }, [filters, view]);

  const handleSearch = (term) => {
    setFilters(prevFilters => ({ ...prevFilters, searchTerm: term }));
    setOffset(0);
  };

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
    setOffset(0);
  };

  const setMinInvestment = (value) => {
    setFilters(prevFilters => ({ ...prevFilters, minInvestment: value }));
    setOffset(0);
  };

  const toggleView = () => {
    const newView = view === 'grid' ? 'map' : 'grid';
    setView(newView);
    setOffset(0);
  };

  const loadMoreProjects = () => {
    if (view === 'grid' && projects.length < totalProjects && !loading) {
      const newOffset = offset + limit;
      fetchProjects(filters, newOffset, view);
      setOffset(newOffset);
    }
  };

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [HelpmodalOpen, setHelpModalOpen] = useState(false);
  const [AgentmodalOpen, setAgentModalOpen] = useState(false);
  const [ScheduleMeetingOpen, setScheduleMeetingOpen] = useState(false);

  const data = {
    images: ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg'],
    projectOverview: [
      { label: 'Location', value: 'Hsr Layout' },
      { label: 'Configuration', value: '1,2,3 BHK' },
      { label: 'Stage', value: 'New Launch' },
      { label: 'Rera No.', value: 'PRM/KA/201238790a' },
      { label: 'Units', value: '500' },
      { label: 'Unit left', value: '200' },
      { label: 'Tower', value: 'G+14' },
      { label: 'Area', value: '70 Acres' },
      { label: 'Possession By', value: '2026' },
      { label: 'Builder', value: 'Mahindra' },
      { label: 'Age', value: '2 year' },
      { label: 'Type', value: 'Villa & Row houses' },
      { label: 'Construction started', value: '2024' },
      { label: 'Type', value: 'Apartment' },
      { label: 'Builder category', value: 'Cat B' },
    ],
    investmentOverview: [
      { label: 'Total Investment', value: '1.25 Cr' },
      { label: 'Sold', value: '60%' },
      { label: 'Tenure', value: '2 years' },
      { label: 'Initial Investment', value: '1.25 Cr' },
      { label: 'Land Appreciation %', value: '20% year on year' },
      { label: 'Asset Management %', value: '0.5%' },
      { label: 'Rental Yield', value: '8%' },
    ],
    amenities: [
      { label: 'Club House', value: true },
      { label: 'Gymnasium', value: true },
      { label: 'Swimming Pool', value: true },
      { label: 'Play Area', value: true },
      { label: 'Rain Water Harvesting', value: true },
      { label: 'Jogging Track', value: true },
      { label: 'Yoga, Aerobics and Meditation Room', value: true },
      { label: 'Spa', value: true },
      { label: 'Electricity Backup', value: true },
    ],
    builderDetails: [
      { label: 'Builder Name', value: 'Mahindra' },
      { label: 'Address', value: 'Bangalore, India' },
      { label: 'Completed Projects', value: '10' },
      { label: 'Ongoing Projects', value: '5' },
      { label: 'Upcoming Projects', value: '3' },
    ],
  };

  const agents = [
    { name: 'Agent 1', phone: '1234567890', image: 'https://via.placeholder.com/150', designation: 'Investment Manager', email: 'abc@gmail.com' },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleHelpModal = () => setHelpModalOpen(!HelpmodalOpen);
  const toggleAgentModal = () => setAgentModalOpen(!AgentmodalOpen);
  const toggleScheduleMeeting = () => setScheduleMeetingOpen(!ScheduleMeetingOpen);

  const meetings = [
    { date: '2024-07-05', time: '10:00 AM', action: 'Discuss project timeline' },
    { date: '2024-07-06', time: '2:30 PM', action: 'Review prototype' },
    { date: '2024-07-08', time: '11:15 AM', action: 'Planning session' },
    { date: '2024-07-05', time: '10:00 AM', action: 'Discuss project timeline' },
    { date: '2024-07-06', time: '2:30 PM', action: 'Review prototype' },
  ];

  return (
    <div className="flex h-screen">
      <div className={`fixed w-64 h-full bg-white-800 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-20`}>
        <SidebarWithLogo sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} toggleHelpModal={toggleHelpModal} toggleAgentModal={toggleAgentModal}/>
      </div>
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`} style={{ width: `calc(100% - 16rem)` }}>
        <div className=''>
          <div className="h-20 bg-white-100 border-b-2 border-gray-300 flex items-center p-4">
            <Typography variant="h5" color="blue-gray">
              TruEstate
            </Typography>
            <div className='flex justify-between items-center right-0 absolute mr-8'>
              <img src='/icons-1/notifwbg.svg' alt="Agent" className={`w-8 h-8 rounded-full mr-4 ${styles.agentImage}`} />
              <img 
                src= 'https://via.placeholder.com/150'
                alt="User" 
                className="w-8 h-8 rounded-full mr-4" 
                onClick={handleUserClick}
              />
              <button className={`border py-2 px-4 rounded-md flex items-center justify-center ${styles.actionButton2}`} onClick={toggleScheduleMeeting}>
                <img src={WhatIcon2} className={`text-xl mr-2 ${styles.icon}`} alt="WhatsApp" />Connect with expert
              </button>
            </div>
          </div>
          <div className="h-10vh bg-white-100 border-b-2 border-gray-300 flex items-center">
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
          </div>
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
            <Route path="/insights" element={<BlogPage />} />
            <Route path="/requirement" element={<Requirement />} />
            
            <Route path="/profile" element={<Profile />} />
            <Route path="/blogcontent" element={<BlogContent />} />
            <Route path="/details" element={<ProjectDetails data={data} />} />
          </Routes>
        </div>
      </div>
      {HelpmodalOpen && <HelpModal closeHelpModal={toggleHelpModal} />}
      {AgentmodalOpen && <AgentModal agent={agents[0]} meetings={meetings} closeAgentModal={toggleAgentModal} openScheduleMeeting={toggleScheduleMeeting} />}
      {ScheduleMeetingOpen && <ScheduleMeeting closeScheduleMeeting={toggleScheduleMeeting} />}
      {sidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleSidebar}></div>}
      <button className={`md:hidden p-2 fixed top-4 left-4 z-50 ${sidebarOpen ? 'hidden' : 'block'}`} onClick={toggleSidebar}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default MainContent;
