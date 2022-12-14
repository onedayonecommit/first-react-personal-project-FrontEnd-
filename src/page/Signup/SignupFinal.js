import React from 'react'

import { SignupBefore } from '../../components'

const SignupFinal = () => {

    return (
        <div className='signup-body-final'>
            <SignupBefore />
            <div className='Signup-final-container'>
                <span className='text-sm font-bold'>2/3단계</span>
                <div className='text-4xl font-semibold'>선결제 시 30%할인</div>
                <ul className='flex flex-col justify-between mb-4 text-left '>
                    <li className='text-xl w-full flex flex-row justify-start items-start mt-2'><img className="w-8 mr-2" alt='체크' />선결제 시 1일이내 환불 신청 가능</li>
                    <li className='text-xl w-full flex flex-row justify-start items-start mt-2'><img className="w-8 mr-2" alt='체크' />중복결제 가능하므로 한번만 결제할 것.</li>
                    <li className='text-xl w-full flex flex-row justify-start items-start mt-2'><img className="w-8 mr-2" alt='체크' />여기 지나가서 결제하면 30%할인 절대 없음.</li>
                </ul>
                <div className='flex items-end flex-col'>
                    <div className='membership-container flex justify-between'>
                        <div className='flex membership-choose-box items-center justify-center font-bold'>독신</div>
                        <div className='flex membership-choose-box items-center justify-center font-bold'>커플</div>
                        <div className='flex membership-choose-box items-center justify-center font-bold'>패밀리</div>
                    </div>
                </div>
                <table className='flex flex-col table-container'>
                    <tbody>
                        <tr className='flex table-tr items-center border-solid'>
                            <td><div className='table-div'>월 요금</div></td>
                            <td><div className='table-div-child'>$</div></td>
                            <td><div className='table-div-child'>$</div></td>
                            <td><div className='table-div-child'>$</div></td>
                        </tr>
                        <tr className='flex table-tr items-center border-solid '>
                            <td><div className='table-div'>사용 가능자</div></td>
                            <td><div className='table-div-child'>혼자만 고독하고<br />외롭게 사용 가능</div></td>
                            <td><div className='table-div-child'>둘이서 알콩달콩 사용 가능</div></td>
                            <td><div className='table-div-child'>가족끼리 화목하게 사용 가능</div></td>
                        </tr>
                        <tr className='flex table-tr items-center border-solid '>
                            <td><div className='table-div'>이용 가능한 매체</div></td>
                            <td><div className='table-div-child'>라디오</div></td>
                            <td><div className='table-div-child'>라디오,테레비전</div></td>
                            <td><div className='table-div-child'>라디오,테레비전 심지어 스마트폰도 O</div></td>
                        </tr>
                    </tbody>
                </table>
                <div className='btn-divbox flex justify-between'>
                    <button className='buy-option-btn' onClick={() => {
                        if (!window.confirm("옵션 : 독신 / 가격 : 4,900원 구매 하시겠습니까? 확인 누르면 순간 옵션 번복 불가")) {
                            alert("취소 되었습니다.")
                        }
                        else {
                            // window.location.href = "/kakaoend"
                        }
                    }}>독신 구매</button>
                    <button className='buy-option-btn' onClick={() => {
                        if (!window.confirm("옵션 : 커플 / 가격 : 7,900원 구매 하시겠습니까? 확인 누르면 순간 옵션 번복 불가")) alert("취소 되었습니다.")
                        else {
                        }
                    }}>커플 구매</button>
                    <button className='buy-option-btn' onClick={() => {
                        if (!window.confirm("옵션 : 패밀리 / 가격 : 12,900원 구매 하시겠습니까? 확인 누르면 순간 옵션 번복 불가")) alert("취소 되었습니다.")
                        else {
                        }
                    }}>패밀리 구매</button>
                    <button className='buy-option-btn' onClick={() => {
                        alert("두번 다시 이 가격에 못삽니다. 로그인하세요")
                        window.location.href = "/welcome/login"
                    }}>다음에 구매</button>
                </div>
            </div >
        </div >
    )
}

export default SignupFinal