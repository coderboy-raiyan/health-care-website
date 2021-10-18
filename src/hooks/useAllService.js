import { useContext } from "react";
import { ServicesContext } from "./../context/ServicesProvider";

const useAllService = () => {
  return useContext(ServicesContext);
};

export default useAllService;
