import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Modal } from 'react-responsive-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'moment';
import { useLoadingState } from "../../assets/context/LoadingContext";

import { VictoryChart, VictoryLine, VictoryLegend } from 'victory';

import 'swiper/css';
import 'react-responsive-modal/styles.css';


import { kaikasGetBalance } from '@api/UseKaikas';

import backgroundImage from '@assets/body_quest.jpg';

function Index(props) {
	const [ onBetting, setOnBetting ] = useState();
	const { setLoading } = useLoadingState();
	const [ selectedAnswer, setSelectedAnswer ] = useState();
	const { walletData } = useWalletData();

	const [ questId ] = useState(props.location.state.questId);
	const [ quest, setQuest ] = useState();
	const [ questTotalAmount, setQuestTotalAmount ] = useState();
	const [ answerTotalAmounts, setAnswerTotalAmounts ] = useState({});
	const [ answerPercents, setAnswerPercents ] = useState({});
	const [ answerAllocations, setAnswerAllocations ] = useState({});

	const [ answerColors, setAnswerColors ] = useState({});
	const [ openQuestAdd, modalQuestAdd ] = useState(false);
	const [ openQuestSeason, modalQuestSeason ] = useState(false);

	const [ bettingCoin, setBettingCoin ] = useState(1);
	const [ rate, setRate ] = useState(0);
	const [ receiveToken, setReceiveToken ] = useState(0);
	const [ answerHistory, setAnswerHistory ] = useState();
	const [ historyGraph, setHistoryGraph ] = useState([]);	

	// modal values
  	const [ categories, setCategories ] = useState([]);
	const [endDateTime, setEndDateTime] = useState(new Date());
	const [modalValues, setModalValues] = useState({'_type': 'quests', 'questLanguage': 'EN', 'endDateTime': endDateTime});
	// modal values

	const setBetting = async () => {
		setLoading(true);
		if(!selectedAnswer) {
			alert('choice the answer !');
			setLoading(false);
			return;
		}

		try {
			const questAnswerId = quest.answerIds.filter((answerId) => answerId.title === selectedAnswer);
			const curBalance = await kaikasGetBalance(walletData.account);

			const betting = {
				'bettingCoin': Number(bettingCoin),
				'spenderAddress': '',
				'transactionId': '',
				'bettingStatus': '',
				'questKey': quest?.questKey,
				'questAnswerKey': questAnswerId[0], // TODO answer key
				'memberKey': '',
				'receiveAddress': '',
				'answerTitle': selectedAnswer,
				'curBalance': curBalance / 10 ** 18
			}

			await doBetting(betting);
			
			alert('betting success.');
			setOnBetting('bet');
		} catch(error) {
			console.log('betting error', error);
		}

		setLoading(false);
	}

	useEffect(() => {
		console.log('new load');

		setLoading(true);
		/**
		 * Quest 리스트 & 데이터 조회
		 */
		if(!questId) {
			alert('error. pick the quest again. please');
			setLoading(false);
			return;
		}

		const questQuery = `*[_type == 'quests' && isActive == true && _id == '${questId}'] {..., 'now': now(), 'categoryNm': *[_type=='seasonCategories' && _id == ^.seasonCategory._ref]{seasonCategoryName}[0], 'answerIds': *[_type=='questAnswerList' && questKey == ^.questKey] {title, _id, totalAmount}} [0]`;
		client.fetch(questQuery).then((quest) => {
			const diff = Moment(quest.now).diff(Moment(quest.endDateTime), 'days') 
			if(diff === 0) { 
				quest.dDay = 'D-0';
			} else {
				quest.dDay = diff > 0 ? 'expired' : `D${diff}`;
			}

			quest.startDateTime = Moment(quest.startDateTime).format('yyyy-MM-DD HH:mm:ss');
			quest.endDateTime = Moment(quest.endDateTime).format('yyyy-MM-DD HH:mm:ss');
			
			console.log('quest', quest);

			setQuest(quest);
			setQuestTotalAmount(quest.totalAmount);
			setSelectedAnswer(quest.answers[0]);

			const questTotalAmount = quest.totalAmount;
			const answers = quest.answerIds;
			answers.forEach((answer) => {
				console.log('answer', answer);

				const resultPercent = answer.totalAmount / questTotalAmount;
				const allocation = isNaN(Number(resultPercent).toFixed(2)) ? '0%' : Number(resultPercent  * 100).toFixed(2) +'% ('+ addComma(answer.totalAmount) +' CT)';
				answerTotalAmounts[answer.title] = answer.totalAmount;
				answerPercents[answer.title] = resultPercent * 100;
				answerAllocations[answer.title] = allocation;
	
				setAnswerTotalAmounts(answerTotalAmounts);
				setAnswerPercents(answerPercents);
				setAnswerAllocations(answerAllocations);
			});

			const creteriaDate = Moment().subtract(5, 'days').format('YYYY-MM-DD');
			console.log('creteriaDate', creteriaDate);
			const answerHistoryQuery = `*[_type == 'betting' && questKey == ${quest.questKey} && createdDateTime > '${creteriaDate}'] {..., 'answerColor': *[_type=='questAnswerList' && questKey == ^.questKey && _id == ^.questAnswerKey]{color}[0] } | order(createdDateTime asc)`;
			client.fetch(answerHistoryQuery).then((answerHist) => {
				// group by date
				const graphGroupData = answerHist.reduce((group, answer) => {
					const { bettingCoin, createdDateTime, answerTitle, answerColor } = answer;

					answerColors[answerTitle] = answerColor.color.value;
					setAnswerColors(answerColors);

					const date = Moment(createdDateTime).format('YYYY-MM-DD');
					group[answerTitle] = group[answerTitle] || {};
					group[answerTitle][date] = group[answerTitle][date] ? Number(group[answerTitle][date]) + Number(bettingCoin) : Number(bettingCoin);
					return group;
				}, {});
				
				const graphKeys = [];
				const graphData = {};
				for (const [key, value] of Object.entries(graphGroupData)) {
					graphKeys.push(key);
					for(const [k, v] of Object.entries(graphGroupData[key])) {
						graphData[key] = graphData[key] || [];
						graphData[key].push({x: k, y: v});
					}
				}

				setHistoryGraph(graphData);
				setAnswerHistory(answerHist);
			});

			const seasonCategoryQuery = `*[_type == 'season' && isActive == true] {seasonCategories[] -> {seasonCategoryName, _id}}`;
			client.fetch(seasonCategoryQuery).then((datas) => {
				if(datas) {
					const localCategories = [{seasonCategoryName: 'All'}];
					datas[0].seasonCategories.forEach((category) => ( localCategories.push(category) ));
					setCategories(localCategories);
				}
			});

			setLoading(false);
		});  
		/**
		 * Quest 리스트 & 데이터 조회
		 */ 
	}, [onBetting]);

	useEffect(() => {
		if(!bettingCoin) {
			setBettingCoin(1);
		}

		const currentRate = Number(bettingCoin) / (Number(bettingCoin) + Number(answerTotalAmounts[selectedAnswer]));
		const returnToken = (questTotalAmount - answerTotalAmounts[selectedAnswer]) * currentRate;
		const getToken = Number(bettingCoin) + Number(returnToken);
		const calRate = Number(getToken) / Number(bettingCoin);

		const rateString = isNaN(Number(calRate).toFixed(1)) ? '-' : Number(calRate).toFixed(1);
		const tokenString = isNaN(Number(getToken)) ?  '-' : Number(getToken).toFixed(3);

		setRate(rateString);
		setReceiveToken(tokenString);
	}, [selectedAnswer, bettingCoin]);


  	return (
		  
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
  );
}


export default Index;