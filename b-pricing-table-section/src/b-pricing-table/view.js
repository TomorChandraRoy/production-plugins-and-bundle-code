
import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Components/Common/Style';
import PricingTable from './Components/Frontend/PricingTable';

document.addEventListener('DOMContentLoaded', () => {
	const pricingTableEls = document.querySelectorAll('.wp-block-bptb-pricing-table');
	pricingTableEls.forEach(tableEl => {
		const attributes = JSON.parse(tableEl.dataset.attributes);

		const isBasic = tableEl.className.includes('basic');
		const isStandard = tableEl.className.includes('standard');
		const isUltimate = tableEl.className.includes('ultimate');

		createRoot(tableEl).render(<>
			<Style attributes={attributes} id={tableEl.id} isStandard={isStandard} />

			<PricingTable attributes={attributes} id={tableEl.id} isBasic={isBasic} isStandard={isStandard} isUltimate={isUltimate} />
		</>);

		tableEl?.removeAttribute('data-attributes');
	});
});