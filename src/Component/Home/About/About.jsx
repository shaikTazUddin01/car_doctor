import aboutimg1 from '../../../assets/images/about_us/person.jpg'
import aboutimg2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='flex justify-between gap-10 py-20'>
            <div className='w-1/2 relative'>
                <img src={aboutimg1} alt="" className='w-[90%] rounded-2xl' />
                <img src={aboutimg2} alt="" className='w-[60%] absolute top-[40%] right-0 border-[10px] border-white rounded-3xl' />
            </div>
            <div className='space-y-3 w-1/2'>
                <h3 className='text-orange-500 text-xl font-semibold'>About Us</h3>
                <h2 className='text-4xl font-bold'>We are qualified <br />& of experience<br />in this field</h2>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p>
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className='btn btn-warning'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;