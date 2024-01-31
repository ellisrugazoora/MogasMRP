import { useEffect, useState } from "react";
import Savedata from "./Components/Savedata";
import "./Tanga.css"
import { Box, Center, Wrap } from "@chakra-ui/layout";
import Graph3 from "./Components/Graph3";
import TabsComp from "./Components/TabsComp";
import TaBle from "./Components/TaBle";
import Testtab from "./Components/Testtab";


function Tanga(){
    return (
        <Box className="Tanga" width={"100%"}>
            {/* <header className="Tanga-header">
                Tanga production planning app
            </header> */}
            <Box className="Tanga-body" width='100%'>
                <TabsComp /*home={{title: "Home", content: <Graph3 title="Jan"  display="inventory/product" startdate={{year:2024, month:0,date:1}} enddate={{year:2024, month:0,date:31}}/>}} */
                    one={{title: "January",content: <Graph3 title="Jan"  display="inventory/product" startdate={{year:2024, month:0,date:13}} enddate={{year:2024, month:0,date:31}}/>}} 
                    two={{title: "February",content: <Graph3 title="Feb"  display="product only" startdate={{year:2024, month:1,date:1}} enddate={{year:2024, month:1,date:28}}/>}} 
                    three={{title: "March",content: <Graph3 title="Mar"  display="product only" startdate={{year:2024, month:2,date:1}} enddate={{year:2024, month:2,date:31}}/>}}
                    four={{title: "April", content: <Graph3 title="April"  display="product only" startdate={{year:2024, month:3,date:1}} enddate={{year:2024, month:3,date:30}}/>}} />
            </Box>

        </Box>
        // <TaBle columns={["column1", "column2", "column3"]} data={{row1: {col1: 1, col2: 2,col3: 3}, row2: {col1: 4, col2: 5,col3: 6}, row3: {col1: 7, col2: 8, col3: 9}}} />
    )
}

export default Tanga;