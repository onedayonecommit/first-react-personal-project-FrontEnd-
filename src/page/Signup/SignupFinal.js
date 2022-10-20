import React from 'react'
import { SignupBefore } from '../../components'
import { check, membership } from "../../image"

const SignupFinal = () => {
    return (
        <div>
            <SignupBefore />
            <div className='Signup-final-container'>
                <span className='text-sm font-bold'>2/3단계</span>
                <div className='text-4xl font-semibold'>선결제 시 30%할인</div>
                <ul className='flex flex-col justify-between mb-4 text-left '>
                    <li className='text-xl w-full flex flex-row justify-start items-start mt-2'><img src={check} className="w-8 mr-2" alt='체크' />선결제 시 1일이내 환불 신청 가능</li>
                    <li className='text-xl w-full flex flex-row justify-start items-start mt-2'><img src={check} className="w-8 mr-2" alt='체크' />중복결제 가능하므로 한번만 결제할 것.</li>
                    <li className='text-xl w-full flex flex-row justify-start items-start mt-2'><img src={check} className="w-8 mr-2" alt='체크' />여기 지나가서 결제하면 30%할인 절대 없음.</li>
                </ul>
                <div className='flex items-end flex-col'>
                    <div className='membership-container flex justify-between'>
                        <div className='flex membership-choose-box items-center justify-center'>독신</div>
                        <div className='flex membership-choose-box items-center justify-center'>커플</div>
                        <div className='flex membership-choose-box items-center justify-center'>패밀리</div>
                    </div>
                </div>
                <table className='flex flex-col table-container'>
                    <tbody>
                        <tr className='flex table-tr items-center border-solid'>
                            <td><div className='table-div'>월 요금</div></td>
                            <td><div className='table-div-child'>1</div></td>
                            <td><div className='table-div-child'>3</div></td>
                            <td><div className='table-div-child'>3</div></td>
                        </tr>
                        <tr className='flex table-tr items-center border-solid '>
                            <td><div className='table-div'>1</div></td>
                            <td><div className='table-div-child'>2</div></td>
                            <td><div className='table-div-child'>2</div></td>
                            <td><div className='table-div-child'>3</div></td>
                        </tr>
                        <tr className='flex table-tr items-center border-solid '>
                            <td><div className='table-div'>1</div></td>
                            <td><div className='table-div-child'>1</div></td>
                            <td><div className='table-div-child'>2</div></td>
                            <td><div className='table-div-child'>3</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SignupFinal