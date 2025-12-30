# Frontend Architecture

PveSphere frontend is built with Vue 3 + TypeScript.

## Technology Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite 7
- **UI Library**: Element Plus 2
- **Language**: TypeScript 5
- **State Management**: Pinia 3
- **Routing**: Vue Router 4
- **Internationalization**: Vue I18n

## Project Structure

```
pvesphere-ui/
├── src/
│   ├── api/              # API interfaces
│   ├── assets/          # Static resources
│   ├── components/      # Reusable components
│   ├── config/          # Configuration files
│   ├── layout/          # Layout components
│   ├── router/          # Route configuration
│   ├── store/           # Pinia stores
│   ├── utils/           # Utility functions
│   └── views/           # Page components
│       └── pve/         # PVE management pages
└── locales/             # i18n translation files
```

## Core Functional Modules

### Routing Management

Uses Vue Router 4 for routing management, supporting:

- Dynamic routing
- Route guards
- Permission control

### State Management

Uses Pinia 3 for state management:

- User state
- Application configuration
- Permission information
- Multi-tab management

### API Calls

Unified API call encapsulation:

- HTTP request interception
- Error handling
- Token management
- Request retry

## Component Design

### Layout Components

- **Frame**: Main frame
- **Navbar**: Navigation bar
- **Sidebar**: Sidebar
- **Content**: Content area

### Business Components

- **Dashboard**: Dashboard
- **Cluster Management**: Cluster management
- **VM Management**: Virtual machine management
- **Storage Management**: Storage management

