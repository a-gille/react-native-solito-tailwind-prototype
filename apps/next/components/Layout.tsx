import { PropsWithChildren } from 'react'

// Deine Layout-Komponente
export default function Layout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: 0,
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#0f6cbd',
          color: 'white',
          textAlign: 'start',
          fontSize: '20px',
          fontWeight: 'bold',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      >
        <header
          style={{
            display: 'inline-block',
            cursor: 'pointer',
          }}
          onClick={() => (window.location.href = '/')}
        >
          Prototyp
        </header>
      </header>

      {/* Inhalt */}
      <main
        style={{
          flex: '1',
          padding: '24px',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '1500px', width: '100%' }}>{children}</div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#0f6cbd',
          color: 'white',
          textAlign: 'center',
          fontSize: '14px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        © 2025 Prototyp
      </footer>
    </div>
  )
}
