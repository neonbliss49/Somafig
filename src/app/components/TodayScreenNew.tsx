import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { usePhoneContainer } from "../App";
import {
  ArrowDown,
  CheckCircle2,
  CalendarDays,
  Activity,
  ChevronDown,
  Check,
  Sparkles,
  ArrowRight,
  Droplets,
  Moon,
  Clock,
  Eye,
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TodayScreenNew({ 
  decision, 
  appState,
  triggerFeedback,
  onOpenExperiment,
  renderEveningCheckout
}: { 
  decision: "conserve" | "push" | null;
  appState: "morning" | "midday_adjusted" | "midday_not_adjusted" | "evening";
  triggerFeedback: (msg: string) => void;
  onOpenExperiment: () => void;
  renderEveningCheckout: (onClose: () => void) => React.ReactNode;
}) {
  const [completedItems, setCompletedItems] = useState({
    meals: false,
    caffeine: false,
    cognitive: false
  });
  
  const [completedEveningItems, setCompletedEveningItems] = useState({
    progesterone: false,
    magnesium: false,
    sleep: false
  });

  const [showCheckout, setShowCheckout] = useState(false);
  const [showExperimentSheet, setShowExperimentSheet] = useState(false);

  const handleActionComplete = (key: keyof typeof completedItems) => {
    setCompletedItems(prev => ({ ...prev, [key]: !prev[key] }));
    triggerFeedback("Action tracked");
  };

  const handleEveningActionComplete = (key: keyof typeof completedEveningItems) => {
    setCompletedEveningItems(prev => ({ ...prev, [key]: !prev[key] }));
    triggerFeedback("Evening action tracked");
  };

  if (showCheckout) {
    return renderEveningCheckout(() => setShowCheckout(false));
  }

  return (
    <motion.div layout transition={{ type: "spring", bounce: 0, duration: 0.5 }} className="w-full min-h-max flex flex-col relative z-10 font-sans">
      <div className="w-full flex flex-col px-[20px] relative z-10 pt-[88px] pb-[48px] gap-[48px]">
        {/* 1. STATE CARD */}
        <StateCard appState={appState} />

        {/* 2. CAUSAL CHAIN */}
        <CausalChain />

        {/* 3. INTERPRETATION + DECISION */}
        <InterpretationDecision />

        {/* 4. PRIMARY ACTION */}
        <NowAction onComplete={() => handleActionComplete('cognitive')} />

        {/* 5. DISCOVERY */}
        <DiscoveryCard />

        {/* 6. THROUGH THE DAY */}
        <div className="w-full flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px] font-normal italic text-[rgba(255,255,255,0.75)]">
              Small adjustments that protect your recovery.
            </p>
            <h2 className="text-[20px] font-semibold text-white">Through the Day</h2>
          </div>
          <div className="flex flex-col">
            <ThroughTheDayItem 
              title="Eat steady, protein-focused meals"
              subtitle="Your system is sensitive to blood sugar dips right now"
              isCompleted={completedItems.meals}
              onToggle={() => handleActionComplete('meals')}
              expandContent={
                <div className="flex flex-col gap-[16px]">
                  <div>
                    <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[4px]">Why today</p>
                    <p className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.5]">Your current hormonal phase makes your energy more sensitive to blood sugar changes. Your last Ferritin was low (January 2025) — iron-rich meals are especially important right now.</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[4px]">How to do it</p>
                    <ul className="text-[14px] text-[rgba(255,255,255,0.75)] flex flex-col gap-[6px]">
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />Breakfast: eggs + dark leafy greens, or yogurt with pumpkin seeds</li>
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />Lunch: protein + healthy fats + complex carbs</li>
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />Include iron-rich foods: lentils, spinach, dark chocolate</li>
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />Avoid: sugar spikes on their own</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.08)] rounded-[12px] p-[14px] flex flex-col gap-[6px]">
                    <div className="flex items-center gap-[6px]">
                      <Sparkles className="w-[14px] h-[14px] text-[#AFD2E0] shrink-0" />
                      <p className="text-[12px] font-bold text-[#AFD2E0] uppercase">Personal context</p>
                    </div>
                    <p className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.4]">Low Ferritin amplifies fatigue during luteal phase. Steady iron intake supports both energy and overnight recovery.</p>
                  </div>
                </div>
              }
            />
            <ThroughTheDayItem 
              title="Limit caffeine after 14:00"
              timeLabel="AFTERNOON"
              isCompleted={completedItems.caffeine}
              onToggle={() => handleActionComplete('caffeine')}
              expandContent={
                <div className="flex flex-col gap-[16px]">
                  <div>
                    <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[4px]">Why today</p>
                    <p className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.5]">Caffeine has a half-life of 5–6 hours. Consuming it after 14:00 can delay deep sleep onset — which your recovery depends on tonight.</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[4px]">How to do it</p>
                    <ul className="text-[14px] text-[rgba(255,255,255,0.75)] flex flex-col gap-[6px]">
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />Switch to decaf, herbal tea, or water after 2 PM</li>
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />If you need an energy lift, try a 10-minute walk instead</li>
                    </ul>
                  </div>
                </div>
              }
            />
            <ThroughTheDayItem 
              title="Reduce cognitive load"
              subtitle="It's Saturday — a good day to let your system rest"
              isCompleted={completedItems.cognitive}
              onToggle={() => handleActionComplete('cognitive')}
              expandContent={
                <div className="flex flex-col gap-[16px]">
                  <div>
                    <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[4px]">Why today</p>
                    <p className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.5]">Your brain consumes up to 20% of your energy. On a low-recovery day, reducing cognitive strain frees resources for physical restoration.</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[4px]">How to do it</p>
                    <ul className="text-[14px] text-[rgba(255,255,255,0.75)] flex flex-col gap-[6px]">
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />Postpone complex decisions to Monday</li>
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />Keep plans light — it's Saturday</li>
                      <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.3)] mt-[6px] shrink-0" />Give yourself permission to do less</li>
                    </ul>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* 7. EVENING */}
        <div className="w-full flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px] font-normal italic text-[rgba(255,255,255,0.75)]">
              Tonight is about recovery support.
            </p>
            <h2 className="text-[20px] font-semibold text-white">Evening</h2>
          </div>
          <div className="flex flex-col">
            <EveningItem 
              title="Progesterone"
              context="Supports deep sleep at this cycle phase"
              isCompleted={completedEveningItems.progesterone}
              onToggle={() => handleEveningActionComplete('progesterone')}
              expandContent={
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px]">Why tonight</p>
                  <p className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.5]">At this point in your cycle, your natural progesterone is at its peak. Your supplemental dose supports GABA activity in the brain, promoting deeper and more restorative sleep.</p>
                </div>
              }
            />
            <EveningItem 
              title="Magnesium 400mg"
              context="Experiment Day 4 of 7"
              isCompleted={completedEveningItems.magnesium}
              onToggle={() => handleEveningActionComplete('magnesium')}
              expandContent={
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px]">Why tonight</p>
                  <p className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.5]">Magnesium Glycinate supports GABA activity and complements the sleep-promoting effect of progesterone. This is Day 4 of your active experiment — consistency matters for reliable results.</p>
                </div>
              }
            />
            <EveningItem 
              title="Sleep before 23:00"
              context="Try to avoid screen 30 minutes before bed"
              isCompleted={completedEveningItems.sleep}
              onToggle={() => handleEveningActionComplete('sleep')}
              expandContent={
                <div className="flex flex-col gap-[8px]">
                  <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px]">Why tonight</p>
                  <p className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.5]">Early sleep cycles are critical for nervous system repair. Your HRV typically recovers faster when you're asleep before 23:00 — especially during luteal phase.</p>
                </div>
              }
            />
          </div>
        </div>

        {/* 9. ACTIVE EXPERIMENT */}
        <ExperimentCard onClick={() => {
          onOpenExperiment();
          setShowExperimentSheet(true);
        }} />

        {/* 10. LOOKING AHEAD */}
        <LookingAhead />

        {/* Close Day button if evening */}
        {appState === "evening" && (
          <button 
            onClick={() => setShowCheckout(true)}
            className="w-full h-[52px] mt-[-24px] bg-white rounded-[14px] text-[#0E1E26] font-semibold text-[16px] transition-colors"
          >
            Close your day
          </button>
        )}
      </div>

      {/* EXPERIMENT BOTTOM SHEET */}
      <BottomSheet isOpen={showExperimentSheet} onClose={() => setShowExperimentSheet(false)} title="Active Experiment · Day 4 of 7">
        <div className="px-[24px] pb-[120px] pt-[4px]">
          <h2 className="text-[24px] font-medium text-white mb-[20px]">
            Magnesium before sleep
          </h2>
          
          <div className="bg-[rgba(255,255,255,0.08)] rounded-[14px] p-[16px] mb-[24px]">
            <p className="text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.4]">
              "If you take Magnesium before sleep, your deep sleep should improve."
            </p>
          </div>

          <div className="flex flex-col gap-[16px] mb-[32px]">
            <div>
              <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[4px]">What to do:</p>
              <p className="text-[14px] text-[rgba(255,255,255,0.75)]">Take 400mg Magnesium Glycinate 30–60 min before bed</p>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[4px]">What Somatiq tracks:</p>
              <p className="text-[14px] text-[rgba(255,255,255,0.75)]">Deep sleep duration, sleep onset time, HRV</p>
            </div>
          </div>

          <div className="flex justify-between mb-[32px]">
            {[
              { day: 'Mon', val: '1h 38m', filled: true },
              { day: 'Tue', val: '1h 22m', filled: true },
              { day: 'Wed', val: '1h 41m', filled: true },
              { day: 'Thu', val: '1h 35m', filled: true },
              { day: 'Fri', val: '', filled: false },
              { day: 'Sat', val: '', filled: false },
              { day: 'Sun', val: '', filled: false }
            ].map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-[8px]">
                <div className={cn(
                  "w-[32px] h-[32px] rounded-full flex items-center justify-center text-[12px] font-medium",
                  d.filled ? "bg-white text-[#0E1E26]" : "border border-[rgba(255,255,255,0.2)] text-[rgba(255,255,255,0.5)]"
                )}>
                  {d.day[0]}
                </div>
                <p className="text-[10px] text-[rgba(255,255,255,0.5)] h-[14px]">{d.val}</p>
              </div>
            ))}
          </div>

          <div className="mb-[32px]">
            <div className="flex justify-between items-start mb-[16px]">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-[2px]">Before experiment (7-day avg):</p>
                  <p className="text-[16px] text-white">Deep Sleep 1h 12m</p>
                </div>
                <div>
                  <p className="text-[12px] text-[rgba(255,255,255,0.5)] mb-[2px]">During experiment (so far):</p>
                  <p className="text-[16px] text-white">Deep Sleep 1h 34m</p>
                </div>
              </div>
              <p className="text-[14px] font-semibold text-[#FE7A2E] mt-[44px]">+22 min (+31%)</p>
            </div>
            
            <div className="w-full h-[80px] relative border-b border-[rgba(255,255,255,0.1)]">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0 60 L100 60" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <path d="M0 70 Q 15 55, 30 65 T 55 50" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
                <path d="M55 50 Q 70 30, 85 45 T 100 20" stroke="#FE7A2E" strokeWidth="1.5" fill="none" />
                <line x1="55" y1="0" x2="55" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

          <button className="w-full py-[12px] text-[14px] font-medium text-[rgba(255,255,255,0.5)] hover:text-white transition-colors text-center" onClick={() => alert("Cancel confirmation dialog would appear here.")}>
            Cancel Experiment
          </button>
        </div>
      </BottomSheet>
    </motion.div>
  );
}

function StateCard({ appState }: { appState: string }) {
  const [expanded, setExpanded] = useState(false);

  const headlines: Record<string, string> = {
    morning: "Low recovery capacity",
    midday_adjusted: "System stabilizing",
    midday_not_adjusted: "Still running on low recovery",
    evening: "Closing your day"
  };

  const currentHeadline = headlines[appState] || headlines.morning;

  return (
    <div 
      className="flex flex-col bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)] rounded-[16px] p-[24px] backdrop-blur-xl cursor-pointer w-full"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-[6px]">
          <h1 className="text-[28px] font-medium text-white leading-tight">
            {currentHeadline}
          </h1>
          <p className="text-[16px] font-normal text-white">
            3 adjustments for today
          </p>
          <p className="text-[12px] italic font-semibold text-[#FE7A2E] mt-[2px]">
            Watch out: Energy dip likely in 3–4 hours
          </p>
        </div>
        <ChevronDown className={cn("w-[20px] h-[20px] text-white/50 transition-transform mt-[8px]", expanded && "rotate-180")} />
      </div>

      {/* Wearable Strip */}
      <div className="flex w-full mt-[16px] pt-[13px] border-t border-[rgba(255,255,255,0.3)] pb-[13px] border-b border-[rgba(255,255,255,0.3)]">
        <div className="flex flex-col items-center flex-1 border-r border-[rgba(255,255,255,0.2)]">
          <div className="flex items-center gap-[4px]">
            <span className="text-white text-[16px] font-semibold">28</span>
            <ArrowDown className="w-[12px] h-[12px] text-[#FE7A2E]" strokeWidth={2.5} />
          </div>
          <span className="text-[12px] uppercase text-[#AFD2E0] mt-1">HRV</span>
        </div>
        <div className="flex flex-col items-center flex-1 border-r border-[rgba(255,255,255,0.2)]">
          <span className="text-white text-[16px] font-semibold">5h 42m</span>
          <span className="text-[12px] uppercase text-[#AFD2E0] mt-1">SLEEP</span>
        </div>
        <div className="flex flex-col items-center flex-1 border-r border-[rgba(255,255,255,0.2)]">
          <span className="text-white text-[16px] font-semibold">68</span>
          <span className="text-[12px] uppercase text-[#AFD2E0] mt-1">RHR</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <span className="text-[#FE7A2E] text-[16px] font-semibold">+0.3°</span>
          <span className="text-[12px] uppercase text-[#AFD2E0] mt-1">TEMP</span>
        </div>
      </div>

      {/* Expand Content */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        className="overflow-hidden w-full"
      >
        <div className="pt-[24px] mt-[16px] border-t border-[rgba(42,103,127,0.12)] flex flex-col gap-[24px]">
          
          <div className="flex flex-col gap-[12px]">
            <p className="text-[14px] font-bold text-[#FE7A2E] uppercase tracking-[1px]">Outlook without adjustments</p>
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-start gap-[8px] relative">
                <div className="w-[4px] h-[4px] rounded-full bg-white mt-[8px] shrink-0" />
                <p className="text-[14px] font-normal text-white leading-[21px]">Short-term: Energy taper within 3–4 hours</p>
              </div>
              <div className="flex items-start gap-[8px] relative">
                <div className="w-[4px] h-[4px] rounded-full bg-white mt-[8px] shrink-0" />
                <p className="text-[14px] font-normal text-white leading-[21px]">Next-day: Slightly increased recovery needs</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[12px]">
            <p className="text-[14px] font-bold text-[#FE7A2E] uppercase tracking-[1px]">Hormonal context</p>
            <p className="text-[14px] text-white font-normal leading-[21px]">
              Your current luteal phase makes recovery more sensitive to poor sleep. Endometriosis adds additional baseline demand. Adjusting early has a stronger impact today.
            </p>
          </div>

          <div className="bg-[rgba(20,42,51,0.7)] rounded-[12px] p-[16px] flex flex-col items-start w-full">
            <p className="text-[14px] text-white font-normal leading-[1.5] whitespace-pre-wrap w-full">
              On similar days where you adjusted early, your next-day recovery improved significantly.{"\n"}
              This pattern has been consistent across
            </p>
            <p className="text-[14px] text-white font-bold italic w-full">4 of 6 similar cycles</p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

function CausalChain() {
  return (
    <div className="w-full flex flex-col gap-[24px]">
      <p className="text-[14px] font-bold text-white uppercase tracking-[2.5px]">
        WHAT'S DRIVING THIS
      </p>
      
      <div className="relative">
        {/* The line */}
        <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.5)] via-[rgba(254,122,46,0.7)] to-[#fe7a2e] h-[85%] left-[19px] top-[40px] w-[2px]" />

        <div className="flex flex-col gap-[32px]">
          {/* Node 1 */}
          <div className="flex items-center gap-[16px] relative z-10">
            <div className="w-[40px] h-[40px] rounded-full bg-[#2a677f] flex items-center justify-center shrink-0">
              <Moon className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-[18px] font-semibold text-white">Sleep depth reduced</p>
              <p className="text-[16px] text-[rgba(255,255,255,0.75)]">3 short nights</p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="flex items-center gap-[16px] relative z-10">
            <div className="w-[40px] h-[40px] rounded-full bg-[#fe7a2e] border-2 border-[rgba(254,122,46,0.4)] shadow-[0px_0px_20px_0px_rgba(254,122,46,0.15)] flex items-center justify-center shrink-0">
              <Activity className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-[18px] font-semibold text-white">HRV dropped 15%</p>
              <p className="text-[15px] text-[rgba(255,255,255,0.75)]">Sign of nervous system load</p>
            </div>
          </div>

          {/* Node 3 */}
          <div className="flex items-center gap-[16px] relative z-10">
            <div className="w-[40px] h-[40px] rounded-full bg-[#2a677f] flex items-center justify-center shrink-0">
              <Droplets className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-[18px] font-semibold text-white">Luteal Phase · Day 18</p>
              <p className="text-[16px] text-[rgba(255,255,255,0.75)]">Shifting toward regulation</p>
            </div>
          </div>

          {/* Node 4 */}
          <div className="flex items-center gap-[16px] relative z-10">
            <div className="w-[40px] h-[40px] rounded-full bg-[#2a677f] opacity-80 flex items-center justify-center shrink-0">
              <Activity className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-[18px] font-semibold text-white">Endometriosis</p>
              <p className="text-[16px] text-[rgba(255,255,255,0.75)]">Increases baseline energy demand</p>
            </div>
          </div>

          {/* Node 5 */}
          <div className="flex items-center gap-[16px] relative z-10">
            <div className="w-[40px] h-[40px] rounded-full bg-white border border-[rgba(255,255,255,0.2)] flex items-center justify-center shrink-0">
              <div className="w-[12px] h-[12px] rounded-full bg-[#FE7A2E]" />
            </div>
            <div className="flex flex-col">
              <p className="text-[20px] font-semibold text-white tracking-tight">Reduced recovery capacity</p>
            </div>
          </div>
        </div>
        <p className="text-[12px] italic text-[rgba(175,210,224,0.5)] mt-[16px] pl-[56px]">
          Amplified by: Low Ferritin (last tested Sep 2024)
        </p>
      </div>
    </div>
  );
}

function InterpretationDecision() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)] rounded-[16px] p-[24px] backdrop-blur-xl w-full flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[16px]">
        <p className="text-[24px] font-medium italic text-[#F2EDE5] leading-snug">
          "Your body is shifting energy from <span className="text-[#FE7A2E]">performance</span> to <span className="text-[#FE7A2E]">regulation</span>."
        </p>
        <p className="text-[16px] font-normal text-[rgba(255,255,255,0.75)] leading-[1.4]">
          Endometriosis increases your body's baseline energy demand — especially in late luteal phase, this amplifies the impact of sleep debt. Your nervous system is prioritizing restoration over output. Day 4 of this pattern: each time you've adjusted early, recovery improved.
        </p>
      </div>

      <div className="bg-[#2a677f] rounded-full py-[10px] px-[12px] inline-flex items-center gap-[8px] self-start">
        <div className="w-[8px] h-[8px] rounded-full bg-[#6fcef4]" />
        <span className="text-[12px] font-bold text-white uppercase tracking-[1px]">
          CONSERVING ENERGY
        </span>
      </div>
    </div>
  );
}

function NowAction({ onComplete }: { onComplete: () => void }) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="w-full flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[8px]">
        <p className="text-[14px] font-medium italic text-[#AFD2E0]">
          Your plan adjusts to conserve energy.
        </p>
        <h2 className="text-[20px] font-semibold text-white">
          What can I do?
        </h2>
      </div>

      {isDone ? (
        <div className="bg-gradient-to-b from-[rgba(42,103,127,0.2)] to-[rgba(42,103,127,0.1)] rounded-[16px] p-[24px] flex items-center gap-[16px] backdrop-blur-xl">
          <div className="w-[48px] h-[48px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
             <CheckCircle2 className="w-[24px] h-[24px] text-white" />
          </div>
          <div>
            <h2 className="text-[20px] font-medium text-white">Completed</h2>
            <p className="text-[14px] text-[rgba(255,255,255,0.75)] mt-1">Light movement logged.</p>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[rgba(42,103,127,0.25)] to-[rgba(42,103,127,0.1)] rounded-[16px] p-[24px] backdrop-blur-xl flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[14px] font-bold text-[#FE7A2E] uppercase tracking-[1.2px]">
                PRIMARY ACTION
              </p>
              <h3 className="text-[24px] font-medium text-[#F2EDE5] leading-tight">
                Take a 10–15 min walk
              </h3>
            </div>
            <p className="text-[16px] font-normal text-[rgba(255,255,255,0.75)] leading-[1.4]">
              Light movement helps your nervous system shift out of stress — especially effective at this cycle phase.
            </p>
          </div>

          <div className="flex gap-[12px] w-full h-[52px]">
            <button className="flex-1 bg-transparent border-[1.5px] border-white text-white text-[14px] font-semibold rounded-[14px] h-full flex items-center justify-center">
              Start
            </button>
            <button 
              onClick={() => { setIsDone(true); onComplete(); }}
              className="flex-1 bg-white text-[#0E1E26] text-[14px] font-semibold rounded-[14px] h-full flex items-center justify-center"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function DiscoveryCard() {
  return (
    <div className="w-full flex flex-col gap-[14px]">
      <p className="text-[14px] font-bold text-[#FE7A2E] uppercase tracking-[1.5px]">
        TODAY'S DISCOVERY
      </p>
      <h3 className="text-[24px] font-medium text-white leading-tight">
        Your deep sleep improved <span className="text-[#FE7A2E] font-semibold">22%</span> since starting Magnesium
      </h3>
      <p className="text-[14px] font-normal text-[rgba(255,255,255,0.75)] leading-[1.4]">
        Consistent across 4 nights · Oura sleep data + experiment tracking
      </p>
    </div>
  );
}

function ThroughTheDayItem({ title, subtitle, timeLabel, isCompleted, onToggle, expandContent }: any) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <div className="w-full py-[12px] cursor-pointer" onClick={() => !isCompleted && setSheetOpen(true)}>
        <div className="flex items-start gap-[16px]">
          <button 
            onClick={(e) => { e.stopPropagation(); onToggle(); }}
            className={cn(
              "relative rounded-full shrink-0 w-[24px] h-[24px] flex items-center justify-center transition-colors border-[1.5px]",
              isCompleted ? "bg-white border-white" : "bg-transparent border-[rgba(255,255,255,0.75)]"
            )}
          >
            {isCompleted && <Check className="w-[14px] h-[14px] text-[#0E1E26]" strokeWidth={3} />}
          </button>
          <div className="flex-1 flex flex-col gap-[8px]">
            <div className="flex justify-between items-start gap-2">
              <p className={cn("text-[16px] font-medium", isCompleted ? "text-[rgba(255,255,255,0.4)] line-through" : "text-white")}>
                {title}
              </p>
            </div>
            {timeLabel && !isCompleted && (
              <span className="text-[12px] font-bold text-[#FE7A2E] uppercase tracking-[1px]">{timeLabel}</span>
            )}
            {subtitle && !isCompleted && (
              <p className="text-[14px] font-normal text-[rgba(255,255,255,0.75)] leading-[1.4]">{subtitle}</p>
            )}
          </div>
          {!isCompleted && (
            <div className="shrink-0 pt-[2px]">
              <ArrowRight className="w-[16px] h-[16px] text-white/40" strokeWidth={1.5} />
            </div>
          )}
        </div>
      </div>
      <BottomSheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)} title={title}>
        {expandContent}
      </BottomSheet>
    </>
  );
}

function EveningItem({ title, context, isCompleted, onToggle, expandContent }: any) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <div className="w-full py-[12px] cursor-pointer" onClick={() => !isCompleted && setSheetOpen(true)}>
        <div className="flex items-start gap-[16px]">
          <button 
            onClick={(e) => { e.stopPropagation(); onToggle(); }}
            className={cn(
              "relative rounded-full shrink-0 w-[24px] h-[24px] flex items-center justify-center transition-colors border-[1.5px]",
              isCompleted ? "bg-white border-white" : "bg-transparent border-[rgba(255,255,255,0.75)]"
            )}
          >
            {isCompleted && <Check className="w-[14px] h-[14px] text-[#0E1E26]" strokeWidth={3} />}
          </button>
          <div className="flex-1 flex flex-col gap-[8px]">
            <p className={cn("text-[16px] font-medium", isCompleted ? "text-[rgba(255,255,255,0.4)] line-through" : "text-white")}>
              {title}
            </p>
            {context && !isCompleted && (
              <p className="text-[14px] font-normal text-[rgba(255,255,255,0.75)] leading-[1.4]">{context}</p>
            )}
          </div>
          {!isCompleted && (
            <ArrowRight className="w-[16px] h-[16px] text-white/40 shrink-0 mt-[2px]" strokeWidth={1.5} />
          )}
        </div>
      </div>
      <BottomSheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)} title={title}>
        {expandContent}
      </BottomSheet>
    </>
  );
}

