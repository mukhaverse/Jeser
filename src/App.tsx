import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Hello } from "./screens/Hello";
import { HomePage } from "./screens/HomePage";
import { LogInPage } from "./screens/LogInPage";
import { OneTimeTransaction } from "./screens/OneTimeTransaction";
import { PayPage } from "./screens/PayPage";
import { Sections } from "./screens/Sections";
import { SelectService } from "./screens/SelectService";
import { ServicesPage } from "./screens/ServicesPage";
import { SlecetDetainess } from "./screens/SlecetDetainess";
import { SummaryPage } from "./screens/SummaryPage";
import { Confirmation } from "./screens/Confirmation";
import { ChooseMonths } from "./screens/ChooseMonths";
import { DateSelection } from "./screens/DateSelection";
import { OverlayCalendar } from "./screens/OverlayCalendar";
import { StateScreen } from "./screens/StateScreen";
import { History } from "./screens/History";
import { PayPage1 } from "./screens/PayPage1";
import { PayPageApple } from "./screens/PayPageApple";
import { MonthsAdvance } from "./screens/MonthsAdvance";
import { DateAmountSelection } from "./screens/DateAmountSelection";
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
    path: "/select-service",
    element: <SelectService />,
  },
  {
    path: "/pay-page",
    element: <PayPage />,
  },
  {
    path: "/summary-page",
    element: <SummaryPage />,
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
    path: "/choose-months",
    element: <ChooseMonths />,
  },
  {
    path: "/date-selection",
    element: <DateSelection />,
  },
  {
    path: "/overlay-calendar",
    element: <OverlayCalendar />,
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
    path: "/date-amount-selection",
    element: <DateAmountSelection />,
  },
  {
    path: "/date-options-management",
    element: <DateOptionsManagement />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
