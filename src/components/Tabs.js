import { divide } from "cypress/types/lodash";
import react,{useState} from "react";

const Tabs=({tabs})=>{
    let [tabsClicked,setTabsClicked]=useState("");

    return (
        <div>
              <ul>
                {
                    tabs.map((tab)=>(
                        <li onClick={()=>setTabsClicked(tab.contents)}>{tab.titles}</li>
                    ))
                }
              </ul>

              {
            tabsClicked && <p>This is the content for{tabsClicked}</p>
                }
        </div>
        
    )
}