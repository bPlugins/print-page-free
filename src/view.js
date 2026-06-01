import { createRoot } from 'react-dom/client';
import Style from './Components/Common/Style';
import './style.scss';
import PrintPage from './Components/Common/PrintPage';

document.addEventListener('DOMContentLoaded', () => {
	const printEls = document.querySelectorAll('.wp-block-ppb-print-page');
	printEls.forEach(printEl => {
		const attributes = JSON.parse(printEl.dataset.attributes);
		
		createRoot(printEl).render(<>
			<Style {...{ attributes, id: printEl.id }} />
			<PrintPage {...{ attributes, printEl }} />
		</>);

		printEl?.removeAttribute('data-attributes');
	});
});