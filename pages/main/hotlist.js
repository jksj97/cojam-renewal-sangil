import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'


function Index() {

    let [hotquestCreatorface, thiscreator] = useState(['https://i.imgur.com/8AejkT6.png']);
    let [hotquestCreatorName, thiscreatorName] = useState(['electrifyingopera']);
    
    let [hotquestCTCount, thisquestCTCount] = useState(['190,132']);

    let [hotDdayTime, thisToDdayTime] = useState(['1:23:16']);

  return (
    <ul className="hotlist">
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
        <li className="hot-item" id="li-hot-quest-item01">
            <div className="hotitem-inner">
                <a href="#"><img src="https://i.imgur.com/cVYhITM.png" alt="홈 영역 인기 퀘스트 리스트 01번"></img></a>
                <div className="hotcrad-tit">
                    <span className="hot-qeust-tit" title="22.04.03 SUN KBO Leauge, LG vs KIA">
                        22.04.03 SUN [Collective Intelligence Quest] Score difference Prediction : KBO Leauge, LG vs KIA
                    </span>
                </div>
                <div className="hotcrad-CT-Dday">
                    <span className="hotcrad-CTInner"><span>{hotquestCTCount}CT</span></span>
                    <div className="hot-ddaytime"><span>{hotDdayTime}</span></div>
                </div>
                <div className="hotcrad-answer">
                    <ul className="answer-container">
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-01">
                                <p className="answer">Yes</p>
                                <div className="answer-hotQT-01 QTpercent">
                                    <p id="answerPercent-hotQT-01">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" id="answer-inner" className="answer-QT-02">
                                <p className="answer">No</p>
                                <div className="answer-hotQT-02 QTpercent">
                                    <p id="answerPercent-hotQT-02">38.48% (9500 CT)</p>
                                    <progress id="progress" value="40" min="0" max="100"></progress>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
  );
}



export default Index;