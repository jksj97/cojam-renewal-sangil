import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'


function Index() {

    let [hotquestCreatorface, thiscreator] = useState(['https://i.imgur.com/8AejkT6.png']);
    let [hotquestCreatorName, thiscreatorName] = useState(['electrifyingopera']);
    
    let [hotquestCTCount, thisquestCTCount] = useState(['190,132']);

    let [hotDdayTime, thisToDdayTime] = useState(['1:23:16']);

  return (
    <div className="hotlist">
        <li className="item" id="li-hot-quest-item01">
            <div className="item-inner">
                <a href="#"><img src="https://i.imgur.com/O2Guti1.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="crad-tit">
                    <span className="qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [COJAM's Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="crad-CT-Dday">
                    <span className="crad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="crad-ddaytime">
                        <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                    </div>
                </div>
                <div className="crad-creator">
                    <img src={hotquestCreatorface} alt="인기 퀘스트 01번의 크리에이터"></img>
                    <span>@{hotquestCreatorName}</span>
                </div>
            </div>
        </li> 
        <li className="item" id="li-hot-quest-item01">
            <div className="item-inner">
                <a href="#"><img src="https://i.imgur.com/O2Guti1.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="crad-tit">
                    <span className="qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [COJAM's Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="crad-CT-Dday">
                    <span className="crad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="crad-ddaytime">
                        <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                    </div>
                </div>
                <div className="crad-creator">
                    <img src={hotquestCreatorface} alt="인기 퀘스트 01번의 크리에이터"></img>
                    <span>@{hotquestCreatorName}</span>
                </div>
            </div>
        </li> 
        <li className="item" id="li-hot-quest-item01">
            <div className="item-inner">
                <a href="#"><img src="https://i.imgur.com/O2Guti1.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="crad-tit">
                    <span className="qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [COJAM's Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="crad-CT-Dday">
                    <span className="crad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="crad-ddaytime">
                        <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                    </div>
                </div>
                <div className="crad-creator">
                    <img src={hotquestCreatorface} alt="인기 퀘스트 01번의 크리에이터"></img>
                    <span>@{hotquestCreatorName}</span>
                </div>
            </div>
        </li> 
        <li className="item" id="li-hot-quest-item01">
            <div className="item-inner">
                <a href="#"><img src="https://i.imgur.com/O2Guti1.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="crad-tit">
                    <span className="qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [COJAM's Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="crad-CT-Dday">
                    <span className="crad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="crad-ddaytime">
                        <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                    </div>
                </div>
                <div className="crad-creator">
                    <img src={hotquestCreatorface} alt="인기 퀘스트 01번의 크리에이터"></img>
                    <span>@{hotquestCreatorName}</span>
                </div>
            </div>
        </li> 

        
    </div>
  );
}



export default Index;