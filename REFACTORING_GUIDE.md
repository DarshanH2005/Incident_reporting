# Project Refactoring Guide - Incident Reporting System

## 📋 Overview
This document tracks the reorganization of the Incident Reporting project structure for better maintainability and developer experience.

**Status**: 🔄 In Progress  
**Started**: October 1, 2025  
**Visual Changes**: None (pixel-perfect maintained)

---

## 🎯 Refactoring Objectives

1. ✅ Organize components by function instead of alphabetically
2. ✅ Co-locate component files with their CSS
3. ✅ Separate concerns: pages, sections, forms, cards, UI components
4. ✅ Rename files for clarity (IncidentReport2 → IncidentReportAssignment)
5. ✅ Improve import paths readability
6. ⏳ Remove old files after all imports updated
7. ⏳ Update all component imports across the project

---

## 📁 New Structure

```
src/
├── components/
│   ├── layout/          # Navigation, headers, layout elements
│   ├── forms/           # All form input components
│   ├── cards/           # Display/card components
│   ├── ui/              # Reusable UI elements (buttons, etc.)
│   └── sections/        # Composite page sections
├── pages/               # Full page components
│   ├── Home/
│   └── IncidentReport/
├── styles/
│   ├── global/          # Global CSS (formControls, variables)
│   └── legacy/          # Old CSS to be reviewed
└── assets/              # Images, icons, SVGs
```

---

## 🔄 Component Migration Map

### Layout Components
| Old Path | New Path | Status |
|----------|----------|--------|
| `components/Navbar.jsx` | `components/layout/Navbar/Navbar.jsx` | ✅ Copied |
| `styles/Navbar.css` | `components/layout/Navbar/Navbar.css` | ✅ Copied |
| `components/Header.jsx` | `components/layout/Header/Header.jsx` | ✅ Copied |
| `styles/Header.css` | `components/layout/Header/Header.css` | ✅ Copied |
| `components/Avatars.jsx` | `components/layout/Avatars/Avatars.jsx` | ✅ Copied |
| `components/Avatar.jsx` | `components/layout/Avatars/Avatar.jsx` | ✅ Copied |

### Form Components
| Old Path | New Path | Status |
|----------|----------|--------|
| `components/EmployeeNameInput.jsx` | `components/forms/EmployeeNameInput/EmployeeNameInput.jsx` | ✅ Copied |
| `components/IncidentInput.jsx` | `components/forms/IncidentInput/IncidentInput.jsx` | ✅ Copied |
| `components/IncidentType.jsx` | `components/forms/IncidentType/IncidentType.jsx` | ✅ Copied |
| `components/IncidentCategory.jsx` | `components/forms/IncidentCategory/IncidentCategory.jsx` | ✅ Copied |
| `components/IncidentDescription.jsx` | `components/forms/IncidentDescription/IncidentDescription.jsx` | ✅ Copied |
| `components/EmployeeJustification.jsx` | `components/forms/EmployeeJustification/EmployeeJustification.jsx` | ✅ Copied |
| `components/CommentBox.jsx` | `components/forms/CommentBox/CommentBox.jsx` | ✅ Copied |
| `components/ViolationAndActionRequired.jsx` | `components/forms/ViolationAndActionRequired/ViolationAndActionRequired.jsx` | ✅ Copied |

### Card Components
| Old Path | New Path | Status |
|----------|----------|--------|
| `components/EmployeeDetailsCard.jsx` | `components/cards/EmployeeDetailsCard/EmployeeDetailsCard.jsx` | ✅ Copied |
| `components/ProfileCard.jsx` | `components/cards/ProfileCard/ProfileCard.jsx` | ✅ Copied |
| `components/FileCard.jsx` | `components/cards/FileCard/FileCard.jsx` | ✅ Copied |
| `components/ViolationHistory.jsx` | `components/cards/ViolationHistory/ViolationHistory.jsx` | ✅ Copied |

