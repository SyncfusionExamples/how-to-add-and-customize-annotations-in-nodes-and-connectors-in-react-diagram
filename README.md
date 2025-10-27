# how-to-add-and-customize-annotations-in-nodes-and-connectors-in-react-diagram

This repository is a small React sample that demonstrates how to add, customize, and programmatically manage annotations on nodes and connectors using the Syncfusion React Diagram component (`@syncfusion/ej2-react-diagrams`). The sample focuses on label/annotation usage: setting annotation content, styling, alignment and displacement, and adding annotations at runtime.

## Prerequisites

- Node.js (v14 or later recommended) and npm installed on your machine.
- A modern browser to open the app (Chrome/Edge/Firefox).

## Install and run locally

1. Install dependencies:

```powershell
npm install
```

2. Start the development server:

```powershell
npm start
```

This runs the app using `react-scripts` and opens `http://localhost:3000` by default. The Diagram with nodes and annotated connectors should be visible. Click the "Add Annotations" button to see how annotations can be added/updated at runtime.

## Build for production

To create a production build run:

```powershell
npm run build
```

This will output optimized static files to the `build/` directory using Create React App's build pipeline.

## Dependencies

- `@syncfusion/ej2-react-diagrams` — the diagramming component used to render nodes, connectors and annotations.
- `react`, `react-dom`, `react-scripts`, `typescript` — typical Create React App stack.


## Resources

- Syncfusion React Diagram documentation: https://ej2.syncfusion.com/react/documentation/diagram/labels
- Demo reference: https://ej2.syncfusion.com/react/demos/#/fluent2/diagram/getting-started-annotation
