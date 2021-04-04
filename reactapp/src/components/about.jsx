import * as React from 'react';
import * as ReactDOM from 'react-dom';
import bowMaster from './images/bowMaster-multiplayerGameIcon.jpg';
import driveClimberIcon from './images/driveClimberIcon.jpg';
import facebookMessengerIcon from './images/facebookMessengerIcon.jpg';
import Card from "../components/card";
import { Rating } from '@progress/kendo-react-inputs';
import { TileLayout } from '@progress/kendo-react-layout';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem
} from "@progress/kendo-react-charts";

//Line Chart 
const categories = ['10-10-2020', '11-10-2020', '12-10-2020', '13-10-2020', '14-10-2020', '15-10-2020', '16-10-2020'];
const series = [
    {
        name: "Drive Climber",
        data: [2, 8, 9, 8, 7, 3, 6]
    },
    {
        name: "Facebook Messenger",
        data: [4, 6, 2, 3, 6, 5, 4]
    },
    {
        name: "Playgendary",
        data: [3, 7, 1, 4, 4, 10, 5]
    },
    {
        name: "Drive Climber",
        data: [5, 9, 8, 9, 10, 1, 2]
    },
    {
        name: "Facebook Messenger",
        data: [1, 10, 5, 2, 9, 2, 8]
    },
    {
        name: "Playgendary",
        data: [7, 4, 4, 5, 8, 7, 10]
    },
    {
        name: "Drive Climber",
        data: [6, 2, 3, 6, 1, 4, 9]
    },
    {
        name: "Facebook Messenger",
        data: [9, 3, 10, 1, 2, 9, 7]
    },
    {
        name: "Playgendary",
        data: [8, 1, 6, 7, 5, 8, 1]
    },
    {
        name: "Facebook Messenger",
        data: [10, 5, 7, 10, 3, 6 ,3]
    }
];



const pieData = [
    {
        name: "India",
        share: 0.24
    },
    {
        name: "Russian Federation",
        share: 0.26,
        explode: true
    },
    {
        name: "Germany",
        share: 0.1
    },
    {
        name: "World",
        share: 0.4
    }
];

const categoryPlotBands = [{
    from: 1,
    to: 2,
    color: '#ffd246',
    opacity: 0.8
}];

const valuePlotBands = [{
    from: 2,
    to: 3,
    color: '#78d237',
    opacity: 0.8
}];

const ChartContainer = () => (
  
        <Chart>
            <ChartTitle text="Rank History" />
            <hr/>
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
                {series.map((item, idx) => (
                    <ChartSeriesItem
                        key={idx}
                        type="line"
                        tooltip={{ visible: true }}
                        data={item.data}
                        name={item.name}
                    />
                ))}
            </ChartSeries>
        </Chart>

);

const tiles = [
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 },
        header: <b>Top Charts</b>,
        body: <div className="col-sm-5" id="first">
          
        <div id="Planning" className="planning-page main-content" >
        <div className="card-container grid">
        <div className="card-component" >
        <p>1 <img src={driveClimberIcon} alt={"driveClimberIcon"} /> <b>Drive Climber</b><br /><p className="second">Vodoo <Rating defaultValue={4} />
            {/* |<p className="first">-4</p> */}
            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>2 <img src={facebookMessengerIcon} alt={"facebookMessengerIcon"} /><b>Facebook Messenger</b> <br /><p className="second">Facebook <Rating defaultValue={2} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>3 <img src={bowMaster} alt={"bowMaster-multiplayerGameIcon"} /> <b>Bowmaster-Multiplayer Game</b><br /><p className="second">Playgendary <Rating defaultValue={4} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>4 <img src={driveClimberIcon} alt={"driveClimberIcon"} /> <b>Drive Climbe</b><br /><p className="second">Vodoo <Rating defaultValue={4} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>5 <img src={facebookMessengerIcon} alt={"facebookMessengerIcon"} /> <b>Facebook Messenger</b><br /><p className="second">Facebook <Rating defaultValue={2} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>6 <img src={bowMaster} alt={"bowMaster-multiplayerGameIcon"} /> <b>Bowmaster-Multiplayer Game</b><br /><p className="second">Playgendary <Rating defaultValue={4} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>7 <img src={driveClimberIcon} alt={"driveClimberIcon"} /> <b>Drive Climbe</b><br /><p className="second">Vodoo <Rating defaultValue={4} />
                |
                <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>8 <img src={facebookMessengerIcon} alt={"facebookMessengerIcon"} />  <b>Facebook Messenger</b><br /><p className="second">Facebook <Rating defaultValue={2} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>9 <img src={bowMaster} alt={"bowMaster-multiplayerGameIcon"} /> <b>Bowmaster-Multiplayer Game</b><br /><p className="second">Playgendary <Rating defaultValue={4} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>10 <img src={driveClimberIcon} alt={"driveClimberIcon"} />  <b>Drive Climbe</b><br /><p className="second">Vodoo <Rating defaultValue={4} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        </div>