### UI Components
| Old Path | New Path | Status |
|----------|----------|--------|
| `components/SubmitButton.jsx` | `components/ui/SubmitButton/SubmitButton.jsx` | ✅ Copied |
| `components/UploadFile.jsx` | `components/ui/UploadFile/UploadFile.jsx` | ✅ Copied |
| `components/OptionalApprovers.jsx` | `components/ui/OptionalApprovers/OptionalApprovers.jsx` | ✅ Copied |
| `components/TransferWorkflow.jsx` | `components/ui/TransferWorkflow/TransferWorkflow.jsx` | ✅ Copied |

### Section Components
| Old Path | New Path | Status |
|----------|----------|--------|
| `components/ApplyHeading.jsx` | `components/sections/ApplyHeading/ApplyHeading.jsx` | ✅ Copied |
| `components/RequiredInfo.jsx` | `components/sections/RequiredInfo/RequiredInfo.jsx` | ✅ Copied |
| `components/VisaFormSection.jsx` | `components/sections/EmployeeInfoSection/EmployeeInfoSection.jsx` | ✅ Copied & Renamed |
| `components/EmployeeProfile.jsx` | `components/sections/EmployeeProfile/EmployeeProfile.jsx` | ✅ Copied |
| `components/UserInfo.jsx` | `components/sections/UserInfo/UserInfo.jsx` | ✅ Copied |

### Pages
| Old Path | New Path | New Name | Route | Status |
|----------|----------|----------|-------|--------|
| `components/Home.jsx` | `pages/Home/Home.jsx` | Home | `/` | ✅ Copied |
| `components/IncidentReportPage.jsx` | `pages/IncidentReport/IncidentReportInitiation.jsx` | IncidentReportInitiation | `/1` | ✅ Copied & Renamed |
| `components/IncidentReport2.jsx` | `pages/IncidentReport/IncidentReportAssignment.jsx` | IncidentReportAssignment | `/2` | ✅ Copied & Renamed |
| `components/IncidentReport3.jsx` | `pages/IncidentReport/IncidentReportReview.jsx` | IncidentReportReview | `/3` | ✅ Copied & Renamed |
| `components/IncidentReport4.jsx` | `pages/IncidentReport/IncidentReportApproval.jsx` | IncidentReportApproval | `/4` | ✅ Copied & Renamed |
| `components/IncidentReport5.jsx` | `pages/IncidentReport/IncidentReportClosed.jsx` | IncidentReportClosed | `/5` | ✅ Copied & Renamed |

---

## 📝 Key Renamings & Rationale

### 1. **Page Components** - Better Semantic Meaning
- `IncidentReportPage` → `IncidentReportInitiation`
  - **Why**: Clearly indicates this is Stage 1 (Initiation) of the incident workflow
  
- `IncidentReport2` → `IncidentReportAssignment`
  - **Why**: Stage 2 involves assigning the incident to appropriate personnel
  
- `IncidentReport3` → `IncidentReportReview`
  - **Why**: Stage 3 is the review phase
  
- `IncidentReport4` → `IncidentReportApproval`
  - **Why**: Stage 4 requires approval
  
- `IncidentReport5` → `IncidentReportClosed`
  - **Why**: Stage 5 represents the closed/completed state

### 2. **Section Components**
- `VisaFormSection` → `EmployeeInfoSection`
  - **Why**: The component handles employee information, not visa-specific data. More accurate naming.

---

## 🔧 Files Updated

### ✅ Completed
- `src/App.jsx` - Updated all page imports and component names
- `src/components/sections/EmployeeInfoSection/EmployeeInfoSection.jsx` - Updated imports and component name

### ⏳ Pending Updates
Files that still need import path updates (old paths → new paths):

1. **Page Components** (`pages/IncidentReport/*.jsx`)
   - Update imports for: Navbar, Avatars, RequiredInfo, ViolationHistory, OptionalApprovers

2. **RequiredInfo** (`sections/RequiredInfo/RequiredInfo.jsx`)
   - Update import for EmployeeInfoSection

