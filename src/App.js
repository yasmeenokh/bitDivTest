import "./App.css";
import Header from "@bit/yasmeen.uic.header";
// import { Card } from "@jfriday464/learningbit.ui.card";
import FooterComponent from "@yasmeen/reusablecomponents.footer";
function App() {
  let navigationArray = [
    {link : 'https://www.virginmobile.ae/',
      text : 'Virgin Home'
    },
    {link : 'https://www.virginmobile.ae/tourist-sim/',
      text : 'Tourist Sim'
    },
    {link : 'https://www.virginmobile.ae/double-data/',
      text : 'Promotions'
    },
    {link : 'https://www.virginmobile.ae/help/',
      text : 'Help'
    },
  ];

  return (
    <div className="App">
      <Header
      logo="../assets/icons8-sigma-64.png"
      navigationArray={navigationArray}
      />
    <FooterComponent
    footerText="This Footer Is A Private Component"
    />
    </div>
  );
}

export default App;
