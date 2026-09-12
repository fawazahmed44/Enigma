import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { TasteOfPersiaPage } from './pages/TasteOfPersiaPage';
import { GoldenJourneyPage } from './pages/GoldenJourneyPage';
import { MoroccanPopUpPage } from './pages/MoroccanPopUpPage';
import { TerracePage } from './pages/TerracePage';
import { PrivateDiningPage } from './pages/PrivateDiningPage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { InformationPage } from './pages/InformationPage';
import { ReservationPage } from './pages/ReservationPage';
import { KebabsPage } from './pages/KebabsPage';
import { RestaurantsAndBarsPage } from './pages/RestaurantsAndBarsPage';
import { RoomsAndSuitesPage } from './pages/RoomsAndSuitesPage';
import { SpaAndGymPage } from './pages/SpaAndGymPage';
import { MeetingsAndEventsPage } from './pages/MeetingsAndEventsPage';
import { SpecialOffersPage } from './pages/SpecialOffersPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#09090b] text-[#ede8df] selection:bg-[#c8aa76] selection:text-[#09090b]">
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/taste-of-persia" element={<TasteOfPersiaPage />} />
            <Route path="/kebabs" element={<KebabsPage />} />
            <Route path="/golden-journey" element={<GoldenJourneyPage />} />
            <Route path="/moroccan-pop-up" element={<MoroccanPopUpPage />} />
            <Route path="/terrace" element={<TerracePage />} />
            <Route path="/private-dining" element={<PrivateDiningPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/restaurants-and-bars" element={<RestaurantsAndBarsPage />} />
            <Route path="/rooms-and-suites" element={<RoomsAndSuitesPage />} />
            <Route path="/spa-and-gym" element={<SpaAndGymPage />} />
            <Route path="/meetings-and-events" element={<MeetingsAndEventsPage />} />
            <Route path="/special-offers" element={<SpecialOffersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/information" element={<InformationPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
