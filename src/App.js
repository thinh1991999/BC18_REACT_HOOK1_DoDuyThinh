import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [currentChosse, setCurrentChoose] = useState(0);
  const [iconData, setIconData] = useState([
    "/bao.png",
    "/bua.png",
    "/keo.png",
  ]);
  const [totalWin, setTotalWin] = useState(0);
  const [countPlay, setCountPlay] = useState(0);
  const [play, setPlay] = useState(false);
  const [computerChoose, setComputerChoose] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [messModal, setMessModal] = useState("");

  useEffect(() => {
    if (play) {
      const rd = Math.floor(Math.random() * 3);
      setComputerChoose(rd);
      if (currentChosse === rd) {
        setMessModal("Bạn đã hòa");
      } else {
        switch (rd) {
          case 0:
            if (currentChosse === 1) {
              setMessModal("Bạn đã thua");
            } else if (currentChosse === 2) {
              setMessModal("Bạn đã thắng");
              setTotalWin(totalWin + 1);
            }
            break;
          case 1:
            if (currentChosse === 0) {
              setMessModal("Bạn đã thắng");
              setTotalWin(totalWin + 1);
            } else if (currentChosse === 2) {
              setMessModal("Bạn đã thua");
            }
            break;
          case 2:
            if (currentChosse === 0) {
              setMessModal("Bạn đã thua");
            } else if (currentChosse === 1) {
              setMessModal("Bạn đã thắng");
              setTotalWin(totalWin + 1);
            }
            break;
          default:
            break;
        }
      }
      setCountPlay(countPlay + 1);
      setPlay(false);
      setShowModal(true);
    }
  }, [play]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(/bgGame.png)`,
      }}
    >
      <div className="top">
        <div className="left">
          <div className="iconWrap">
            <img className="icon" src={iconData[currentChosse]} alt="" />
          </div>
          <div className="">
            <img className="player" src="/player.png" alt="" />
          </div>
          <div className="choose">
            {iconData.map((item, index) => {
              if (index === currentChosse) {
                return (
                  <div className="chooseItem chooseItemActive" key={index}>
                    <img className="chooseItemImg" src={item} alt="" />
                  </div>
                );
              }
              return (
                <div
                  className="chooseItem"
                  key={index}
                  onClick={() => setCurrentChoose(index)}
                >
                  <img className="chooseItemImg" src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="center">
          <h2>I'm iron man,i love you 3000!!</h2>
          <p>
            Số bàn thắng: <span>{totalWin}</span>
          </p>
          <p>
            Số bàn chơi: <span>{countPlay}</span>
          </p>
          <button onClick={() => setPlay(true)}>Play Game</button>
        </div>
        <div className="right">
          <div className="iconWrap">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + iconData[computerChoose]}
              alt=""
            />
          </div>

          <div className="">
            <img className="player" src="/playerComputer.png" alt="" />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modalWrap">
            <h5>{messModal}</h5>
            <button
              onClick={() => {
                setShowModal(false);
                setComputerChoose(null);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
