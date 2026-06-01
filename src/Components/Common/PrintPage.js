import { useEffect } from 'react';
import { applyPrintStyles, printSection, removePrintStyles } from '../../utils/functions';
import Icon from './Icon';
import { buttonVariants } from '../../utils/buttonVariants';

const PrintPage = ({ attributes = {}, setAttributes = () => { }, PrintButtonText = () => null, printEl = '', isBackend = false }) => {
  const {
    buttonVariant = 'default',
    isPrintSection = false,
    sectionSelector = '',
    isModal = false,
    isHeaderFooter = true,
    removeSelectors = '',
    isLayout = false,
    isIcon,
    icon,
    isText,
    btnText
  } = attributes || {};


  useEffect(() => {
    if (isBackend) return;

    const printBtn = document.querySelector(`#${printEl.id} .ppbPrintPage button`);

    if (!printBtn) return;

    const handleClick = (e) => {
      e.preventDefault();

      removePrintStyles();

      if (isPrintSection && sectionSelector) {
        printSection(sectionSelector, isModal, isHeaderFooter, removeSelectors, isLayout);
        return;
      }

      if (!isHeaderFooter || removeSelectors || !isLayout) {
        applyPrintStyles(isHeaderFooter, removeSelectors, isLayout);
      }

      const cleanup = () => {
        removePrintStyles();
        window.removeEventListener('afterprint', cleanup);
      };

      window.addEventListener('afterprint', cleanup, { once: true });
      window.print();
    };

    printBtn.addEventListener('click', handleClick);

    return () => {
      printBtn.removeEventListener('click', handleClick);
    };
  }, [isHeaderFooter, removeSelectors, isLayout, isPrintSection, sectionSelector, isModal, printEl.id, isBackend]);

  const iconEl = isIcon ? <Icon {...{ isIcon, icon }} /> : null;

  const textEl = isText && isBackend
    ? <PrintButtonText {...{ attributes, setAttributes }} />
    : isText
      ? <span className='text'>{btnText}</span>
      : null;

  const Variant = buttonVariants[buttonVariant] || buttonVariants.default;

  return (
    <div className={`ppbPrintPage ${buttonVariant}`}>
      {Variant({ iconEl, textEl, isIcon })}
    </div>
  );
};

export default PrintPage;
