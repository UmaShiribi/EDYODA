import React from 'react'

// images
import rupay from "../asstes/images/razorpay-Icon.png"

const PaymentForm = () => {
    const [plan, setPlan] = React.useState("179")

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        alert(`Your plan is ${plan==="8"?99:plan}`)
        setPlan("179")
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className='bg-[#ffffff] py-6'>
                    <div className='px-6'>
                        {/* sign up */}
                        <div className='flex justify-around '>
                            <div className=''>
                                <div className='w-[50px] h-[50px] flex justify-center items-center inline-bolck rounded-[50px] text-[18px] bg-[#0096FF] text-[#ffffff]'><h4>1</h4></div>
                                <p>Sign Up</p>
                            </div>
                            <div className=''>
                                <div className='w-[50px] h-[50px] flex justify-center items-center inline-bolck rounded-[50px] text-[18px] bg-[#0096FF] text-[#ffffff]'><h4>2</h4></div>
                                <p>Subscribe</p>
                            </div>
                        </div>
                        {/* heading */}
                        <div className='my-6'>
                            <h4 className='text-[18px] md:text-[24px] font-semibold text-center text-[#3C4852]'>Select your subcription plan</h4>
                        </div>
                        {/* paln */}
                        <div className='grid grid-cols-1 gap-4 mb-4'>
                            {/* 12 Months Subscription */}
                            <div className='relative bg-[#E7E7E7] text-[#BEBEBE] flex items-baseline justify-center px-2 pt-4 pb-2 border-[2px] border-[#BEBEBE] rounded-[4px]'>
                                <input type='radio' value={plan} name="plan" id="plan1" onChange={()=>setPlan("8")} checked={plan === '8'}/>
                                <label htmlFor='plan1' className='flex justify-between items-center w-[100%] ml-4'>
                                    <p className='text-[16px] font-semibold'>
                                        12 Months Subscription
                                    </p>
                                    <div>
                                        <p className='text-[16px]'>
                                            Total<span className='font-semibold'> ₹99</span>
                                        </p>
                                        <h6 className='text-[14px]'>₹8<span className='ml-2 text-[12px]'>/mo</span></h6>
                                    </div>
                                </label>
                                <div className='absolute top-0 left-6 rounded-b-lg w-[130px] py-[2px] bg-[#F77171] text-[12px] text-center'>
                                    <span className='text-white'>Offer expired</span>
                                </div>
                            </div>
                            {/* Recommended */}
                            <div className='relative bg-[#D7EDDD] text-[#3C4852] flex items-baseline justify-center px-2 pt-4 pb-2 border-[2px] border-[#47BA68] rounded-[4px]'>
                                <input type='radio' value={plan} name="plan" id="plan2" onChange={()=>setPlan("179")} checked={plan === '179'}/>
                                <label htmlFor='plan2' className='flex justify-between items-center w-[100%] ml-4'>
                                    <p className='text-[16px] font-semibold'>
                                        12 Months Subscription
                                    </p>
                                    <div>
                                        <p className='text-[16px]'>
                                            Total<span className='font-semibold'> ₹179</span>
                                        </p>
                                        <h6 className='text-[14px]'>₹15<span className='ml-2 text-[12px]'>/mo</span></h6>
                                    </div>
                                </label>
                                <div className='absolute top-0 left-6 rounded-b-lg w-[130px] py-[2px] bg-[#47BA68] text-[12px] text-center'>
                                    <span className='text-white'>Offer expired</span>
                                </div>
                            </div>
                            {/* 6 Months Subscription  */}
                            <div className='bg-[#ffffff] text-[#3C4852] flex items-baseline justify-center px-2 pt-2 pb-2 border-[2px] border-[#BEBEBE] rounded-[4px]'>
                                <input type='radio' value={plan} name="plan" id="plan3" onChange={()=>setPlan("149")} checked={plan === '149'}/>
                                <label htmlFor='plan3' className='flex justify-between items-center w-[100%] ml-4'>
                                    <p className='text-[16px] font-semibold'>
                                        6 Months Subscription
                                    </p>
                                    <div>
                                        <p className='text-[16px]'>
                                            Total<span className='font-semibold'> ₹149</span>
                                        </p>
                                        <h6 className='text-[14px]'>₹25<span className='ml-2 text-[12px]'>/mo</span></h6>
                                    </div>
                                </label>
                            </div>
                            {/* 3 Months Subscription  */}
                            <div className='bg-[#ffffff] text-[#3C4852] flex items-baseline justify-center px-2 pt-2 pb-2 border-[2px] border-[#BEBEBE] rounded-[4px]'>
                                <input type='radio' value={plan} name="plan" id="plan4" onChange={()=>setPlan("99")} checked={plan === '99'}/>
                                <label htmlFor='plan4' className='flex justify-between items-center w-[100%] ml-4'>
                                    <p className='text-[16px] font-semibold'>
                                        3 Months Subscription
                                    </p>
                                    <div>
                                        <p className='text-[16px]'>
                                            Total<span className='font-semibold'> ₹99</span>
                                        </p>
                                        <h6 className='text-[14px]'>₹33<span className='ml-2 text-[12px]'>/mo</span></h6>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* line */}
                        <div className='w-[100%] h-[2px] bg-[#BEBEBE] mb-2'></div>
                        {/* fee */}
                        <div className='flex justify-between mb-2'>
                            <h4>Subscription Fee</h4>
                            <h4>₹18,500</h4>
                        </div>
                        <div className='mb-2'>
                            <div className='bg-gradient-to-r from-[#FEC163] from-0% via-[#FEC163] via-20% to-[#FEC163] to-90%  text-[#DE4313] px-4 pt-6 pb-4 border-[2px] border-[#DE4313] rounded-[4px]'>
                                <div className='flex justify-between items-center w-[100%]'>
                                    <div>
                                        <p className='text-[16px] font-semibold'>
                                            Limited time offer
                                        </p>
                                        <p>
                                            Offer valid till 25th March 2023
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-[16px] font-semibold'>
                                            ₹{plan==="8"?parseInt(99)-18500:parseInt(plan)-18500}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-[18px] flex justify-between'>
                            <p>Total (Incl. of 18% GST)</p>
                            <h3 className='font-bold'>₹{plan==="8"?99:plan}</h3>
                        </div>
                        <div className='flex justify-between gap-6 mt-2'>
                            <button className='w-[100%] md:w-[50%] py-2 rounded bg-[#ffffff] text-[#F77171] border-[2px] border-[#F77171]'>cancel</button>
                            <button type='submit' className='w-[100%] md:w-[50%] py-2 rounded bg-[#47BA68] text-[#ffffff]'>proceed to pay</button>
                        </div>
                        <div className='grid grid-cols-1'>
                            <div className='mt-4'>
                                <img src={rupay} alt='rup' />
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}

export default PaymentForm