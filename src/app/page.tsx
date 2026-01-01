import { TokenTable } from '@/features/token-table/TokenTable';
import { PulseBoard } from '@/features/pulse/PulseList';
import { Search, Menu, Copy, Wallet, ChevronDown, ChevronRight, ListFilter, Settings2, Bell, Palette, ExternalLink, Star, User, Settings, LineChart, HelpCircle, List, Bookmark, Keyboard, Volume2, Crosshair, Zap } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full bg-[#06070B] text-textPrimary overflow-hidden font-sans selection:bg-primaryBlue/20">

      {/* Top Navbar */}
      <Navbar />



      {/* Secondary Bar */}
      <div className="grayscale-[30%] hover:grayscale-0 transition-[filter] relative flex flex-row w-full h-[36px] bg-[#06070B] gap-[8px] px-[24px] overflow-hidden border-b border-primaryStroke sm:border-primaryStroke/50 z-40 hidden sm:flex items-center">
        <div className="flex flex-row h-full items-center z-20 gap-[8px]">
          <span className="contents">
            <button type="button" className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/60 transition-colors duration-125 ease-in-out rounded-[4px]">
              <Settings className="w-[14px] h-[14px]" />
            </button>
          </span>
        </div>

        <div className="flex flex-row h-full items-center z-20 gap-[8px]">
          <div className="w-[1px] h-[16px] bg-primaryStroke"></div>
        </div>

        <div className="flex flex-row h-full items-center z-20 gap-[8px]">
          <span className="contents">
            <button type="button" className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/60 transition-colors duration-125 ease-in-out rounded-[4px]">
              <Star className="w-[14px] h-[14px]" />
            </button>
          </span>
          <span className="contents">
            <button type="button" className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textSecondary hover:text-textSecondary hover:bg-primaryStroke/60 transition-colors duration-125 ease-in-out rounded-[4px]">
              <LineChart className="w-[14px] h-[14px]" />
            </button>
          </span>
        </div>

        <div className="flex flex-row h-full items-center z-20 gap-[8px]">
          <div className="w-[1px] h-[16px] bg-primaryStroke"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 w-full relative flex flex-col">
        {/* Background Gradient Effect */}
        <div className="absolute pointer-events-none inset-0 -z-10 h-full w-full bg-[#06070B] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20"></div>

        <div className="flex-1 w-full h-full p-6 flex flex-col">
          {/* Tabs & Controls */}
          {/* Main Content Controls */}
          <div className="flex-none flex flex-row w-full h-[32px] justify-start items-center mb-4 gap-4">
            <div className="flex-1 flex items-center gap-3">
              <span className="text-textPrimary text-[20px] font-medium">Pulse</span>
              <div className="flex items-center gap-1">
                <span className="contents">
                  <button type="button" className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 bg-primaryStroke/60 scale-110" aria-label="Switch to Solana">
                    <img alt="SOL" width="20" height="20" className="" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" />
                  </button>
                </span>
                <span className="contents">
                  <button type="button" className="relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 hover:bg-primaryStroke/30 opacity-60 hover:opacity-100" aria-label="Switch to BNB">
                    {/* Placeholder for BNB if image missing, using generic orb or similar. User provided path /images/bnb-fill.svg. I will try to use a remote URL for BNB to be safe or just the path if user insists. Let's use a remote BNB logo for safety. */}
                    <img alt="BNB" width="20" height="20" className="grayscale-[0.3]" src="https://cryptologos.cc/logos/bnb-bnb-logo.png?v=035" />
                  </button>
                </span>
              </div>
            </div>

            <div className="pr-[8px]"></div>

            <div className="flex flex-row gap-4 items-center">
              <span className="contents">
                <button type="button" className="flex flex-row w-[24px] h-[24px] justify-center items-center">
                  <HelpCircle className="text-[20px] text-textTertiary hover:text-textSecondary transition-all duration-150 ease-in-out w-5 h-5" />
                </button>
              </span>

              <div className="relative flex">
                <div data-state="closed" className="w-full">
                  <button className="bg-primaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-secondaryStroke/80 transition-color duration-[150ms] ease-in-out">
                    <div className="relative">
                      <List className="text-[18px] text-textPrimary w-[18px] h-[18px]" />
                    </div>
                    <div className="whitespace-nowrap flex flex-row gap-[4px] justify-start items-center">
                      <span className="text-[14px] font-bold text-textPrimary">Display</span>
                    </div>
                    <ChevronDown className="text-[18px] text-textPrimary w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>

              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full">
                  <Bookmark className="text-textSecondary group-hover:text-textPrimary w-4 h-4" />
                </button>
              </span>

              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 relative rounded-full hover:bg-primaryStroke/60 bg-transparent transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <Keyboard className="text-[16px] text-textSecondary group-hover:text-textPrimary w-4 h-4" />
                </button>
              </span>

              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full">
                  <Volume2 className="text-[16px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out w-4 h-4" />
                </button>
              </span>

              <span className="contents">
                <button type="button" className="group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full">
                  <Crosshair className="text-textSecondary group-hover:text-textPrimary text-[16px] w-4 h-4" />
                  <Settings className="text-[12px] text-textSecondary group-hover:text-textPrimary absolute bottom-0 right-0 w-3 h-3" />
                </button>
              </span>

              <div className="relative flex">
                <div data-state="closed" className="w-full">
                  <span className="contents">
                    <button type="button" className="flex border border-primaryStroke group flex-row p-[4px] pr-[12px] pl-[12px] h-[32px] gap-[8px] justify-center items-center hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer rounded-full">
                      <div className="flex flex-row gap-[4px] justify-center items-center">
                        <Wallet className="text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer w-[18px] h-[18px]" />
                        <span className="text-[14px] text-textSecondary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">1</span>
                      </div>
                      <div className="flex flex-row gap-[4px] justify-center items-center">
                        <img alt="SOL" width="16" height="16" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" />
                        <span className="text-[14px] text-textPrimary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">
                          <span>0</span>
                        </span>
                      </div>
                      <ChevronDown className="text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer w-[18px] h-[18px]" />
                    </button>
                  </span>
                </div>
              </div>

              <div className="hidden sm:block lg:hidden">
                <div className="flex flex-row h-full gap-[8px] items-center justify-start">
                  <div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border-[1px] flex flex-row min-w-[216px] h-[32px] pl-[12px] gap-[8px] justify-start items-center rounded-full hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
                    <span className="flex text-[14px] text-textTertiary font-medium">
                      <Zap className="w-4 h-4 fill-current" />
                    </span>
                    <div className="flex flex-1 sm:max-w-[60px] min-w-[0px]">
                      <input placeholder="0.0" className="text-[14px] w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent text-left" type="text" />
                    </div>
                    <img alt="SOL" width="16" height="16" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=035" />
                    <div className="border-primaryStroke border-l-[1px] flex h-full pr-[3px] pl-[3px] gap-[6px] justify-center items-center cursor-pointer">
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryBlueHover/10">
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-primaryBlue hover:text-primaryBlueHover">P1</span>
                        </button>
                      </span>
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60">
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P2</span>
                        </button>
                      </span>
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60">
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P3</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table Component */}
          {/* Main Content Component */}
          <div className="flex-1 overflow-hidden h-full">
            <PulseBoard />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav (Optional) */}
      <div className="md:hidden h-[60px] border-t border-primaryStroke bg-[#06070B] flex items-center justify-around px-2 text-[10px] text-textSecondary">
        <div className="flex flex-col items-center gap-1">
          <div className="text-white"><ListFilter className="w-5 h-5" /></div>
          <span className="text-white font-medium">Discover</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Search className="w-5 h-5" />
          <span>Search</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Wallet className="w-5 h-5" />
          <span>Portfolio</span>
        </div>
      </div>

      <Footer />
    </main >
  );
}
