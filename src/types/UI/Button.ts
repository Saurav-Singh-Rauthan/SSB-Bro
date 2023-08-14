export type ButtonProps = {
  variant: 'small' | 'medium' | 'large'
  color: 'goldenOutlined' | 'goldenFilled'
  className?: string
  onClick: () => void
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode 
}