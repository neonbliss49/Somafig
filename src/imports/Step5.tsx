import svgPaths from "./svg-dvn6106snl";
import imgImage from "figma:asset/c3a9e0d26438d10a4790c66aac563e15393ba22b.png";

function Image() {
  return (
    <div className="absolute h-[1008px] left-0 opacity-60 top-0 w-[390px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[#14323d] h-[1008px] left-0 mix-blend-multiply to-[#14323d] top-0 via-1/2 via-[rgba(42,103,127,0.5)] w-[390px]" data-name="Container" />;
}

function InsightFlow() {
  return (
    <div className="absolute h-[1008px] left-0 overflow-clip top-0 w-[390px]" data-name="InsightFlow" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(42, 103, 127) 0%, rgb(42, 103, 127) 100%)" }}>
      <Image />
      <Container1 />
    </div>
  );
}

function Screen5Response() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center pl-[8px] pr-[12px] py-[7px] relative rounded-[16777200px] shrink-0" data-name="Screen5Response">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <button className="bg-[#248aa7] block cursor-pointer relative rounded-[50px] shrink-0 size-[20px]" data-name="Checkbox Round Alternative">
        <div className="absolute left-[2.5px] overflow-clip size-[15px] top-[2.5px]" data-name="check">
          <div className="absolute bottom-1/4 left-[15.06%] right-[15%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4906 7.49968">
              <path clipRule="evenodd" d={svgPaths.p33909bf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[19.5px] relative shrink-0 text-[#ecf2f8] text-[13px] tracking-[0.325px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Conserving Energy
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 text-white w-full" data-name="Heading 1">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[36.8px] relative shrink-0 text-[32px] tracking-[-0.8px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Let’s adjust your day for active recovery.
      </p>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 9" }}>
        This likely prevents a deeper energy drop tomorrow.
      </p>
    </div>
  );
}

function Screen5Response1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Screen5Response">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[13px] text-white top-0 tracking-[1.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Today's Adjustments`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 9" }}>{`Reduce cognitive & physical load by ~30%`}</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="List Item">
      <button className="bg-[#fe7a2e] block cursor-pointer relative rounded-[50px] shrink-0 size-[20px]" data-name="Checkbox Round Alternative">
        <div className="absolute left-[2.5px] overflow-clip size-[15px] top-[2.5px]" data-name="check">
          <div className="absolute bottom-1/4 left-[15.06%] right-[15%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4906 7.49968">
              <path clipRule="evenodd" d={svgPaths.p33909bf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Paragraph">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Take 400mg Magnesium at 21:00
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="List Item">
      <button className="bg-[#fe7a2e] block cursor-pointer relative rounded-[50px] shrink-0 size-[20px]" data-name="Checkbox Round Alternative">
        <div className="absolute left-[2.5px] overflow-clip size-[15px] top-[2.5px]" data-name="check">
          <div className="absolute bottom-1/4 left-[15.06%] right-[15%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4906 7.49968">
              <path clipRule="evenodd" d={svgPaths.p33909bf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Paragraph">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Aim for sleep before 23:00
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="List Item">
      <button className="bg-[#fe7a2e] block cursor-pointer relative rounded-[50px] shrink-0 size-[20px]" data-name="Checkbox Round Alternative">
        <div className="absolute left-[2.5px] overflow-clip size-[15px] top-[2.5px]" data-name="check">
          <div className="absolute bottom-1/4 left-[15.06%] right-[15%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4906 7.49968">
              <path clipRule="evenodd" d={svgPaths.p33909bf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <Paragraph2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Screen5Response2() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 w-full" data-name="Screen5Response">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <List />
      </div>
    </div>
  );
}

function Screen5Response3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Screen5Response">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.5px] min-h-px min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: "'opsz' 9" }}>
        Energy dip likely continues tomorrow. Recovery peak expected Monday.
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[4px] relative w-full">
        <Screen5Response3 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Screen5Response1 />
      <Screen5Response2 />
      <Container4 />
    </div>
  );
}

function Screen5Response4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Screen5Response">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[19.5px] left-0 text-[13px] text-white top-0 tracking-[1.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Explore further
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[305px] size-[16px] top-[20.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[56.5px] relative rounded-[16px] shrink-0 w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[22.5px] left-[21px] text-[16px] text-white top-[17.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`See similar days `}</p>
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[305px] size-[16px] top-[20.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[56.5px] relative rounded-[16px] shrink-0 w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[22.5px] left-[21px] text-[16px] text-white top-[17.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Understand your baseline `}</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[305px] size-[16px] top-[20.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[22.5px] left-[21px] text-[16px] text-white top-[17.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`View your journey `}</p>
        <Icon2 />
      </div>
    </div>
  );
}

function Screen5Response5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[193.5px] items-start relative shrink-0 w-full" data-name="Screen5Response">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[261px] items-start relative shrink-0 w-full" data-name="Container">
      <Screen5Response4 />
      <Screen5Response5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[537.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Host_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6f7f7] text-[20px] text-center whitespace-nowrap">
        <p className="leading-none">Start your day</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Button">
      <div className="bg-[#407795] flex-[1_0_0] min-h-px min-w-px relative rounded-[74px]" data-name="Buttons">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[20px] py-[18px] relative w-full">
            <Container6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Screen1Hero() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[780px] items-start left-[24px] top-[64px] w-[342px]" data-name="Screen1Hero">
      <Screen5Response />
      <Heading />
      <Container3 />
      <Button3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[1008px] left-0 top-0 w-[390px]" data-name="Container">
      <Screen1Hero />
    </div>
  );
}

function InsightFlow1() {
  return (
    <div className="absolute h-[1008px] left-0 top-0 w-[390px]" data-name="InsightFlow">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1008px] relative shrink-0 w-[390px]" data-name="Container">
      <InsightFlow />
      <InsightFlow1 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-[#2a677f] content-stretch flex items-start relative rounded-[40px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] size-full" data-name="Step 5">
      <Container />
    </div>
  );
}