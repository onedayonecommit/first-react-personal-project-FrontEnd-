import React from 'react'

import { Link } from 'react-router-dom'
import MypageNav from '../Main/MypageNav'
import "./Mypage.css"

const Mypage = () => {
    return (
        <div className='mypage-box'>
            <MypageNav />
            <div className='content-box'>
                <div className='content-wrap'>
                    <div className='content'>
                        <span>계정</span>
                        <div className='member-img'></div>
                        멤버십 시작: 10월 2022
                    </div>
                    {/* 사진에서 2번 박스 */}
                    <div className='payment-box flex justify-between'>
                        <div className='payment-box-first'>
                            <div className='payment-box-first-1'><span>멤버십 & 결제 정보</span></div>
                            <div className='payment-box-first-1'><button onClick={() => {
                            }}>멤버십 해지</button></div>
                        </div>
                        <div className='payment-box-second'>
                            <div className='payment-box-second-1 flex justify-between'>
                                <div>
                                    <ul>
                                        <li className='payment-box-second-1-1 li-1'>

                                        </li>
                                        <li className='payment-box-second-1-1 li-2'>
                                            비밀번호: *@!#*@!#
                                        </li>
                                        <li className='payment-box-second-1-1 li-3'>
                                            전화번호 :
                                        </li>
                                        <li className='payment-box-second-1-1 li-4'>
                                            닉네임 :
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='link-ul'>
                                        <li className='Link-li'>
                                            <Link to="/welcome/changeemail" className='payment-box-second-1-2'>계정 이메일 변경</Link>
                                        </li>
                                        <li className='Link-li'>
                                            <Link to="/welcome/changepw" className='payment-box-second-1-2'>비밀번호 변경</Link>
                                        </li>
                                        <li className='Link-li'>
                                            <Link to="/welcome/changephonenum" className='payment-box-second-1-2'>휴대폰 번호 변경</Link>
                                        </li>
                                        <li className='Link-li'>
                                            <Link to="/welcome/changenickname" className='payment-box-second-1-2'>닉네임 변경</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='payment-box-second-2 flex justify-between'>
                                <div>
                                    <ul>
                                        <li className='payment-box-second-2-1'>결제 수단 : 카카오페이</li>
                                        <li className='payment-box-second-2-1'>다음 결제일은 없습니다. <br />정기 결제 등록은 잠시만 기다려주세요.</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li className='Link-li'>
                                            <Link className='payment-box-second-2-2'>결제 정보 관리</Link>
                                        </li>
                                        <li className='Link-li'>
                                            <Link className='payment-box-second-2-2'>
                                                결제 상세 정보</Link>
                                        </li>
                                        <li className='Link-li'>
                                            <Link className='payment-box-second-2-2'>
                                                결제 수단 / 결제일 변경 신청</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='payment-box-second-3 flex justify-end'>
                                <div>
                                    <ul>
                                        <li className='payment-box-second-3-2'><Link>기프트 카드 또는 쿠폰 입력</Link></li>
                                        <li className='payment-box-second-3-2'><Link>판매처</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 사진에서 3번 박스 */}
                    <div className='info-box flex justify-between third-box'>
                        <div className='membership-info-box'>멤버십 상세 정보</div>
                        <div className='flex justify-between membership-info-box-1'>
                            <div>
                                <ul>
                                    <li className='ul-li'></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='ul-li'><Link className='ul-li-lastchild'>멤버십 변경</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <div className='exit-btn-box'><button className='exit-btn' onClick={() => {
            }}>나가기</button></div>
        </div >
    )
}

export default Mypage