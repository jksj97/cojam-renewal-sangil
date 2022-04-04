//import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';

import 'react-responsive-modal/styles.css';
import backgroundImage from '@assets/body_mypage.jpg';

function Index() {
	const [openSendCT, modalSendCT] = useState(false);
	const [openMypageVoting, modalMypageVoting] = useState(false);
	const [openMypageGround, modalMypageGround] = useState(false);
	const [openMypageTransfer, modalMypageTransfer] = useState(false);

  return (
    <div className="bg-mypage" style={{background: `url('${backgroundImage}') center -590px no-repeat, #eef0f8 `}}>

			{/* 타이틀영역 */}
			<div className="title-area">
				mypage
			</div>
			{/* 타이틀영역 끝 */}


			{/* 마이페이지 - 기본정보 */}
			<div className="mypage-info">
				<dt>
					<div><i className="uil uil-envelope-check"></i> Email : <span>kcv5106@naver.com</span></div>
					<div><i className="uil uil-wallet"></i> Wallet address : <span>0xe539c08cb274877d1373da2a46f04b92193bfa66</span></div>
				</dt>
				<dd>
					<a href="#" className="btn-red">Click to be Reward!</a>
					<a href="#" className="btn-purple" onClick={() => modalSendCT(true)}>CT Send</a>
					<a href="#" className="btn-blue">Click to be Reward!</a>
				</dd>
			</div>
			{/* 마이페이지 - 기본정보 끝 */}


			{/* 마이페이지 - 탭버튼 */}
			<ul className="mypage-tab">
				<li className="mt-tab01 active" onClick={tabOpen01}><i className="uil uil-chart-line"></i> <span>Votings</span></li>
				<li className="mt-tab02" onClick={tabOpen02}><i className="uil uil-files-landscapes-alt"></i> <span>Grounds</span></li>
				<li className="mt-tab03" onClick={tabOpen03}><i className="uil uil-file-info-alt"></i> <span>CT Transfer</span></li>
			</ul>
			{/* 마이페이지 - 탭버튼 끝 */}


			{/* 마이페이지 - 내용 */}
			<div className="mypage-content">
				<div className="mc-votings">
					<h2><span>Votings</span></h2>
					<div>
						<ul>
							<li><strong>Category</strong></li>
							<li><strong>Title</strong></li>
							<li><strong>Status Flow</strong></li>
							<li><strong>My Answer</strong></li>
							<li><strong>Multiply</strong></li>
							<li><strong>Prediction Fee</strong></li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<p>Pending</p>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<p>Pending</p>
								<span>Status Flow : </span>
								<ol>
									<li className="complete">
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<h2>Approve</h2>
									</li>
									<li>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ol>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
							<li className="pending">Pending</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ol className="fourstep">
									<li className="complete">
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<h2>Approve</h2>
									</li>
									<li>
										<h2>Adjourn</h2>
									</li>
								</ol>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
						<ul onClick={() => modalMypageVoting(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>My Answer : </span>Yes (10,000 CT)</li>
							<li><span>Multiply : </span>0.85</li>
							<li><span>Prediction Fee : </span>8,500 CT</li>
						</ul>
					</div>
				</div>

				<div className="mc-grounds">
					<h2><span>Grounds</span></h2>
					<div>
						<ul>
							<li><strong>Category</strong></li>
							<li><strong>Title</strong></li>
							<li><strong>Status Flow</strong></li>
							<li><strong>Total</strong></li>
							<li><strong>Total Creator Fee</strong></li>
							<li><strong>Donation Fee</strong></li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<p>Pending</p>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ol>
									<li className="complete">
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<h2>Approve</h2>
									</li>
									<li>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ol>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
							<li className="pending">Pending</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
						<ul onClick={() => modalMypageGround(true)}>
							<li><span>Category : </span>art</li>
							<li><span>Title : </span>Will BTS be able to win "BEST POP DUO/GROUP PERFORMANCE" at the Grammy Awards held on March 14, 2021?</li>
							<li>
								<span>Status Flow : </span>
								<ul>
									<li className="complete">
										<span></span>
										<h2>Ongoing</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Invaild</h2>
									</li>
									<li className="complete">
										<span></span>
										<h2>Approve</h2>
									</li>
									<li className="ing">
										<span></span>
										<h2>Adjourn</h2>
									</li>
									<li>
										<span></span>
										<h2>Success</h2>
									</li>
								</ul>
							</li>
							<li><span>Total  : </span>10,000 CT</li>
							<li><span>Total Creator Fee : </span>7472.75 CT (5%)</li>
							<li><span>Donation Fee : </span>2989.1 CT (2%)</li>
						</ul>
					</div>
				</div>

				<div className="mc-transfer">
					<h2><span>CT Transfer</span></h2>
					<div>
						<ul>
							<li><strong>Spender Address</strong></li>
							<li><strong>Recipient Address</strong></li>
							<li><strong>CT Amount</strong></li>
							<li><strong>Created DTTM</strong></li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
						<ul onClick={() => modalMypageTransfer(true)}>
							<li><span>Spender Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>Recipient Address : </span>0xe539c08cb274877d1373da2a46f04b92193bfa66</li>
							<li><span>CT Amount : </span>10,000 CT</li>
							<li><span>Created DTTM : </span>2021.01.06 (14:00:00)</li>
						</ul>
					</div>
				</div>
			</div>
			{/* 마이페이지 - 내용 끝 */}


			{/* 모달 - SEND CT */}
			<Modal open={openSendCT} onClose={() => modalSendCT(false)} center>
				<div className="modal-send-ct">
					<form name="addForm" method="post" action="">
						<fieldset>
							<legend>SEND CT</legend>
							<div className="msc-area">
								<dl>
									<dt>SEND CT</dt>
									<dd><i className="uil uil-times" onClick={() => modalSendCT(false)}></i></dd>
								</dl>
								<ul>
									<li><input name="name" type="text" className="w100p" placeholder="Enter the recipient address" /></li>
									<li><input name="name" type="text" className="w100p" placeholder="Please enter CT amount" /></li>
								</ul>
								<p>
									<a href="#">Send CT</a>
								</p>
							</div>
						</fieldset>
					</form>
				</div>
			</Modal>
			{/* 모달 - SEND CT 끝 */}


			{/* 모달 - 마이페이지 - Voting 상세 */}
			<Modal open={openMypageVoting} onClose={() => modalMypageVoting(false)} center>
				<div className="modal-mypage-view">
					<form name="addForm" method="post" action="">
						<fieldset>
							<legend>Voting Detail</legend>
							<div className="mmv-area">
								<dl>
									<dt>Voting Detail</dt>
									<dd><i className="uil uil-times" onClick={() => modalMypageVoting(false)}></i></dd>
								</dl>
								<ul>
									<li>
										<span>Title</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Category</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Status</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Approve Transaction</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Adjourn Transaction</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Success Transaction</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Answer List</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>My Answer</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Selected Answer</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Spender Address</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Betting Transaction</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
								</ul>
								<p>
									<a href="#">Confirm</a>
								</p>
							</div>
						</fieldset>
					</form>
				</div>
			</Modal>
			{/* 모달 - 마이페이지 - Voting 상세 끝 */}


			{/* 모달 - 마이페이지 - Ground 상세 */}
			<Modal open={openMypageGround} onClose={() => modalMypageGround(false)} center>
				<div className="modal-mypage-view">
					<form name="addForm" method="post" action="">
						<fieldset>
							<legend>Ground Detail</legend>
							<div className="mmv-area">
								<dl>
									<dt>Ground Detail</dt>
									<dd><i className="uil uil-times" onClick={() => modalMypageGround(false)}></i></dd>
								</dl>
								<ul>
									<li>
										<span>Title</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Category</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Status</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Description</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Approve Transaction</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Adjourn Transaction</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Success Transaction</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Answer List</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Selected Answer</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Season</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
								</ul>
								<p>
									<a href="#">Confirm</a>
								</p>
							</div>
						</fieldset>
					</form>
				</div>
			</Modal>
			{/* 모달 - 마이페이지 - Ground 상세 끝 */}


			{/* 모달 - 마이페이지 - Transfer 상세 */}
			<Modal open={openMypageTransfer} onClose={() => modalMypageTransfer(false)} center>
				<div className="modal-mypage-view">
					<form name="addForm" method="post" action="">
						<fieldset>
							<legend>CT Transfer</legend>
							<div className="mmv-area">
								<dl>
									<dt>CT Transfer Detail</dt>
									<dd><i className="uil uil-times" onClick={() => modalMypageTransfer(false)}></i></dd>
								</dl>
								<ul>
									<li>
										<span>Spender Address</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Recipient Address</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>CT Amount</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Transaction</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>Status</span>
										<input name="name" type="text" className="w100p" placeholder="" />
									</li>
									<li>
										<span>DTTM</span>
										<input name="name" type="text" id="schDateTransfer" className="w100p date-icon" placeholder="" />
									</li>
								</ul>
								<p>
									<a href="#">Confirm</a>
								</p>
							</div>
						</fieldset>
					</form>
				</div>
			</Modal>
			{/* 모달 - 마이페이지 - Transfer 상세 끝 */}


			<div className="h70"></div>
    </div>
  );
}


function tabOpen01() {
  	document.querySelector('.mc-votings').style.display = 'block';
	document.querySelector('.mc-grounds').style.display = 'none';
	document.querySelector('.mc-transfer').style.display = 'none';

	document.querySelector('.mt-tab01').classList.add("active");
	document.querySelector('.mt-tab02').classList.remove("active");
	document.querySelector('.mt-tab03').classList.remove("active");
}

function tabOpen02() {
  	document.querySelector('.mc-votings').style.display = 'none';
	document.querySelector('.mc-grounds').style.display = 'block';
	document.querySelector('.mc-transfer').style.display = 'none';

	document.querySelector('.mt-tab01').classList.remove("active");
	document.querySelector('.mt-tab02').classList.add("active");
	document.querySelector('.mt-tab03').classList.remove("active");
}

function tabOpen03() {
  	document.querySelector('.mc-votings').style.display = 'none';
	document.querySelector('.mc-grounds').style.display = 'none';
	document.querySelector('.mc-transfer').style.display = 'block';

	document.querySelector('.mt-tab01').classList.remove("active");
	document.querySelector('.mt-tab02').classList.remove("active");
	document.querySelector('.mt-tab03').classList.add("active");
}


export default Index;
