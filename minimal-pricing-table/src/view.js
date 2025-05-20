import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import MinimalPricingTable from './Components/Frontend/MinimalPricingTable';




document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-bmpt-minimal-pricing-table');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<MinimalPricingTable attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});