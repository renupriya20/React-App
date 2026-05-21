// import ClassBased from "./allTopics/01_Types-of-components/ClassBased";
// import Functionbased from "./allTopics/01_Types-of-components/FunctionBased";
// import StatesinFBC from "./allTopics/02_States/StatesinFBC";
// import Heart from "./allTopics/02_States/Heart";
// import CounterFBC from "./allTopics/02_States/CounterFBC";
// import ToogleComponent  from "./allTopics/02_States/Toogle";
// import Logo from "./allTopics/Flipkart/Navbar/Logo";
// import SearchBar from "./allTopics/Flipkart/Navbar/SearchBar";
// import Travel from "./allTopics/Flipkart/Navbar/Travel";
// import StatesinCBC from "./allTopics/02_States/StatesinCBC";
// import Parent1 from "./allTopics/03_Props/Parent1";
// import DrillingParent from "./allTopics/04_PropsDrilling/DrillingParent";
// import CallbackParent from "./allTopics/05_Callbaks/CallbackParent";
// import UpLiftingParent from "./allTopics/06_StateUpLifting/UpLiftingParent";
// import UserLists from "./allTopics/07_Lists/UserLists";

import { useState } from "react";
import TodoWrapper from "./allTopics/10_TodoApp/TodoWrapper";
import UncontrolledForms from "./allTopics/11_UncontrolledForms/UncontrolledForms";
import LifeCycleCBC from "./allTopics/12_LifeCycle/LifeCycleCBC";

// import ControlledForm1 from "./allTopics/08_ControlledForms/ControlledForms1";
// import ControlledForms2 from "./allTopics/08_ControlledForms/ControlledForms2";
// import Card from "./allTopics/09_ReactCss/Card";
// import InlineCss from "./allTopics/09_ReactCss/InlineCss";
// import Header from "./components/Header";
// import Categories from "./allTopics/Flipkart/Categories/Categories";
const App = () => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle((prev) => !prev);
    return (
        <>
            {/* <Functionbased/> */}
            {/* <ClassBased/> */}
            {/* <StatesinFBC/> */}
            {/* <Heart/> */}
            {/* <ToogleComponent/> */}
            {/* <CounterFBC/> */}
            {/* <StatesinCBC/> */}
            {/* <Parent1/> */}
            {/* <DrillingParent/> */}
            {/* <CallbackParent/> */}
            {/* <UpLiftingParent/> */}
            {/* <UserLists/> */}
            {/* <ControlledForm1/> */}
            {/* <ControlledForms2/> */}
            {/* <InlineCss/> */}
            {/* <Card/> */}
            {/* <TodoWrapper/> */}
            {/* <Header/> */}
            {/* <Categories/> */}
            {/* <UncontrolledForms/> */}
            <button onClick={handleToggle}>toggle me</button>
            {toggle && <LifeCycleCBC/>}

        </>
    );
};



export default App