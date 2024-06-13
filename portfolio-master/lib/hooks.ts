import { useActiveSectionContext } from "@/context/activeSidebarContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName:SectionName,threshold:number){
  const { ref, inView } = useInView({
    threshold:threshold
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(()=>{
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  },[inView,setActiveSection,timeOfLastClick,sectionName]);
  return {
    ref
  }
}