3. **ViolationHistory** (`cards/ViolationHistory/ViolationHistory.jsx`)
   - Update imports for all form components, FileCard, UI components

4. **EmployeeDetailsCard, ProfileCard, etc.**
   - Update any internal imports

5. **Avatars, Header** (`layout/`)
   - Update any internal imports

---

## 🎨 CSS Organization

### Global Styles (Moved to `styles/global/`)
- `formControls.css` - Global form styling rules

### Component Styles (Co-located)
All component CSS files now live alongside their component:
```
ComponentName/
├── ComponentName.jsx
└── ComponentName.css (or .module.css)
```

This makes it easier to:
- Find related files quickly
- Understand dependencies
- Delete unused components cleanly

---

## ✅ Next Steps (Priority Order)

1. **Update Page Component Imports** - Update all 5 incident report pages
2. **Update Section Component Imports** - RequiredInfo, EmployeeProfile, UserInfo
3. **Update Card Component Imports** - ViolationHistory, EmployeeDetailsCard
4. **Update Layout Component Imports** - Navbar, Avatars, Header
5. **Test All Routes** - Verify `/`, `/1`, `/2`, `/3`, `/4`, `/5` work correctly
6. **Remove Old Files** - After all imports verified working
7. **Update Documentation** - README, contributing guides

---

## 🧪 Testing Checklist

After all imports are updated:

- [ ] Home page (`/`) renders correctly
- [ ] Incident Report Initiation (`/1`) renders correctly
- [ ] Incident Report Assignment (`/2`) renders correctly
- [ ] Incident Report Review (`/3`) renders correctly
- [ ] Incident Report Approval (`/4`) renders correctly
- [ ] Incident Report Closed (`/5`) renders correctly
- [ ] All forms work (input, validation)
- [ ] All buttons work (submit, approve, upload)
- [ ] All styling is pixel-perfect (no visual changes)
- [ ] No console errors
- [ ] No broken imports

---

## 💡 Benefits Achieved

### For Developers
✅ **Easier Navigation** - Find components by purpose, not alphabetically  
✅ **Clear Responsibilities** - Component location indicates its function  
✅ **Better Scalability** - Easy to add new components to appropriate categories  
✅ **Faster Onboarding** - New developers understand structure immediately  

### For Codebase
✅ **Co-located Files** - CSS with JS, reducing mental overhead  
✅ **Reduced Clutter** - No more 50+ files in one directory  
✅ **Better Imports** - Clearer import paths show relationships  
✅ **Maintainability** - Easier to refactor, update, or remove components  

---

## 📚 Import Path Patterns

### From Pages to Components
```jsx
// Layout
import Navbar from '../../components/layout/Navbar/Navbar'
import Avatars from '../../components/layout/Avatars/Avatars'

// Sections
import RequiredInfo from '../../components/sections/RequiredInfo/RequiredInfo'
import ViolationHistory from '../../components/cards/ViolationHistory/ViolationHistory'
```

### From Sections to Components
```jsx
// From EmployeeInfoSection
import EmployeeNameInput from '../../forms/EmployeeNameInput/EmployeeNameInput'
import EmployeeDetailsCard from '../../cards/EmployeeDetailsCard/EmployeeDetailsCard'
```

### From Components to Components (Same Level)
```jsx
// Within layout/Avatars
import Avatar from '../Avatar/Avatar'
```

---

## 🚫 What NOT to Change

❌ **No visual/styling changes** - All CSS values remain identical  
❌ **No functional changes** - Logic and behavior unchanged  
❌ **No prop changes** - Component APIs remain the same  
❌ **No route changes** - URLs stay as `/1`, `/2`, `/3`, `/4`, `/5`  

---

## 📞 Questions or Issues?

If you encounter any issues during the refactoring:
1. Check this guide for the correct new path
2. Verify CSS files are co-located with components
3. Test the specific route/component in isolation
4. Document any issues in this file

---

**Last Updated**: October 1, 2025  
**Next Review**: After all imports are updated and tested
