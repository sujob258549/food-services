import errorpage from '../image/404.gif'

const Errorpage = () => {
    return (
        <div className='mx-auto w-[700px]'>
            <img src={errorpage} alt="" />
        </div>
    );
};

export default Errorpage;