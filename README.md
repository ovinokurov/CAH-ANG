# Ordering/Tracking System

Angular 19 application with Material UI for pharmacy ordering and tracking management.

## Quick Start

### Prerequisites
1. Install [Node.js](https://nodejs.org/) (LTS version)
2. Restart VS Code after installation
3. Verify: `node --version` and `npm --version`

### Run Application
```bash
npm install
npm start
```
Application runs at `http://localhost:4200`

**VS Code Alternative:** `Ctrl+Shift+P` → "Tasks: Run Task" → "Install Dependencies and Serve"

## Development

### Project Structure
```
src/app/
├── components/
│   ├── login/              # Login with form validation
│   └── home/               # Dashboard with tasks/notifications
├── data/mock-data.ts       # Mock JSON data
├── app.component.ts        # Main navigation
└── app.routes.ts           # Routing config
```

### Key Features
- **Login**: Demo auth (any username/password works)
- **Home**: Task dashboard with mock data
- **Material UI**: Indigo-pink theme
- **Routing**: Login → Home workflow
- **Mock Data**: Tasks, notifications, orders, patients

### Run Unit Tests
```bash
# Watch mode (recommended for development)
npm test

# Single run (CI/deployment)
npm test -- --watch=false --browsers=ChromeHeadless

# With coverage
npm test -- --code-coverage --watch=false --browsers=ChromeHeadless
```

**VS Code Tasks:** `Ctrl+Shift+P` → "Tasks: Run Task" → Choose test option

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

## Development Workflow

### Adding Components
**Open Terminal/Command Prompt in VS Code** (`Terminal → New Terminal`) and run:

```bash
# Generate component with Angular CLI
ng generate component components/feature-name

# Or shorthand
ng g c components/feature-name
```

**Example:**
```bash
ng g c components/patient-enrollment
```

Then:
1. Add route in `app.routes.ts`
2. Update navigation in `app.component.ts` (if needed)
3. CLI auto-generates unit tests

### Mock Data
Edit `src/app/data/mock-data.ts` - contains interfaces and sample data for:
- Tasks, Notifications, Orders, Patients

### Debugging
- **Dev Tools**: F12 → Angular tab
- **Hot Reload**: Enabled by default
- **Source Maps**: Available in development mode

## Troubleshooting

| Issue                    | Solution                                      |
|--------------------------|-----------------------------------------------|
| `npm not recognized`     | Install Node.js, restart VS Code              |
| Port 4200 in use         | Use `ng serve --port 4201`                    |
| Module not found         | Run `npm install`                             |
| Tests failing            | Check browser installation, try headless mode |

## Tech Stack
- Angular 19 (Standalone components)
- Angular Material
- TypeScript (Strict mode)
- Jasmine/Karma (Testing)
- SCSS
