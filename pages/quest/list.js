import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "react-responsive-modal";
import Moment from 'moment';
import $ from "jquery";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { urlFor, client } from "../../sanity";

import backgroundImage from '@assets/body_quest.jpg';

import { useLoadingState } from "@assets/context/LoadingContext";
import Pagination from "react-sanity-pagination";

import "swiper/css";
import "react-responsive-modal/styles.css";


function Index() {
  const { setLoading } = useLoadingState();
  const history = useHistory();
  const [ openQuestAdd, modalQuestAdd ] = useState(false);
  const [ openQuestSeason, modalQuestSeason ] = useState(false);

  const [ seasonInfos, setSeasonInfos ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ activeCategory, setActiveCategory ] = useState('All');

	// pagenation settings
	let postsPerPage = 3;
	const [ items, setItems ] = useState([]);
	const [ itemsToSend, setItemsToSend ] = useState([]);

  const action = (page, range, items) => {
		setItems(items);
	};
	// pagenation settings

  const [ answerTotalAmounts, setAnswerTotalAmounts] = useState({});
  const [ answerPercents, setAnswerPercents] = useState({});
  const [ answerAllocations, setAnswerAllocations ] = useState({});

  // modal values
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [modalValues, setModalValues] = useState({'_type': 'quests', 'questLanguage': 'EN', 'endDateTime': endDateTime});
  // modal values

  useEffect(() => {
    /**
     * 시즌 카테고리 리스트 조회
     */
		const seasonCategoryQuery = `*[_type == 'season' && isActive == true] {seasonCategories[] -> {seasonCategoryName, _id}}`;
		client.fetch(seasonCategoryQuery).then((datas) => {
      if(datas) {
        const localCategories = [{ seasonCategoryName: 'All' }];
        datas[0].seasonCategories.forEach((category) => ( localCategories.push(category) ));
        setCategories(localCategories);
      }
    });
    /**
     * 시즌 카테고리 리스트 조회
     */
  }, []);

  useEffect(() => {
    setLoading(true);

    /**
     * Quest 리스트 & 데이터 조회
     */
    const condition = `${activeCategory === 'All' ? '' : `&& seasonCategory._ref in *[_type == "seasonCategories" && seasonCategoryName == '${activeCategory}']._id`}`;
    const questQuery = `*[_type == 'quests' && isActive == true ${condition}] {..., 'now': now(), 'categoryNm': *[_type=='seasonCategories' && _id == ^.seasonCategory._ref]{seasonCategoryName}[0], 'answerIds': *[_type=='questAnswerList' && questKey == ^.questKey] {title, _id, totalAmount}}`;
		client.fetch(questQuery).then((datas) => {
      datas.forEach((quest) => {
        const diff = Moment(quest.now).diff(Moment(quest.endDateTime), 'days') 
        if(diff === 0) { 
          quest.dDay = 'D-0';
        } else {
          quest.dDay = diff > 0 ? 'expired' : `D${diff}`;
        }

        quest.startDateTime = Moment(quest.startDateTime).format('yyyy-MM-DD HH:mm:ss');
        quest.endDateTime = Moment(quest.endDateTime).format('yyyy-MM-DD HH:mm:ss');

        const questTotalAmount = quest.totalAmount;
        const answers = quest.answerIds;
				answers.forEach((answer) => {
					const resultPercent = answer.totalAmount / questTotalAmount;
					const allocation = isNaN(Number(resultPercent).toFixed(2)) ? '0%' : Number(resultPercent  * 100).toFixed(2) +'% ('+ addComma(answer.totalAmount) +' CT)';
					answerTotalAmounts[answer.title] = answer.totalAmount;
					answerPercents[answer.title] = resultPercent * 100;
					answerAllocations[answer.title] = allocation;
		
					setAnswerTotalAmounts(answerTotalAmounts);
					setAnswerPercents(answerPercents);
					setAnswerAllocations(answerAllocations);
				});
      });
      
      setItemsToSend(datas);
      setItems(datas.slice(0, postsPerPage));

      document.querySelectorAll('.pagePagination button').forEach((button) => button.classList.remove("active"));
      document.querySelector('.pagePagination :nth-child(2) > button') && document.querySelector('.pagePagination :nth-child(2) > button').classList.add("active");

      setLoading(false);
		});   
    /**
     * Quest 리스트 & 데이터 조회
     */ 

    const seasonInfoQuery = `*[_type == 'season' && isActive == true] {
      'quests': *[_type == 'quests' && ^._id == season._ref] 
      {'categoryName': *[_type == 'seasonCategories' && _id == ^.seasonCategory._ref] {seasonCategoryName} [0] }
    }`;

    const querySeasonInfos = [];
    client.fetch(seasonInfoQuery).then((seasonInfos) => {
      // category name, percentage
      const categoryAggr = {};
      seasonInfos[0].quests?.forEach((quest) => {
        const categoryName = quest.categoryName.seasonCategoryName;
        console.log('category name', categoryName);
        categoryAggr[categoryName] = categoryAggr[categoryName] ? Number(categoryAggr[categoryName]) + 1 : 1;
      });

      console.log('categoryAggr', categoryAggr);

      seasonInfos[0]['caregoryAggr'] = categoryAggr;
      setSeasonInfos(seasonInfos);
    });
  }, [activeCategory]);

  console.log('seasonInfos', seasonInfos);

  return (
    <>
      <div className="quest">
      	<div className="top-randomQuest">
			    <div className="random-left">
          		<figure></figure>
          		<div className=""></div>
        	</div>
			    <div className="random-right">
          	<span>22.01.12 WED Winner Prediction : [EFL CUP] Semi-Final, Chelsea FC vs Tottenham Hotspur FC</span>
          	<div><h3 style={{fontWeight: 700}}>D-day 2 : 2022 02 18</h3></div>
          	<div className="randomQuest-results">
        			<div className="random-results-inner">
              	<div className="random-resultsTop">
                	<ul>
                  	<li>
                    	<div className="random-itemLeft"></div>
                    	<div className="random-itemRight"></div>
                  	</li>
                    <li>
                    	<div className="random-itemLeft"></div>
                    	<div className="random-itemRight"></div>
                  	</li>
                    <li>
                    	<div className="random-itemLeft"></div>
                    	<div className="random-itemRight"></div>
                  	</li>
                	</ul>
              	</div>
              	<div className="random-resultsBot">
                	<button className="resultsTop-btn"><span>Choice Results</span></button>
                	<div className="init-battingnum"></div>
              	</div>
        			</div>
        		</div>
        	</div>
		    </div>
      </div>

      <Sticky />
      </>
  )
}

