interface ButtonProps {
  title?: string
}

export function Button({ title }: ButtonProps) {
  return (
    <button className="rounded border bg-zinc-400 p-2 text-white">
      {title || 'Click me'}
    </button>
  )
}
