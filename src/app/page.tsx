import { TokenTable } from '@/features/token-table/TokenTable';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-background text-foreground">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex border-b border-border/40 pb-4 mb-8">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Axiom Trade Replica
          <code className="font-mono font-bold mx-2">by Antigravity</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span className="text-muted-foreground">Live Updates Active</span>
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <TokenTable />
      </div>

      {/* Background Gradient Effect - Pure CSS matching Axiom */}
      <div className="fixed pointer-events-none inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-20"></div>
    </main>
  );
}
