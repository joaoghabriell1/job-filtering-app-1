import { createContext, useState } from "react";

const Context = createContext({
  fullJobList: [],
  filteredJobList: [],
  onSetFullList: () => {},
  onFilter: () => {},
  hasData: "",
});

export const ContextProvider = (props) => {
  const [fullJobList, setFullJobList] = useState([]);
  const [filteredJobList, setFilteredJobList] = useState([]);
  const [noFilteredData, setNoFilteredData] = useState(true);

  const onSetFullList = (data) => {
    setFullJobList(data);
  };

  const onFilterHandler = (filters) => {
    const { location, fullTime, "company-position": CompanyPosition } = filters;

    const matchesLocation = (elementLocation) =>
      elementLocation.includes(location.toLowerCase());

    const matchesCompanyOrPosition = (elementInfo) => {
      return elementInfo.some((element) =>
        element.includes(CompanyPosition.toLowerCase())
      );
    };

    const matchesContract = (contract) => {
      if (fullTime) {
        return contract == "full time";
      }
      return true;
    };

    const filteredList = fullJobList.filter((element) => {
      setNoFilteredData(true);

      const match =
        matchesLocation(element.location.toLowerCase()) &&
        matchesCompanyOrPosition([
          element.company.toLowerCase(),
          element.position.toLowerCase(),
        ]) &&
        matchesContract(element.contract.toLowerCase());

      return match;
    });

    if (filteredList.length == 0) {
      setNoFilteredData(false);
    }

    setFilteredJobList(filteredList);
  };

  const context = {
    onSetFullList: onSetFullList,
    onFilter: onFilterHandler,
    fullJobList,
    filteredJobList,
    hasData: noFilteredData,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
