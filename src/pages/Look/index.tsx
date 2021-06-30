import React from 'react';
import './index.css'
import useI18n from 'hooks/useI18n'

const Look = () => {
  const TranslateString = useI18n()
  return (
    <div className="look">
      {TranslateString(1, "Coming Soon !")}
    </div>
  )
}

export default Look
