import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

function MainContent() {
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
  const [modalOpen, setModalOpen] = useState(false);

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
      { label: 'Total Returns', value: '1.5 Cr' },
      // More details...
    ],
    ganttChart: [
      {
        name: 'Task 1',
        start: Date.UTC(2024, 6, 1),
        end: Date.UTC(2024, 6, 15),
      },
      {
        name: 'Task 2',
        start: Date.UTC(2024, 6, 16),
        end: Date.UTC(2024, 6, 30),
      },
      // More tasks...
    ],
    cashFlowsTable: {
      columns: ['Year', 'Down payment', 'Rental', 'Net EMI', 'Sale', 'Loan Payment at Sale', 'Net Cash Outflow'],
      rows: [
        ['1', '14,25,000', '0', '0', '0', '0', '14,25,000'],
        ['2', '0', '0', '0', '0', '0', '0'],
        // More rows...
      ],
    },
    pointsList: {
      trueStateSelected: ['Point 1', 'Point 2', 'Point 3'],
      thingsToConsider: ['Point A', 'Point B', 'Point C'],
    },
    legalDueDiligence: [
      { icon: '/path/to/icon.png', label: 'RERA' },
      { icon: '/path/to/icon.png', label: 'Title Clearance' },
      // More items...
    ],
    locationAnalysis: {
      filters: {
        Education: ['School', 'College'],
        Transportation: ['Bus Stop', 'Train Station'],
        // More filters...
      },
      defaultMarker: { lat: 50.879, lng: 4.6997 },
      markers: {
        School: [{ lat: 50.879, lng: 4.6997 }],
        // More markers...
      },
    },
    documents: ['Master Plan', 'Brochure'],
    similarProperties: [
      { name: 'Property 1', location: 'Location 1', price: '1 Cr', area: '1000 sqft' },
      // More properties...
    ],
    investmentCalculator: {
      configurations: [
        { value: '1BHK', label: '1BHK (1000 sqft)' },
        // More configurations...
      ],
      strategies: [
        { value: 'buy', label: 'Buy' },
        { value: 'rent', label: 'Rent' },
        // More strategies...
      ],
      sliders: [
        { name: 'tenure', label: 'Tenure', min: 1, max: 30, default: 15 },
        // More sliders...
      ],
    },
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const agents = [
    { image: "https://via.placeholder.com/150",name: 'John Doe', designation: 'Investment Manager', email: 'john.doe@example.com', phone: '123-456-7890', upcomingMeetings: 5 },
  ];

  let meetings = [
    { date: '2024-07-05', time: '10:00 AM', action: 'Discuss project timeline' },
    { date: '2024-07-06', time: '2:30 PM', action: 'Review prototype' },
    { date: '2024-07-08', time: '11:15 AM', action: 'Planning session' },
    { date: '2024-07-05', time: '10:00 AM', action: 'Discuss project timeline' },
    { date: '2024-07-06', time: '2:30 PM', action: 'Review prototype' },
  ];

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
            <Route path="/insights" element={<BlogPage />} /> {/* Add this line */}
            <Route path="/requirement" element={<Requirement />} />
            <Route path="/schedule" element={<ScheduleMeeting />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blogcontent" element={<BlogContent />} />
            <Route path="/details" element={<ProjectDetails data={data} />} />
            <Route path="/agm" element={<AgentModal agent={agents[0]} meetings={meetings} isOpen={true} onClose={()=>{}}/>} />
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
