import svgPaths from "./svg-m6zdpfwyx7";
import imgContainer from "figma:asset/c3a9e0d26438d10a4790c66aac563e15393ba22b.png";

function Container1() {
  return <div className="absolute h-[844px] left-0 mix-blend-multiply top-0 w-[390px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(rgb(20, 50, 61) 0%, rgba(42, 103, 127, 0.5) 50%, rgb(20, 50, 61) 100%)" }} />;
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[88px] relative w-full">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[#fe7a2e] text-[18px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            This isn’t random.
          </p>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[22px] relative w-full">
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[38.4px] relative shrink-0 text-[30px] text-center text-white tracking-[-0.8px] w-[341px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Your body is shifting energy from performance toward regulation.
          </p>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.5] left-[163.04px] text-[20px] text-center text-white top-[-0.5px] w-[290px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        You’re not underperforming. Your system is simply adapting.
      </p>
    </div>
  );
}

function Screen3Interpretation() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[303.094px] items-center relative shrink-0 w-full" data-name="Screen3Interpretation">
      <Paragraph />
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function Screen1Hero() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[342px]" data-name="Screen1Hero">
      <Screen3Interpretation />
    </div>
  );
}

function Screen1Hero2() {
  return (
    <div className="relative shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Screen1Hero">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[22.5px] relative shrink-0 text-[20px] text-center text-white tracking-[0.375px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          What to do next
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.333px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 23.3334">
        <g id="Icon">
          <path d="M11.6667 4.86129V18.4724" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94444" />
          <path d={svgPaths.p66f9900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.94444" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[19573402px] shrink-0 size-[58px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[19573403px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex items-center justify-center px-[15.167px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16.511px] items-center relative">
        <Screen1Hero2 />
        <Container3 />
      </div>
    </div>
  );
}

function Screen1Hero1() {
  return (
    <div className="content-stretch flex h-[182.5px] items-start justify-center px-[88.047px] relative shrink-0 w-[342px]" data-name="Screen1Hero">
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[844px] items-start justify-center pt-[64px] px-[24px] relative shrink-0 w-[390px]" data-name="Container">
      <Screen1Hero />
      <Screen1Hero1 />
    </div>
  );
}

function InsightFlow() {
  return (
    <div className="content-stretch flex h-[844px] items-center relative shrink-0 w-[390px]" data-name="InsightFlow">
      <Container2 />
    </div>
  );
}

function InsightFlow1() {
  return <div className="bg-[#2a677f] h-[844px] shrink-0 w-[390px]" data-name="InsightFlow" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[844px] items-start justify-between left-0 top-0 w-[390px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgContainer} />
        <div className="absolute bg-gradient-to-b from-[rgba(64,119,149,0.2)] inset-0 mix-blend-difference to-[rgba(20,41,52,0.2)]" />
      </div>
      <Container1 />
      <InsightFlow />
      <InsightFlow1 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-[#2a677f] overflow-clip relative rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Step 3">
      <Container />
    </div>
  );
}