</div> 
</div> 
    </div>,
        
    },
    {
        defaultPosition: { col: 1, colSpan: 1, rowSpan: 1 },
        header: <b>Tracked Apps</b>,
        body:<div className="col-sm-5" id="first">
        <div id="Planning" className="planning-page main-content" >
        <div className="card-container grid">
        <div className="card-component" >
        <p>1 <img src={driveClimberIcon} alt={"driveClimberIcon"} /> <b>Drive Climber</b><br /><p className="second">Vodoo <Rating defaultValue={4} />
            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>2 <img src={facebookMessengerIcon} alt={"facebookMessengerIcon"} /><b>Facebook Messenger</b> <br /><p className="second">Facebook <Rating defaultValue={2} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>3 <img src={bowMaster} alt={"bowMaster-multiplayerGameIcon"} /> <b>Bowmaster-Multiplayer Game</b><br /><p className="second">Playgendary <Rating defaultValue={4} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>4 <img src={driveClimberIcon} alt={"driveClimberIcon"} /> <b>Drive Climbe</b><br /><p className="second">Vodoo <Rating defaultValue={2} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>5 <img src={facebookMessengerIcon} alt={"facebookMessengerIcon"} /> <b>Facebook Messenger</b><br /><p className="second">Facebook <Rating defaultValue={4} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>6 <img src={bowMaster} alt={"bowMaster-multiplayerGameIcon"} /> <b>Bowmaster-Multiplayer Game</b><br /><p className="second">Playgendary <Rating defaultValue={2} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>7 <img src={driveClimberIcon} alt={"driveClimberIcon"} /> <b>Drive Climbe</b><br /><p className="second">Vodoo <Rating defaultValue={4} />
                |
                <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>8 <img src={facebookMessengerIcon} alt={"facebookMessengerIcon"} />  <b>Facebook Messenger</b><br /><p className="second">Facebook <Rating defaultValue={2} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>9 <img src={bowMaster} alt={"bowMaster-multiplayerGameIcon"} /> <b>Bowmaster-Multiplayer Game</b><br /><p className="second">Playgendary <Rating defaultValue={4} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
        <p>10 <img src={driveClimberIcon} alt={"driveClimberIcon"} />  <b>Drive Climbe</b><br /><p className="second">Vodoo <Rating defaultValue={2} />

            <span class="k-icon k-i-arrow-60-up" id="icon"></span>

        </p> </p>
        <hr />
</div> 
</div> 
</div>
    </div> ,
        
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
        header: <b>Pie Chart</b>,
        body:<Chart style={{ height: 350 }}>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="pie"
                overlay={{
                    gradient: "sharpBevel"
                }}
                tooltip={{ visible: true }}
                data={pieData}
                categoryField="name"
                field="share"
            />
        </ChartSeries>
    </Chart>
       

 
    },
    {
        defaultPosition: { col: 2, colSpan: 1, rowSpan: 1 },
        body: "Some quick example text to build on the card title and make up the bulk of the card content.",
        header: "App Suggestions",
        item: <Card /> 
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 1 },
        body: "Some quick example text to build on the card title and make up the bulk of the card content.",
        header: "App Suggestions",
        item: <ChartContainer /> 
    },
    {
        defaultPosition: { col: 3, colSpan: 1, rowSpan: 1 },
        header: <b>Area Chart</b>,
        body:  <Chart>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={['A', 'B', 'C']} plotBands={categoryPlotBands} />
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem plotBands={valuePlotBands} />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem data={[1, 2, 3]} />
        </ChartSeries>
    </Chart>
    },

];

const App = () => {
    return (
        <TileLayout items={tiles} />
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('my-app')
);