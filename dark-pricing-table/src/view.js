import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import DarkTable from './Components/Common/DarkTable';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-bptb-dark-pricing-table');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<div className='bBlocksDarkPricingTable'>
			<DarkTable {...{ attributes }}/>
			</div>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});