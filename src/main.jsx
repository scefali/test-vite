import * as Sentry from "@sentry/react";
import React from 'react';
import ReactDOM from "react-dom/client";

import App from './App';

import './index.css';


Sentry.init({
  // dsn: "https://09547af8f338462ba4bf8dbba4405886@o4505059212656640.ingest.sentry.io/4505194745626624",
  dsn: "https://8146e6f8f78b48b1b41abd89a38254fc@scefali.ngrok.io/4505201053794304",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  release: '1.0.0',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
