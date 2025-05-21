import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import HorizontalTable from './Components/Common/HorizontalTable/HorizontalTable';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-bptb-horizontal-pricing-table');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<div className="bBlocksHorizontalPricingTable">
				<HorizontalTable {...{ attributes }} />
			</div>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});