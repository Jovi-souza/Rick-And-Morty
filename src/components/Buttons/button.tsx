interface ButtonProps {
  content: string
  type: 'reset' | 'button' | 'submit' | undefined
  model?: string
  disabled?: boolean
  onclick?: () => void
}

export function Button({ content, type, disabled, onclick }: ButtonProps) {
  return (
    <button
      className={`${
        disabled ? 'hidden' : 'block'
      } bg-blue-500 text-white p-2 rounded-lg font-semibold w-full max-w-[10rem]`}
      onClick={onclick}
      type={type}
    >
      {content}
    </button>
  )
}
