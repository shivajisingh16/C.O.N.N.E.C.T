import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashBoard from "./components/Dashboard";
import AluminiList from "./components/AluminiList";
import UserHome from "./components/UserHome";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import { useState,useEffect } from "react";
import EventPage from "./components/EventPage";
import { eventData } from "./data";
import EventScheduler from "./components/EventScheduler";
import CreatePost from "./components/CreatePost";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest(".sidebar")) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);
  const userData = {
    userName: "Prem Sagar",
    credits: 1078,
    sessions: 10,
    followers: 132,
    eventsHosted: 2,
    profileImage: "",
    topAlumni: [
      { name: "Mohana Swarupa", credits: 2033, avatar: "/images/mohana.png" },
      {
        name: "Bhavani Malleswari",
        credits: 1933,
        avatar: "/images/bhavani.png",
      },
      { name: "Sadguru Charan", credits: 1733, avatar: "/images/sadguru.png" },
    ],
    suggestions: [
      {
        name: "J saurav",
        institution: "Alumni at JNTUGV",
        avatar: "/images/praneeth.png",
      },
      {
        name: "Badam Jyothi",
        institution: "Alumni at VIT-AP",
        avatar: "/images/jyothi.png",
      },
      {
        name: "Praveen Suvari",
        institution: "Alumni at VIT-AP",
        avatar: "/images/suvari.png",
      },
    ],
  };
  const events = [
    {
      name: "Tech Innovation Summit 2024",
      organizedBy: "Technical Education Department, Govt. of Rajasthan",
      date: "2024-12-10",
      time: "9 AM to 5 PM",
      venue: "Rajasthan International Convention Centre, Jaipur",
    },
    {
      name: "Alumni Meet & Greet",
      organizedBy: "Alumni Association",
      date: "2024-12-15",
      time: "6 PM to 9 PM",
      venue: "City Palace, Jaipur",
    },
    {
      name: "Coding Hackathon",
      organizedBy: "Techies Club",
      date: "2025-01-05",
      time: "10 AM to 6 PM",
      venue: "Tech Park, Jodhpur",
    },
    {
      name: "Career Guidance Workshop",
      organizedBy: "Career Development Cell",
      date: "2025-01-20",
      time: "2 PM to 5 PM",
      venue: "University Auditorium, Kota",
    },
    {
      name: "Annual Sports Meet",
      organizedBy: "Sports Committee",
      date: "2025-02-10",
      time: "8 AM to 2 PM",
      venue: "Sports Complex, Udaipur",
    },
  ];
  const mentorships = [
    {
      name: "AI & ML Mentorship Program",
      organizedBy: "Tech Education Dept.",
      sessionsConducted: 12,
      activeMentees: 25,
      nextSession: "3 PM to 5 PM (2024-12-10)",
    },
    {
      name: "Web Development Bootcamp",
      organizedBy: "Code Enthusiasts Club",
      sessionsConducted: 18,
      activeMentees: 40,
      nextSession: "10 AM to 1 PM (2024-12-12)",
    },
    {
      name: "Data Science Masterclass",
      organizedBy: "Data Wizards Community",
      sessionsConducted: 15,
      activeMentees: 30,
      nextSession: "2 PM to 4 PM (2024-12-15)",
    },
    {
      name: "UI/UX Design Workshop",
      organizedBy: "Creative Minds",
      sessionsConducted: 10,
      activeMentees: 20,
      nextSession: "5 PM to 7 PM (2024-12-18)",
    },
    {
      name: "Cybersecurity Essentials",
      organizedBy: "Cyber Safe Foundation",
      sessionsConducted: 8,
      activeMentees: 22,
      nextSession: "11 AM to 1 PM (2024-12-20)",
    },
  ];
  const recommendedAlumni = [
    { id: '1', name: 'Mohana Swarupa', university: 'JNTU-GV', profileImage: '' },
    { id: '2', name: 'Charan Teja', university: 'JNTU-GV', profileImage: '' },
    { id: '3', name: 'Charan Sala', university: 'JNTU-GV', profileImage: '' },
    { id: '4', name: 'Maradapu Bhavani', university: 'JNTU-GV', profileImage: '' },
    { id: '5', name: 'Leela Avinash', university: 'JNTU-GV', profileImage: '' },
    { id: '6', name: 'Lisandro', university: 'University of Warsaw', profileImage: '' }
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout setIsSidebarOpen={setIsSidebarOpen} />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home  isSidebarOpen={isSidebarOpen}/>} />
        </Route>
        <Route path="/dashboard" element={<DashBoard userData={userData}  />}>
          <Route
            path="home"
            element={
             <UserHome userData={userData} events={events} mentorships={mentorships}/>
            }
          />
          <Route path="network" element={<AluminiList recommendedAlumni={recommendedAlumni}/>} />
          <Route path="posts" element={<Posts/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="sheduleevent" element={<EventScheduler/>} />
          <Route path="createpost" element={<CreatePost/>} />
          <Route path="events" element={<EventPage eventsData={eventData}/>} />
        </Route>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </>
  );
}

export default App;
