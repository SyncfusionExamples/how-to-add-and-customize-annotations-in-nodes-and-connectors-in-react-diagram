# how-to-add-and-customize-annotations-in-nodes-and-connectors-in-react-diagram

This repository is a small React sample that demonstrates how to add, customize, and programmatically manage annotations on nodes and connectors using the Syncfusion React Diagram component (`@syncfusion/ej2-react-diagrams`). The sample focuses on label/annotation usage: setting annotation content, styling, alignment and displacement, and adding annotations at runtime.

## What this sample demonstrates

- Adding annotations to nodes and connectors via the `annotations` property on node and connector models.
- Customizing annotation content and basic styling (for example `style.fill`, `textWrapping`).
- Positioning annotations using properties such as `offset`, `alignment`, and `displacement` for connectors and `offset`/`horizontalAlignment`/`verticalAlignment` for nodes.
- Programmatically adding or updating annotations at runtime (a simple `Add Annotations` button demonstrates updating node and connector annotations using React state).
- Using node defaults (`getNodeDefaults`) to set consistent sizes for nodes and configuring connector segments to change routing.

## How it works (important implementation details)

- The main app is `src/App.tsx`. It builds two pieces of state: `nodes` and `connectors` (React useState) and passes them to the `DiagramComponent`.
- Nodes are defined with properties such as `id`, `offsetX`, `offsetY`, `shape`, and `annotations`. For example, a start node uses a `Flow` shape `Terminator` and contains an annotation with `content: "Start"`.
- Connectors are defined with `sourceID`, `targetID`, optional `type` (e.g., `Orthogonal`), `segments` for multi-segment connectors, and `annotations` to label connector lines (for example, the true/false labels on decision branches).
- The example also shows `AnnotationConstraints.ReadOnly` for making an annotation read-only and demonstrates simple inline styling for annotation text wrapping and fill color.
- The `addAnnotations` function demonstrates updating the existing nodes and connectors in state to add or change annotations when the user clicks the "Add Annotations" button. This shows how to modify annotations programmatically in a React app.

## Files you should look at

- `src/App.tsx` — main demonstration. Contains the nodes/connectors definitions, the `DiagramComponent` setup and the `Add Annotations` button that mutates state.
- `src/index.tsx` — standard React entry that mounts the app.
- `package.json` — lists dependencies and scripts. This sample uses `react-scripts` (Create React App) and depends on `@syncfusion/ej2-react-diagrams`.

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

## Notes and extension ideas

- The sample uses a small, explicit set of nodes/connectors to keep the example focused. You can extend it by loading shapes dynamically, enabling editing (remove read-only), or hooking UI controls to change annotation properties (font, color, offset) live.
- If you intend to export diagrams, Syncfusion's Diagram also supports exporting to PNG/SVG — consult the official docs.

## Resources

- Syncfusion React Diagram documentation: https://ej2.syncfusion.com/react/documentation/diagram/labels
- Demo reference: https://ej2.syncfusion.com/react/demos/#/fluent2/diagram/getting-started-annotation

---