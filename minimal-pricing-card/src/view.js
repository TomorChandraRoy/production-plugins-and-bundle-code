import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import MinimalPricingCard from './Components/Frontend/MinimalPricingCard';



document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-bmpc-minimal-pricing-card');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<MinimalPricingCard attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});