import React, { useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { AppLayout } from './components/layout/AppLayout';

import { LoginPage } from './pages/auth/LoginPage';

import { DashboardPage } from './pages/dashboard/DashboardPage';

import { NotFoundPage } from './pages/NotFoundPage';

import { ProtectedRoute } from './components/common/ProtectedRoute';

import { Toaster } from './components/ui/toaster';

import { useAuthStore } from './stores/authStore';

// Customer pages

import CustomerListPage from './pages/customers/CustomerListPage';

import CustomerFormPage from './pages/customers/CustomerFormPage';

import CustomerDetailPage from './pages/customers/CustomerDetailPage';

// Engineer pages

import EngineerListPage from './pages/engineers/EngineerListPage';

import EngineerFormPage from './pages/engineers/EngineerFormPage';

import EngineerDetailPage from './pages/engineers/EngineerDetailPage';

// Service Call pages

import ServiceCallListPage from './pages/service-calls/ServiceCallListPage';

import ServiceCallFormPage from './pages/service-calls/ServiceCallFormPage';

import ServiceCallDetailPage from './pages/service-calls/ServiceCallDetailPage';

import { NFVentureStudioPage } from './pages/NFVentureStudioPage';

import { NFAboutPage } from './pages/NFAboutPage';

import { NFTeamPage } from './pages/NFTeamPage';

import { NFContactPage } from './pages/NFContactPage';

import { NFDigitalCXOPage } from './pages/NFDigitalCXOPage';
import { NFFundingGrantsPage } from './pages/NFFundingGrantsPage';
import { NFIICPage } from './pages/NFIICPage';
import { NFIPRPage } from './pages/NFIPRPage';

// Settings, Backup, Users, Calendar, Reports

import SettingsPage from './pages/settings/SettingsPage';

import BackupPage from './pages/backup/BackupPage';

import UserListPage from './pages/users/UserListPage';

import UserFormPage from './pages/users/UserFormPage';

import CalendarPage from './pages/CalendarPage';

import ReportsPage from './pages/ReportsPage';

function App() {

  const initialize = useAuthStore((s) => s.initialize);

  useEffect(() => {

    initialize();

  }, [initialize]);

  return (

    <>

      <Routes>

        {/* NF Venture Studio Primary Website */}

        <Route path="/" element={<NFVentureStudioPage />} />

        <Route path="/home" element={<NFVentureStudioPage />} />

        <Route path="/nf-venture-studio" element={<NFVentureStudioPage />} />

        <Route path="/studio" element={<NFVentureStudioPage />} />

        <Route path="/about" element={<NFAboutPage />} />

        <Route path="/about-us" element={<NFAboutPage />} />

        <Route path="/team" element={<NFTeamPage />} />

        <Route path="/our-team" element={<NFTeamPage />} />

        <Route path="/from-presidents-desk" element={<NFTeamPage />} />

        <Route path="/from-vice-presidents-desk" element={<NFTeamPage />} />

        <Route path="/from-ceos-desk" element={<NFTeamPage />} />

        <Route path="/our-inspiration" element={<Navigate to="/team" replace />} />

        <Route path="/from-secretarys-desk" element={<Navigate to="/team" replace />} />

        <Route path="/from-executive-directors-desk" element={<Navigate to="/team" replace />} />

        <Route path="/contact" element={<NFContactPage />} />

        <Route path="/contact-us" element={<NFContactPage />} />

        <Route path="/digital-cxo-suite" element={<NFDigitalCXOPage />} />

        <Route path="/digital-cxo" element={<Navigate to="/digital-cxo-suite" replace />} />

        <Route path="/cxo" element={<Navigate to="/digital-cxo-suite" replace />} />
        <Route path="/funding-and-grants" element={<NFFundingGrantsPage />} />
        <Route path="/funding" element={<Navigate to="/funding-and-grants" replace />} />
        <Route path="/grants" element={<Navigate to="/funding-and-grants" replace />} />
        <Route path="/iic" element={<NFIICPage />} />
        <Route path="/iic-innovation" element={<Navigate to="/iic" replace />} />
        <Route path="/institutional-innovation" element={<Navigate to="/iic" replace />} />
        <Route path="/ipr" element={<NFIPRPage />} />
        <Route path="/intellectual-property" element={<Navigate to="/ipr" replace />} />
        <Route path="/intellectual-property-rights" element={<Navigate to="/ipr" replace />} />

        {/* Management & Dashboard System */}

        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>

          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Customers */}

          <Route path="/customers" element={<CustomerListPage />} />

          <Route path="/customers/new" element={<CustomerFormPage />} />

          <Route path="/customers/:id/edit" element={<CustomerFormPage />} />

          <Route path="/customers/:id" element={<CustomerDetailPage />} />

          {/* Engineers */}

          <Route path="/engineers" element={<EngineerListPage />} />

          <Route path="/engineers/new" element={<EngineerFormPage />} />

          <Route path="/engineers/:id/edit" element={<EngineerFormPage />} />

          <Route path="/engineers/:id" element={<EngineerDetailPage />} />

          {/* Service Calls */}

          <Route path="/service-calls" element={<ServiceCallListPage />} />

          <Route path="/service-calls/new" element={<ServiceCallFormPage />} />

          <Route path="/service-calls/:id/edit" element={<ServiceCallFormPage />} />

          <Route path="/service-calls/:id" element={<ServiceCallDetailPage />} />

          {/* Other modules */}

          <Route path="/calendar" element={<CalendarPage />} />

          <Route path="/reports" element={<ReportsPage />} />

          <Route path="/settings" element={<SettingsPage />} />

          <Route path="/backup" element={<BackupPage />} />

          <Route path="/users" element={<UserListPage />} />

          <Route path="/users/new" element={<UserFormPage />} />

          <Route path="/users/:id/edit" element={<UserFormPage />} />

        </Route>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

      <Toaster />

    </>

  );

}

export default App;

