/**
 * doctor-appointment-frontend/
│── public/                       # Static files (images, favicon, etc.)
│   ├── logo.png
│   └── default-avatar.png
│
│── src/
│   ├── app/                      # Next.js 13+ App Router (SEO ready)
│   │   ├── layout.js             # Root layout (Navbar, Footer, Providers)
│   │   ├── page.js               # Home page (Landing)
│   │   │
│   │   ├── login/
│   │   │   └── page.js           # Login Page
│   │   │
│   │   ├── register/
│   │   │   └── page.js           # Register Page with Tabs (Patient/Doctor)
│   │   │
│   │   ├── patient/
│   │   │   ├── dashboard/
│   │   │   │   └── page.js       # Patient Dashboard
│   │   │   ├── appointments/
│   │   │   │   └── page.js       # Patient Appointments
│   │   │   └── layout.js         # Patient layout (sidebar/nav)
│   │   │
│   │   ├── doctor/
│   │   │   ├── dashboard/
│   │   │   │   └── page.js       # Doctor Dashboard
│   │   │   └── layout.js         # Doctor layout (sidebar/nav)
│   │   │
│   │   └── not-found.js          # 404 Page
│   │
│   ├── components/               # Reusable UI components
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   ├── dashboard/
│   │   │   ├── DoctorCard.jsx    # For doctor listing
│   │   │   ├── AppointmentCard.jsx
│   │   │   └── FilterBar.jsx
│   │   ├── ui/                   # Generic UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── DatePicker.jsx
│   │   │   ├── Pagination.jsx
│   │   │   └── Loader.jsx
│   │   └── Navbar.jsx
│   │
│   ├── features/                 # Redux slices + RTK Query APIs
│   │   ├── auth/
│   │   │   ├── authSlice.js      # Handles persistent auth state
│   │   │   └── authApi.js        # RTK Query endpoints for login/register
│   │   ├── doctors/
│   │   │   ├── doctorsApi.js     # RTK Query for doctor list/search
│   │   ├── appointments/
│   │   │   ├── appointmentsApi.js # RTK Query for appointments CRUD
│   │   └── specializations/
│   │       └── specializationApi.js
│   │
│   ├── hooks/                    # Custom React hooks
│   │   └── useAuth.js            # Hook for accessing auth state
│   │
│   ├── lib/                      # Utilities & helpers
│   │   ├── axiosInstance.js      # Axios base setup with token interceptor
│   │   └── constants.js          # API base URL & constants
│   │
│   ├── providers/                # Global providers
│   │   └── ReduxProvider.jsx     # Redux store provider
│   │
│   ├── store/                    # Redux store configuration
│   │   └── store.js
│   │
│   ├── styles/
│   │   └── globals.css           # Tailwind base styles
│   │
│   └── utils/                    # Helper functions
│       ├── formatDate.js
│       └── handleError.js
│
│── .env.local                    # API keys, base URL
│── package.json
│── tailwind.config.js
│── postcss.config.js
│── jsconfig.json                 # For path aliases (@/components etc.)

 */