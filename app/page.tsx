import Image from "next/image"
import ChatbotWidget from "@/components/ChatbotWidget"

export default function Home() {
    
  const slug = 'rocketch-store' // Your store slug, check rocketch.com

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ChatbotWidget slug={slug} locale="en" />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://rocketch.com">Rocketch</a>
      </footer>
    </div>
  )
}
