import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Hello } from "./screens/Hello";
import { HomePage } from "./screens/HomePage";
import { LogInPage } from "./screens/LogInPage";
import { OneTimeTransaction } from "./screens/OneTimeTransaction";
import { OneTimeTransactionPart2 } from "./screens/OneTimeTransactionPart2";
import { Sections } from "./screens/Sections";
import { SelectService } from "./screens/SelectService";
import { ServicesPage } from "./screens/ServicesPage";
import { SlecetDetainess } from "./screens/SlecetDetainess";
import { SummaryPage } from "./screens/SummaryPage";
import { SummaryPagePart2 } from "./screens/SummaryPagePart2";
import { Confirmation } from "./screens/Confirmation";
import { StateScreen } from "./screens/StateScreen";
import { History } from "./screens/History";
import { PayPage1 } from "./screens/PayPage1";
import { PayPageApple } from "./screens/PayPageApple";
import { MonthsAdvance } from "./screens/MonthsAdvance";
import { DateOptionsManagement } from "./screens/DateOptionsManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SummaryPage />,
  },
  {
    path: "/services-page",
    element: <ServicesPage />,
  },
  {
    path: "/log-in-page",
    element: <LogInPage />,
  },
  {
    path: "/slecet-detainess",
    element: <SlecetDetainess />,
  },
  {
    path: "/hello",
    element: <Hello />,
  },
  {
    path: "/sections",
    element: <Sections />,
  },
  {
    path: "/one-time-transaction",
    element: <OneTimeTransaction />,
  },
  {
    path: "/one-time-transaction-part2",
    element: <OneTimeTransactionPart2 />,
  },
  {
    path: "/select-service",
    element: <SelectService />,
  },
  {
    path: "/summary-page",
    element: <SummaryPage />,
  },
  {
    path: "/summary-page-part2",
    element: <SummaryPagePart2 />,
  },
  {
    path: "/home-page",
    element: <HomePage />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
  {
    path: "/months-advance",
    element: <MonthsAdvance />,
  },
  {
    path: "/state",
    element: <StateScreen />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/pay-page-1",
    element: <PayPage1 />,
  },
  {
    path: "/pay-page-apple",
    element: <PayPageApple />,
  },
  {
    path: "/date-options-management",
    element: <DateOptionsManagement />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
