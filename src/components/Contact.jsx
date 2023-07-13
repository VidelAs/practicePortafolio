const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#D0DEE1] flex justify-center items-center'>
        <form method='POST' action="https://getform.io/f/3aaa6a9b-adc0-4009-8368-21159e2aafa2" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#1281BD]  text-[#041658]'>Contact</p>
                <p className=' text-[#5f6063] py-4'>Submit the form below or shoot me an email - Videl131103@gmail.com</p>
            </div>
            <input className='rounded-lg bg-[#041658] text-[#D0DEE1] p-2' type="text" placeholder='Name' name='name' maxLength={30} />
            <input className='rounded-lg my-4 p-2 bg-[#041658] text-[#D0DEE1]' type="email" placeholder='Email' name='email' />
            <textarea className='rounded-lg bg-[#041658] text-[#D0DEE1] p-2' name="message" rows="10" placeholder='Message' maxLength={350}></textarea>
            <button className='text-[#535459 ] border-2 hover:bg-[#1281BD] hover:border-[#1281BD] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact