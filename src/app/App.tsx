import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Activity,
  Droplets,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  Battery,
  Zap,
  Info,
  Moon,
  TrendingDown,
  Thermometer,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  Crown,
  Palette,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  Sparkles,
  MessageCircle,
  Send
} from "lucide-react";
import bgImage from 'figma:asset/c3a9e0d26438d10a4790c66aac563e15393ba22b.png';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { TodayScreenNew } from "./components/TodayScreenNew";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -----------------------------------------------------------------------------
// MAIN APP COMPONENT
// -----------------------------------------------------------------------------
export default function App() {
  // Start in "insight" flow as the primary morning entry experience
  const [view, setView] = useState<"insight" | "summary" | "explore">("insight");
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [decision, setDecision] = useState<"conserve" | "push" | null>(null);
  const [hasCompletedFlow, setHasCompletedFlow] = useState(false);
  const [activeTab, setActiveTab] = useState<"today" | "insights" | "body" | "journey">("today");
  const [appState, setAppState] = useState<"morning" | "midday_adjusted" | "midday_not_adjusted" | "evening">("morning");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [globalFeedback, setGlobalFeedback] = useState<string | null>(null);
  const [isCoachOpen, setIsCoachOpen] = useState(false);

  // Bottom Sheet for Experiment
  const [showExperimentSheet, setShowExperimentSheet] = useState(false);

  const triggerGlobalFeedback = (msg: string) => {
    setGlobalFeedback(msg);
    setTimeout(() => setGlobalFeedback(null), 4000);
  };

  const closeInsightFlow = () => {
    setView("summary");
    setHasCompletedFlow(true);
    // Reset insight step silently after transition
    setTimeout(() => {
      setStep(1);
    }, 500);
  };

  const handleNextStep = () => {
    if (step < 5) setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4 | 5);
  };

  const handleDecision = (choice: "conserve" | "push") => {
    setDecision(choice);
    setStep(5);
  };

  const handleExplore = (tab: "today" | "insights" | "body" | "journey") => {
    setActiveTab(tab);
    setView("explore");
    setHasCompletedFlow(true);
  };

  const reopenInsight = () => {
    setView("insight");
    setStep(1);
  };

  const isInsight = view === "insight";

  return (
    <div 
      className="fixed inset-0 bg-[#122F3A] flex items-center justify-center font-sans sm:p-8"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Mobile Device Container */}
      <motion.div 
        animate={{
          backgroundColor: "#122F3A",
          color: "#f2f0e5"
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full sm:w-[390px] h-full sm:h-[844px] sm:max-h-[100dvh] sm:rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col items-center z-10"
      >
        {/* Global Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A1A21]">
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 max-w-none object-cover size-full opacity-30"
          />
          <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundImage: "linear-gradient(179.98deg, rgb(10, 26, 33) 13.908%, rgba(10, 26, 33, 0.3) 56.95%, rgb(10, 26, 33) 99.991%)" }} />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]" />
        </div>

        <AnimatePresence mode="wait">
          {view === "insight" && (
            <InsightFlow 
              key="insight" 
              step={step} 
              onNext={handleNextStep} 
              decision={decision} 
              onDecision={handleDecision} 
              onClose={closeInsightFlow} 
              onExplore={handleExplore}
            />
          )}
          
          {(view === "summary" || view === "explore") && (
            <motion.div
              key="summary"
              className="absolute inset-0 w-full h-full flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* TOP NAVIGATION */}
              <div 
                className={cn(
                  "absolute top-0 left-0 right-0 h-[100px] px-6 pt-12 pb-4 flex items-center justify-between z-40 transition-all duration-300 pointer-events-none",
                  isScrolled 
                    ? "bg-[#122F3A]/70 backdrop-blur-xl border-b border-white/5" 
                    : "bg-gradient-to-b from-[#122F3A] via-[#122F3A]/80 to-transparent"
                )}
              >
                {/* Left: Avatar Menu */}
                <div className="flex items-center gap-3 pointer-events-auto cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                   <div className="w-10 h-10 rounded-full bg-[#122F3A] border-[0.54px] border-white/10 flex items-center justify-center shadow-[0_10px_15px_0_rgba(0,0,0,0.1),0_4px_6px_0_rgba(0,0,0,0.1)] hover:bg-[#204d60] transition-colors relative z-10">
                      <span className="text-white font-bold text-[14px]">H</span>
                   </div>
                </div>

                {/* Center: Calendar Widget */}
                <div className="absolute left-1/2 -translate-x-1/2 pointer-events-auto flex items-center gap-[24px]">
                   <button className="w-8 h-8 rounded-full bg-black/20 border-[0.54px] border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/40 transition-colors shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
                      <ChevronLeft className="w-4 h-4" />
                   </button>
                   
                   <div className="flex flex-col items-center justify-center min-w-[40px] relative top-[-2px]">
                      <span className="text-[10px] font-bold text-white/60 tracking-[1px] uppercase leading-[15px]">Sat</span>
                      <span className="text-[18px] font-bold text-white leading-[18px] mt-0.5">22</span>
                      <div className="w-1 h-1 rounded-full bg-[#fe7a2e] mt-1 shadow-[0_0_8px_#fe7a2e]" />
                   </div>

                   <button className="w-8 h-8 rounded-full bg-black/20 border-[0.54px] border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/40 transition-colors shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
                      <ChevronRight className="w-4 h-4" />
                   </button>
                </div>

                {/* Right: Coach Trigger */}
                <div className="pointer-events-auto">
                  <button
                    onClick={() => setIsCoachOpen(true)}
                    className="w-10 h-10 rounded-full bg-white/5 border-[0.54px] border-white/10 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <Sparkles className="w-[20px] h-[20px]" />
                  </button>
                </div>
              </div>

              {/* SIDE MENU OVERLAY */}
              <AnimatePresence>
                {isMenuOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                      className="absolute inset-y-0 left-0 w-[300px] bg-[#122F3A]/95 backdrop-blur-xl border-r border-white/10 shadow-2xl z-50 flex flex-col"
                    >
                      {/* Menu Header */}
                      <div className="p-6 pt-12 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full bg-[#0D232B] border border-white/10 flex items-center justify-center shadow-inner">
                              <span className="text-white font-bold text-xl">H</span>
                           </div>
                           <div className="flex flex-col">
                              <h3 className="text-white font-medium text-lg leading-tight">Hanna</h3>
                              <span className="text-white/60 text-sm">Free</span>
                           </div>
                        </div>
                        <button onClick={() => setIsMenuOpen(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors">
                           <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Menu Items */}
                      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                        <MenuItem icon={<Crown className="w-5 h-5" />} label="Subscription" />
                        <MenuItem icon={<Palette className="w-5 h-5" />} label="Appearance" />
                        <MenuItem icon={<Bell className="w-5 h-5" />} label="Notifications" />
                        
                        <div className="h-px w-full bg-white/10 my-2" />
                        
                        <MenuItem icon={<Shield className="w-5 h-5" />} label="Data & Privacy" />
                        <MenuItem icon={<HelpCircle className="w-5 h-5" />} label="Help & Support" />
                        <MenuItem icon={<Info className="w-5 h-5" />} label="About somatiq" />

                        <div className="h-px w-full bg-white/10 my-4" />

                        {/* Developer State Toggles */}
                        <div className="flex flex-col gap-3 px-3">
                           <span className="text-[11px] font-bold text-white/40 uppercase tracking-[1px]">Dev: UI States</span>
                           <div className="flex flex-col gap-2">
                              <StateToggleBtn active={appState === "morning"} onClick={() => { setAppState("morning"); setIsMenuOpen(false); }} label="Morning" />
                              <StateToggleBtn active={appState === "midday_adjusted"} onClick={() => { setAppState("midday_adjusted"); setIsMenuOpen(false); }} label="Midday — adjusted" />
                              <StateToggleBtn active={appState === "midday_not_adjusted"} onClick={() => { setAppState("midday_not_adjusted"); setIsMenuOpen(false); }} label="Midday — not adjusted" />
                              <StateToggleBtn active={appState === "evening"} onClick={() => { setAppState("evening"); setIsMenuOpen(false); }} label="Evening" />
                           </div>
                        </div>
                      </div>

                      {/* Menu Footer */}
                      <div className="p-6 pt-4 flex flex-col gap-4 border-t border-white/10 mt-auto">
                        <span className="text-white/40 text-sm">v0.2.0-alpha</span>
                        <button className="flex items-center gap-3 text-white/80 hover:text-[#fe7a2e] transition-colors">
                           <LogOut className="w-5 h-5" />
                           <span className="font-medium">Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* GLOBAL NOTIFICATION TOAST */}
              <AnimatePresence>
                {globalFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: -20, x: "-50%" }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                    className="absolute top-[110px] left-1/2 w-[calc(100%-48px)] max-w-[342px] z-[100] bg-[#248aa7] text-white text-[13px] font-medium py-3 px-4 rounded-[12px] shadow-lg flex items-center gap-3 border border-white/20 pointer-events-none"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p>{globalFeedback}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div 
                className="flex-1 w-full relative overflow-y-auto pb-24 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-4"
                onScroll={(e) => {
                  setIsScrolled(e.currentTarget.scrollTop > 20);
                }}
              >
                {activeTab === "today" ? (
                  <TodayScreenNew 
                    decision={decision} 
                    appState={appState}
                    triggerFeedback={triggerGlobalFeedback}
                    onOpenExperiment={() => setShowExperimentSheet(true)}
                    renderEveningCheckout={(onClose) => <EveningCheckout onClose={onClose} />}
                  />
                ) : (
                  <PlaceholderScreen title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
                )}
              </div>
              
              {/* Delayed Navigation Bar */}
              {(hasCompletedFlow || view === "explore") && (
                <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isCoachOpen && (
            <CoachChatOverlay onClose={() => setIsCoachOpen(false)} />
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {showExperimentSheet && (
            <ExperimentDetailSheet onClose={() => setShowExperimentSheet(false)} />
          )}
        </AnimatePresence>

        {/* Minimal Bottom Indication (Fake Home Indicator) - Only show in non-insight views or hide entirely for full screen immersion */}
        {!isInsight && (
          <motion.div 
            animate={{ backgroundColor: "#cad5e2" }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] rounded-full z-50 pointer-events-none" 
          />
        )}
      </motion.div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// SUMMARY SCREEN (TODAY)
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// TODAY SCREEN (REPLACES SUMMARY)
// -----------------------------------------------------------------------------
function TodayScreen({ 
  decision, 
  appState,
  triggerFeedback,
  onOpenExperiment
}: { 
  decision: "conserve" | "push" | null, 
  appState: "morning" | "midday_adjusted" | "midday_not_adjusted" | "evening",
  triggerFeedback: (msg: string) => void,
  onOpenExperiment: () => void
}) {
  const isConserve = decision === "conserve" || decision === null;
  
  // Track "Through the day" actions completion
  const [completedItems, setCompletedItems] = useState({
    meals: false,
    caffeine: false,
    cognitive: false
  });
  
  // Track "Evening" actions completion
  const [completedEveningItems, setCompletedEveningItems] = useState({
    progesterone: false,
    magnesium: false,
    sleep: false
  });

  const [showCheckout, setShowCheckout] = useState(false);

  const completedCount = Object.values(completedItems).filter(Boolean).length;

  const handleActionComplete = (key: keyof typeof completedItems) => {
    setCompletedItems(prev => ({ ...prev, [key]: !prev[key] }));
    triggerFeedback("Action tracked");
  };

  const handleEveningActionComplete = (key: keyof typeof completedEveningItems) => {
    setCompletedEveningItems(prev => ({ ...prev, [key]: !prev[key] }));
    triggerFeedback("Evening action tracked");
  };

  if (showCheckout) {
    return <EveningCheckout onClose={() => setShowCheckout(false)} />;
  }

  return (
    <motion.div layout transition={{ type: "spring", bounce: 0, duration: 0.5 }} className="pt-[100px] px-[24px] pb-[48px] w-full min-h-max flex flex-col text-white relative z-10">
      
      {/* HEADER SECTION (State + Context) */}
      <div className="flex flex-col gap-[8px] mb-[24px]">
         <StateCard appState={appState} completedCount={completedCount} onCheckout={() => setShowCheckout(true)} />
         
         <div className="flex items-center gap-[6px] pl-1">
            <Droplets className="w-4 h-4 text-white/60" />
            <span className="text-[13px] font-bold tracking-[1px] uppercase text-white/50">Luteal Phase · Day 18 · Period in ~10 days</span>
         </div>
      </div>

      {/* NOW (Primary Action) */}
      {appState !== "evening" && (
        <motion.section layout transition={{ type: "spring", bounce: 0, duration: 0.5 }} className="flex flex-col gap-[8px] mb-[32px]">
          <h2 className="text-[13px] font-bold text-white/50 tracking-[1.5px] uppercase">Now</h2>
          <NowAction appState={appState} onComplete={() => handleActionComplete('cognitive' as any)} />
        </motion.section>
      )}

      {/* THROUGH THE DAY */}
      <motion.section layout transition={{ type: "spring", bounce: 0, duration: 0.5 }} className="flex flex-col gap-[8px] mb-[32px]">
         <h2 className="text-[13px] font-bold text-white/50 tracking-[1.5px] uppercase">Through the day</h2>
         <div className="flex flex-col gap-[4px]">
            <ThroughTheDayItem 
               title="Eat steady, protein-focused meals"
               subtitle="Keeps energy stable — your system is sensitive to blood sugar dips right now"
               isCompleted={completedItems.meals}
               onToggle={() => handleActionComplete('meals')}
               disabled={appState === "evening"}
               expandDetails={{
                 why: "Your current phase makes your energy more sensitive to blood sugar changes. Stable meals prevent afternoon crashes.",
                 how: "Breakfast: eggs, yogurt. Lunch: balanced protein + fats. Avoid: sugar spikes alone.",
                 cta: "Explore food options"
               }}
            />
            <ThroughTheDayItem 
               title="Limit caffeine after 14:00"
               isCompleted={completedItems.caffeine}
               onToggle={() => handleActionComplete('caffeine')}
               disabled={appState === "evening"}
               expandDetails={{
                 why: "Caffeine has a long half-life and can delay the onset of deep sleep, which is critical for tonight's recovery.",
                 how: "Switch to decaf, herbal tea, or water after 2 PM."
               }}
            />
            <ThroughTheDayItem 
               title="Reduce cognitive load where you can"
               subtitle="It's Saturday — a good day to let your system rest"
               isCompleted={completedItems.cognitive}
               onToggle={() => handleActionComplete('cognitive')}
               disabled={appState === "evening"}
               expandDetails={{
                 why: "Your brain consumes up to 20% of your energy. Lowering cognitive strain allows your body to redirect resources to physical recovery.",
                 how: "Postpone complex decisions. Keep plans light. Give yourself permission to do less."
               }}
            />
         </div>
      </motion.section>

      {/* EVENING */}
      <motion.section 
         layout 
         transition={{ type: "spring", bounce: 0, duration: 0.5 }} 
         className={cn("flex flex-col gap-[8px] transition-opacity duration-500 mb-[24px]", appState === "evening" ? "opacity-100" : "opacity-55")}
      >
         <h2 className="text-[13px] font-bold text-white/30 tracking-[1.5px] uppercase">Evening</h2>
         <div className="flex flex-col gap-[4px]">
            <EveningItem 
               title="Progesterone tonight"
               context="At this point in your cycle, your supplement supports the deep sleep your recovery needs right now."
               isCompleted={completedEveningItems.progesterone}
               onToggle={() => handleEveningActionComplete('progesterone')}
               disabled={appState !== "evening"}
            />
            <EveningItem 
               title="Magnesium 400mg before sleep"
               context="Part of your active experiment (Day 4 of 7)"
               isCompleted={completedEveningItems.magnesium}
               onToggle={() => handleEveningActionComplete('magnesium')}
               disabled={appState !== "evening"}
               expandDetails={{
                 why: "Directly supports GABA activity and complements the effect of progesterone for deeper sleep.",
               }}
            />
            <EveningItem 
               title="Sleep before 23:00"
               isCompleted={completedEveningItems.sleep}
               onToggle={() => handleEveningActionComplete('sleep')}
               disabled={appState !== "evening"}
               expandDetails={{
                 why: "Early sleep cycles are crucial for nervous system repair, helping to stabilize your HRV.",
               }}
            />
         </div>
      </motion.section>

      {/* VALIDATING MOMENT */}
      <div className="mb-[24px]">
        <ValidatingMoment appState={appState} />
      </div>

      {/* ACTIVE EXPERIMENT */}
      <motion.section layout transition={{ type: "spring", bounce: 0, duration: 0.5 }} className="flex flex-col gap-[8px] mb-[40px]">
         <h2 className="text-[13px] font-bold text-white/50 tracking-[1.5px] uppercase">Active Experiment</h2>
         <ExperimentCard onClick={onOpenExperiment} magnesiumChecked={completedEveningItems.magnesium} />
      </motion.section>

      {/* PREPARE (LOOKING AHEAD) */}
      <motion.section layout transition={{ type: "spring", bounce: 0, duration: 0.5 }} className="flex flex-col gap-[8px]">
         <h2 className="text-[13px] font-bold text-white/50 tracking-[1.5px] uppercase">Looking Ahead</h2>
         <div className="flex flex-col mt-2">
            <PrepareItem 
              icon={<CalendarDays className="w-[16px] h-[16px] text-white/30" />} 
              text="Next few days may stay heavy. Follicular phase in ~10 days typically brings relief." 
            />
            <PrepareItem 
              icon={<Info className="w-[16px] h-[16px] text-white/30" />} 
              text="Gynecologist in 12 days" 
              subtext="Collecting: HRV trend, sleep patterns, symptom log, cycle data"
              hasAction
            />
            <PrepareItem 
              icon={<Activity className="w-[16px] h-[16px] text-white/30" />} 
              text="Your HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles needed." 
              noBorder
            />
         </div>
      </motion.section>

    </motion.div>
  );
}

function StateCard({ appState, completedCount, onCheckout }: { appState: "morning" | "midday_adjusted" | "midday_not_adjusted" | "evening", completedCount: number, onCheckout: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const isEvening = appState === "evening";

  let bgGradient = "linear-gradient(88.6838deg, rgba(255, 255, 255, 0.08) 0.99224%, rgba(64, 119, 149, 0.2) 67.321%)";
  let borderColor = "border-[rgba(255,255,255,0.15)]";
  
  if (appState === "midday_adjusted") {
    bgGradient = "linear-gradient(88.6838deg, rgba(36, 138, 167, 0.2) 0.99224%, rgba(64, 119, 149, 0.1) 67.321%)";
    borderColor = "border-[#248aa7]/30";
  } else if (appState === "midday_not_adjusted") {
    bgGradient = "linear-gradient(88.6838deg, rgba(254, 122, 46, 0.1) 0.99224%, rgba(64, 119, 149, 0.2) 67.321%)";
    borderColor = "border-[rgba(255,255,255,0.2)]";
  } else if (isEvening) {
    bgGradient = "linear-gradient(88.6838deg, rgba(255, 255, 255, 0.05) 0.99224%, rgba(200, 150, 100, 0.1) 67.321%)";
  }

  const headlines = {
    morning: "Low recovery capacity",
    midday_adjusted: "System stabilizing",
    midday_not_adjusted: "Still running on low recovery",
    evening: "Closing your day"
  };

  const sublines = {
    morning: ["3 adjustments for today", "Energy dip likely in 3–4 hours"],
    midday_adjusted: [`${completedCount} of 3 done`, "Energy dip less likely"],
    midday_not_adjusted: [`${completedCount} of 3 done`, "Energy may taper within 1–2 hours"],
    evening: ["Reflect on today", "To improve tomorrow's insights."]
  };

  return (
    <motion.div 
      layout
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      onClick={() => !isEvening && setExpanded(!expanded)}
      className={cn(
        "relative rounded-[20px] overflow-hidden backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)] transition-all duration-500",
        !isEvening && "cursor-pointer"
      )}
      style={{ backgroundImage: bgGradient }}
    >
      <div className={`absolute inset-0 rounded-[20px] border pointer-events-none transition-colors duration-500 ${borderColor}`} />
      
      <div className="flex flex-col p-[20px] gap-[16px] relative z-10">
        <div className="flex items-start justify-between gap-[16px]">
          <div className="flex flex-col gap-[4px]">
             <h1 className="text-[28px] font-medium leading-[1.15] tracking-[-0.5px] transition-colors duration-500 text-white">
               {headlines[appState]}
             </h1>
             <div className="flex flex-col gap-0.5 mt-1 transition-colors duration-500">
               <span className={cn(
                 "text-[14px] font-medium leading-[1.3]",
                 appState === "midday_adjusted" ? "text-[#8ab4f8]" : "text-white/60"
               )}>
                 {sublines[appState][0]}
               </span>
               <span className={cn(
                 "text-[14px] font-medium leading-[1.3]",
                 appState === "midday_adjusted" ? "text-[#8ab4f8]/70" : "text-white/40"
               )}>
                 {sublines[appState][1]}
               </span>
             </div>
          </div>
          {!isEvening && (
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} className="shrink-0 mt-2">
               <ChevronDown className="w-5 h-5 transition-colors text-white/40" />
            </motion.div>
          )}
        </div>

        {isEvening && (
          <button 
            onClick={(e) => { e.stopPropagation(); onCheckout(); }}
            className="w-full py-3.5 mt-2 bg-[#248aa7] hover:bg-[#2b9cbd] rounded-[12px] text-white font-medium text-[16px] transition-colors"
          >
            Close your day
          </button>
        )}
      </div>

      <AnimatePresence>
        {expanded && !isEvening && (
          <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{ type: "spring", bounce: 0, duration: 0.5 }}
             className="px-[20px] pb-[20px] overflow-hidden relative z-10"
          >
             <div className="flex flex-col gap-5 pt-4 border-t border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-white/60 uppercase tracking-[1px]">Outlook without adjustments</span>
                  <ul className="list-disc pl-5 text-[14px] text-white/70 space-y-1 mt-1">
                     <li><strong>Short-term:</strong> Energy taper within {appState === "morning" ? "3-4" : "1-2"} hours</li>
                     <li><strong>Next-day:</strong> Slightly increased recovery needs</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-white/60 uppercase tracking-[1px]">Hormonal context</span>
                  <p className="text-[14px] text-white/70 leading-[1.4]">
                    Your current cycle phase affects your recovery baseline. Rest is more biologically necessary today.
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
                   <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#8ab4f8]" />
                      <span className="text-[12px] font-bold text-[#8ab4f8] uppercase tracking-[1px]">Pattern Insight</span>
                   </div>
                   <p className="text-[14px] text-white/80 leading-[1.4]">
                      On similar days where you adjusted early, your next-day recovery improved significantly.
                   </p>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function NowAction({ appState, onComplete }: { appState: "morning" | "midday_adjusted" | "midday_not_adjusted", onComplete: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleDone = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDone(true);
    onComplete();
  };

  if (appState === "midday_adjusted" || isDone) {
    return (
      <motion.div 
         layout
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ type: "spring", bounce: 0, duration: 0.5 }}
         className="relative rounded-[20px] overflow-hidden backdrop-blur-md shadow-[0_0_30px_-5px_rgba(36,138,167,0.3)] bg-[#248aa7]/20 border border-[#248aa7]/40 p-[20px]"
      >
         <div className="flex flex-col gap-5 relative z-10">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-[#248aa7] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
               </div>
               <div className="flex flex-col gap-1">
                  <h2 className="text-[20px] font-medium text-white leading-[1.2]">You did this</h2>
               </div>
            </div>

            <p className="text-[14px] text-white/80 leading-[1.5]">
               Your early adjustment shifted your nervous system out of active stress.
            </p>
            <div className="flex items-center gap-2 mt-1">
               <Moon className="w-4 h-4 text-[#8ab4f8]" />
               <p className="text-[13px] text-[#8ab4f8] font-medium">Likely reduced tomorrow's fatigue</p>
            </div>
         </div>
      </motion.div>
    );
  }

  const isUrgent = appState === "midday_not_adjusted";

  return (
    <motion.div 
      layout
      className={cn(
        "relative rounded-[20px] overflow-hidden backdrop-blur-md transition-all duration-500",
        !isUrgent ? "shadow-[0_8px_32px_-8px_rgba(36,138,167,0.25)] border-l-[3px] border-l-[#248aa7] cursor-pointer" : "shadow-[0_8px_32px_-8px_rgba(254,122,46,0.25)] border-l-[3px] border-l-[#fe7a2e] cursor-default"
      )}
      onClick={() => !isUrgent && setExpanded(!expanded)}
      style={{ 
         backgroundImage: isUrgent
            ? "linear-gradient(90deg, rgba(254, 122, 46, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%)"
            : "linear-gradient(90deg, rgba(36, 138, 167, 0.3) 0%, rgba(255, 255, 255, 0.05) 100%)" 
      }}
    >
      <div className="absolute inset-0 rounded-[20px] pointer-events-none transition-colors duration-500 bg-transparent" />
      
      <div className="flex flex-col p-[24px] gap-[16px] relative z-10">
        <div className="flex flex-col gap-[4px]">
           <span className={cn(
             "text-[12px] font-bold uppercase tracking-[1px]",
             isUrgent ? "text-[#fe7a2e]" : "text-[#248aa7]"
           )}>
              {isUrgent ? "DO THIS NOW" : "Primary Action"}
           </span>
           <h3 className="text-[22px] font-semibold leading-[1.2] text-white">
              {isUrgent ? "Take a short walk now" : "Take a 10–15 min walk"}
           </h3>
           {!expanded && !isUrgent && (
             <p className="text-[15px] text-white/70 mt-1">Stabilizes energy for the afternoon.</p>
           )}
        </div>
        
        {!expanded && (
          <div className="flex gap-2 mt-2">
            {!isUrgent && (
              <button 
                onClick={(e) => { e.stopPropagation(); setExpanded(true); }}
                className="flex-1 py-[14px] rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white font-medium text-[14px]"
              >
                Start
              </button>
            )}
            <button 
              onClick={handleDone}
              className={cn(
                "flex-1 py-[14px] rounded-xl font-medium text-[14px] flex items-center justify-center gap-2 transition-colors",
                isUrgent ? "bg-[#fe7a2e] text-white w-full" : "bg-[#248aa7] text-white"
              )}
            >
              <CheckCircle2 className="w-4 h-4" />
              Done
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {expanded && !isUrgent && (
          <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{ type: "spring", bounce: 0, duration: 0.5 }}
             className="px-[24px] pb-[24px] overflow-hidden relative z-10"
          >
             <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                 <div className="flex flex-col gap-1">
                   <span className="text-[11px] font-bold text-white/40 uppercase tracking-[1px]">Why this works</span>
                   <p className="text-[14px] text-white/70 leading-[1.4]">Light movement increases blood flow and helps your nervous system shift out of an active stress state.</p>
                 </div>
                 
                 <div className="flex flex-col gap-1">
                   <span className="text-[11px] font-bold text-white/40 uppercase tracking-[1px]">How to execute</span>
                   <ul className="list-disc pl-5 text-[14px] text-white/70 space-y-1">
                      <li>Keep it strictly under 15 minutes</li>
                      <li>Low intensity (no sweating)</li>
                      <li>Leave your phone behind</li>
                   </ul>
                 </div>

                 <button 
                    onClick={handleDone}
                    className="mt-2 w-full py-3 bg-[#248aa7] rounded-[12px] text-white font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                 >
                    <CheckCircle2 className="w-5 h-5" />
                    Done
                 </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ThroughTheDayItem({ 
  title, 
  subtitle, 
  isCompleted, 
  onToggle, 
  disabled, 
  expandDetails 
}: { 
  title: string, 
  subtitle?: string, 
  isCompleted: boolean, 
  onToggle: () => void, 
  disabled: boolean,
  expandDetails: { why: string, how: string, cta?: string } 
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-transparent border-b border-[rgba(255,255,255,0.06)] last:border-0 transition-all", isCompleted ? "opacity-60" : "opacity-100")}>
      <div 
        className={cn("flex items-start px-2 py-4 gap-3 w-full relative z-10", disabled ? "cursor-default" : "cursor-pointer")}
        onClick={() => { if (!disabled) setExpanded(!expanded) }}
      >
        <button 
          onClick={(e) => { e.stopPropagation(); if (!disabled) onToggle(); }}
          disabled={disabled}
          className={cn(
            "mt-[2px] w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
            isCompleted ? "bg-[#8ab4f8] border-[#8ab4f8]" : "border-white/20"
          )}
        >
          {isCompleted && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </button>
        <div className="flex-1 flex flex-col gap-1">
          <p className={cn("text-[15px] font-medium leading-[1.3]", isCompleted ? "text-white/60 line-through" : "text-white/80")}>
            {title}
          </p>
          {subtitle && !expanded && (
            <p className="text-[13px] text-white/40 leading-[1.4] pr-2">{subtitle}</p>
          )}
        </div>
        {!disabled && (
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} className="shrink-0 mt-1">
            <ChevronDown className="w-4 h-4 text-white/20" />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {expanded && !disabled && (
          <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="px-[16px] pb-[16px] overflow-hidden"
          >
             <div className="flex flex-col gap-4 p-4 mt-2 bg-[rgba(255,255,255,0.03)] rounded-xl ml-[32px] mr-2">
               <div className="flex flex-col gap-1">
                 <span className="text-[11px] font-bold text-white/40 uppercase tracking-[1px]">Why this works</span>
                 <p className="text-[14px] text-white/70 leading-[1.4]">{expandDetails.why}</p>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[11px] font-bold text-[#8ab4f8] uppercase tracking-[1px]">How</span>
                 <p className="text-[14px] text-white/70 leading-[1.4]">{expandDetails.how}</p>
               </div>
               {expandDetails.cta && (
                 <button className="flex items-center justify-between w-full p-3 mt-1 bg-white/10 rounded-xl group text-left hover:bg-white/20 transition-colors">
                    <span className="text-[14px] font-medium text-white">{expandDetails.cta}</span>
                    <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                 </button>
               )}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function EveningItem({ 
  title, 
  context, 
  isCompleted, 
  onToggle, 
  disabled, 
  expandDetails 
}: { 
  title: string, 
  context?: string, 
  isCompleted: boolean, 
  onToggle: () => void, 
  disabled: boolean,
  expandDetails?: { why: string } 
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-transparent border-b border-[rgba(255,255,255,0.06)] last:border-0 transition-all")}>
      <div 
        className={cn("flex items-start px-2 py-4 gap-3 w-full relative z-10", disabled ? "cursor-default" : "cursor-pointer")}
        onClick={() => { if (!disabled && expandDetails) setExpanded(!expanded) }}
      >
        <button 
          onClick={(e) => { e.stopPropagation(); if (!disabled) onToggle(); }}
          disabled={disabled}
          className={cn(
            "mt-[2px] w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors",
            isCompleted ? "bg-white/40 border-transparent" : "border-white/15"
          )}
        >
          {isCompleted && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </button>
        <div className="flex-1 flex flex-col gap-1">
          <p className={cn("text-[14px] font-medium leading-[1.3]", isCompleted ? "text-white/30 line-through" : "text-white/50")}>
            {title}
          </p>
          {context && (
            <p className="text-[12px] text-white/30 italic leading-[1.4] pr-2 mt-0.5">{context}</p>
          )}
        </div>
        {!disabled && expandDetails && (
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} className="shrink-0 mt-1">
            <ChevronDown className="w-4 h-4 text-white/20" />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {expanded && !disabled && expandDetails && (
          <motion.div 
             initial={{ height: 0, opacity: 0 }}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             className="px-[16px] pb-[16px] overflow-hidden"
          >
             <div className="flex flex-col gap-2 p-4 mt-2 bg-[rgba(255,255,255,0.03)] rounded-xl ml-[32px] mr-2">
               <span className="text-[11px] font-bold text-white/40 uppercase tracking-[1px]">Why this works</span>
               <p className="text-[14px] text-white/70 leading-[1.4]">{expandDetails.why}</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ValidatingMoment({ appState }: { appState: string }) {
  let text = "";
  switch (appState) {
    case "morning":
      text = "Day 4 of this pattern. Each time you've adjusted early, recovery improved. You know your body.";
      break;
    case "midday_adjusted":
      text = "That was a good call. Your system often responds well when you reduce load early.";
      break;
    case "midday_not_adjusted":
      text = "It's not too late. Even small adjustments now still help tomorrow's recovery.";
      break;
    case "evening":
      text = "You made it through the day. Whatever you managed today counts.";
      break;
  }

  return (
    <div className="flex gap-3 items-start bg-transparent py-[24px]">
      <Sparkles className="w-[14px] h-[14px] text-[#8ab4f8] opacity-60 shrink-0 mt-[2px]" />
      <p className="text-[13px] text-white/50 italic leading-[1.4]">{text}</p>
    </div>
  );
}

function ExperimentCard({ onClick, magnesiumChecked }: { onClick: () => void, magnesiumChecked: boolean }) {
  return (
    <div 
      onClick={onClick}
      className="relative rounded-[16px] overflow-hidden cursor-pointer backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)] p-[16px] flex flex-col gap-3"
      style={{ borderLeft: "3px solid #FFB162", backgroundColor: "rgba(255,178,98,0.08)" }}
    >
      <div className="flex justify-between items-start">
         <div className="flex flex-col gap-1">
            <span className="text-[12px] font-bold uppercase tracking-[1px] text-[#FFB162]">Day 4 of 7</span>
            <h3 className="text-[18px] font-medium text-white">Magnesium before sleep</h3>
            <p className="text-[14px] text-white/70">Deep sleep +18 min avg</p>
         </div>
      </div>
      
      <div className="flex items-center gap-[6px] mt-1">
         <div className="w-[8px] h-[8px] rounded-full bg-[#EEE9DF]" />
         <div className="w-[8px] h-[8px] rounded-full bg-[#EEE9DF]" />
         <div className="w-[8px] h-[8px] rounded-full bg-[#EEE9DF]" />
         {/* 4th dot animates fill if checked */}
         <motion.div 
            animate={{ backgroundColor: magnesiumChecked ? "#EEE9DF" : "rgba(0,0,0,0)" }}
            className={cn("w-[8px] h-[8px] rounded-full", magnesiumChecked ? "" : "border border-white/20")}
         />
         <div className="w-[8px] h-[8px] rounded-full border border-white/20" />
         <div className="w-[8px] h-[8px] rounded-full border border-white/20" />
         <div className="w-[8px] h-[8px] rounded-full border border-white/20" />
      </div>
    </div>
  );
}

function PrepareItem({ icon, text, subtext, hasAction, noBorder }: { icon: React.ReactNode, text: string, subtext?: string, hasAction?: boolean, noBorder?: boolean }) {
  return (
    <div className={cn("flex items-center gap-4 py-[16px] w-full cursor-default", !noBorder && "border-b border-[rgba(255,255,255,0.05)]")}>
       <div className="shrink-0">{icon}</div>
       <div className="flex-1 flex flex-col gap-0.5 pr-2">
         <p className="text-[14px] text-white/50 leading-[1.4]">{text}</p>
         {subtext && <p className="text-[12px] text-white/30 leading-[1.3]">{subtext}</p>}
       </div>
       {hasAction && <ArrowRight className="w-4 h-4 text-white/30 shrink-0" />}
    </div>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-white/70 hover:bg-white/5 active:bg-white/10 transition-colors">
      <span className="text-white/50">{icon}</span>
      <span className="text-[15px] font-medium">{label}</span>
    </button>
  );
}

function StateToggleBtn({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-2 rounded-lg text-[13px] font-medium transition-colors text-left",
        active ? "bg-[#248aa7] text-white" : "bg-white/5 text-white/50 hover:bg-white/10"
      )}
    >
      {label}
    </button>
  );
}

function LinkItem({ text }: { text: string }) {
  return (
    <button className="flex items-center justify-between w-full py-[12px] border-b border-[rgba(255,255,255,0.08)] last:border-0 active:opacity-60 transition-opacity">
      <span className="text-[16px] font-medium text-white/70">{text}</span>
      <ArrowRight className="w-[18px] h-[18px] text-white/30" />
    </button>
  );
}

// -----------------------------------------------------------------------------
// COACH CHAT OVERLAY
// -----------------------------------------------------------------------------
function CoachChatOverlay({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ role: 'coach' | 'user', text: string | React.ReactNode }[]>([
    { role: 'coach', text: "I'm here to help you navigate your day. What's on your mind?" }
  ]);
  const [input, setInput] = useState("");
  const historyContext = useRef<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput("");
    
    setTimeout(() => {
      const lowerInput = userText.toLowerCase();
      let intent = "understanding"; // Default intent
      
      // Intent detection
      if (lowerInput.match(/(supplement|vitamin|magnesium|pill|capsule|mineral)/)) {
        intent = "knowledge_supplements";
      } else if (lowerInput.match(/(food|eat|diet|nutrition|meal)/)) {
        intent = "knowledge_food";
      } else if (lowerInput.match(/(why|exhausted|tired|reason|feel|heavy)/)) {
        intent = "understanding";
      } else if (lowerInput.match(/(what should i do|how to act|what to do|action|help)/)) {
        intent = "action";
      } else if (lowerInput.match(/(improve|optimize|better|prevent|next time)/)) {
        intent = "optimization";
      }

      const isRepeat = historyContext.current.includes(intent);
      let responseContent: React.ReactNode = null;

      // Anti-duplication & Intent Handling Logic
      if (intent === "knowledge_supplements") {
        if (isRepeat) {
          responseContent = (
            <div className="flex flex-col gap-3">
              <p>Let's look deeper into how targeted supplementation interacts with your current hormonal context. If you are using bio-identical progesterone, your nervous system is operating with less buffering capacity, meaning we want to focus on nerve-sheath and cellular support.</p>
              <ul className="list-disc pl-5 space-y-2 opacity-90">
                <li><strong>Ashwagandha (Sensoril/KSM-66):</strong> Acts as an adaptogen that modulates how your adrenal glands respond to stress, preventing cortisol from overriding your calming hormones.</li>
                <li><strong>Vitamin D3 with K2:</strong> As estrogen fluctuates, calcium transport and immune regulation become less efficient. This combination ensures your cellular metabolism is supported.</li>
                <li><strong>B-Complex (Methylated):</strong> Rapid depletion of B-vitamins occurs during stress responses. Methylated forms offer immediate support for your central nervous system without extra liver strain.</li>
              </ul>
            </div>
          );
        } else {
          responseContent = (
            <div className="flex flex-col gap-3">
              <p>During perimenopause, your body's baseline demand for neuro-protective resources increases as progesterone fluctuations make your nervous system more sensitive to daily stressors. Supporting this biological shift can help you feel more grounded.</p>
              <ul className="list-disc pl-5 space-y-2 opacity-90">
                <li><strong>Magnesium Glycinate (300-400mg):</strong> Because progesterone normally soothes the brain, its decline can leave you feeling wired. Glycinate crosses the blood-brain barrier effectively to gently quiet the nervous system before sleep.</li>
                <li><strong>L-Theanine (200mg):</strong> When accumulated strain increases your cortisol, L-Theanine promotes alpha brain waves, creating a state of calm alertness without drowsiness.</li>
                <li><strong>Omega-3 Fatty Acids (EPA/DHA):</strong> High-quality Omega-3s reduce background cellular inflammation, easing the invisible load on your system.</li>
              </ul>
              <p>These supports provide the exact resources your body is currently burning through.</p>
            </div>
          );
        }
      } else if (intent === "knowledge_food") {
        if (isRepeat) {
          responseContent = (
            <div className="flex flex-col gap-3">
              <p>Since we're focusing on nutrition, let's explore how specific amino acids interact with your current state. What you eat acts as a direct signal to your nervous system that it is safe.</p>
              <ul className="list-disc pl-5 space-y-2 opacity-90">
                <li><strong>Tryptophan-Rich Foods (Turkey, Pumpkin Seeds):</strong> Tryptophan is the precursor to serotonin and melatonin, supplying the building blocks to down-regulate and prepare for rest.</li>
                <li><strong>Complex Root Carbohydrates (Sweet Potatoes):</strong> Eaten specifically in the evening, they help lower cortisol and gently raise serotonin, easing the transition into sleep.</li>
                <li><strong>Dark Leafy Greens (Swiss Chard, Spinach):</strong> Natural reservoirs of bio-available magnesium and folate, which are rapidly depleted when managing high internal regulation.</li>
              </ul>
            </div>
          );
        } else {
          responseContent = (
            <div className="flex flex-col gap-3">
              <p>In your current phase, your body uses significantly more energy to maintain baseline equilibrium. When hormones like estrogen and progesterone fluctuate, insulin sensitivity can decrease, making blood sugar spikes feel like anxiety or sudden exhaustion.</p>
              <ul className="list-disc pl-5 space-y-2 opacity-90">
                <li><strong>Cruciferous Vegetables (Broccoli, Cauliflower):</strong> These contain DIM, which actively assists your liver in metabolizing and clearing excess hormones, reducing the heavy, sluggish feeling.</li>
                <li><strong>High-Quality Fats (Avocado, Wild-Caught Salmon):</strong> Fats provide a steady energy stream that prevents sudden afternoon crashes, crucial when your body is working hard to regulate itself.</li>
                <li><strong>Phytoestrogen-Rich Seeds (Ground Flaxseed):</strong> These provide gentle compounds that can weakly bind to estrogen receptors, offering a subtle stabilizing effect when natural levels are erratic.</li>
              </ul>
            </div>
          );
        }
      } else if (intent === "understanding") {
        if (isRepeat) {
          responseContent = (
            <div className="flex flex-col gap-3">
              <p>I notice you're still feeling the weight of the day. Physiologically, your resting heart rate has been slightly elevated, which tells us your body is already busy recovering in the background.</p>
              <p>Giving yourself permission to do the bare minimum right now is actually a very active form of recovery.</p>
            </div>
          );
        } else {
          responseContent = (
            <div className="flex flex-col gap-3">
              <p>Your system is currently using more energy for internal regulation than usual. In this phase, your body tends to react more sensitively to accumulated strain.</p>
              <p>That means even normal activities can feel more demanding than expected.</p>
              <p>Keeping your day a bit more even, without strong peaks, can help you feel more stable. Short breaks, steady meals, and avoiding intense effort are usually enough to shift this.</p>
            </div>
          );
        }
      } else if (intent === "action") {
         if (isRepeat) {
           responseContent = (
             <div className="flex flex-col gap-3">
               <p>If you've already tried scaling back and it still feels like too much, we might need to adjust your environment.</p>
               <p>Can you dim the lights or find a quieter space for the next 30 minutes? Reducing sensory input often provides immediate relief for your nervous system when it's already working hard.</p>
             </div>
           );
         } else {
           responseContent = (
             <div className="flex flex-col gap-3">
               <p>The most effective adjustment right now is reducing cognitive load.</p>
               <p>If you can, push any complex decision-making to tomorrow. For today, focus on routine tasks that don't require deep focus, and build in slightly longer transitions between them.</p>
             </div>
           );
         }
      } else if (intent === "optimization") {
         if (isRepeat) {
           responseContent = (
             <div className="flex flex-col gap-3">
               <p>To build on what we discussed, optimization isn't always about doing more—sometimes it's about anticipation.</p>
               <p>Knowing that this phase requires more baseline energy, you might consider front-loading your more demanding tasks earlier in your cycle next month.</p>
             </div>
           );
         } else {
           responseContent = (
             <div className="flex flex-col gap-3">
               <p>Looking at your patterns, your system responds really well when you build in a 15-minute decompression buffer between work and your evening routine.</p>
               <p>This gentle transition helps lower stress hormones before they impact your sleep quality, making the next morning naturally smoother.</p>
             </div>
           );
         }
      }

      historyContext.current.push(intent);

      setMessages(prev => [...prev, { 
        role: 'coach', 
        text: responseContent
      }]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className="absolute inset-0 z-[100] bg-[#122F3A] flex flex-col"
    >
      <div className="flex items-center justify-between px-6 pt-14 pb-4 border-b border-white/10 bg-[#0d2026]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#248aa7]/20 flex items-center justify-center border border-[#248aa7]/40">
            <Sparkles className="w-5 h-5 text-[#8ab4f8]" />
          </div>
          <div>
            <h2 className="text-white font-medium">Your Coach</h2>
            <p className="text-white/50 text-[13px]">Support & Guidance</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 -mr-2 text-white/50 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        {messages.map((msg, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] rounded-[20px] p-4 text-[15px] leading-[1.5] ${
              msg.role === 'user' 
                ? 'bg-[#248aa7] text-white rounded-br-[4px]' 
                : 'bg-white/5 border border-white/10 text-white/90 rounded-bl-[4px]'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10 pb-8 bg-[#0c1d22]">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-2 pl-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask your coach..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/30 text-[15px]"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-full bg-[#248aa7] flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4 text-white ml-0.5" />
          </button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto mt-4 pb-2 scrollbar-hide px-2">
           <button onClick={() => setInput("Why do I feel so exhausted today?")} className="shrink-0 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-[13px] whitespace-nowrap hover:bg-white/10 transition-colors">Why do I feel exhausted?</button>
           <button onClick={() => setInput("Which supplements help?")} className="shrink-0 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-[13px] whitespace-nowrap hover:bg-white/10 transition-colors">Which supplements help?</button>
           <button onClick={() => setInput("What should I eat?")} className="shrink-0 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-[13px] whitespace-nowrap hover:bg-white/10 transition-colors">What should I eat?</button>
        </div>
      </div>
    </motion.div>
  );
}

// Placeholder for other nav screens
function PlaceholderScreen({ title }: { title: string }) {
  return (
    <div className="pt-12 px-6 pb-12 w-full h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-[#0f172b] text-[24px] font-medium mb-2">{title}</h1>
      <p className="text-[#62748e]">This section is under construction.</p>
    </div>
  );
}

// -----------------------------------------------------------------------------
// BOTTOM NAVIGATION
// -----------------------------------------------------------------------------
import { Home, LineChart, Target, Map } from "lucide-react";

function BottomNav({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: any) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="absolute bottom-0 left-0 w-full bg-[rgba(29,41,61,0.8)] backdrop-blur-xl border-t border-[rgba(255,255,255,0.1)] pb-6 pt-2 px-6 flex justify-between items-center z-40"
    >
      <NavItem 
        icon={<Home />} 
        label="Today" 
        isActive={activeTab === "today"} 
        onClick={() => onTabChange("today")} 
      />
      <NavItem 
        icon={<LineChart />} 
        label="Insights" 
        isActive={activeTab === "insights"} 
        onClick={() => onTabChange("insights")} 
      />
      <div className="relative -top-5">
        <motion.button 
          whileTap={{ scale: 0.9, backgroundColor: "#0f172b" }}
          className="w-12 h-12 rounded-full bg-[#fe7a2e] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(254,122,46,0.3)] transition-colors"
        >
          <span className="text-[24px] leading-none mb-1">+</span>
        </motion.button>
      </div>
      <NavItem 
        icon={<Target />} 
        label="You" 
        isActive={activeTab === "body"} 
        onClick={() => onTabChange("body")} 
      />
      <NavItem 
        icon={<Map />} 
        label="Journey" 
        isActive={activeTab === "journey"} 
        onClick={() => onTabChange("journey")} 
      />
    </motion.div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <motion.button 
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "flex flex-col items-center gap-1 min-w-[50px] transition-colors",
        isActive ? "text-white" : "text-white/40"
      )}
    >
      <div className={cn("w-6 h-6", isActive && "stroke-[2.5px] text-[#fe7a2e]")}>
        {icon}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </motion.button>
  );
}

// -----------------------------------------------------------------------------
// INSIGHT FLOW WRAPPER (PETROL MODE)
// -----------------------------------------------------------------------------
function InsightFlow({ 
  step, 
  onNext, 
  decision, 
  onDecision, 
  onClose,
  onExplore
}: { 
  step: number; 
  onNext: () => void;
  decision: "conserve" | "push" | null;
  onDecision: (choice: "conserve" | "push") => void;
  onClose: () => void;
  onExplore: (tab: "today" | "insights" | "body" | "journey") => void;
}) {
  return (
    <motion.div 
      className="absolute inset-0 w-full h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 w-full relative z-10 flex flex-col [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <AnimatePresence mode="wait">
          {step === 1 && <Screen1Hero key="step1" onNext={onNext} />}
          {step === 2 && <Screen2Causality key="step2" onNext={onNext} />}
          {step === 3 && <Screen3Interpretation key="step3" onNext={onNext} />}
          {step === 4 && <Screen4Decision key="step4" onDecision={onDecision} />}
          {step === 5 && <TransitionAnimation key="step5" decision={decision} onClose={onClose} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// INSIGHT SCREENS
// -----------------------------------------------------------------------------

function Screen1Hero({ onNext }: { onNext: () => void }) {
  const [answered, setAnswered] = useState<"low" | "okay" | "high" | null>(null);
  const [showTags, setShowTags] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Separate refs to ensure both timeouts can be cleanly cleared
  const tagsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tagsList = ["Pain", "Bloating", "Brain fog", "Mood low", "Hot flashes"];

  const handleAnswer = (answer: "low" | "okay" | "high") => {
    setAnswered(answer);
    
    // Show tags after 1.5 seconds
    tagsTimerRef.current = setTimeout(() => {
      setShowTags(true);
      
      // Auto-advance ONLY starts after the tags have actually appeared
      // Giving the user a full 6.5 seconds to read and select tags (8 seconds total)
      advanceTimerRef.current = setTimeout(() => {
        onNext();
      }, 6500);
    }, 1500);
  };

  const toggleTag = (tag: string) => {
    // Stop the auto-advance timer on first interaction
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
    
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSkip = () => {
    if (tagsTimerRef.current) clearTimeout(tagsTimerRef.current);
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    onNext();
  };

  const handleContinue = () => {
    if (tagsTimerRef.current) clearTimeout(tagsTimerRef.current);
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    onNext();
  };

  useEffect(() => {
    return () => {
      if (tagsTimerRef.current) clearTimeout(tagsTimerRef.current);
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-between pt-[64px] px-[24px] pb-[48px] h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-[40px] items-start w-full relative z-10">
        <h2 className="text-[#fe7a2e] text-[16px] font-bold leading-[19.5px] tracking-[1.3px] uppercase opacity-90">
          Good Morning, Hanna
        </h2>
        <h1 className="text-white text-[48px] font-medium leading-[1.16] tracking-[-1.05px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]">
          Your body is entering a low-recovery phase today.
        </h1>
      </div>

      <div className="flex flex-col w-full relative z-10 mt-auto">
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col gap-[12px] w-full"
            >
              <p className="text-white/90 text-[18px] font-medium text-center mb-[4px]">
                How is your energy right now?
              </p>
              <ValidationButton onClick={() => handleAnswer("high")} text="High" />
              <ValidationButton onClick={() => handleAnswer("okay")} text="Okay" />
              <ValidationButton onClick={() => handleAnswer("low")} text="Low" />
              
              <button 
                onClick={handleSkip}
                className="mt-[16px] text-white/50 text-[15px] font-medium tracking-wide flex items-center justify-center gap-2 mx-auto hover:text-white/80 transition-colors cursor-pointer"
              >
                Skip <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center w-full min-h-[220px]"
            >
               <p className="text-[#fe7a2e] text-[24px] font-medium text-center leading-[1.3] px-2 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]">
                 {answered === "low" && "Your current signals match how you feel."}
                 {(answered === "okay" || answered === "high") && "You feel better than your recovery signals suggest."}
               </p>

               <AnimatePresence>
                 {showTags && (
                   <motion.div
                     initial={{ opacity: 0, y: 10, height: 0 }}
                     animate={{ opacity: 1, y: 0, height: "auto" }}
                     transition={{ duration: 0.5 }}
                     className="flex flex-col items-center w-full mt-[24px] overflow-hidden"
                   >
                     <p className="text-white/70 text-[16px] font-medium text-center">Anything else?</p>
                     
                     <div className="flex flex-wrap justify-center gap-[8px] mt-[16px] w-full">
                       {tagsList.map(tag => {
                         const isSelected = selectedTags.includes(tag);
                         return (
                           <button
                             key={tag}
                             onClick={() => toggleTag(tag)}
                             className={cn(
                               "rounded-[9999px] px-[20px] py-[10px] text-[14px] font-medium transition-all duration-200 cursor-pointer",
                               isSelected 
                                 ? "bg-white border border-white text-[#122F3A]" 
                                 : "bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] text-white/70"
                             )}
                           >
                             {tag}
                           </button>
                         );
                       })}
                     </div>

                     <AnimatePresence>
                       {selectedTags.length > 0 && (
                         <motion.button
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           onClick={handleContinue}
                           className="w-full bg-[#248aa7] text-white text-[16px] font-semibold rounded-[74px] p-[18px] mt-[32px] transition-colors cursor-pointer"
                         >
                           Continue
                         </motion.button>
                       )}
                     </AnimatePresence>
                   </motion.div>
                 )}
               </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function ValidationButton({ onClick, text }: { onClick: () => void, text: string }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className="w-full relative rounded-[16px] overflow-hidden backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)] py-[20px] px-[24px] flex items-center justify-center bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.15)] transition-colors hover:bg-[rgba(255,255,255,0.12)]"
    >
      <span className="text-white text-[18px] font-medium leading-none">{text}</span>
    </motion.button>
  );
}

function Screen2Causality({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col pt-[64px] px-[24px] w-full h-full overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-[48px] items-start w-full relative z-10 pb-[100px]">
        {/* Header */}
        <div className="flex flex-col gap-[10px]">
          <h2 className="text-[#fe7a2e] text-[16px] font-bold leading-[19.5px] tracking-[1.3px] uppercase opacity-90">
            trend observed
          </h2>
          <h1 className="text-white text-[32px] font-medium leading-[1.1] tracking-[-0.7px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] whitespace-pre-wrap">
            {`Your body is entering a\nlow-recovery phase.`}
          </h1>
        </div>

        {/* Visual Cause Chain */}
        <div className="flex items-center justify-between w-full relative">
          {/* Animated line progress */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 166 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            className="absolute left-[19px] top-[36px] w-[2px] rounded-full bg-gradient-to-b from-[rgba(255,255,255,0.5)] via-[rgba(254,122,46,0.7)] via-50% to-[#fe7a2e]" 
          />
          
          <div className="flex flex-col items-start gap-[32px] w-full relative z-10">
            {/* Step 1 */}
            <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 0.3, duration: 0.6}} className="flex gap-[16px] items-center w-full h-[49.25px]">
              <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#2a677f] flex items-center justify-center shadow-[0px_0px_20px_0px_rgba(236,242,248,0.05)]">
                <Moon className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-start gap-[2px] flex-1">
                <h3 className="text-white text-[18px] font-medium leading-[24.75px] tracking-[-0.45px]">Sleep depth reduced</h3>
                <p className="text-white text-[15px] font-normal leading-[22.5px]">3 short nights</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 0.9, duration: 0.6}} className="flex gap-[16px] items-center w-full h-[49.25px]">
              <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#fe7a2e] flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-[rgba(254,122,46,0.4)] shadow-[0px_0px_20px_0px_rgba(254,122,46,0.15)] pointer-events-none" />
                <Activity className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-start gap-[2px] flex-1">
                <h3 className="text-white text-[18px] font-medium leading-[24.75px]">HRV dropped 15%</h3>
                <p className="text-white text-[15px] font-normal leading-[22.5px]">Sign of nervous system load</p>
              </div>
            </motion.div>

            {/* Step 3 (Conclusion) */}
            <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay: 1.8, duration: 0.6}} className="flex gap-[16px] items-center w-full">
              <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-white relative">
                <div className="absolute left-[14px] top-[14px] w-[12px] h-[12px] rounded-full bg-[#fe7a2e]" />
                <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.2)] pointer-events-none" />
              </div>
              <div className="flex flex-col items-start rounded-[12px]">
                <h3 className="text-white text-[20px] font-semibold leading-[25.5px] tracking-[-0.425px]">Reduced recovery capacity</h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Context items (informational) */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 2.5}} className="flex flex-col gap-[16px] w-full pt-[8px]">
          <div className="flex gap-[16px] items-start px-[4px] relative w-full">
            <div className="mt-[2px] shrink-0">
              <Droplets className="w-[18px] h-[18px] text-[#ecf2f8]/70" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-start gap-[2px] flex-1">
              <p className="text-white/90 font-medium leading-[22px] text-[16px] font-bold">Luteal Phase</p>
              <p className="text-white/60 text-[14px] font-normal leading-[1.4]">Day 18 of your cycle</p>
            </div>
          </div>

          <div className="flex gap-[16px] items-start px-[4px] relative w-full">
            <div className="mt-[2px] shrink-0">
              <Activity className="w-[18px] h-[18px] text-[#ecf2f8]/70" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-start gap-[2px] flex-1">
              <p className="text-white/90 font-medium leading-[22px] text-[16px] font-bold">Pattern Match</p>
              <p className="text-white/60 text-[14px] font-normal leading-[1.4]">Seen in 4 of your last 6 similar cycles. This matches your recent cycle behavior.</p>
            </div>
          </div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 3.0 }}
           className="w-full flex items-start justify-center mt-2"
        >
          <motion.button 
            onClick={onNext}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#407795] rounded-[74px] overflow-hidden"
          >
            <div className="px-[20px] py-[18px] flex items-center justify-center w-full">
              <span className="text-[#f6f7f7] text-[20px] font-bold leading-none">Continue</span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Screen3Interpretation({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col pt-[64px] px-[24px] pb-[100px] justify-between items-center w-full h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col gap-[48px] items-center w-full relative z-10 flex-1 justify-center">
        <motion.p 
          initial={{opacity:0, y:10}} 
          animate={{opacity:1, y:0}} 
          transition={{delay: 0.5, duration: 0.8}}
          className="text-[#fe7a2e] text-[18px] font-semibold leading-[27px] uppercase text-center w-full"
        >
          This isn’t random.
        </motion.p>
        
        <motion.h2 
          initial={{opacity:0, y:10}} 
          animate={{opacity:1, y:0}} 
          transition={{delay: 1.5, duration: 1}}
          className="text-white text-[30px] font-medium leading-[38.4px] tracking-[-0.8px] text-center w-full px-[22px]"
        >
          Your body is shifting<br />
          energy from performance<br />
          toward regulation.
        </motion.h2>

        <motion.p 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{delay: 3.5, duration: 1}}
          className="text-white text-[20px] font-normal leading-[1.5] text-center w-full max-w-[290px]"
        >
          You’re not underperforming. Your system is simply adapting.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="w-full flex justify-center relative z-10 mt-auto"
      >
        <motion.button 
          onClick={onNext}
          whileTap={{ scale: 0.95, opacity: 0.8 }}
          className="flex flex-col items-center gap-[16.5px] transition-colors"
        >
          <span className="text-white text-[20px] font-medium leading-[22.5px] tracking-[0.375px] text-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]">
            What to do next
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[58px] h-[58px] rounded-full bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.2)] flex items-center justify-center shrink-0 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1),inset_0_0_10px_rgba(255,255,255,0.05)]"
          >
            <ArrowDown className="w-6 h-6 text-white" strokeWidth={1.94} />
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function Screen4Decision({
  onDecision,
}: {
  onDecision: (choice: "conserve" | "push") => void;
}) {
  const [selected, setSelected] = useState<"conserve" | "push" | null>(null);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col pt-[64px] px-[24px] pb-[48px] w-full h-full justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, filter: "blur(4px)" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-[48px] items-start w-full relative z-10 flex-1">
        <div className="flex flex-col gap-[8px] items-start justify-center text-white w-full">
          <h2 className="text-[#fe7a2e] text-[16px] font-bold leading-[19.5px] tracking-[1.3px] uppercase opacity-90 mb-2">
            Today
          </h2>
          <p className="text-[32px] font-medium leading-[36.8px] tracking-[-0.8px] w-full shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)]">
            How do you want to approach today?
          </p>
          <p className="text-[18px] font-normal leading-[24px] w-full mt-2">
            Choose an approach to adapt your daily recommendations.
          </p>
        </div>

        <div className="flex flex-col gap-[12px] w-full mt-4">
          <motion.button
            onClick={() => setSelected("conserve")}
            whileTap={{ scale: 0.98 }}
            className="w-full relative rounded-[16px] overflow-hidden backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]"
            style={{ backgroundImage: "linear-gradient(88.6838deg, rgba(255, 255, 255, 0.08) 0.99224%, rgba(64, 119, 149, 0.2) 67.321%)" }}
          >
            <div className={`absolute inset-0 rounded-[16px] border ${selected === 'conserve' ? 'border-[#fe7a2e]' : 'border-[rgba(255,255,255,0.2)]'} pointer-events-none transition-colors duration-300`} />
            <div className="flex items-center px-[13px] py-[33px] gap-[16px] w-full relative">
              <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-[rgba(255,255,255,0.16)] flex items-center justify-center relative backdrop-blur-sm shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                <Battery className="w-[24px] h-[24px] text-[#f2f0e5]" strokeWidth={2} />
              </div>
              <div className="flex flex-col items-start gap-[16px] flex-1 text-left">
                <p className="text-white text-[20px] font-semibold leading-[1.1]">Conserve energy</p>
                <p className="text-white/80 text-[16px] font-medium leading-[1.3]">Stabilize faster, reduce fatigue tomorrow</p>
              </div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => setSelected("push")}
            whileTap={{ scale: 0.98 }}
            className="w-full relative rounded-[16px] overflow-hidden backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(0,0,0,0.1)]"
            style={{ backgroundImage: "linear-gradient(88.6838deg, rgba(255, 255, 255, 0.08) 0.99224%, rgba(64, 119, 149, 0.2) 67.321%)" }}
          >
            <div className={`absolute inset-0 rounded-[16px] border ${selected === 'push' ? 'border-[#fe7a2e]' : 'border-[rgba(255,255,255,0.2)]'} pointer-events-none transition-colors duration-300`} />
            <div className="flex items-center px-[21px] py-[33px] gap-[16px] w-full relative">
              <div className="w-[48px] h-[48px] shrink-0 rounded-full bg-[rgba(254,122,46,0.16)] flex items-center justify-center relative backdrop-blur-sm shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]">
                <Zap className="w-[24px] h-[24px] text-[#fe7a2e]" strokeWidth={2} />
              </div>
              <div className="flex flex-col items-start gap-[16px] flex-1 text-left">
                <p className="text-white text-[20px] font-semibold leading-[1.1]">Push through</p>
                <p className="text-white/80 text-[16px] font-medium leading-[1.3]">Short-term output, higher fatigue risk tomorrow</p>
              </div>
            </div>
          </motion.button>
        </div>
      </div>

      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.5 }}
         className="w-full flex items-start justify-center relative z-10"
      >
        <motion.button 
          onClick={() => selected && onDecision(selected)}
          whileTap={selected ? { scale: 0.95 } : undefined}
          className={`w-full ${selected ? 'bg-[#407795]' : 'bg-[#407795]/50'} rounded-[74px] overflow-hidden transition-colors duration-300`}
          disabled={!selected}
        >
          <div className="px-[20px] py-[18px] flex items-center justify-center w-full">
            <span className={`text-[#f6f7f7] text-[20px] font-bold leading-none ${!selected && 'opacity-50'}`}>Continue</span>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function TransitionAnimation({
  decision,
  onClose
}: {
  decision: "conserve" | "push" | null;
  onClose: () => void;
}) {
  const isConserve = decision === "conserve";

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center items-center px-6 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center relative z-10 text-center w-full">
         <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white text-[28px] font-medium leading-[1.2]"
         >
            {isConserve ? "Adjusting your day for active recovery." : "Supporting your system through the load."}
         </motion.h1>
         
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col items-center gap-4 mt-6"
         >
            <p className="text-white/60 text-[16px]">Preparing your plan...</p>
            <motion.div 
               animate={{ opacity: [0.3, 0.8, 0.3] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               className="w-1.5 h-1.5 rounded-full bg-white"
            />
         </motion.div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// EVENING CHECKOUT OVERLAY
// -----------------------------------------------------------------------------
function EveningCheckout({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [step, onClose]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const tags = ["Pain", "Bloating", "Brain fog", "Mood low", "Hot flashes"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 w-full h-full bg-[#122F3A] flex flex-col z-[100]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img src={bgImage} alt="" className="absolute inset-0 max-w-none object-cover size-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#122F3A] via-[rgba(18,47,58,0.5)] via-50% to-[#122F3A] mix-blend-multiply" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col pt-16 px-6 pb-12">
         {/* Top Navigation */}
         <div className="flex items-center justify-between w-full h-10 shrink-0">
            {step > 1 && step < 4 ? (
               <button onClick={handleBack} className="w-10 h-10 flex items-center justify-start text-white/50 hover:text-white transition-colors">
                  <ChevronLeft className="w-6 h-6" />
               </button>
            ) : <div className="w-10" />}

            {step < 4 && (
               <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                     <div key={i} className={cn("w-2 h-2 rounded-full transition-colors duration-300", i === step ? "bg-white" : "bg-white/20")} />
                  ))}
               </div>
            )}
            <div className="w-10" />
         </div>

         {/* Content */}
         <div className="flex-1 flex flex-col items-center justify-center w-full">
            <AnimatePresence mode="wait">
               {step === 1 && (
                 <motion.div key="step1" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="flex flex-col gap-8 w-full items-center">
                    <h2 className="text-[24px] font-medium text-white text-center">How did your day feel overall?</h2>
                    <div className="flex flex-col gap-3 w-full">
                       {["Better than expected", "As expected", "Harder than expected"].map(btn => (
                         <ValidationButton 
                            key={btn} 
                            onClick={() => {
                               setTimeout(handleNext, 1000);
                            }} 
                            text={btn} 
                         />
                       ))}
                    </div>
                 </motion.div>
               )}

               {step === 2 && (
                 <motion.div key="step2" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="flex flex-col gap-8 w-full items-center">
                    <h2 className="text-[24px] font-medium text-white text-center">Did you take your Progesterone tonight?</h2>
                    <div className="flex gap-4 w-full">
                       <button onClick={handleNext} className="flex-1 py-4 bg-[#248aa7] hover:bg-[#2b9cbd] rounded-2xl text-white font-medium text-[16px] transition-colors">
                          Yes
                       </button>
                       <button onClick={handleNext} className="flex-1 py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-white font-medium text-[16px] transition-colors">
                          No
                       </button>
                    </div>
                 </motion.div>
               )}

               {step === 3 && (
                 <motion.div key="step3" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="flex flex-col gap-8 w-full items-center">
                    <h2 className="text-[24px] font-medium text-white text-center">Any symptoms today?</h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                       {tags.map(tag => {
                          const isSelected = selectedTags.includes(tag);
                          return (
                            <button 
                               key={tag}
                               onClick={() => toggleTag(tag)}
                               className={cn(
                                  "px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300",
                                  isSelected ? "bg-[#248aa7] text-white shadow-[0_0_15px_rgba(36,138,167,0.3)]" : "bg-white/10 text-white/70 hover:bg-white/15"
                               )}
                            >
                               {tag}
                            </button>
                          );
                       })}
                    </div>
                 </motion.div>
               )}

               {step === 4 && (
                 <motion.div key="step4" className="flex flex-col items-center justify-center gap-2 text-center w-full">
                    <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}} className="text-[20px] font-medium text-white">
                       Noted.
                    </motion.h2>
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6, duration:0.6}} className="text-[16px] text-white/60">
                       This feeds tomorrow's insights.
                    </motion.p>
                    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2, duration:0.6}} className="text-[18px] text-white/80 mt-2">
                       Sleep well, Hanna.
                    </motion.p>
                 </motion.div>
               )}
            </AnimatePresence>
         </div>

         {/* Bottom Action for Step 3 */}
         <div className="h-[80px] shrink-0 w-full flex flex-col justify-end">
            <AnimatePresence>
               {step === 3 && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex flex-col items-center gap-4 w-full">
                     {selectedTags.length > 0 ? (
                        <button onClick={handleNext} className="w-full py-4 bg-[#248aa7] hover:bg-[#2b9cbd] rounded-2xl text-white font-medium text-[16px] transition-colors shadow-lg">
                           Continue
                        </button>
                     ) : (
                        <button onClick={handleNext} className="text-[15px] font-medium text-white/50 hover:text-white/80 transition-colors py-2">
                           Skip
                        </button>
                     )}
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------------------
// EXPERIMENT DETAIL BOTTOM SHEET
// -----------------------------------------------------------------------------
function ExperimentDetailSheet({ onClose }: { onClose: () => void }) {
  return (
    <>
       <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[100]"
       />
       
       <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          drag="y"
          dragConstraints={{ top: 0 }}
          dragElastic={0.05}
          onDragEnd={(e, info) => {
             if (info.offset.y > 100) onClose();
          }}
          className="absolute bottom-0 left-0 right-0 max-h-[90dvh] bg-[#0A1A22] rounded-t-[24px] z-[101] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-t border-white/5"
       >
          <div className="w-full flex justify-center pt-3 pb-2 sticky top-0 bg-[#0A1A22] z-20">
             <div className="w-12 h-1.5 rounded-full bg-white/20" />
          </div>

          <div className="flex flex-col gap-8 px-6 pb-12 pt-2">
             <div className="flex flex-col gap-1">
                <span className="text-[13px] font-bold text-[#FFB162] uppercase tracking-[1px]">Active Experiment · Day 4 of 7</span>
                <h2 className="text-[24px] font-semibold text-white">Magnesium before sleep</h2>
             </div>

             <div className="flex flex-col gap-6">
                <div className="p-4 bg-white/5 rounded-2xl border-l-[3px] border-l-[#FFB162] border border-white/5">
                   <p className="text-[15px] text-white/80 leading-[1.5]">If you take Magnesium before sleep, your deep sleep should improve.</p>
                </div>

                <div className="flex flex-col gap-4">
                   <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold text-white/40 uppercase tracking-[1px]">What to do</span>
                      <p className="text-[14px] text-white/70">Take 400mg Magnesium Glycinate 30–60 min before bed</p>
                   </div>
                   <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold text-white/40 uppercase tracking-[1px]">What Somatiq tracks</span>
                      <p className="text-[14px] text-white/70">Deep sleep duration, sleep onset time, HRV</p>
                   </div>
                </div>

                {/* Progress Tracker */}
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                   <h3 className="text-[15px] font-medium text-white">Progress</h3>
                   <div className="flex justify-between w-full">
                      {[
                        { day: 'M', filled: true, val: "1h 38m" },
                        { day: 'T', filled: true, val: "1h 22m" },
                        { day: 'W', filled: true, val: "1h 41m" },
                        { day: 'T', filled: true, val: "1h 35m" },
                        { day: 'F', filled: false, val: "" },
                        { day: 'S', filled: false, val: "" },
                        { day: 'S', filled: false, val: "" },
                      ].map((item, i) => (
                         <div key={i} className="flex flex-col items-center gap-2">
                            <div className={cn(
                               "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                               item.filled ? "bg-[#f2f0e5]" : "border border-white/20"
                            )} />
                            <span className="text-[11px] font-medium text-white/40">{item.day}</span>
                            <span className={cn("text-[9px] font-bold whitespace-nowrap", item.filled ? "text-[#FFB162]" : "text-transparent")}>
                               {item.val || "-"}
                            </span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Results So Far */}
                <div className="flex flex-col gap-3 p-5 bg-white/5 rounded-2xl border border-white/5 mt-2">
                   <div className="flex justify-between items-center w-full">
                      <span className="text-[14px] text-white/60">Before experiment (7-day avg):</span>
                      <span className="text-[14px] font-medium text-white">1h 12m</span>
                   </div>
                   <div className="flex justify-between items-center w-full">
                      <span className="text-[14px] text-white/60">During experiment (so far):</span>
                      <span className="text-[14px] font-medium text-white">1h 34m</span>
                   </div>
                   <div className="flex justify-between items-center w-full pt-3 border-t border-white/10 mt-1">
                      <span className="text-[14px] font-medium text-white">Delta</span>
                      <span className="text-[14px] font-bold text-[#FFB162]">+22 min (+31%)</span>
                   </div>
                   
                   {/* Mini line chart representation */}
                   <div className="h-[40px] w-full mt-2 relative flex items-end justify-between px-2">
                      <div className="absolute bottom-4 left-0 right-0 border-t border-dashed border-white/20" />
                      {[...Array(7)].map((_, i) => (
                         <div key={`pre-${i}`} className="w-1.5 bg-white/20 rounded-t-full relative z-10" style={{ height: `${30 + Math.random() * 20}%` }} />
                      ))}
                      <div className="w-[1px] h-full bg-white/20 mx-1 relative z-10" />
                      {[...Array(4)].map((_, i) => (
                         <div key={`post-${i}`} className="w-1.5 bg-[#FFB162] rounded-t-full relative z-10" style={{ height: `${60 + Math.random() * 30}%` }} />
                      ))}
                   </div>
                </div>

                <div className="w-full flex justify-center mt-6">
                   <button onClick={onClose} className="text-[13px] font-medium text-white/40 hover:text-white/60 transition-colors">
                      Cancel Experiment
                   </button>
                </div>
             </div>
          </div>
       </motion.div>
    </>
  );
}
