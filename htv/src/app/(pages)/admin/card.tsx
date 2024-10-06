import React, { HTMLAttributes } from 'react'

export const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => {
  return (
    <div
      className={`bg-card text-card-foreground rounded-lg border shadow-sm ${className}`}
      {...props}
    />
  )
}
export const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
}


export const CardContent: React.FC<HTMLAttributes<HTMLDivElement> > = ({ className = '', ...props }) => {
  return <div className={`p-6 pt-0 ${className}`} {...props} />
}

export const CardTitle: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ className = '', ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  )
}