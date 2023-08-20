import { useState } from "react";

const contents = [
  {
    title: "Tab 1",
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Tab 2",
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Tab 3",
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];



const App = () => {
  return (
    <div>
      <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>
        The different between with and without key prop of React Component
      </p>
      <Tabbed contents={contents} />
    </div>
  )
}

export default App

function Tabbed({ contents }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="tabs">
        {contents.map((eachContent, i) => (
          <Tab 
            key={i}
            num={i}
            title={eachContent.title}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>

      <TabContent key={activeTab} activeTab={activeTab} />
    </>
  )
}

function Tab({ num, title, activeTab, setActiveTab }) {
  return (
    <>
      <button
        onClick={() => setActiveTab(num)}
        className={`${activeTab === num ? 'tab active' : 'tab' }`}>
        {title}
      </button>
    </>
  )
}

function TabContent({ activeTab }) { 
  const [showDetails, setShowDetails] = useState(true);
  const content   = contents.at(activeTab);
  
  return (
    <div className="tab-content">
      <h4>{content.summary}</h4>
      <p>{showDetails ? content.details : ''}</p>

      <div className="tab-actions">
        <button onClick={() => setShowDetails(prev => !prev)}>
          {showDetails ? 'Show less' : 'Show detail'}
        </button>
      </div>
    </div>
  );
}