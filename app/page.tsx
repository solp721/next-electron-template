export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Hello, Next.js + Electron!</h1>
        <p className="text-sm text-muted-foreground">
          이 템플릿은 Next.js와 Electron을 결합한 데스크탑 앱 프로젝트입니다.
        </p>
      </main>
    </div>
  );
}