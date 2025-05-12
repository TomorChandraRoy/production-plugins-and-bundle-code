import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import PriceCard from './Components/Frontend/PriceCard';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-pricing-card');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<PriceCard attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});