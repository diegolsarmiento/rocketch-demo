// components/ChatbotWidget.tsx
'use client'

interface ChatbotWidgetProps {
  slug: string
  locale?: 'en' | 'es'
  width?: string
  height?: string
}

export default function ChatbotWidget({
  slug,
  locale = 'en',
  width = '360px',
  height = '500px'
}: ChatbotWidgetProps) {
  return (
    <iframe
      src={`https://www.rocketch.com/${locale}/widget/${slug}`}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width,
        height,
        border: 'none',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        zIndex: 999999
      }}
      title="Rocketch Chatbot"
    />
  )
}
