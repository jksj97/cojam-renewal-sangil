import React, { useState, useEffect } from 'react'; 
import { useHistory } from 'react-router-dom'

import HotList from "./hotlist";
import MultiList from "./multilist";

import mainVisualScroll from '@assets/main_visual_scroll02.png'
import mainServiceIcon01 from '@assets/main_service_icon01.svg'
import mainServiceIcon02 from '@assets/main_service_icon02.svg'
import mainServiceIcon03 from '@assets/main_service_icon03.svg'
import mainServiceIcon04 from '@assets/main_service_icon04.svg'
import mainServiceIcon05 from '@assets/main_service_icon05.svg'
import mainServiceIcon06 from '@assets/main_service_icon06.svg'

import mainBackGround from '@assets/main_visual_img02.jpg';
import serviceBackground from '@assets/main_service_bg.png';
import phoneBackground from '@assets/main_service_phone.png';
import qnaBackground from '@assets/main_qna_bg.jpg';

import { urlFor, client } from "../../sanity";

import Moment from 'moment';
import Accordion from '../../components/Accordion';
import { useLoadingState } from "../../assets/context/LoadingContext";

function Index() {
	const history = useHistory();
	const { setLoading } = useLoadingState();
	const [ quests, setQuests ] = useState([]);
	const [ qnas, setQnas ] = useState([]);
	
	const [ answerTotalAmounts, setAnswerTotalAmounts] = useState({});
	const [ answerPercents, setAnswerPercents] = useState({});
	const [ answerAllocations, setAnswerAllocations ] = useState({});

	window.onload = function () {
		const button = document.querySelector('.button');

		button.addEventListener('click', () => {
  		const dropdown = document.querySelector('.dropdown');
  		dropdown.style.display = 'block';
		});

		button.addEventListener('blur', () => {
			const dropdown = document.querySelector('.dropdown');
			
			// 0.2초 뒤에 실행
			setTimeout(() => {
			  dropdown.style.display = '';
			}, 200);
		  });
	}


	const resizeFunc = () => {
		//창크기 변화 감지
		if(this.window.innerWidth < 992) {
			document.querySelector('.main-service > div').style.background = 'none';
		} else {
			document.querySelector('.main-service > div').style.background = `url('${phoneBackground}') -280px no-repeat`;
		}
	}


	useEffect(() => {
		window.addEventListener('resize', resizeFunc);

		const loadDatas = async () => {
			const questQuery = `*[_type == 'quests' && isActive == true] {..., 'now': now(), 'categoryNm': *[_type=='seasonCategories' && _id == ^.seasonCategory._ref]{seasonCategoryName}[0], 'answerIds': *[_type=='questAnswerList' && questKey == ^.questKey] {title, _id, totalAmount}}`;
			await client.fetch(questQuery).then((datas) => {
				console.log('quest', datas);
				setQuests(datas);

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
						const allocation = isNaN(Number(resultPercent).toFixed(2)) ? '0%' : Number(resultPercent * 100).toFixed(2)+'% ('+ addComma(answer.totalAmount) +' CT)';
						
						answerTotalAmounts[answer.title] = answer.totalAmount;
						answerPercents[answer.title] = resultPercent * 100;
						answerAllocations[answer.title] = allocation;
			
						setAnswerTotalAmounts(answerTotalAmounts);
						setAnswerPercents(answerPercents);
						setAnswerAllocations(answerAllocations);
					});

					console.log(answerTotalAmounts, answerPercents, answerAllocations);
				});
			});

			const qnaQuery = '*[_type == "questions"]';
			await client.fetch(qnaQuery).then((data) => {
				console.log('qna', data);
				setQnas(data);
			});
		}

		setLoading(true);
		loadDatas();
		setLoading(false);

		return window.removeEventListener('resize', resizeFunc);

		


	}, []);



	

	let [topQuestDate, topQuestDateCount] = useState(['D-day 2 : 2022 02 18']);
	let [topQuestthumbnail, toDayThumbnail] = useState(['https://i.imgur.com/v0hRxlg.png']);

	let [topQuesttlt, topQuestTltToDay] = useState(['22.01.12 WED Winner Prediction : [EFL CUP] Semi-Final, Chelsea FC vs Tottenham Hotspur FC']);

	let [topQuestTotalCT, topQuestTotalCTCount] = useState(['19448'])

	let [topcreatorsprofile, profileimg] = useState(['https://i.imgur.com/DbHchmW.png'])
	let [topcreatorsName, thisquestcreatorsName] = useState(['hollydotcool'])

	
	document.addEventListener('DOMContentLoaded', ()=>{
		var interval = window.setInterval(rollingCallback, 3000);
	})
	function rollingCallback(){
		//.prev 클래스 삭제
		document.querySelector('.rollingbanner .prev').classList.remove('prev');
	
		//.current -> .prev
		let current = document.querySelector('.rollingbanner .current');
		current.classList.remove('current');
		current.classList.add('prev');
	
		//.next -> .current
		let next = document.querySelector('.rollingbanner .next');
		//다음 목록 요소가 널인지 체크
		if(next.nextElementSibling == null){
			document.querySelector('.rollingbanner ul li:first-child').classList.add('next');
		}else{
			//목록 처음 요소를 다음 요소로 선택
			next.nextElementSibling.classList.add('next');
		}
		next.classList.remove('next');
		next.classList.add('current');
	}

	//$('#selectBox').change(function() {
		//var selectedClass = $('#selectBox').val();
		//$('#showoption').
		//removeClass('ArtCulture Competition Community CrowdSolving Economy Science').
		//addClass(selectedClass);
	  //});

	
	

	return (
    	<div>
			{/* 비주얼영역 */}
			<div className="main-topQuest-area">
				<h3 className="topQuest-endDay">
					<span>{topQuestDate}</span>
				</h3>

				<div className="topQuest-thumbnail">
					<a href="#">
						<figure><img src={topQuestthumbnail}></img></figure>
					</a>
				</div>

				<div className="topQuest-textarea">
					<h3 className="topQuest-tit">
						<span>{topQuesttlt}</span>
					</h3>
					
					<h2 className="toptotalCT">
						<span>{topQuestTotalCT}</span> CT
					</h2>
				</div>

				<div className="topcreators-CT">
					<div className="topcreators-pro">
						<img src={topcreatorsprofile}></img>
						<span>@{topcreatorsName}</span>
					</div>
					<div class="rollingbanner ">
    					<div class="wrap">
        					<ul>
            					<li class="current"><a href="#">1000CT</a></li>
            					<li class="next"><a href="#">1234CT</a></li>
            					<li><a href="#">2567CT</a></li>
            					<li><a href="#">367CT</a></li>
            					<li class="prev"><a href="#">3789CT</a></li>
        					</ul>
    					</div>
					</div>
				</div>
			</div>
			{/* 비주얼영역 끝 */}



			{/* 비줄얼 텍스트 */}
			<div className="vis-text">
			<h1>
				Blockchain-based<br />
				Online Socia lP<br />
				Rediction Platform
			</h1>
			<h4>
				We are a growing<br /> 
				<span className="yellow">predictive platform </span><br />
				based on blockchain.<br />
				Your creativity makes us strong,
			</h4>
			<h1>by making Quests</h1>
			</div>





			{/* 핫 퀘스트 */}
			<div className="hotquest-area">
				<div className="hotquest-container">
				    <div className="hotquest-tlt">
  						<button class="hotbutton"><a>Hot quest </a></button>
						<a href="/QuestList" className="hotquestLink">View All Quest</a>
					</div> {/* hotquest-tlt 끝*/}

					<div className="hotlist-items">
						<HotList></HotList>
					</div>
				</div>
			</div>


			{/*다중 퀘스트 */}
			<div className="multiquest-area">
				<div className="multiquest-container">
					<MultiList></MultiList>
				</div>
			</div>



			{/* 커뮤니티 간략 */}
			<div className="community-simple-area">
				<div className="">
					<div className="community-container">
				    	<div className="community-tlt">
							<div class="button-container">
  								<button class="button"><a>Community</a></button>
  								<div class="dropdown">
    								<div class="dropdown-item"><a href="#">News</a></div>
    								<div class="dropdown-item"><a href="#">News</a></div>
  								</div>

								<a href="/community" className="communityLink">Go to Blog</a>
							</div>
						</div> {/* community-tlt 끝*/}
					</div>

					<div className="community-content">
						{/* 위쪽 아이템 */}
						<div className="commu-top-items">
							<div className="prd-item"><a href="#">
								<figure className="prd-figure"><img src=""></img></figure>
								</a>
							</div>
							<div className="prd-item"><a href="#">
								<figure className="prd-figure"><img src=""></img></figure>
								</a>
							</div>
							<div className="prd-item"><a href="#">
								<figure className="prd-figure"><img src=""></img></figure>
								</a>
							</div>
							<div className="last prd-item"><a href="#">
								<figure className="prd-figure"><img src=""></img></figure>
								</a>
							</div>
						</div>
						{/* 중간쪽 아이템 */}
						<div className="commu-mid-items">
							<div className="long-item"><a href="#">
								<figure className="prd-figure"><img href="#"></img></figure>
								</a>
							</div>	
							<div className="last prd-item"><a href="#">
								<figure className="prd-figure"><img href="#"></img></figure>
								</a>
							</div>
						</div>
						{/* 아래쪽 아이템 */}
						<div className="commu-bot-items">
							<div className="prd-item"><a href="#">
								<figure className="prd-figure"><img href="#"></img></figure>
								</a>
							</div>
							<div className="long-item"><a href="#">
								<figure className="prd-figure"><img href="#"></img></figure>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		

			{/* 레이어팝업 */}
			{/* <div className="main-popup" style={{ top: `100px`, left: `100px` }}>
				<div><img src="https://i.pinimg.com/564x/c8/fc/e2/c8fce2fb4b69a2038471688d8e99d3d8.jpg" alt="" title="" /></div>
				<dl>
					<dt>오늘 더 이상 열지 않기</dt>
					<dd>닫기</dd>
				</dl>
			</div> */}
			{/* 레이어팝업 끝 */}



    </div>
  );
}

function addComma(data) {
	if(!data) return '';

	return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}






export default Index;