function Sticky(){
  return (
    <div className="stickyWrap">
      <div className="sticky-inner">
        <div className="sticky-tabModal">
          <StickyLeft />
          <StickyRight />
        </div>
        <div className="all-questArea">
          <MakeQuest />
          <AllQuestList />
        </div>
      </div>
    </div>
  );
}

///// 퀘스트 필터 모달
function MakeQuest(){
  return (
    <div className="make-wrraper">
      <div className="overlay"></div>
      <div className="make-modal">
        <div className="make-inner"></div>
      </div>
    </div>
  );
}
///// 메이크 퀘스트 모달

function StickyLeft(){
  return(
    <>
      <div onClick={stickyLeft} className="sticky stickyLeft">
        <p className="clickStickyText1">Make quest?</p>
      </div>
    </>
  );
}
function StickyRight(){
  return(
    <>
      <div onClick={stickyRight} className="sticky stickyRight">
        <p className="clickStickyText2">Open fillter</p>
      </div>
    </>
  );
}
//////// 필터, 퀘스트 만들기 클릭 효과
function stickyLeft(){
  document.getElementsByClassName('sticky')[0].addEventListener('click', function(){
    $(".clickStickyText1").addClass("active");
  });
}
function stickyRight(){
  document.getElementsByClassName('sticky')[1].addEventListener('click', function(){
    $(".clickStickyText2").addClass("active");
  });
}



///// 퀘스트 리스트
function AllQuestList(){
  return(
    <>
      <nav className="all-listContainer">
        <ul>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
          <li>
            <div className="all-items">
              <figure></figure>
              <div className="allQuest-tit">
                <h3>All Quest Title</h3>

              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}









function addComma(data) {
  if(!data) return '';

	return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export default Index;
