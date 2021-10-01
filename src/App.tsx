import React, {useState} from 'react';
import './App.css';
import {Accorduon} from "./component/Accorduon/Accorduon";
import {Rating, ratingValue} from "./component/Rating/Rating";
import OnOff from "./component/OnOff/OnOff";
import {UncontrolledAccorduon} from "./component/Uncontrolledaccorduon/UncontrlledAccorduon";
import {UnControlledRating} from "./component/UncontrolledRating/UnControlledRating";
import UncontrolledOnOff from "./component/OnOff/UncontrolledOnOff";

function App() {
    let [ratingValue, setratingValue]=useState<ratingValue>(0)
    let[accordionCollapset, setaccordionCollapset]=useState<boolean>(false)
    let[ Switch, setSwitch]=useState<boolean>(false)

    return (
        <div className="App">
        {/*    <OnOff/>
            <OnOff/>
            <OnOff/>

            <UncontrolledAccorduon titleValue="Меню"/>
            <UncontrolledAccorduon titleValue="Users"/>
            <UnControlledRating />*/}

            <Rating value={ratingValue}
                    onClick={setratingValue}/>
            <Accorduon titleValue="Меню" collapsed ={accordionCollapset}
            onClick={setaccordionCollapset}/>
            <OnOff on={Switch} onChange={setSwitch}/>
            <UncontrolledOnOff onChange={setSwitch}/> {Switch.toString()}

         {/*   <PageTitle title="This ia App component"/>
            <PageTitle title =" My friends"/>
            Article 1
            <Rating value={0}/>
            <Accorduon titleValue="Меню" collapsed ={false}/>
            <Accorduon titleValue="Users" collapsed ={true}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

        </div>
    );
}

export default App;

/*function PageTitle (props:any) {
    return <h1>{props.title}</h1>
}*/

