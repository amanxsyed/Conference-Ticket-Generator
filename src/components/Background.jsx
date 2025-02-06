import img1 from '../assets/images/background-desktop.png';
import img2 from '../assets/images/background-mobile.png';
import pattern_circle from '../assets/images/pattern-circle.svg';
import pattern_lines from '../assets/images/pattern-lines.svg';
import pattern_top from '../assets/images/pattern-squiggly-line-top.svg';
import pattern_bottom from '../assets/images/pattern-squiggly-line-bottom.svg';

const Background = () => {
  return (
    <>
      {/* Main background image */}
      <picture className="fixed inset-0 z-[-1] h-screen w-full">
        <source srcSet={img2} media="(max-width: 767px)" />
        <source srcSet={img1} media="(min-width: 768px)" />
        <img
          src={img1}
          alt="Background Image"
          className="h-full w-full object-cover"
        />
      </picture>

      {/* Pattern Circle (Left) */}
      <img
        src={pattern_circle}
        alt="Pattern Circle"
        className='absolute top-[-4rem] left-12 w-48'
      />

      {/* Pattern Circle (Center) */}
      <img
        src={pattern_circle}
        alt="Pattern Center"
        className='fixed top-[40%] right-[20%] w-48 z-[-1]'
      />

      {/* Pattern Lines */}
      <img
        src={pattern_lines}
        alt="Pattern Lines"
        className='fixed top-0 left-0 z-[-1]'
      />

      {/* Pattern Top */}
      <img
        src={pattern_top}
        alt="Pattern Top"
        className="fixed right-0 top-12 z-[-1]"
      />

      {/* Pattern Bottom */}
      <img
        src={pattern_bottom}
        alt="Pattern Bottom"
        className='fixed bottom-0 w-[40vw] max-w-[40rem] z-[-1]'
      />
    </>
  );
};

export default Background;