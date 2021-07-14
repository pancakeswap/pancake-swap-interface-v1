import React from 'react';
import './index.css'
// import useI18n from 'hooks/useI18n'
import { useTranslation } from "hooks/useI18n"


const Look = () => {
  // const TranslateString = useI18n()
  const { t } = useTranslation()
  return (
    <div className="look">
      {t("Coming Soon !")}
    </div>
  )
}

export default Look