function ExperimentCard({ onClick }: any) {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)] rounded-[16px] p-[24px] cursor-pointer backdrop-blur-xl w-full flex flex-col gap-[24px]" onClick={onClick}>
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px] font-bold text-[#FE7A2E] uppercase tracking-[1.2px]">
            ACTIVE EXPERIMENT
          </p>
          <p className="text-[24px] font-medium text-[#f2ede5] leading-tight">
            Magnesium before sleep
          </p>
        </div>
        <p className="text-[16px] font-normal text-[rgba(255,255,255,0.75)]">
          Deep sleep +18min on average
        </p>
      </div>
      
      <div className="flex gap-[6px]">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <div 
            key={day} 
            className={cn(
              "w-[8px] h-[8px] rounded-full",
              day <= 4 ? "bg-[rgba(242,237,229,0.6)]" : "bg-[rgba(255,255,255,0.3)]"
            )}
          />
        ))}
      </div>
    </div>
  );
}

function LookingAhead() {
  const [docSheetOpen, setDocSheetOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.2)] rounded-[16px] p-[24px] backdrop-blur-xl w-full flex flex-col gap-[12px]">
        <p className="text-[14px] font-normal italic text-[rgba(255,255,255,0.75)]">
          What Somatiq sees coming.
        </p>
        <h2 className="text-[20px] font-semibold text-[#F2EDE5] mb-[12px]">
          Looking ahead
        </h2>
        
        <div className="flex flex-col">
          {/* Row 1 */}
          <div className="flex items-start gap-[8px] py-[16px] border-b border-[rgba(255,255,255,0.12)]">
            <CalendarDays className="w-[18px] h-[18px] text-white shrink-0 mt-[2px]" strokeWidth={1.5} />
            <p className="text-[14px] text-white font-normal leading-[1.4] flex-1">
              Next few days may stay heavy. Follicular phase in ~10 days typically brings relief.
            </p>
          </div>
          
          {/* Row 2 (Doctor Prep) */}
          <div className="py-[16px] border-b border-[rgba(255,255,255,0.12)] cursor-pointer" onClick={() => setDocSheetOpen(true)}>
            <div className="flex items-start gap-[8px] relative">
              <Activity className="w-[18px] h-[18px] text-white shrink-0 mt-[2px]" strokeWidth={1.5} />
              <div className="flex-1 flex flex-col gap-[3px]">
                <p className="text-[14px] text-white font-normal leading-[1.4]">
                  Gynecologist in 12 days
                </p>
                <p className="text-[12px] text-[rgba(255,255,255,0.75)] font-normal">
                  Collecting: HRV trend, sleep, symptoms, cycle
                </p>
              </div>
              <ArrowRight className="w-[16px] h-[16px] text-white/40 shrink-0 mt-[2px]" strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="flex items-start gap-[8px] pt-[16px]">
            <Eye className="w-[18px] h-[18px] text-white shrink-0 mt-[2px]" strokeWidth={1.5} />
            <p className="text-[14px] text-white font-normal leading-[1.4] flex-1">
              Your HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles needed.
            </p>
          </div>
        </div>
      </div>

      <BottomSheet isOpen={docSheetOpen} onClose={() => setDocSheetOpen(false)} title="Gynecologist in 12 days">
        <div className="flex flex-col gap-[16px]">
          <p className="text-[14px] text-[rgba(255,255,255,0.75)]">Collecting: HRV trend, sleep, symptoms, cycle</p>
          <div>
            <p className="text-[12px] font-bold text-[rgba(255,255,255,0.5)] uppercase tracking-[1px] mb-[8px]">Suggested topics to discuss:</p>
            <ul className="text-[14px] text-[rgba(255,255,255,0.85)] flex flex-col gap-[8px]">
              <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[#AFD2E0] mt-[6px] shrink-0" />Ferritin recheck — your last value was low (January 2025). Worth retesting to track improvement.</li>
              <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[#AFD2E0] mt-[6px] shrink-0" />Oral progesterone 200mg — may improve deep sleep quality. Your data shows consistent sleep disruption in luteal phase.</li>
              <li className="flex items-start gap-[8px]"><div className="w-[6px] h-[6px] rounded-full bg-[#AFD2E0] mt-[6px] shrink-0" />Endometriosis management — your symptom patterns suggest increasing baseline load.</li>
            </ul>
          </div>
          <div className="relative">
            <button 
              onClick={() => {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2500);
              }}
              className="w-full bg-transparent border-[1.5px] border-white text-white text-[14px] font-semibold rounded-[12px] py-[12px]"
            >
              Preview export
            </button>
            <AnimatePresence>
              {showToast && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-[40px] left-1/2 -translate-x-1/2 bg-white text-[#0E1E26] text-[12px] font-medium px-[16px] py-[8px] rounded-[8px] whitespace-nowrap shadow-lg"
                >
                  Export preview coming soon
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </BottomSheet>
    </>
  );
}

// Reusable Bottom Sheet Component — portaled into the phone container for native feel
function BottomSheet({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title?: string; children: React.ReactNode }) {
  const phoneRef = usePhoneContainer();
  const container = phoneRef.current;

  const sheet = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.1}
            onDragEnd={(_e, info) => {
              if (info.offset.y > 80 || info.velocity.y > 400) {
                onClose();
              }
            }}
            className="absolute bottom-0 left-0 right-0 z-50 bg-[#142934] rounded-t-[24px] max-h-[85%] flex flex-col"
          >
            <div className="w-full flex justify-center py-[12px] shrink-0 cursor-grab active:cursor-grabbing">
              <div className="w-[36px] h-[4px] rounded-full bg-[rgba(255,255,255,0.3)]" />
            </div>
            <div className="px-[24px] pb-[40px] pt-[4px] overflow-y-auto flex-1">
              {title && (
                <h3 className="text-[20px] font-semibold text-white mb-[20px]">{title}</h3>
              )}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Portal into the phone container so the sheet is positioned relative to the device frame
  if (container) {
    return createPortal(sheet, container);
  }
  return sheet;
}