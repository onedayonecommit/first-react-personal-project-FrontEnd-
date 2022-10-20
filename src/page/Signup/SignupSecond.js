import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SignupBefore } from '../../components';
import { defSignupId } from '../../redux/reducer/MainidSlice';
import { changeId, changePw } from '../../redux/reducer/SignupSlice';
import css from './Signup.css'
const SignupSecond = () => {
    const signupId = useSelector((state) => state.MainidCheck.signup_user_id);
    const dispatch = useDispatch();
    console.log(signupId, "!!!!!!!!!!!");
    const onChangeId = (e) => {
        dispatch(defSignupId(e.target.value))
    }
    const onChangePw = (e) => {
        dispatch(changePw(e.target.value))
    }

    return (
        <div>
            <SignupBefore />
            <div className='flex flex-col items-center '>
                <div className='mt-16 w-96 font-semibold'>1/3단계</div>
                <span className='font-bold text-4xl w-96 mt-2'>설정 후 사용할 비밀번호를 <br />입력하세요</span>
                <div className='w-96 mt-4 text-2xl'>곧 가입 완료</div>
                <input className='signup-input' placeholder='Email' value={signupId} onChange={onChangeId} />
                <input className='signup-input' placeholder='Password' type="password" onChange={onChangePw} />
                <div className='checkbox-div mt-4'><input className='checkbox' placeholder='Password' type="checkbox" /><span className='ml-2 h-4'>이용약관 동의</span></div>
                <div className='checkbox-div'><input className='checkbox' placeholder='Password' type="checkbox" /><span className='ml-2'>이벤트성 수신 동의 ?</span> </div>
                <Link className='mb-32' to={"/welcome/signup/second"}><button className='next-btn mt-8'>다음</button></Link>
            </div>
        </div>
    )
}

export default SignupSecond