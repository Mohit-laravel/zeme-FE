import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropertiesState from '../context/properties/PropertiesState';
import PropertiesListing from './PropertiesListing';
import SavedPropertiesListing from './SavedPropertiesListing';
import MyProperties from './MyProperties';
import DraftProperties from './DraftProperties';
import RoleSelectionModal from './RoleSelectionModal';
import MultiStepPropertyForm from './MultiStepForm';
import { FilterModal } from './FilterModal';

interface MainContentProps {
  viewMode: 'map' | 'list';
  isRoleModalOpen: boolean;
  isMultiStepFormOpen: boolean;
  isFilterModalOpen: boolean;
  onRoleModalClose: () => void;
  onMultiStepFormClose: () => void;
  onFilterModalClose: () => void;
}

const MainContent: React.FC<MainContentProps> = ({
  viewMode,
  isRoleModalOpen,
  isMultiStepFormOpen,
  isFilterModalOpen,
  onRoleModalClose,
  onMultiStepFormClose,
  onFilterModalClose,
}) => {
  return (
    <div className="min-h-full">
      <div className="h-full">
        <div className="px-4 py-6 md:p-8">
          <PropertiesState>
            <Routes>
              <Route path="/" element={<PropertiesListing viewMode={viewMode} />} />
              <Route path="/fetch-favourites" element={<SavedPropertiesListing />} />
              <Route path="/my-properties" element={<MyProperties />} />
              <Route path="/drafts" element={<DraftProperties />} />
            </Routes>
          </PropertiesState>
        </div>
      </div>

      <RoleSelectionModal open={isRoleModalOpen} onClose={onRoleModalClose} />
      {isMultiStepFormOpen && <MultiStepPropertyForm onClose={onMultiStepFormClose} />}
      <FilterModal 
        isOpen={isFilterModalOpen} 
        onClose={onFilterModalClose} 
        onApply={onFilterModalClose} 
      />
    </div>
  );
};

export default MainContent; 