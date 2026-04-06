import React, { useCallback, useState } from "react";
import AllEvents from "./AllEvents";
import AllLifeGroups from "./AllLifeGroups";
import AllSermons from "./AllSermons";
import EventDetail from "./EventDetail";
import Home from "./Home";
import LifeGroupDetail from "./LifeGroupDetail";

interface Screen {
  name: string;
  params?: any;
}

const HomeStack = () => {
  const [stack, setStack] = useState<Screen[]>([{ name: "Home" }]);
  const current = stack[stack.length - 1];

  const navigate = useCallback((name: string, params?: any) => {
    setStack((prev) => [...prev, { name, params }]);
  }, []);

  const goBack = useCallback(() => {
    setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  switch (current.name) {
    case "AllSermons":
      return <AllSermons goBack={goBack} />;
    case "AllEvents":
      return <AllEvents navigate={navigate} goBack={goBack} />;
    case "AllLifeGroups":
      return <AllLifeGroups navigate={navigate} goBack={goBack} />;
    case "EventDetail":
      return <EventDetail event={current.params} goBack={goBack} />;
    case "LifeGroupDetail":
      return <LifeGroupDetail group={current.params} goBack={goBack} />;
    default:
      return <Home navigate={navigate} />;
  }
};

export default HomeStack;
