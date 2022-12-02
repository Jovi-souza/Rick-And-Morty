interface ButtonProps {
  content: string
  model?: string
  onclick?: () => void
  type: 'reset' | 'button' | 'submit' | undefined
}

export function Button({ content, onclick, type }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-lg font-semibold w-full max-w-[10rem]"
      onClick={onclick}
      type={type}
    >
      {content}
    </button>
  )
}
